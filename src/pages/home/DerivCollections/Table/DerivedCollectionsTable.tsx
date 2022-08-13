import { FC } from 'react'

import { Collection } from '../../../../models/Collection'
import { Table } from '../../../../components/Table/Table'
import { GetItems, ElementTable } from '../../../../components/Table/TableTypes'
import './derivedTable.css'


import { constants } from '../../../../contracts/contracts'
import CollectionService from '../../../../services/CollectionService/CollectionService'

const configElements: ElementTable<Collection>[] = [
    { label: '', accessor: 'img', sortable: false, cellClassName: '' },
    { label: 'Name', accessor: 'name', sortable: true, cellClassName: '' },
    { label: 'Volume', accessor: 'volume', sortable: true, cellClassName: '' },
    { label: 'Supply', accessor: 'supply', sortable: true, cellClassName: '' },
    { label: 'Avg wallet', accessor: 'tokensPerWallet', sortable: true, cellClassName: '' },
    { label: 'Rank', accessor: 'daoRank', sortable: true, cellClassName: '' }
]

export const DerivedCollectionsTable: FC = () => {

    const getItems: GetItems<Collection> = () => CollectionService.getCollections(constants.contracts);

    return (
        <Table
            caption='Milady and Remilia derived collections'
            items={[]}
            loadMoreOptions={{
                initialVisibleItems: 1,
                stepsVisibleItems: 1,
                getItems: getItems
            }}
            mapperElements={configElements}
        />
    )
}
