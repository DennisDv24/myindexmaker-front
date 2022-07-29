
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
	return (
		<tr className={
			`${cardStyle.Card.toString()} ${cardStyle.IsNotInfo.toString()}`
		}>
			<th className={cardStyle.CardImg}>
				<img src={img} alt="" />
			</th>
			<th className={cardStyle.CardName}>
				{name}
			</th>
			<th className={cardStyle.Data}>
			{volume}
			</th>
			<th className={cardStyle.Data}>
			{supply}
			</th>
			<th className={cardStyle.Data}>
			{tokensPerWallet}
			</th>
			<th className={cardStyle.Data}>
			{daoRank}
			</th>
			<th className={cardStyle.Data}>
			{8}
			</th>
			<th className={cardStyle.Data}>
			{13}
			</th>
		</tr>
	)	
}
