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
            <td className='derived-table__cell derived-table__cell--item-image' >
                <img className='derived-table__image' src={img} alt="" />
            </td>
            <td 
                className='derived-table__cell derived-table__cell--item'
                style={{padding: '10px 0px'}}
            >
                {name}
            </td>
            <td className='derived-table__cell derived-table__cell--item' >
                {volume}
            </td>
            <td className='derived-table__cell derived-table__cell--item' >
                {supply}
            </td>
            <td className='derived-table__cell derived-table__cell--item' >
                {tokensPerWallet}
            </td>
            <td className='derived-table__cell derived-table__cell--item' >
                {daoRank}
            </td>
            <td className='derived-table__cell derived-table__cell--item' >
                {8}
            </td>
        </tr>
    )
}
