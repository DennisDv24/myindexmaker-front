import React from "react";

export type ElementTable<T> = {
	label: string; 
	accessor: keyof T;
	sortable: boolean;
	cellClassName: string;
    headerClassName?: string;
    parserValue?: (value: T[keyof T]) => string;
    imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

export type LoadMoreOptions<T> = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
    getItems: GetItems<T>;
}

export type LoadingOptions = {
    component: React.ReactNode;
    timeout: number;
    className: string;
}

export type TableProps<T> = {
    items: T[];
    mapperElements: ElementTable<T>[];
    loadMoreOptions: LoadMoreOptions<T>;
    loadingOptions: LoadingOptions;
    caption: string;
    tableStyles: {
        tableClass: string;
    };
}

export type TableHeaderProps<T> = {
    headers: ElementTable<T>[];
    handleSorting: HandleSortingFn<T>;
}

export type TableBodyProps<T> = {
    loading: boolean;
    loadingOptions: Pick<LoadingOptions, 'className' | 'component'>;
    items: T[];
    visibility: number;
    mapperTable: ElementTable<T>[];
}

export type TableRowProps<T> = {
    item: T;
    mapperTable: ElementTable<T>[];
}

export type TableCellProps<T,> = {
    value: T[keyof T];
    parser?: (value: T[keyof T]) => string;
    imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    cellClassname: string;
}

export type OrderType = 'asc' |'desc';

export type HandleSortingFn<T> = (accessor: keyof T, order: OrderType) => void;

export type GetItems<T> = () => Promise<T[]>
