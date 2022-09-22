import { TableCell } from "./TableCell"
import { TableRowProps } from "./TableTypes"

export const TableRow = <T,>({
    item,
    mapperTable
}: TableRowProps<T>) => {
    return (
        <tr>
            {mapperTable.map(({ accessor, cellClassName, label, parserValueNode }, i) => (
                <TableCell
                    value={item[accessor]}
                    data={item}
                    key={`${label}${i}`}
                    cellClassname={cellClassName}
                    parserNode={parserValueNode}
                />
            ))}
        </tr>
    )
}
