import React, { useState, ChangeEvent, useEffect } from "react";
import { DerivCard } from './DerivCard';
import OpenseaService from '../../../services/OpenSea/OpenseaService'
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { constants } from "./constants";
import cardStyle from './DerivCard.module.css';

import derivStyle from './DerivCard.module.css';
import { Collection, emptyList } from "./initObjs";
import helpers from "./helpers";

export const DerivCollections: React.FC = () => {

	// To add a new collection, place a contract address in ./constants.ts

	const [collections, setCollections] = useState(emptyList)

	useEffect(() => {
		const retrieveCollection = (contract: string) => {
			OpenseaService.getContract(contract) // ---> '../../services' & '../../utils'
				.then((response) => {
					const slug = response.data.collection.slug
					retrieveData(slug)
				})
				.catch((e: Error) => console.log(e))
		};
		
		for(let i=0; i<constants.contracts.length; i++){
			retrieveCollection(constants.contracts[i])
		}
		console.log(collections);
	}, []);

	function retrieveData(slug: string){
		OpenseaService.getCollection(slug)
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

	const [button, setButton] = useState({bool: false, category: 4})

	const onClick = (e: React.MouseEvent<HTMLElement>, category: number) => {
		//category = column on index table
		console.log("sorting")
		setButton({bool: !button.bool, category: category})
	}

	function sortCollections(arr:Array<Collection>, category=button.category){
		// helper functions use the category in a locally-defined dictionary
		// this allows us to target what we want to sort by.
		// maybe a better way of doing this, idk, but this seems to work pretty well.
		if(button.bool === true){
			arr = helpers.sorts(arr, category)
			return arr
		} else {	
			arr = helpers.reverse(arr, category)
			return arr
		}
	}

	const categories = ["Name", "Volume", "Supply", "Avg Wallet", "Rank", "Lorem", "Ipsum"] // columns
	return (
		<table className={derivStyle.DerivTable}>
			<tr className={derivStyle.TableHeading}>
				<th></th>
				{categories.map(x => {
					if ((categories.indexOf(x) >= 1) && categories.indexOf(x) <= 4){ // we only want columns Volume through DAO Rank
						let idx = categories.indexOf(x) // used to identify category --> onClick(event, category)
						return (
							<th className={cardStyle.ColumnHeader} onClick={(e) => onClick(e, idx)}>
								<FaSortAmountUpAlt/>
								{x}
							</th>
							)
						} else {
							if(x=="Name"){return (<th className={cardStyle.NameColumnHeader}>{x}</th>)}
							else{return (<th>{x}</th>)}
						}
					}
				)}
			</tr>
			{
			sortCollections(collections).map(x => {
				return (
					<DerivCard
						name={x.name} 
						volume={x.volume} 
						supply={x.supply} 
						tokensPerWallet={x.tokensPerWallet} 
						img={x.img} 
						daoRank={x.daoRank}
						lorem=''
						ipsum=''
					/>
				)
			})}
			<DerivCard	
				name='Remilia 君の Ipsum'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='導関数'
				supply='行く'
				tokensPerWallet='ここ'
				daoRank='77'
				lorem='77'
				ipsum="!"
				
			/>
			<DerivCard	
				name='Remilia 君の Ipsum'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='導関数'
				supply='行く'
				tokensPerWallet='ここ'
				daoRank='77'
				lorem='77'
				ipsum="!"
			/>
			<DerivCard	
				name='Remilia 君の Ipsum'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='導関数'
				supply='行く'
				tokensPerWallet='ここ'
				daoRank='77'
				lorem='77'
				ipsum="!"
				last
			/>
		</table>
	)
}