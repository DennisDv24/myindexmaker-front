import openSea from "../utils/collectionApi";
const getCollection = (collection: string) => {
  return openSea.get(`/${collection}`);
};
const CollectionService = {
  getCollection,
};
export default CollectionService;