import { useState } from 'react'
import { sortStringOrNumber } from '../components/Table/helperSort';
import { HandleSortingFn } from '../components/Table/TableTypes';

type LoadMoreOptions = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
}

export const useSortableTable = <T,>(data: T[], options: LoadMoreOptions) => {

    const [defaultData, setDefaultData] = useState<T[]>(data);
    const [tableData, setTableData] = useState<T[]>(data);
    const [visibility, setVisibility] = useState<number>(options.initialVisibleItems);

    const handleSorting: HandleSortingFn<T> = (sortField, orderType) => {
        if (sortField) {
            const locales = ['es', 'en'];
            const copyItems = [...tableData].slice(0, visibility);
            
            copyItems.sort(sortStringOrNumber(orderType, locales, sortField));

            setTableData(copyItems);
        }
    }

    const handleUpdateVisibility = () => {
        setTableData(defaultData);
        setVisibility(visibility + options.stepsVisibleItems);
    }

    return {
        tableData,
        visibility,
        defaultData,
        setDefaultData,
        setTableData,
        handleSorting,
        handleUpdateVisibility
    };
}
