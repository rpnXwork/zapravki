"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = require("../const");
var enums_1 = require("../enums");
var utils_1 = require("../utils");
var ArrayUtils_1 = require("../Utils/ArrayUtils");
var CellUtils_1 = require("../Utils/CellUtils");
var DataUtils_1 = require("../Utils/DataUtils");
var FilterUtils_1 = require("../Utils/FilterUtils");
var GroupUtils_1 = require("../Utils/GroupUtils");
var HeadRowUtils_1 = require("../Utils/HeadRowUtils");
var PropsUtils_1 = require("../Utils/PropsUtils");
var addColumnsToRowEditableCells = function (editableCells, columns, rowKeyValue) {
    var newEditableCells = __spreadArrays(editableCells);
    columns.forEach(function (column) {
        if (column.isEditable !== false
            && !newEditableCells.some(function (e) { return e.columnKey === column.key && e.rowKeyValue === rowKeyValue; })) {
            newEditableCells.push({
                columnKey: column.key,
                rowKeyValue: rowKeyValue
            });
        }
    });
    return newEditableCells;
};
var removeDataKeysFromSelectedRows = function (selectedRows, data, rowKeyField) {
    var newSelectedRows = selectedRows.filter(function (rowKeyValue) {
        return !data.some(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) === rowKeyValue; });
    });
    return newSelectedRows;
};
var kaReducer = function (props, action) {
    var columns = props.columns, _a = props.data, data = _a === void 0 ? [] : _a, _b = props.detailsRows, detailsRows = _b === void 0 ? [] : _b, _c = props.editableCells, editableCells = _c === void 0 ? [] : _c, groupsExpanded = props.groupsExpanded, loading = props.loading, paging = props.paging, rowKeyField = props.rowKeyField, _d = props.selectedRows, selectedRows = _d === void 0 ? [] : _d, validation = props.validation, _e = props.sortingMode, sortingMode = _e === void 0 ? enums_1.SortingMode.None : _e, virtualScrolling = props.virtualScrolling;
    switch (action.type) {
        case enums_1.ActionType.ShowColumn: {
            var newColumns = __spreadArrays(columns);
            var columnIndex = newColumns.findIndex(function (c) { return c.key === action.columnKey; });
            newColumns[columnIndex] = __assign(__assign({}, newColumns[columnIndex]), { visible: true });
            return __assign(__assign({}, props), { columns: newColumns });
        }
        case enums_1.ActionType.HideColumn: {
            var newColumns = __spreadArrays(columns);
            var columnIndex = newColumns.findIndex(function (c) { return c.key === action.columnKey; });
            newColumns[columnIndex] = __assign(__assign({}, newColumns[columnIndex]), { visible: false });
            return __assign(__assign({}, props), { columns: newColumns });
        }
        case enums_1.ActionType.ReorderRows: {
            var newData = DataUtils_1.reorderData(data, function (d) { return DataUtils_1.getValueByField(d, rowKeyField); }, action.rowKeyValue, action.targetRowKeyValue);
            return __assign(__assign({}, props), { data: newData });
        }
        case enums_1.ActionType.ReorderColumns: {
            var newData = DataUtils_1.reorderData(columns, function (d) { return d.key; }, action.columnKey, action.targetColumnKey);
            return __assign(__assign({}, props), { columns: newData });
        }
        case enums_1.ActionType.ResizeColumn: {
            var columnKey_1 = action.columnKey, width = action.width;
            var column = columns.find(function (c) { return c.key === columnKey_1; });
            var newColumn = __assign(__assign({}, column), { style: __assign(__assign({}, column.style), { width: width }) });
            var newColumns = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(newColumn, 'key', columns);
            return __assign(__assign({}, props), { columns: newColumns });
        }
        case enums_1.ActionType.UpdatePageIndex: {
            return __assign(__assign({}, props), { paging: __assign(__assign({}, paging), { pageIndex: action.pageIndex }) });
        }
        case enums_1.ActionType.UpdatePagesCount: {
            return __assign(__assign({}, props), { paging: __assign(__assign({}, paging), { pagesCount: action.pagesCount }) });
        }
        case enums_1.ActionType.HideLoading: {
            return __assign(__assign({}, props), { loading: __assign(__assign({}, loading), { enabled: false }) });
        }
        case enums_1.ActionType.ShowLoading: {
            var newLoading = __assign(__assign({}, loading), { enabled: true });
            if (action.text !== undefined) {
                newLoading.text = action.text;
            }
            return __assign(__assign({}, props), { loading: newLoading });
        }
        case enums_1.ActionType.ShowDetailsRow: {
            var newDetailsRows = __spreadArrays(detailsRows);
            newDetailsRows.push(action.rowKeyValue);
            return __assign(__assign({}, props), { detailsRows: newDetailsRows });
        }
        case enums_1.ActionType.HideDetailsRow: {
            var newDetailsRows = detailsRows.filter(function (row) { return row !== action.rowKeyValue; });
            return __assign(__assign({}, props), { detailsRows: newDetailsRows });
        }
        case enums_1.ActionType.OpenEditor: {
            var newEditableCells = CellUtils_1.addItemToEditableCells(action, editableCells);
            return __assign(__assign({}, props), { editableCells: newEditableCells });
        }
        case enums_1.ActionType.CloseEditor: {
            var newEditableCells = CellUtils_1.removeItemFromEditableCells(action, editableCells);
            return __assign(__assign({}, props), { editableCells: newEditableCells });
        }
        case enums_1.ActionType.UpdateFilterRowValue: {
            var column = columns.find(function (c) { return c.key === action.columnKey; });
            var newColumn = __assign(__assign({}, column), { filterRowValue: action.filterRowValue });
            var newColumns = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(newColumn, 'key', columns);
            return __assign(__assign({}, props), { columns: newColumns });
        }
        case enums_1.ActionType.UpdateFilterRowOperator: {
            var column = columns.find(function (c) { return c.key === action.columnKey; });
            var newColumn = __assign(__assign({}, column), { filterRowOperator: action.filterRowOperator });
            var newColumns = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(newColumn, 'key', columns);
            return __assign(__assign({}, props), { columns: newColumns });
        }
        case enums_1.ActionType.UpdateEditorValue: {
            var newEditableCells = __spreadArrays(editableCells);
            var editableCellIndex = newEditableCells.findIndex(function (c) { return c.columnKey === action.columnKey && c.rowKeyValue === action.rowKeyValue; });
            var editableCell = __assign(__assign({}, newEditableCells[editableCellIndex]), { editorValue: action.value });
            newEditableCells[editableCellIndex] = editableCell;
            return __assign(__assign({}, props), { editableCells: newEditableCells });
        }
        case enums_1.ActionType.UpdateCellValue: {
            var row = data.find(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) === action.rowKeyValue; });
            var column = columns.find(function (c) { return c.key === action.columnKey; });
            var updatedRowData = DataUtils_1.replaceValue(row, column, action.value);
            var newData = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(updatedRowData, rowKeyField, data);
            return __assign(__assign({}, props), { data: newData });
        }
        case enums_1.ActionType.DeleteRow: {
            var newData = data.filter(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) !== action.rowKeyValue; });
            return __assign(__assign({}, props), { data: newData });
        }
        case enums_1.ActionType.SelectAllRows: {
            var newSelectedRows = data.map(function (d) { return DataUtils_1.getValueByField(d, rowKeyField); });
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.SelectAllFilteredRows: {
            var newData = FilterUtils_1.filterAndSearchData(props);
            var newSelectedRows = removeDataKeysFromSelectedRows(selectedRows, newData, rowKeyField);
            newSelectedRows = __spreadArrays(newSelectedRows, newData.map(function (d) { return DataUtils_1.getValueByField(d, rowKeyField); }));
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.SelectAllVisibleRows: {
            var newData = PropsUtils_1.getData(props);
            var newSelectedRows = removeDataKeysFromSelectedRows(selectedRows, newData, rowKeyField);
            newSelectedRows = __spreadArrays(newSelectedRows, newData.map(function (d) { return DataUtils_1.getValueByField(d, rowKeyField); }));
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.Search: {
            return __assign(__assign({}, props), { searchText: action.searchText });
        }
        case enums_1.ActionType.SelectSingleRow: {
            var newSelectedRows = [action.rowKeyValue];
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.DeselectAllRows:
            return __assign(__assign({}, props), { selectedRows: [] });
        case enums_1.ActionType.DeselectAllFilteredRows: {
            var newData = FilterUtils_1.filterAndSearchData(props);
            var newSelectedRows = removeDataKeysFromSelectedRows(selectedRows, newData, rowKeyField);
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.DeselectAllVisibleRows: {
            var newData = PropsUtils_1.getData(props);
            var newSelectedRows = removeDataKeysFromSelectedRows(selectedRows, newData, rowKeyField);
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.SelectRow:
            return __assign(__assign({}, props), { selectedRows: __spreadArrays(selectedRows, [action.rowKeyValue]) });
        case enums_1.ActionType.SelectRowsRange: {
            var rowKeyValueTo_1 = action.rowKeyValueTo;
            if (rowKeyValueTo_1) {
                var shownData = utils_1.kaPropsUtils.getData(props);
                var rowKeyValueToIndex = shownData.findIndex(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) === rowKeyValueTo_1; });
                var rowKeyValueFromIndex = shownData.findIndex(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) === action.rowKeyValueFrom; });
                if (rowKeyValueToIndex != null && rowKeyValueFromIndex != null) {
                    var _f = rowKeyValueToIndex > rowKeyValueFromIndex ? [rowKeyValueFromIndex, rowKeyValueToIndex] : [rowKeyValueToIndex, rowKeyValueFromIndex], start = _f[0], end = _f[1];
                    var rowsToSelect = [];
                    for (var i = start; i <= end; i++) {
                        var value = DataUtils_1.getValueByField(shownData[i], rowKeyField);
                        if (!selectedRows.includes(value)) {
                            rowsToSelect.push(value);
                        }
                    }
                    return __assign(__assign({}, props), { selectedRows: __spreadArrays(selectedRows, rowsToSelect) });
                }
            }
            return __assign(__assign({}, props), { selectedRows: __spreadArrays(selectedRows, [action.rowKeyValueFrom]) });
        }
        case enums_1.ActionType.DeselectRow: {
            var newSelectedRows = __spreadArrays(selectedRows).filter(function (s) { return s !== action.rowKeyValue; });
            return __assign(__assign({}, props), { selectedRows: newSelectedRows });
        }
        case enums_1.ActionType.UpdateSortDirection:
            var sortedColumns = HeadRowUtils_1.getUpdatedSortedColumns(columns, action.columnKey, sortingMode);
            return __assign(__assign({}, props), { columns: sortedColumns });
        case enums_1.ActionType.UpdateVirtualScrolling:
            return __assign(__assign({}, props), { virtualScrolling: action.virtualScrolling });
        case enums_1.ActionType.UpdateData:
            return __assign(__assign({}, props), { data: action.data });
        case enums_1.ActionType.ScrollTable:
            if (virtualScrolling) {
                var scrollTop = action.scrollTop;
                return __assign(__assign({}, props), { virtualScrolling: __assign(__assign({}, virtualScrolling), { scrollTop: scrollTop }) });
            }
            break;
        case enums_1.ActionType.UpdateGroupsExpanded: {
            var currentGroupsExpanded = groupsExpanded;
            if (!currentGroupsExpanded) {
                var preparedOptions = PropsUtils_1.prepareTableOptions(props);
                currentGroupsExpanded = GroupUtils_1.getExpandedGroups(preparedOptions.groupedData);
            }
            var newGroupsExpanded = GroupUtils_1.updateExpandedGroups(currentGroupsExpanded, action.groupKey);
            return __assign(__assign({}, props), { groupsExpanded: newGroupsExpanded });
        }
        case enums_1.ActionType.ShowNewRow:
        case enums_1.ActionType.OpenRowEditors: {
            var rowKeyValue = action.type === enums_1.ActionType.ShowNewRow ? const_1.newRowId : action.rowKeyValue;
            var newEditableCells = addColumnsToRowEditableCells(editableCells, columns, rowKeyValue);
            return __assign(__assign({}, props), { editableCells: newEditableCells });
        }
        case enums_1.ActionType.HideNewRow:
        case enums_1.ActionType.CloseRowEditors: {
            var rowKeyValue_1 = action.type === enums_1.ActionType.HideNewRow ? const_1.newRowId : action.rowKeyValue;
            var newEditableCells = editableCells.filter(function (e) { return e.rowKeyValue !== rowKeyValue_1; });
            return __assign(__assign({}, props), { editableCells: newEditableCells });
        }
        case enums_1.ActionType.SaveRowEditors:
        case enums_1.ActionType.SaveNewRow: {
            var isNewRow_1 = action.type === enums_1.ActionType.SaveNewRow;
            var rowEditorKeyValue_1 = isNewRow_1 ? const_1.newRowId : action.rowKeyValue;
            var updatedRowData_1 = data.find(function (d) { return DataUtils_1.getValueByField(d, rowKeyField) === rowEditorKeyValue_1; });
            var rowEditableCells = editableCells.filter(function (editableCell) { return editableCell.rowKeyValue === rowEditorKeyValue_1
                && (isNewRow_1 || editableCell.hasOwnProperty('editorValue')); });
            if (action.validate) {
                var validationPassed_1 = true;
                rowEditableCells.forEach(function (cell) {
                    var column = columns.find(function (c) { return c.key === cell.columnKey; });
                    cell.validationMessage = validation && validation({
                        column: column,
                        value: cell.editorValue,
                        rowData: updatedRowData_1
                    });
                    validationPassed_1 = validationPassed_1 && !cell.validationMessage;
                });
                if (!validationPassed_1) {
                    return __assign(__assign({}, props), { editableCells: __spreadArrays(editableCells) });
                }
            }
            var newEditableCells = editableCells.filter(function (e) { return e.rowKeyValue !== rowEditorKeyValue_1; });
            rowEditableCells.forEach(function (cell) {
                var column = columns.find(function (c) { return c.key === cell.columnKey; });
                updatedRowData_1 = DataUtils_1.replaceValue(updatedRowData_1, column, cell.editorValue);
            });
            var newData = void 0;
            if (isNewRow_1) {
                updatedRowData_1[rowKeyField] = action.rowKeyValue;
                newData = __spreadArrays([updatedRowData_1], data);
            }
            else {
                newData = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(updatedRowData_1, rowKeyField, data);
            }
            return __assign(__assign({}, props), { data: newData, editableCells: newEditableCells });
        }
        case enums_1.ActionType.UpdateRow: {
            var newData = ArrayUtils_1.getCopyOfArrayAndInsertOrReplaceItem(action.rowData, rowKeyField, data);
            return __assign(__assign({}, props), { data: newData });
        }
    }
    return props;
};
exports.kaReducer = kaReducer;
