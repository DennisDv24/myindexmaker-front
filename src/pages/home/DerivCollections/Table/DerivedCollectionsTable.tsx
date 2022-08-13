import { FC } from 'react'

import { Collection } from '../../../../models/Collection'
import { Table } from '../../../../components/Table/Table'
import { GetItems, ElementTable } from '../../../../components/Table/TableTypes'
import './derivedTable.css'


import { constants } from '../../../../contracts/contracts'
import CollectionService from '../../../../services/CollectionService/CollectionService'

const headerClassName = 'derived-table__heading';
const defaultCellClassName = 'derived-table__cell';
const roundedCellClassName = `${defaultCellClassName} derived-table__cell--item derived-table__cell--bordered`;

const configElements: ElementTable<Collection>[] = [
    {
        label: '', accessor: 'img',
        sortable: false, headerClassName: headerClassName,
        cellClassName: `${defaultCellClassName} derived-table__cell--item-image derived-table__cell--bordered`,
        imageProps: {
            className: 'derived-table__image',
        }
    },
    {
        label: 'Name', accessor: 'name',
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    },
    {
        label: 'Volume', accessor: 'volume',
        parserValue: (value) => `${value} Ξ`, 
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    },
    {
        label: 'Supply', accessor: 'supply',
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    },
    {
        label: 'Avg wallet', accessor: 'tokensPerWallet',
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    },
    {
        label: 'Rank', accessor: 'daoRank',
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    }
]

export const DerivedCollectionsTable: FC = () => {

    const getItems: GetItems<Collection> = () => CollectionService.getCollections(constants.contracts);

    return (
        <Table
            caption='Milady and Remilia derived collections'
            items={[]}
            tableStyles={{
                tableClass: 'derived-table',
            }}
            loadMoreOptions={{
                initialVisibleItems: 1,
                stepsVisibleItems: 1,
                getItems: getItems
            }}
            mapperElements={configElements}
        />
    )
}
