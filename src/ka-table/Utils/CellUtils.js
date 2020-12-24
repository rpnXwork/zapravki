"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionCreators_1 = require("../actionCreators");
var enums_1 = require("../enums");
var ArrayUtils_1 = require("./ArrayUtils");
exports.isEditableCell = function (editingMode, column, rowEditableCells) {
    if (column.isEditable !== undefined) {
        return column.isEditable;
    }
    return !!rowEditableCells.find(function (c) { return c.columnKey === column.key; });
};
exports.getEditableCell = function (column, rowEditableCells) {
    if (column.isEditable === false) {
        return undefined;
    }
    return rowEditableCells.find(function (c) { return c.columnKey === column.key; });
};
exports.addItemToEditableCells = function (item, editableCells) {
    return ArrayUtils_1.getCopyOfArrayAndAddItem(item, editableCells);
};
exports.getCellEditorDispatchHandler = function (dispatch) {
    return function (action) {
        if (action.type === enums_1.ActionType.UpdateEditorValue) {
            dispatch(actionCreators_1.updateCellValue(action.rowKeyValue, action.columnKey, action.value));
        }
        else {
            dispatch(action);
        }
    };
};
exports.removeItemFromEditableCells = function (item, editableCells) {
    return editableCells.filter(function (c) { return c.columnKey !== item.columnKey || c.rowKeyValue !== item.rowKeyValue; });
};
