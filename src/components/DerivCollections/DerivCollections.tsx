import React, { useState, ChangeEvent, useEffect } from "react";
import { DerivCard } from './DerivCard';
import CollectionService from '../../services/CollectionsService'
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { constants } from "./constants";

import derivStyle from './DerivCard.module.css';
import { Collection, emptyCollection, emptyList } from "./initObjs";

export const DerivCollections: React.FC = () => {

	const [collections, setCollections] = useState(emptyList)

	useEffect(() => {
		for(let i=0; i<constants.collectionNames.length; i++){
			retrieveCollection(constants.collectionNames[i])
		}
	}, []);

	const retrieveCollection = (collection: string) => {
		CollectionService.getCollection(collection) // ---> '../../services' & '../../utils'
		  .then((response: any) => {
			const stats = response.data.collection.stats
			const volume = (Math.round(parseInt(stats.total_volume) * 100) / 100).toString()
			const supply = stats.total_supply
			const tokensPerWallet = (Math.round(supply / stats.num_owners * 10) / 10).toString()
			let imgUrl = response.data.collection.featured_image_url
			let daoRank:string = ''

			// These if statements are to control data that isn't yet retrievable
			if (collection == "milady"){
				daoRank = "1"
			} else if (collection == "banners-nft"){
				imgUrl = "https://openseauserdata.com/files/683f01134665f3cd1458ae4a46e32990.png"; 
				daoRank = "2"
			} else if (collection == "miladyaura"){
				imgUrl = "https://lh3.googleusercontent.com/RcCll0PWAnUGr1oYk250Mm0fAW5u0-pkEzOaxSHm6qiHotaqjVtePqkf0CD6v2ef1uxhrqW6KZI3ZYqfURKSiecnSd2ofngQNepxbw=s0"; 
				daoRank = "3"
			}
			
			let c = new Collection({name: collection, supply: supply, volume: volume, tokensPerWallet: tokensPerWallet, img: imgUrl, daoRank: daoRank})
			setCollections(oldArray => [...oldArray, c])

		  })
		  .catch((e: Error) => {
			console.log(e);
		  });
	  };


	function sortCollection(arr:Array<Collection>){
		arr.sort((n1,n2) => {
			if (parseInt(n1.daoRank) > parseInt(n2.daoRank)) {
				return 1;
			}
		
			if (parseInt(n1.daoRank) < parseInt(n2.daoRank)) {
				return -1;
			}
		
			return 0;
		})
		return arr
	}

	return (
		<table className={derivStyle.DerivTable}>
			<tr className={derivStyle.TableHeading}>
				<th></th>
				<th>Name</th>
				<th>
					<FaSortAmountUpAlt />
					Volume
				</th>
				<th>
					<FaSortAmountUpAlt />
					Supply
				</th>
				<th>
					<FaSortAmountUpAlt />
					Avg Wallet
				</th>
				<th>
					<FaSortAmountDownAlt />
					DAO Rank
				</th>
				<th>
					<FaSortAmountUpAlt />
					Extra lorem
				</th>
				<th>
					<FaSortAmountUpAlt />
					Extra ipsum
				</th>
			</tr>
			{sortCollection(collections).map(x => {
			return (
				<DerivCard name={x.name} volume={x.volume} supply={x.supply} tokensPerWallet={x.tokensPerWallet} img={x.img} daoRank={x.daoRank}/>
			)
			})}
			<DerivCard	
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank=''
			/>
			<DerivCard	
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank=''
			/>
			<DerivCard	
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank=''
				last
			/>
		</table>
	)
}
