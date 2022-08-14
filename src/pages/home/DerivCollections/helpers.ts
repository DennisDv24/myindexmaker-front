import { Collection } from "./initObjs"

type Dictionary = { // set up basic dict type
    [index: number]: Array<string>
}

const sortingDict = (n1:Collection, n2:Collection) => {
    let dict:Dictionary = {
        1: [n1.volume, n2.volume],
        2: [n1.supply, n2.supply],
        3: [n1.tokensPerWallet, n2.tokensPerWallet],
        4: [n1.daoRank, n2.daoRank]
    }
    return dict
}

const reverse = (arr: Array<Collection>, category:number) => {
    arr.sort((n1,n2) => {
        let dict = sortingDict(n1, n2) // set up our dictionary

        // bulky sort-by-number
        if (parseFloat(dict[category][0]) > parseFloat(dict[category][1])) {
            return 1;
        }
    
        if (parseFloat(dict[category][0]) < parseFloat(dict[category][1])) {
            return -1;
        }
    
        return 0;
    })
    return arr
}

const sorts = (arr: Array<Collection>, category:number) => {
    arr.sort((n1,n2) => {
        let dict = sortingDict(n1, n2)
        if (parseFloat(dict[category][0]) < parseFloat(dict[category][1])) {
            return 1;
        }
    
        if (parseFloat(dict[category][0]) > parseFloat(dict[category][1])) {
            return -1;
        }
    
        return 0;
    })
    return arr
}
const helpers = {
    sorts,
    reverse
  };
export default helpers;