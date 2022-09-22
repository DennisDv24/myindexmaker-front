import { TableCellProps } from "./TableTypes";

export const TableCell = <T,>({
    value,
    data,
    parserNode,
    cellClassname,
}: TableCellProps<T>) => {
    
    return (
        <td className={`${cellClassname} fade-in`} >
            {parserNode ? parserNode(data) : `${value}`}
        </td>
    )
}
