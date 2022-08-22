import { useState } from 'react'
import { sortStringOrNumber } from '../components/Table/helperSort';
import { HandleSortingFn } from '../components/Table/TableTypes';

type LoadMoreOptions = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
}

export const useSortableTable = <T,>(data: T[], options: LoadMoreOptions) => {

    const [tableData, setTableData] = useState<T[]>(data);
    const [visibility, setVisibility] = useState<number>(options.initialVisibleItems);

    const handleSorting: HandleSortingFn<T> = (sortField, orderType) => {
        if (sortField) {
            const locales = ['es', 'en'];
            const copyItems = [...tableData];
            copyItems.sort(sortStringOrNumber(orderType, locales, sortField));

            setTableData(copyItems);
        }
    }

    const handleUpdateVisibility = () => {
        setVisibility(visibility + options.stepsVisibleItems);
    }

    return {
        tableData,
        visibility,
        setTableData,
        handleSorting,
        handleUpdateVisibility
    };
}
