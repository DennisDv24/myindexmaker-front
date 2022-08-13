import { TableRowProps } from "./TableTypes"

export const TableRow = <T,>({
    item,
    mapperTable
}: TableRowProps<T>) => {
    return (
        <tr>
            {mapperTable.map(({ accessor, cellClassName, label }, i) => (
                <td 
                    key={`${label}${i}`} 
                    className={`${cellClassName} fade-in`} 
                >{`${item[accessor] ? item[accessor] : '-'}`}</td>
            ))}
        </tr>
    )
}
