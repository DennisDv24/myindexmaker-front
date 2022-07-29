
import { FC, useState } from 'react';
import cardStyle from './DerivCard.module.css';

export const DerivCard: FC<{
	name: string,
	img: string,
	volume: string,
	supply: string,
	tokensPerWallet: string,
	daoRank: string
}> = ({ name, img, volume, supply, tokensPerWallet, daoRank }) => {
	console.log(cardStyle.Card);
	return (
		<tr className={
			`${cardStyle.Card.toString()} ${cardStyle.IsNotInfo.toString()}`
		}>
			<img src={img} alt="" />
			<span>{name}</span>
			<span>{volume}</span>
			<span>{supply}</span>
			<span>{tokensPerWallet}</span>
			<span>{daoRank}</span>
		</tr>
	)	
}
