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

    return (
        <tbody>
            {
                loading ?
                    <LoadingRow /> :
                    items
                        .slice(0, visibility)
                        .map((item, i) => 
                            <TableRow key={i} item={item} mapperTable={mapperTable} />
                        )

            }
        </tbody>
    )
}
