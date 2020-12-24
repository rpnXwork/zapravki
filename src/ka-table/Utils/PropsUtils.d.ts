import { AllHTMLAttributes } from 'react';
import { ITableProps } from '../';
import { Column } from '../models';
import { ChildComponent } from '../Models/ChildComponent';
import { ChildAttributesItem, DispatchFunc } from '../types';
export declare const extendProps: (childElementAttributes: AllHTMLAttributes<HTMLElement>, childProps: any, childComponent?: ChildComponent<any>) => AllHTMLAttributes<HTMLElement>;
export declare const mergeProps: (childElementAttributes: AllHTMLAttributes<HTMLElement>, childProps: any, childCustomAttributes: ChildAttributesItem<any>, dispatch: DispatchFunc) => AllHTMLAttributes<HTMLElement>;
export declare const areAllFilteredRowsSelected: (props: ITableProps) => boolean;
export declare const areAllVisibleRowsSelected: (props: ITableProps) => boolean;
export declare const getData: (props: ITableProps) => any[];
export declare const getSortedColumns: (props: ITableProps) => Column[];
export declare const getPagesCountByProps: (props: ITableProps) => number;
export declare const prepareTableOptions: (props: ITableProps) => {
    columns: Column[];
    groupColumnsCount: number;
    groupedColumns: Column[];
    groupedData: any[];
};
export declare const getDraggableProps: (key: any, dispatch: DispatchFunc, actionCreator: (draggableKeyValue: any, targetKeyValue: any) => any, draggedClass: string, dragOverClass: string) => ChildAttributesItem<any>;
