/// <reference types="react" />
import { DataType, SortDirection } from '../enums';
import { Field } from '../types';
export declare class Column {
    dataType?: DataType;
    field?: Field;
    filterRowOperator?: any;
    filterRowValue?: any;
    isEditable?: boolean;
    isResizable?: boolean;
    key: string;
    sortDirection?: SortDirection;
    sortIndex?: number;
    style?: React.CSSProperties;
    title?: string;
    visible?: boolean;
}
