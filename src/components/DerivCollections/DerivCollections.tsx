
import { DerivCard } from './DerivCard';

export const DerivCollections = () => {
	return (
		<table style={{
			margin: '3%',
		}}>
			<tr>
				<td></td>
				<td>Name</td>
				<td>Volume</td>
				<td>Supply</td>
				<td>Tokens Per Wallet mean</td>
				<td>DAO Rank</td>
				<td>Extra lorem</td>
				<td>Extra ipsum</td>
			</tr>
			<DerivCard	
				name='Milady Maker'
				img='https://lh3.googleusercontent.com/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
			<DerivCard	
				name='Banner NFTs'
				img='https://openseauserdata.com/files/683f01134665f3cd1458ae4a46e32990.png'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
			<DerivCard	
				name='Auras'
				img='https://lh3.googleusercontent.com/RcCll0PWAnUGr1oYk250Mm0fAW5u0-pkEzOaxSHm6qiHotaqjVtePqkf0CD6v2ef1uxhrqW6KZI3ZYqfURKSiecnSd2ofngQNepxbw=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
			<DerivCard	
				name='Random Collection'
				img='https://lh3.googleusercontent.com/RcCll0PWAnUGr1oYk250Mm0fAW5u0-pkEzOaxSHm6qiHotaqjVtePqkf0CD6v2ef1uxhrqW6KZI3ZYqfURKSiecnSd2ofngQNepxbw=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
		</table>
	)
}
