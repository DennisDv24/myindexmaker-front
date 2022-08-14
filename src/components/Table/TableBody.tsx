import { TableRow } from './TableRow';
import { TableBodyProps } from './TableTypes';

export const TableBody = <T,>({
    loading,
    loadingOptions,
    items,
    visibility,
    mapperTable
}: TableBodyProps<T>) => {

    const LoadingRow = () => (
        <tr>
            <td colSpan={mapperTable.length} className={loadingOptions.className} >
                {loadingOptions.component}
            </td>
        </tr>
    );

    const DataRows = () => (
        <>
            {items
                .slice(0, visibility)
                .map((item, i) => <TableRow key={i} item={item} mapperTable={mapperTable} />)
            }
        </>
    )

    return (
        <tbody>
            {
                loading ?
                    <LoadingRow /> :
                    <DataRows />
            }
        </tbody>
    )
}
