export class DerivedCollection implements Collection {
    
    readonly name: string;
    readonly img: string;
    readonly volume: number;
    readonly supply: number;
    readonly tokensPerWallet: string;
    readonly daoRank: number;
    readonly address: string;
    readonly match: number;
    readonly openseaLink: string;

    constructor ({ name, img, volume, supply, tokensPerWallet, daoRank, address, match, openseaLink } : Collection) {
        this.name = name;
        this.openseaLink = openseaLink;
        this.img = img;
        this.volume = volume;
        this.supply = supply;
        this.tokensPerWallet = tokensPerWallet;
        this.daoRank = daoRank;
        this.address = address;
        this.match = match;
    }


}

export interface Collection {
    name: string;
    openseaLink: string;
    img: string;
    volume: number;
    supply: number;
    tokensPerWallet: string;
    daoRank: number;
    address: string;
    match: number;
}