export interface CollectionStatsOp {
    stats: {
        one_day_volume: number;
        one_day_change: number;
        one_day_sales: number;
        one_day_average_price: number;
        seven_day_volume: number;
        seven_day_change: number;
        seven_day_sales: number;
        seven_day_average_price: number;
        thirty_day_volume: number;
        thirty_day_change: number;
        thirty_day_sales: number;
        thirty_day_average_price: number;
        total_volume: number;
        total_sales: number;
        total_supply: number;
        count: number;
        num_owners: number;
        average_price: number;
        num_reports: number;
        market_cap: number;
        floor_price: number;
    }
}

interface PaymentTokenOp {
    id: number;
    symbol: string;
    address: string;
    image_url: string;
    name: string;
    decimals: number;
    eth_price: number;
    usd_price: number;
}

interface PrimaryAssetContractOp {
    address: string;
    asset_contract_type: string;
    created_date: string;
    name: string;
    nft_version: string;
    opensea_version: string | null;
    owner: number;
    schema_name: string;
    symbol: string;
    total_supply: string;
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
    payout_address: string;
}

interface Traits {
    [key: string]: {
        [key: string]: number;
    }
}

export interface CollectionOp {
    collection: {
        editors: string[];
        payment_tokens: PaymentTokenOp[];
        primary_asset_contracts: PrimaryAssetContractOp[];
        traits: Traits;
        stats: CollectionStatsOp['stats'];
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
        featured: false;
        featured_image_url: string;
        hidden: false;
        safelist_request_status: string;
        image_url: string | null;
        is_subject_to_whitelist: false;
        large_image_url: string;
        medium_username: string | null;
        name: string;
        only_proxied_transfers: false;
        opensea_buyer_fee_basis_points: string;
        opensea_seller_fee_basis_points: string;
        payout_address: string;
        require_email: boolean;
        short_description: string | null;
        slug: string;
        telegram_url: string | null;
        twitter_username: string;
        instagram_username: string | null;
        wiki_url: string | null;
        is_nsfw: boolean;
    } | null
}