/// <reference types="react" />
import { AttributeTableData, Column } from './models';
declare type AddParameters<T, I> = T extends (e: infer E) => void ? ((e: E, extendedEvent: AttributeTableData<I>) => void) : T;
declare type WithExtraParameters<T, I> = {
    [P in keyof T]: AddParameters<T[P], I>;
};
declare type ElementAttributes<T> = React.AllHTMLAttributes<HTMLElement>;
export declare type ChildAttributesItem<T> = WithExtraParameters<ElementAttributes<T>, T> & {
    ref?: any;
};
export declare type DispatchFunc = (action: any) => void;
export declare type Field = string;
export declare type FormatFunc = (props: {
    value: any;
    column: Column;
}) => any;
export declare type SearchFunc = (props: {
    searchText: string;
    rowData: any;
    column: Column;
}) => boolean;
export declare type ValidationFunc = (props: {
    value: any;
    rowData: any;
    column: Column;
}) => string | void;
export {};
