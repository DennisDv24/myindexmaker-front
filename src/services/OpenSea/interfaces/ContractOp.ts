export interface ContractOp {
	collection: {
		banner_image_url: string;
		chat_url: string | null;
		created_date: string;
		default_to_fiat: boolean;
		description: string;
		dev_buyer_fee_basis_points: string;
		dev_seller_fee_basis_points: string;
		discord_url: string;
		display_data: {
			card_display_style: string
		};
		external_url: string;
		featured: boolean;
		featured_image_url: string;
		hidden: boolean;
		safelist_request_status: string;
		image_url: string;
		is_subject_to_whitelist: boolean;
		large_image_url: string;
		medium_username: string | null;
		name: string;
		only_proxied_transfers: boolean;
		opensea_buyer_fee_basis_points: string;
		opensea_seller_fee_basis_points: string;
		payout_address: string | null;
		require_email: boolean;
		short_description: string | null;
		slug: string;
		telegram_url: string | null;
		twitter_username: string;
		instagram_username: string | null;
		wiki_url: string;
		is_nsfw: boolean
	};
	address: string;
	asset_contract_type: string;
	created_date: string;
	name: string;
	nft_version: string;
	opensea_version: string | null;
	owner: number;
	schema_name: string;
	symbol: string;
	total_supply: null;
	description: string;
	external_link: string;
	image_url: string;
	default_to_fiat: boolean;
	dev_buyer_fee_basis_points: number;
	dev_seller_fee_basis_points: number;
	only_proxied_transfers: boolean;
	opensea_buyer_fee_basis_points: number;
	opensea_seller_fee_basis_points: number;
	buyer_fee_basis_points: number;
	seller_fee_basis_points: number;
	payout_address: null
}