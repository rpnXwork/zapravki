import { Column } from '../Models/Column';
export declare const getParentValue: (rowData: any, fieldParents: string[]) => any;
export declare const createObjByFields: (fieldParents: string[], field: string, value: any) => any;
export declare const getValueByColumn: (rowData: any, column: Column) => any;
export declare const getValueByField: (rowData: any, field: string) => any;
export declare const replaceValue: (rowData: any, column: Column, newValue: any) => void;
export declare const reorderData: (data: any[], getKey: (d: any) => any, keyValue: any, targetKeyValue: any) => any[];
