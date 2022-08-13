export type ElementTable<T> = {
	label: string; 
	accessor: keyof T;
	sortable: boolean;
	cellClassName: string;
    headerClassName?: string;
}

export type LoadMoreOptions<T> = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
    getItems: GetItems<T>;
}

export type TableProps<T> = {
    items: T[];
    mapperElements: ElementTable<T>[];
    loadMoreOptions: LoadMoreOptions<T>;
    caption: string;
}

export type TableHeaderProps<T> = {
    headers: ElementTable<T>[];
    handleSorting: HandleSortingFn<T>;
}

export type TableBodyProps<T> = {
    items: T[];
    visibility: number;
    mapperTable: ElementTable<T>[];
}

export type TableRowProps<T> = {
    item: T;
    mapperTable: ElementTable<T>[];
}

export type OrderType = 'asc' |'desc';

export type HandleSortingFn<T> = (accessor: keyof T, order: OrderType) => void;

export type GetItems<T> = () => Promise<T[]>
