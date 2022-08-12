import { FC } from 'react'
import { DerivedTableBody } from './DerivedTableBody'
import { DerivedTableHeader } from './DerivedTableHeader'

import './derivedTable.css'

import { Collection } from '../../../../models/Collection'

type TableProps = {
    items: Collection[];
}

export const DerivedCollectionsTable: FC<TableProps> = ({
    items
}) => {
    
    return (
        <table className='derived-table' >
            <caption>Milady and Remilia derived collections</caption>
            <DerivedTableHeader />
            <DerivedTableBody data={items} />
        </table>
    )
}
