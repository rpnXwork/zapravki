/// <reference types="react" />
import { SortDirection, SortingMode } from '../enums';
import { Column } from '../Models/Column';
export declare const getUpdatedSortedColumns: (columns: Column[], columnKey: string, sortingMode: SortingMode) => {
    dataType?: import("../enums").DataType;
    field?: string;
    filterRowOperator?: any;
    filterRowValue?: any;
    isEditable?: boolean;
    isResizable?: boolean;
    key: string;
    sortDirection?: SortDirection;
    sortIndex?: number;
    style?: import("react").CSSProperties;
    title?: string;
    visible?: boolean;
}[];
export declare const getNextSortDirection: (previousSortdirection?: SortDirection) => SortDirection;
