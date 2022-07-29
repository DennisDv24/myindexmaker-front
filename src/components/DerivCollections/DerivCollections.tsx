
import { DerivCard } from './DerivCard';
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import derivStyle from './DerivCard.module.css';


export const DerivCollections = () => {
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
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
			<DerivCard	
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
			<DerivCard	
				name='milAIdy maker'
				img='https://lh3.googleusercontent.com/rybJRSagcBB-FhWp2pRRFdOKsypJ1n2gqYIpMDD8QLztqh64cjo1FNXKwty4qYNWxWHPaSmxagiAE1MYR3vtPvAR-psaRVNjYLxSWA=s0'
				volume='10'
				supply='300'
				tokensPerWallet='3'
				daoRank='4'
			/>
		</table>
	)
}
