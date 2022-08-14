import { useEffect, useState } from 'react'
import { useSortableTable } from '../../hooks/useSortableTable'
import { TableBody } from './TableBody'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './TableTypes'

export const Table = <T,>({
    items, mapperElements,
    caption, loadMoreOptions,
    loadingOptions,
    tableStyles
}: TableProps<T>) => {

    const [loading, setLoading] = useState(false);

    const { component, className, timeout } = loadingOptions;
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
                    setLoading(false);
                })
                .catch((e) => console.log(e))

        }

        setLoading(true);
        setTimeout(() => {
            loadItems()
        }, timeout);

        return () => {

        }
    }, [getItems, loadMoreOptions, setDefaultData, setTableData, timeout]);

    return (
        <table className={tableStyles?.tableClass} >
            <caption>{caption}</caption>
            <TableHeader
                headers={mapperElements}
                handleSorting={handleSorting}
            />
            <TableBody
                loading={loading}
                loadingOptions={{ className: className, component: component }}
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
