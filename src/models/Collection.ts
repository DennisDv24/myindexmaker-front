export class DerivedCollection implements Collection {
    
    readonly name: string;
    readonly img: string;
    readonly volume: number;
    readonly supply: number;
    readonly tokensPerWallet: string;
    readonly daoRank: number;
    readonly address: string;

    constructor ({ name, img, volume, supply, tokensPerWallet, daoRank, address } : Collection) {
        this.name = name;
        this.img = img;
        this.volume = volume;
        this.supply = supply;
        this.tokensPerWallet = tokensPerWallet;
        this.daoRank = daoRank;
        this.address = address;
    }


}

export interface Collection {
    name: string;
    img: string;
    volume: number;
    supply: number;
    tokensPerWallet: string;
    daoRank: number;
    address: string;
}