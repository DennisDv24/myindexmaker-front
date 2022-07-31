
import { FC, useState } from 'react';
import cardStyle from './DerivCard.module.css';

export const DerivCard: FC<{
	name: string,
	img: string,
	volume: string,
	supply: string,
	tokensPerWallet: string,
	daoRank: string,
	style?: any,
	first?: boolean,
	last?: boolean
}> = ({ name, img, volume, supply, tokensPerWallet, daoRank, style, first, last }) => {
	return (
		<tr 
			//className={
				//`${cardStyle.Card.toString()} ${cardStyle.IsNotInfo.toString()}`
			//}
			className={cardStyle.Card}
			id={first ? cardStyle['first'] : last ? cardStyle['last'] : ''}
		>
			<td 
				className={cardStyle.CardImg}
			>
				<img src={img} alt="" />
			</td>
			<td className={cardStyle.CardName}>
				{name}
			</td>
			<td className={cardStyle.Data}>
			{volume}
			</td>
			<td className={cardStyle.Data}>
			{supply}
			</td>
			<td className={cardStyle.Data}>
			{tokensPerWallet}
			</td>
			<td className={cardStyle.Data}>
			{daoRank}
			</td>
			<td className={cardStyle.Data}>
			{8}
			</td>
			<td className={cardStyle.Data}>
			{13}
			</td>
		</tr>
	)	
}
