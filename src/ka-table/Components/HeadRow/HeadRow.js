"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var EmptyCells_1 = __importDefault(require("../EmptyCells/EmptyCells"));
var HeadCell_1 = __importDefault(require("../HeadCell/HeadCell"));
var HeadRow = function (_a) {
    var areAllRowsSelected = _a.areAllRowsSelected, childComponents = _a.childComponents, columnReordering = _a.columnReordering, columns = _a.columns, dispatch = _a.dispatch, groupColumnsCount = _a.groupColumnsCount, sortingMode = _a.sortingMode;
    return (react_1.default.createElement("tr", { className: defaultOptions_1.default.css.theadRow },
        react_1.default.createElement(EmptyCells_1.default, { count: groupColumnsCount, isTh: true }),
        columns.map(function (column) {
            return (react_1.default.createElement(HeadCell_1.default, { areAllRowsSelected: areAllRowsSelected, childComponents: childComponents, columnReordering: columnReordering, column: column, dispatch: dispatch, key: column.key, sortingMode: sortingMode }));
        })));
};
exports.default = HeadRow;
