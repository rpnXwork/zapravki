"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var CellEditorString = function (_a) {
    var column = _a.column, dispatch = _a.dispatch, value = _a.value, rowKeyValue = _a.rowKeyValue, autoFocus = _a.autoFocus;
    return (react_1.default.createElement("input", { autoFocus: autoFocus, type: 'text', className: defaultOptions_1.default.css.textInput, value: value || '', onChange: function (event) {
            dispatch(actionCreators_1.updateCellValue(rowKeyValue, column.key, event.currentTarget.value));
        }, onBlur: function () {
            dispatch(actionCreators_1.closeEditor(rowKeyValue, column.key));
        } }));
};
exports.default = CellEditorString;
