import React, { useState, ChangeEvent, useEffect } from "react";
import { DerivCard } from './DerivCard';
import CollectionService from '../../services/CollectionsService'
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import derivStyle from './DerivCard.module.css';


export const DerivCollections: React.FC = () => {

	//can definitely do these state initializations better, probably with an interface
	//could look something like: milady, setMilady = useState({}) 
	// -- likely need some kind of interface/type for each collection to hold all of the data.
	const [miladyCollection, setMiladyCollection] = useState({supply: '', volume: '', tokensPerWallet: ''});
	const [bannerCollection, setBannerCollection] = useState({supply: '', volume: '', tokensPerWallet: ''});
	const [auraCollection, setAuraCollection] = useState({supply: '', volume: '', tokensPerWallet: ''});

	useEffect(() => {
		retrieveCollection("milady");
		retrieveCollection("banners-nft");
		retrieveCollection("miladyaura");
	});

	const retrieveCollection = (collection: string) => {
		CollectionService.getCollection(collection) // ---> '../../services' & '../../utils'
		  .then((response: any) => {
			const stats = response.data.collection.stats
			const volume = (Math.round(parseInt(stats.total_volume) * 100) / 100).toString()
			const supply = stats.total_supply
			const tokensPerWallet = (Math.round(supply / stats.num_owners * 10) / 10).toString()
			switch(collection) {
				case "milady": {
					setMiladyCollection({supply: supply, volume: volume, tokensPerWallet: tokensPerWallet});
					break
				}
				case "banners-nft": {
					setBannerCollection({supply: supply, volume: volume, tokensPerWallet: tokensPerWallet});
					break
				}
				case "miladyaura": {
					setAuraCollection({supply: supply, volume: volume, tokensPerWallet: tokensPerWallet});
				}
			}
		  })
		  .catch((e: Error) => {
			console.log(e);
		  });
	  };
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
			<DerivCard	
				first
				name='Milady Maker'
				img='https://lh3.googleusercontent.com/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA=s0'
				volume={miladyCollection.volume + " Ξ"}
				supply={miladyCollection.supply}
				tokensPerWallet={miladyCollection.tokensPerWallet}
				daoRank=''
			/>
			<DerivCard	
				name='Banner NFTs'
				img='https://openseauserdata.com/files/683f01134665f3cd1458ae4a46e32990.png'
				volume={bannerCollection.volume + " Ξ"}
				supply={bannerCollection.supply}
				tokensPerWallet={bannerCollection.tokensPerWallet}
				daoRank=''
			/>
			<DerivCard	
				name='Auras'
				img='https://lh3.googleusercontent.com/RcCll0PWAnUGr1oYk250Mm0fAW5u0-pkEzOaxSHm6qiHotaqjVtePqkf0CD6v2ef1uxhrqW6KZI3ZYqfURKSiecnSd2ofngQNepxbw=s0'
				volume={auraCollection.volume + " Ξ"}
				supply={auraCollection.supply}
				tokensPerWallet={auraCollection.tokensPerWallet}
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
