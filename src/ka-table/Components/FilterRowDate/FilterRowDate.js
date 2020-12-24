"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var DateUtils_1 = require("../../Utils/DateUtils");
var FilterRowDate = function (_a) {
    var column = _a.column, dispatch = _a.dispatch;
    var fieldValue = column.filterRowValue;
    var value = fieldValue && DateUtils_1.getDateInputValue(fieldValue);
    return (react_1.default.createElement("input", { className: defaultOptions_1.default.css.dateInput, type: 'date', value: value || '', onChange: function (event) {
            var targetValue = event.currentTarget.value;
            var filterRowValue = targetValue ? new Date(targetValue) : null;
            dispatch(actionCreators_1.updateFilterRowValue(column.key, filterRowValue));
        } }));
};
exports.default = FilterRowDate;
