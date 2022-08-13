import { OrderType } from "./TableTypes";

type compareFn = <T>(orderType: OrderType, locales: string[], sortField: keyof T) => 
    (a: T, b: T) => number;

export const sortStringOrNumber: compareFn = (orderType, locales, sortField) => (a, b) => {
    
    if (a[sortField] === null) return 1;
    if (b[sortField] === null) return -1;
    if (a[sortField] === null && b[sortField] === null) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (
        (typeof aValue === 'string' || typeof aValue === 'number') && 
        (typeof bValue === 'string' || typeof bValue === 'number')
    ) {
        return (
            aValue.toString()
            .localeCompare(bValue.toString(), locales, { numeric: true }) * (orderType === 'asc' ? 1 : -1)
        );
    } else {
        return 0;
    }
}