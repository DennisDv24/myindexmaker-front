import { FC } from 'react'
import { Collection } from '../../../models/Collection'
import { DerivedCollectionsTable } from '../DerivCollections/Table/DerivedCollectionsTable'

type CardTableItems = { items: Collection[] }

export const CardTable: FC<CardTableItems> = ({
    items
}) => {
    return (
        <section className='card__table'>
            <DerivedCollectionsTable items={items} />
        </section>
    )
}
