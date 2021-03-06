import { Column } from '../models';
import { Group } from '../Models/Group';
import { FormatFunc } from '../types';
export declare const updateExpandedGroups: (groupsExpanded: any[][], groupKey: any[]) => any[][];
export declare const getExpandedGroups: (groupedData: any[]) => any[][];
export declare const getGroupedData: (data: any[], groups: Group[], groupedColumns: Column[], groupsExpanded?: any[]) => any[];
export declare const convertToFlat: (grouped: Map<any, any>, key?: any[]) => any[];
export declare const getGroupedStructure: (data: any[], groups: Group[], groupedColumns: Column[], expandedDeep?: number, groupsExpanded?: any[]) => void | Map<any, any>;
export declare const groupBy: (data: any[], keyGetter: any, isEmptyValue?: boolean) => Map<any, any>;
export declare const getGroupMark: () => {};
export declare const getGroupText: (value: any, column: Column, format?: FormatFunc) => any;
