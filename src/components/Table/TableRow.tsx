import { TableCell } from "./TableCell"
import { TableRowProps } from "./TableTypes"

export const TableRow = <T,>({
    item,
    mapperTable
}: TableRowProps<T>) => {
    return (
        <tr>
            {mapperTable.map(({ accessor, cellClassName, label, imageProps, parserValue }, i) => (
                <TableCell
                    value={item[accessor]}
                    key={`${label}${i}`}
                    imageProps={imageProps}
                    cellClassname={cellClassName}
                    parser={parserValue}
                />
            ))}
        </tr>
    )
}
