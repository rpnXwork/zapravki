"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var FilterRowString = function (_a) {
    var column = _a.column, dispatch = _a.dispatch;
    return (react_1.default.createElement("input", { type: 'text', className: defaultOptions_1.default.css.textInput, value: column.filterRowValue || '', onChange: function (event) {
            dispatch(actionCreators_1.updateFilterRowValue(column.key, event.currentTarget.value));
        } }));
};
exports.default = FilterRowString;
