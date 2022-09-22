import { Collection, DerivedCollection } from "../../models/Collection";
import { CollectionOp, PrimaryAssetContractOp } from "../OpenSea/interfaces/CollectionOp";
import OpenseaService from "../OpenSea/OpenseaService";
import HyperGraph from '../HyperGraph/Hypergraph';
import { ContractOp } from "../OpenSea/interfaces/ContractOp";

const CollectionService = () => {
    
    const addrRegex = /^[0-9xa-fA-F]+$/;
    
    const getCollections = async (contracts: readonly string[]): Promise<Collection[]> => {
        
        const contractsPromises = contracts.map(contract => OpenseaService.getContract(contract));
        const contractsData = await Promise.all(contractsPromises);
        
        const collectionPromises = contractsData.map(contract => OpenseaService.getCollection(contract.data.collection!.slug));
        const collectionsData = await Promise.all(collectionPromises);
        
        const derivedCollections = collectionsData.map(collection => {
            const { address } = collection.data.collection!.primary_asset_contracts[0]
            const { name, image_url, slug } = collection.data.collection!;
            const { total_volume, total_supply, num_owners } = collection.data.collection!.stats;
            
            const derivateCollection: Collection = {
                address: address,
                daoRank: 0,
                img: image_url ? image_url : 'https://via.placeholder.com/150',
                name: name,
                openseaLink: `https://opensea.io/es/collection/${slug}`,
                supply: total_supply,
                tokensPerWallet: _calculateTokensPerWallet(total_supply, total_volume),
                volume: (Math.round(Number(total_volume.toFixed(0)) * 100) / 100),
                match: 1
            }
            
            return new DerivedCollection(derivateCollection);
        })
        

        return derivedCollections;
    }
    
    const _calculateTokensPerWallet = (totalSupply: number, numOwners: number) => {
        if (totalSupply === 0 || numOwners === 0) {
            return '0';
        }
        
        return (Math.round(totalSupply / numOwners * 10) / 10).toString();
    }

    const _validateContractName = (name: string) => {
        name = name.trim();
        return name.length !== 0 && !addrRegex.test(name);
    }
    
    const _getMatchPercentByAddress = (primary_asset_contracts: PrimaryAssetContractOp[], mapRelatedCollections: Map<string, number>) => {
        for (const { address } of primary_asset_contracts) {
            if (mapRelatedCollections.has(address)) {
                return mapRelatedCollections.get(address);
            }
        }
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
                if (collectionResponse.value.data.collection && _validateContractName(collectionResponse.value.data.collection.name)) {
                    collectionsOp.push(collectionResponse.value.data);
                }
            }
        })
    
        const derivCollections: Collection[] = [];
    
        for (let index = 0; index < collectionsOp.length; index++) {
            const collection = collectionsOp[index];
            const collectionContent = collection.collection!;
            const match = _getMatchPercentByAddress(collectionContent.primary_asset_contracts, mapRelatedCollections);
            const { address } = collectionContent.primary_asset_contracts[0];
            const { name, image_url, slug } = collectionContent;
            const { total_volume, total_supply, num_owners } = collectionContent.stats;
    
            const derivateCollection: Collection = {
                address: address,
                daoRank: 0,
                img: image_url ? image_url : 'https://via.placeholder.com/150',
                name: name,
                openseaLink: `https://opensea.io/es/collection/${slug}`,
                supply: total_supply,
                tokensPerWallet: _calculateTokensPerWallet(total_supply, total_volume),
                volume: (Math.round(Number(total_volume.toFixed(0)) * 100) / 100),
                match: match!
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