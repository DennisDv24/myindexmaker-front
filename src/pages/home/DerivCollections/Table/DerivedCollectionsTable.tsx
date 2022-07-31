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
            <DerivedTableHeader />
            <DerivedTableBody data={items} />
        </table>
    )
}
