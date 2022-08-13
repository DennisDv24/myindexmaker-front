import { TableCellProps } from "./TableTypes";

export const TableCell = <T,>({
    value,
    parser,
    imageProps,
    cellClassname,
}: TableCellProps<T>) => {

    const parsedValue = parser ? parser(value) : value;
    return (
        <td className={`${cellClassname} fade-in`} >
            {imageProps ? 
            <img src={`${parsedValue}`} alt={''} {...imageProps} /> :
            `${parsedValue}`}
        </td>
    )
}
