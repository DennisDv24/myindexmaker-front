import http from "../utils/apiUtils";
const getCollection = (collection: string) => {
  return http.get(`/${collection}`);
};
const CollectionService = {
  getCollection,
};
export default CollectionService;