import { ActionType } from './enums';
export declare const updateFilterRowValue: (columnKey: string, filterRowValue: any) => {
    columnKey: string;
    filterRowValue: any;
    type: ActionType;
};
export declare const updateFilterRowOperator: (columnKey: string, filterRowOperator: string) => {
    columnKey: string;
    filterRowOperator: string;
    type: ActionType;
};
export declare const updateEditorValue: (rowKeyValue: any, columnKey: string, value: any) => {
    columnKey: string;
    rowKeyValue: any;
    type: ActionType;
    value: any;
};
export declare const updateCellValue: (rowKeyValue: any, columnKey: string, value: any) => {
    columnKey: string;
    rowKeyValue: any;
    type: ActionType;
    value: any;
};
export declare const updateSortDirection: (columnKey: string) => {
    columnKey: string;
    type: ActionType;
};
export declare const closeEditor: (rowKeyValue: any, columnKey: string) => {
    columnKey: string;
    rowKeyValue: any;
    type: ActionType;
};
export declare const deleteRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const deselectAllRows: () => {
    type: ActionType;
};
export declare const deselectAllFilteredRows: () => {
    type: ActionType;
};
export declare const deselectAllVisibleRows: () => {
    type: ActionType;
};
export declare const deselectRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const openEditor: (rowKeyValue: any, columnKey: string) => {
    columnKey: string;
    rowKeyValue: any;
    type: ActionType;
};
export declare const search: (searchText: any) => {
    searchText: any;
    type: ActionType;
};
export declare const selectAllRows: () => {
    type: ActionType;
};
export declare const selectAllFilteredRows: () => {
    type: ActionType;
};
export declare const selectAllVisibleRows: () => {
    type: ActionType;
};
export declare const selectSingleRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const selectRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const selectRowsRange: (rowKeyValueFrom: any, rowKeyValueTo: any) => {
    rowKeyValueFrom: any;
    rowKeyValueTo: any;
    type: ActionType;
};
export declare const updateGroupsExpanded: (groupKey: any[]) => {
    groupKey: any[];
    type: ActionType;
};
export declare const updateData: (data: any[]) => {
    data: any[];
    type: ActionType;
};
export declare const showLoading: (text?: string) => {
    text: string;
    type: ActionType;
};
export declare const hideLoading: () => {
    type: ActionType;
};
export declare const showNewRow: () => {
    type: ActionType;
};
export declare const hideNewRow: () => {
    type: ActionType;
};
export declare const showDetailsRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const hideDetailsRow: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const saveNewRow: (rowKeyValue: any, settings?: {
    validate?: boolean;
}) => {
    rowKeyValue: any;
    validate: boolean;
    type: ActionType;
};
export declare const openRowEditors: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const closeRowEditors: (rowKeyValue: any) => {
    rowKeyValue: any;
    type: ActionType;
};
export declare const saveRowEditors: (rowKeyValue: any, settings?: {
    validate?: boolean;
}) => {
    rowKeyValue: any;
    validate: boolean;
    type: ActionType;
};
export declare const updateRow: (rowData: any) => {
    type: ActionType;
    rowData: any;
};
export declare const updatePageIndex: (pageIndex: number) => {
    pageIndex: number;
    type: ActionType;
};
export declare const updatePagesCount: (pagesCount: number) => {
    pagesCount: number;
    type: ActionType;
};
export declare const resizeColumn: (columnKey: string, width: number) => {
    type: ActionType;
    columnKey: string;
    width: number;
};
export declare const reorderRows: (rowKeyValue: any, targetRowKeyValue: any) => {
    type: ActionType;
    rowKeyValue: any;
    targetRowKeyValue: any;
};
export declare const reorderColumns: (columnKey: string, targetColumnKey: string) => {
    type: ActionType;
    columnKey: string;
    targetColumnKey: string;
};
export declare const showColumn: (columnKey: any) => {
    columnKey: any;
    type: ActionType;
};
export declare const hideColumn: (columnKey: any) => {
    columnKey: any;
    type: ActionType;
};
