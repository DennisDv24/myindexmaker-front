import openSea from "../utils/collectionApi";
const getCollection = (slug: string) => {
  return openSea.get(`collection/${slug}`);
};
const getContract = (slug: string) => {
    return openSea.get(`asset_contract/${slug}`);
  };
const CollectionService = {
  getCollection,
  getContract
};
export default CollectionService;