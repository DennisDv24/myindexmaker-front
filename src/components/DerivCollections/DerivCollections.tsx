import React, { useState, ChangeEvent, useEffect } from "react";
import { DerivCard } from './DerivCard';
import CollectionService from '../../services/CollectionsService'
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { constants } from "./constants";

import derivStyle from './DerivCard.module.css';
import { Collection, emptyCollection, emptyList } from "./initObjs";

export const DerivCollections: React.FC = () => {

	// To add a new collection, place a contract address in ./constants.ts

	const [collections, setCollections] = useState(emptyList)

	useEffect(() => {
		const retrieveCollection = (contract: string) => {
			CollectionService.getContract(contract) // ---> '../../services' & '../../utils'
				.then((response: any) => {
					const slug = response.data.collection.slug
					retrieveData(slug)
				})
				.catch((e: Error) => console.log(e))
		};
		for(let i=0; i<constants.contracts.length; i++){
			retrieveCollection(constants.contracts[i])
		}
	}, []);

	function retrieveData(slug: string){
		CollectionService.getCollection(slug)
		.then((response: any) => {
		  const stats = response.data.collection.stats
		  const volume = (Math.round(parseInt(stats.total_volume) * 100) / 100).toString()
		  const supply = stats.total_supply
		  const tokensPerWallet = (Math.round(supply / stats.num_owners * 10) / 10).toString()
		  const name = response.data.collection.name
		  const imgUrl = response.data.collection.image_url

		  // These if statements are to control data that isn't yet retrievable
		  var daoRank:string = ''
		  if (slug === "milady"){daoRank = "1"}
		  if (slug === "banners-nft"){daoRank = "2"}
		  if (slug === "miladyaura"){daoRank = "3"}
		  if (daoRank === ''){daoRank = "999"}

		  setCollections(oldArray => [...oldArray, new Collection({
			  name: name, 
			  supply: supply, 
			  volume: volume, 
			  tokensPerWallet: tokensPerWallet, 
			  img: imgUrl, 
			  daoRank: daoRank
		  })])

		})
		.catch((e: Error) => {
		  console.log(e);
		});
	}

	function sortCollections(arr:Array<Collection>){
		// This sorts by DAO rank, but can put whatever logic here we want
		// Likely want something dynamic that allows users to choose.
		// Maybe some lib functions for such functionality, idk.
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

	const categories = ["Name", "Volume", "Supply", "Avg Wallet", "DAO Rank", "Lorem", "Ipsum"]

	return (
		<table className={derivStyle.DerivTable}>
			<tr className={derivStyle.TableHeading}>
				<th></th>
				{categories.map(x => {
					return (
						<th>{x}</th>
					)
				}
				)}
			</tr>
			{sortCollections(collections).map(x => {
			return (
				<DerivCard 
					name={x.name} 
					volume={x.volume} 
					supply={x.supply} 
					tokensPerWallet={x.tokensPerWallet} 
					img={x.img} 
					daoRank={x.daoRank}
				/>
			)
			})}
			<DerivCard	
				name='Remilia Ipsum'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank=''
			/>
			<DerivCard	
				name='Remilia Ipsum'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank=''
			/>
			<DerivCard	
				name='Remilia Ipsum'
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