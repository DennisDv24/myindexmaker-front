import { FC } from 'react'

const headers = ['Name', 'Volume', 'Supply', 'Avg Wallet', 'DAO Rank', 'Extra lorem'];

export const DerivedTableHeader: FC = () => {

	return (
		<thead className='derived-table__header'>
			<tr>
				<th></th>
				{headers.map((header, index) => 
					<th className='derived-table__heading' key={index} >{header}</th>
				)}
			</tr>
		</thead>
	)
}
