import { useState } from 'react'
import { OrderType, TableHeaderProps } from './TableTypes';

import { DefaultArrow, DownArrow, UpArrow } from '../icons'

export const TableHeader = <T,>({
    headers,
    handleSorting
}: TableHeaderProps<T>) => {

    const [sortField, setSortField] = useState<keyof T>();
    const [order, setOrder] = useState<OrderType>('asc');


    function handleSortingChange(accesor: keyof T): void {
        const sortOrder: OrderType =
            accesor === sortField && order === 'asc' ? 'desc' : 'asc';
        setSortField(accesor);
        setOrder(sortOrder);
        handleSorting(accesor, sortOrder);
    }

    const getArrowIcon = (sortable: boolean, accessor: keyof T, order: OrderType) => {
        if (sortable === false) return null;

        let isSameField = sortField === accessor;

        if (isSameField && order === 'asc') return <UpArrow/>;
        if (isSameField && order === 'desc') return <DownArrow/>;

        return <DefaultArrow/>;
    }

    return (
        <thead>
            <tr>
                {headers.map(
                    ({ accessor, label, headerClassName, sortable }) => {
                        return (<th
                            className={`${headerClassName}`}
                            key={`${accessor.toString()}`}
                            onClick={sortable === true ? () => handleSortingChange(accessor) : undefined}
                        >{label} {getArrowIcon(sortable, accessor, order)} </th>)
                    })}
            </tr>
        </thead>
    )
}

