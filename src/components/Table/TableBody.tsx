import { TableRow } from './TableRow';
import { TableBodyProps } from './TableTypes';

export const TableBody = <T,>({
    items,
    visibility,
    mapperTable
}: TableBodyProps<T>) => {

    return (
        <tbody>
            {items.slice(0, visibility)
                .map((item, i) => 
                    <TableRow key={i} item={item} mapperTable={mapperTable} />
            )}
        </tbody>
    )
}
