import { FC } from 'react'

import { Collection } from '../../../../models/Collection'
import { Table } from '../../../../components/Table/Table'
import { GetItems, ElementTable } from '../../../../components/Table/TableTypes'
import { LoadingEyes } from '../../../../components/LoadingEyes/LoadingEyes'

import './derivedTable.css'
import { DefaultParser } from './ElementParsers/DefaultParser'
import { ImageParser } from './ElementParsers/ImageParser'
import { LinkParser } from './ElementParsers/LinkParser'

const headerClassName = 'derived-table__heading';
const defaultCellClassName = 'derived-table__cell';
const roundedCellClassName = `${defaultCellClassName} derived-table__cell--item derived-table__cell--bordered`;

const parseEthPrice = (value: string) => `${value} Ξ`;
const parseMatchValue = (value: string) => `${Number(value) === 1 ? value: Number(value).toPrecision(2)}`;

const configElements: ElementTable<Collection>[] = [
    {
        label: '', accessor: 'img',
        sortable: false, headerClassName: headerClassName,
        cellClassName: `${defaultCellClassName} derived-table__cell--item-image derived-table__cell--bordered`,
        parserValueNode: (item) => <ImageParser imageprops={{ src: item.img, alt: `collection ${item.name}`, className: 'derived-table__image' }} />
    },
    {
        label: 'Name', accessor: 'name',
        sortable: true, headerClassName: headerClassName,
        cellClassName: `${roundedCellClassName} word-break`,
        parserValueNode: (item) => <LinkParser text={item.name} linkProps={{ href: item.openseaLink }} />
    },
    {
        label: 'Volume', accessor: 'volume',
        parserValueNode: (item) => <DefaultParser value={item.volume.toString()} parser={parseEthPrice} />, 
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
        parserValueNode: (item) => <DefaultParser value={item.match.toString()} parser={parseMatchValue} />,
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
                initialVisibleItems: 1,
                stepsVisibleItems: 1,
                getItems: functionRetrieveData,
                buttonLoadingClass: 'derived-table__button_load_more'
            }}
            mapperElements={configElements}
        />
    )
}
