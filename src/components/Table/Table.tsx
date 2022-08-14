import { useEffect, useState } from 'react'
import { useSortableTable } from '../../hooks/useSortableTable'
import { LoadingEyes } from '../LoadingEyes/LoadingEyes'
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

    const { component, timeout } = loadingOptions;
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
    }, [getItems, loadMoreOptions, setDefaultData, setTableData]);

    return (
        <table className={tableStyles?.tableClass} >
            <caption>{caption}</caption>
            <TableHeader
                headers={mapperElements}
                handleSorting={handleSorting}
            />
            {
                loading ?
                    <tbody>
                        <tr>
                            <td colSpan={mapperElements.length} style={{ textAlign: 'center', alignContent: 'center', padding: '5em' }} >
                                {component}
                            </td>
                        </tr>
                    </tbody>
                    :
                    <TableBody
                        items={tableData}
                        mapperTable={mapperElements}
                        visibility={visibility}
                    />
            }
            {visibility < defaultData.length ?
                <TableFooter
                    handleLoadMore={handleUpdateVisibility}
                /> : null
            }
        </table>
    )
}
