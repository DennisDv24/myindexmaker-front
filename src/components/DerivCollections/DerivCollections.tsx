import React, { useState, ChangeEvent, useEffect } from "react";
import { DerivCard } from './DerivCard';
import CollectionService from '../../services/CollectionsService'
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import derivStyle from './DerivCard.module.css';


export const DerivCollections: React.FC = () => {

	const [miladySupply, setMiladySupply] = useState("");
	const [miladyVolume, setMiladyVolume] = useState("");
	const [miladyNumTokens, setMiladyNumTokens] = useState("");

	const [bannerSupply, setBannerSupply] = useState("");
	const [bannerVolume, setBannerVolume] = useState("");
	const [bannerNumTokens, setBannerNumTokens] = useState("");

	const [auraSupply, setAuraSupply] = useState("");
	const [auraVolume, setAuraVolume] = useState("");
	const [auraNumTokens, setAuraNumTokens] = useState("");
	
	useEffect(() => {
		retrieveCollection("milady");
		retrieveCollection("banners-nft");
		retrieveCollection("miladyaura")
	});

	const retrieveCollection = (collection: string) => {
		CollectionService.getCollection(collection)
		  .then((response: any) => {
			const volume = parseInt(response.data.collection.stats.total_volume)
			const volStr = (Math.round(volume * 100) / 100).toString()
			const supply = response.data.collection.stats.total_supply
			const numTokensPerWallet = (Math.round(supply / response.data.collection.stats.num_owners * 10) / 10).toString()
			switch(collection) {
				case "milady": {
					setMiladySupply(supply);
					setMiladyVolume(volStr);
					setMiladyNumTokens(numTokensPerWallet)
					break
				}
				case "banners-nft": {
					setBannerSupply(supply);
					setBannerVolume(volStr);
					setBannerNumTokens(numTokensPerWallet);
					break
				}
				case "miladyaura": {
					setAuraSupply(supply);
					setAuraVolume(volStr);	
					setAuraNumTokens(numTokensPerWallet);
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
					Tokens Per Wallet mean
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
				volume={miladyVolume + " Ξ"}
				supply={miladySupply}
				tokensPerWallet={miladyNumTokens}
				daoRank=''
			/>
			<DerivCard	
				name='Banner NFTs'
				img='https://openseauserdata.com/files/683f01134665f3cd1458ae4a46e32990.png'
				volume={bannerVolume + " Ξ"}
				supply={bannerSupply}
				tokensPerWallet={bannerNumTokens}
				daoRank=''
			/>
			<DerivCard	
				name='Auras'
				img='https://lh3.googleusercontent.com/RcCll0PWAnUGr1oYk250Mm0fAW5u0-pkEzOaxSHm6qiHotaqjVtePqkf0CD6v2ef1uxhrqW6KZI3ZYqfURKSiecnSd2ofngQNepxbw=s0'
				volume={auraVolume + " Ξ"}
				supply={auraSupply}
				tokensPerWallet={auraNumTokens}
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
