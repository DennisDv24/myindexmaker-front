import { FC, useEffect, useState } from 'react'

import { Collection } from '../../../../models/Collection'
import { Table } from '../../../../components/Table/Table'
import { GetItems, ElementTable } from '../../../../components/Table/TableTypes'
import './derivedTable.css'


import { constants } from '../../../../contracts/contracts'
import CollectionService from '../../../../services/CollectionService/CollectionService'
import { LoadingEyes } from '../../../../components/LoadingEyes/LoadingEyes'

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
        label: 'Match', accessor: 'match',
        sortable: true, headerClassName: headerClassName,
        cellClassName: roundedCellClassName
    }
]

type DerivCollectionProps = {
    functionRetrieveData: GetItems<Collection>;
}

export const DerivedCollectionsTable: FC<DerivCollectionProps> = ({
    functionRetrieveData
}) => {

    return (
        <Table
            caption='Milady and Remilia derived collections'
            items={[]}
            loadingOptions={{
                component: <LoadingEyes props={{ style: { width: '10%' } }} />, 
                timeout: 1500,
                className: 'derived-table__loading' 
            }}
            tableStyles={{
                tableClass: 'derived-table',
            }}
            loadMoreOptions={{
                initialVisibleItems: 5,
                stepsVisibleItems: 3,
                getItems: functionRetrieveData,
                buttonLoadingClass: 'derived-table__button_load_more'
            }}
            mapperElements={configElements}
        />
    )
}
