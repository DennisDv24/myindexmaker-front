import axios, { AxiosResponse } from "axios";
import { RelatedCollection } from './interfaces/RelatedCollection'

const HyperGraph = () => {

    const hyperGraph = axios.create({
        baseURL: 'https://hypergraph-back.herokuapp.com/api/',
        responseType: 'json',
        headers: {
            "Content-type": "application/json"
        }
    });

    const getRelatedCollections = (relation: number): Promise<AxiosResponse<RelatedCollection[]>> => {
        return hyperGraph.get<RelatedCollection[]>(`related-collections?minRelation=${relation}`);
    }

    return {
        getRelatedCollections,
    }

}

export default HyperGraph();