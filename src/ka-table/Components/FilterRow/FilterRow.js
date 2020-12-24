"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var EmptyCells_1 = __importDefault(require("../EmptyCells/EmptyCells"));
var FilterCell_1 = __importDefault(require("../FilterCell/FilterCell"));
var FilterRow = function (_a) {
    var childComponents = _a.childComponents, columns = _a.columns, dispatch = _a.dispatch, groupColumnsCount = _a.groupColumnsCount;
    return (react_1.default.createElement("tr", { className: 'ka-filter-row ka-tr' },
        react_1.default.createElement(EmptyCells_1.default, { count: groupColumnsCount, isTh: true }),
        columns.map(function (column) {
            return (react_1.default.createElement(FilterCell_1.default, { key: column.key, column: column, childComponents: childComponents, dispatch: dispatch }));
        })));
};
exports.default = FilterRow;
