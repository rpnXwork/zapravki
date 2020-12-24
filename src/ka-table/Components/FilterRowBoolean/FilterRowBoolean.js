"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var CommonUtils_1 = require("../../Utils/CommonUtils");
var FilterRowBoolean = function (_a) {
    var column = _a.column, dispatch = _a.dispatch;
    var value = column.filterRowValue;
    return (react_1.default.createElement("input", { className: defaultOptions_1.default.css.checkbox, type: 'checkbox', ref: function (elem) { return elem && (elem.indeterminate = CommonUtils_1.isEmpty(value)); }, checked: value || false, onChange: function (event) {
            var filterRowValue = event.currentTarget.checked;
            if (value === false) {
                if (filterRowValue === true) {
                    filterRowValue = undefined;
                }
            }
            dispatch(actionCreators_1.updateFilterRowValue(column.key, filterRowValue));
        } }));
};
exports.default = FilterRowBoolean;
