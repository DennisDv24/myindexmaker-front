import { useEffect } from 'react'
import { useSortableTable } from '../../hooks/useSortableTable'
import { TableBody } from './TableBody'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './TableTypes'

export const Table = <T,>({
    items, mapperElements, caption, loadMoreOptions,
    tableStyles
}: TableProps<T>) => {

    const { getItems, initialVisibleItems, stepsVisibleItems } = loadMoreOptions;

    const {
        visibility,
        tableData,
        defaultData,
        handleSorting,
        setDefaultData,
        setTableData,
        handleUpdateVisibility,
    } = useSortableTable(items, { initialVisibleItems: initialVisibleItems, stepsVisibleItems: stepsVisibleItems });

    useEffect(() => {

        function loadItems() {
            getItems()
                .then(items => {
                    setDefaultData(items);
                    setTableData(items);
                })
                .catch((e) => console.log(e))
        }

        loadItems()
        return () => {
        }
    }, [getItems, loadMoreOptions, setDefaultData, setTableData]);

    return (
        <table className={tableStyles?.tableClass} >
            <caption>{caption}</caption>
            <TableHeader
                headers={mapperElements}
                handleSorting={handleSorting}
            />
            <TableBody
                items={tableData}
                mapperTable={mapperElements}
                visibility={visibility}
            />
            {visibility < defaultData.length ?
                <TableFooter
                    handleLoadMore={handleUpdateVisibility}
                /> : null
            }
        </table>
    )
}
