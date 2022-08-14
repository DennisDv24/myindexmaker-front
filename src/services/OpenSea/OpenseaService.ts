import axios, { AxiosResponse } from "axios";
import { CollectionOp, CollectionStatsOp } from "./interfaces/CollectionOp";
import { ContractOp } from "./interfaces/ContractOp";

const OpenseaService = () => {

	const openSea = axios.create({
		baseURL: 'https://api.opensea.io/api/v1',
		responseType: 'json',
		headers: {
			"Content-type": "application/json"
		}
	});
	
	const getCollectionStats = (collectionSlug: string): Promise<AxiosResponse<CollectionStatsOp>> => {
		return openSea.get<CollectionStatsOp>(`collections/${collectionSlug}/stats`);
	}

	const getCollection = (collectionSlug: string): Promise<AxiosResponse<CollectionOp>> => {
		return openSea.get<CollectionOp>(`collection/${collectionSlug}`);
	};

	const getContract = (assetContractAddress: string): Promise<AxiosResponse<ContractOp>> => {
		return openSea.get<ContractOp>(`asset_contract/${assetContractAddress}`);
	};

	return {
		getCollectionStats,
		getCollection,
		getContract
	}

}

export default OpenseaService();