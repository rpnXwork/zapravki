"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
exports.updateFilterRowValue = function (columnKey, filterRowValue) { return ({
    columnKey: columnKey,
    filterRowValue: filterRowValue,
    type: enums_1.ActionType.UpdateFilterRowValue,
}); };
exports.updateFilterRowOperator = function (columnKey, filterRowOperator) { return ({
    columnKey: columnKey,
    filterRowOperator: filterRowOperator,
    type: enums_1.ActionType.UpdateFilterRowOperator,
}); };
exports.updateEditorValue = function (rowKeyValue, columnKey, value) { return ({
    columnKey: columnKey,
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.UpdateEditorValue,
    value: value,
}); };
exports.updateCellValue = function (rowKeyValue, columnKey, value) { return ({
    columnKey: columnKey,
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.UpdateCellValue,
    value: value,
}); };
exports.updateSortDirection = function (columnKey) { return ({
    columnKey: columnKey,
    type: enums_1.ActionType.UpdateSortDirection,
}); };
exports.closeEditor = function (rowKeyValue, columnKey) { return ({
    columnKey: columnKey,
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.CloseEditor,
}); };
exports.deleteRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.DeleteRow,
}); };
exports.deselectAllRows = function () { return ({
    type: enums_1.ActionType.DeselectAllRows,
}); };
exports.deselectAllFilteredRows = function () { return ({
    type: enums_1.ActionType.DeselectAllFilteredRows,
}); };
exports.deselectAllVisibleRows = function () { return ({
    type: enums_1.ActionType.DeselectAllVisibleRows,
}); };
exports.deselectRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.DeselectRow,
}); };
exports.openEditor = function (rowKeyValue, columnKey) { return ({
    columnKey: columnKey,
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.OpenEditor,
}); };
exports.search = function (searchText) { return ({
    searchText: searchText,
    type: enums_1.ActionType.Search,
}); };
exports.selectAllRows = function () { return ({
    type: enums_1.ActionType.SelectAllRows,
}); };
exports.selectAllFilteredRows = function () { return ({
    type: enums_1.ActionType.SelectAllFilteredRows,
}); };
exports.selectAllVisibleRows = function () { return ({
    type: enums_1.ActionType.SelectAllVisibleRows,
}); };
exports.selectSingleRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.SelectSingleRow,
}); };
exports.selectRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.SelectRow,
}); };
exports.selectRowsRange = function (rowKeyValueFrom, rowKeyValueTo) { return ({
    rowKeyValueFrom: rowKeyValueFrom,
    rowKeyValueTo: rowKeyValueTo,
    type: enums_1.ActionType.SelectRowsRange,
}); };
exports.updateGroupsExpanded = function (groupKey) { return ({
    groupKey: groupKey,
    type: enums_1.ActionType.UpdateGroupsExpanded,
}); };
exports.updateData = function (data) { return ({
    data: data,
    type: enums_1.ActionType.UpdateData,
}); };
exports.showLoading = function (text) { return ({
    text: text,
    type: enums_1.ActionType.ShowLoading,
}); };
exports.hideLoading = function () { return ({
    type: enums_1.ActionType.HideLoading,
}); };
exports.showNewRow = function () { return ({
    type: enums_1.ActionType.ShowNewRow,
}); };
exports.hideNewRow = function () { return ({
    type: enums_1.ActionType.HideNewRow,
}); };
exports.showDetailsRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.ShowDetailsRow,
}); };
exports.hideDetailsRow = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.HideDetailsRow,
}); };
exports.saveNewRow = function (rowKeyValue, settings) { return ({
    rowKeyValue: rowKeyValue,
    validate: settings && settings.validate,
    type: enums_1.ActionType.SaveNewRow,
}); };
exports.openRowEditors = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.OpenRowEditors,
}); };
exports.closeRowEditors = function (rowKeyValue) { return ({
    rowKeyValue: rowKeyValue,
    type: enums_1.ActionType.CloseRowEditors,
}); };
exports.saveRowEditors = function (rowKeyValue, settings) { return ({
    rowKeyValue: rowKeyValue,
    validate: settings && settings.validate,
    type: enums_1.ActionType.SaveRowEditors,
}); };
exports.updateRow = function (rowData) {
    return {
        type: enums_1.ActionType.UpdateRow,
        rowData: rowData,
    };
};
exports.updatePageIndex = function (pageIndex) { return ({
    pageIndex: pageIndex,
    type: enums_1.ActionType.UpdatePageIndex,
}); };
exports.updatePagesCount = function (pagesCount) { return ({
    pagesCount: pagesCount,
    type: enums_1.ActionType.UpdatePagesCount,
}); };
exports.resizeColumn = function (columnKey, width) { return ({
    type: enums_1.ActionType.ResizeColumn,
    columnKey: columnKey,
    width: width,
}); };
exports.reorderRows = function (rowKeyValue, targetRowKeyValue) { return ({
    type: enums_1.ActionType.ReorderRows,
    rowKeyValue: rowKeyValue,
    targetRowKeyValue: targetRowKeyValue,
}); };
exports.reorderColumns = function (columnKey, targetColumnKey) { return ({
    type: enums_1.ActionType.ReorderColumns,
    columnKey: columnKey,
    targetColumnKey: targetColumnKey,
}); };
exports.showColumn = function (columnKey) { return ({
    columnKey: columnKey,
    type: enums_1.ActionType.ShowColumn,
}); };
exports.hideColumn = function (columnKey) { return ({
    columnKey: columnKey,
    type: enums_1.ActionType.HideColumn,
}); };
