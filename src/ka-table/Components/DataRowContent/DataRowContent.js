"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CellUtils_1 = require("../../Utils/CellUtils");
var ColumnUtils_1 = require("../../Utils/ColumnUtils");
var DataUtils_1 = require("../../Utils/DataUtils");
var CellComponent_1 = __importDefault(require("../CellComponent/CellComponent"));
var DataRowContent = function (_a) {
    var childComponents = _a.childComponents, columns = _a.columns, dispatch = _a.dispatch, editingMode = _a.editingMode, format = _a.format, isDetailsRowShown = _a.isDetailsRowShown, isSelectedRow = _a.isSelectedRow, rowData = _a.rowData, rowEditableCells = _a.rowEditableCells, rowKeyField = _a.rowKeyField, rowKeyValue = _a.rowKeyValue, selectedRows = _a.selectedRows, validation = _a.validation;
    return (react_1.default.createElement(react_1.default.Fragment, null, columns.map(function (column) {
        var editableCell = CellUtils_1.getEditableCell(column, rowEditableCells);
        var hasEditorValue = editableCell && editableCell.hasOwnProperty('editorValue');
        var editorValue = editableCell && editableCell.editorValue;
        var value = hasEditorValue ? editorValue : DataUtils_1.getValueByColumn(rowData, column);
        return (react_1.default.createElement(CellComponent_1.default, { childComponents: childComponents, column: column, dispatch: dispatch, editingMode: editingMode, editorValue: editorValue, field: ColumnUtils_1.getField(column), format: format, hasEditorValue: editableCell && editableCell.hasOwnProperty('editorValue'), isDetailsRowShown: isDetailsRowShown, isEditableCell: !!editableCell, isSelectedRow: isSelectedRow, key: column.key, rowData: rowData, rowKeyField: rowKeyField, rowKeyValue: rowKeyValue, selectedRows: selectedRows, validation: validation, validationMessage: editableCell && editableCell.validationMessage, value: value }));
    })));
};
exports.default = DataRowContent;
