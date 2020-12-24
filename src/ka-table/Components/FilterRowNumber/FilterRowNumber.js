"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var FilterRowNumber = function (_a) {
    var column = _a.column, dispatch = _a.dispatch;
    var value = column.filterRowValue;
    return (react_1.default.createElement("input", { className: defaultOptions_1.default.css.numberInput, type: 'number', value: value === null || value === undefined ? '' : value, onChange: function (event) {
            var filterRowValue = event.currentTarget.value !== '' ? Number(event.currentTarget.value) : null;
            dispatch(actionCreators_1.updateFilterRowValue(column.key, filterRowValue));
        } }));
};
exports.default = FilterRowNumber;
