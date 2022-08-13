import { Collection, DerivedCollection } from "../../models/Collection";
import OpenseaService from "../OpenSea/OpenseaService";

const CollectionService = () => {

    const getCollections = async (contracts: readonly string[]): Promise<Collection[]> => {

        const contractsPromises = contracts.map(contract => OpenseaService.getContract(contract));
        const contractsData = await Promise.all(contractsPromises);

        const collectionPromises = contractsData.map(contract => OpenseaService.getCollection(contract.data.collection.slug));
        const collectionsData = await Promise.all(collectionPromises);

        const derivedCollections = collectionsData.map(collection => {
            const { address } = collection.data.collection.primary_asset_contracts[0];
            const { name, image_url } = collection.data.collection;
            const { total_volume, total_supply, num_owners } = collection.data.collection.stats;

            const derivateCollection: Collection = {
                address: address,
                daoRank: 0,
                img: image_url,
                name: name,
                supply: total_supply,
                tokensPerWallet: (Math.round(total_supply / num_owners * 10) / 10).toString(),
                volume: total_volume
            }

            return new DerivedCollection(derivateCollection);
        })

        return derivedCollections;
    }

    return {
        getCollections
    }

}

export default CollectionService();