import { FC } from 'react'
import { Collection } from '../../../../models/Collection';

type DerivedTableRowProps = {
    collection: Collection;
    isOdd: boolean;
}

export const DerivedTableRow: FC<DerivedTableRowProps> = ({
    collection,
    isOdd
}) => {

    const {
        daoRank, img, name,
        supply, tokensPerWallet, volume
    } = collection;

    return (
        <tr className={`derived-table__row ${isOdd ? 'derived-table__row--odd' : 'derived-table__row--even'}`}>
            <td className='derived-table__cell derived-table__cell--item-image derived-table__cell--bordered' >
                <img className='derived-table__image' src={img} alt="" />
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {name}
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {volume}
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {supply}
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {tokensPerWallet}
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {daoRank}
            </td>
            <td className='derived-table__cell derived-table__cell--item derived-table__cell--bordered' >
                {8}
            </td>
        </tr>
    )
}
