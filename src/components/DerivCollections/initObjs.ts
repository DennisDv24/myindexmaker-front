export class Collection{
    name: string;
    volume: string;
    supply: string;
    tokensPerWallet: string;
    img: string;
    daoRank: string;

    constructor(collection: Collection) {
        this.name = collection.name
        this.volume = collection.volume;
        this.supply = collection.supply;
        this.tokensPerWallet = collection.tokensPerWallet
        this.img = collection.img;
        this.daoRank = collection.daoRank
    }
}

export var emptyCollection = new Collection({name: '', volume: '', supply: '', tokensPerWallet: '', img: '', daoRank: ''})
export var emptyList: Array<Collection> = []