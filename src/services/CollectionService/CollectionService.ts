import { Collection, DerivedCollection } from "../../models/Collection";
import { CollectionOp } from "../OpenSea/interfaces/CollectionOp";
import OpenseaService from "../OpenSea/OpenseaService";
import HyperGraph from '../HyperGraph/Hypergraph';
import { ContractOp } from "../OpenSea/interfaces/ContractOp";

const CollectionService = () => {

    const getCollections = async (contracts: readonly string[]): Promise<Collection[]> => {

        const contractsPromises = contracts.map(contract => OpenseaService.getContract(contract));
        const contractsData = await Promise.all(contractsPromises);

        const collectionPromises = contractsData.map(contract => OpenseaService.getCollection(contract.data.collection!.slug));
        const collectionsData = await Promise.all(collectionPromises);

        const derivedCollections = collectionsData.map(collection => {
            const { address } = collection.data.collection!.primary_asset_contracts[0];
            const { name, image_url } = collection.data.collection!;
            const { total_volume, total_supply, num_owners } = collection.data.collection!.stats;

            const derivateCollection: Collection = {
                address: address,
                daoRank: 0,
                img: image_url ? image_url : 'https://via.placeholder.com/150',
                name: name,
                supply: total_supply,
                tokensPerWallet: (Math.round(total_supply / num_owners * 10) / 10).toString(),
                volume: (Math.round(Number(total_volume.toFixed(0)) * 100) / 100),
                match: 1
            }

            return new DerivedCollection(derivateCollection);
        })

        return derivedCollections;
    }

    const getCollectionsExperimental = async (relation: number): Promise<Collection[]> => {
        
        const relatedCollections = await HyperGraph.getRelatedCollections(relation);
        const mapRelatedCollections = new Map<string, number>();
        relatedCollections.data.forEach(({ contractAddress, matchPercent }) => mapRelatedCollections.set(contractAddress, matchPercent));
        const addrContracts = Array.from(mapRelatedCollections.keys());
    
        const contractPromises = addrContracts.map((contract => OpenseaService.getContract(contract)));
        const contractResponses = await Promise.allSettled(contractPromises);
        const contracts: ContractOp[] = [];
    
        contractResponses.forEach((contractResponse) => {
            if (contractResponse.status === 'fulfilled') {
                if (contractResponse.value.data.collection) {
                    contracts.push(contractResponse.value.data);
                }
            }
        })
    
        // await 15 seconds
        await new Promise<undefined>((resolve, _reject) => {
            setTimeout(() => {
                resolve(undefined);
            }, 15000);
        })
        
        const collectionPromises = contracts.map(contract => OpenseaService.getCollection(contract.collection!.slug));
        const collectionResponses = await Promise.allSettled(collectionPromises);
        const collectionsOp: CollectionOp[] = [];
    
        collectionResponses.forEach((collectionResponse) => {
            if (collectionResponse.status === 'fulfilled') {
                if (collectionResponse.value.data.collection) {
                    collectionsOp.push(collectionResponse.value.data);
                }
            }
        })
    
        const derivCollections: Collection[] = [];
    
        for (let index = 0; index < collectionsOp.length; index++) {
            const collection = collectionsOp[index];
            const { address } = collection.collection!.primary_asset_contracts[0];
            const { name, image_url } = collection.collection!;
            const { total_volume, total_supply, num_owners } = collection.collection!.stats;
    
            const derivateCollection: Collection = {
                address: address,
                daoRank: 0,
                img: image_url ? image_url : 'https://via.placeholder.com/150',
                name: name,
                supply: total_supply,
                tokensPerWallet: (Math.round(total_supply / num_owners * 10) / 10).toString(),
                volume: (Math.round(Number(total_volume.toFixed(0)) * 100) / 100),
                match: mapRelatedCollections.get(address)!
            }
    
            derivCollections.push(new DerivedCollection(derivateCollection));
        }
    
        return derivCollections;
    }

    return {
        getCollections,
        getCollectionsExperimental
    }

}

export default CollectionService();