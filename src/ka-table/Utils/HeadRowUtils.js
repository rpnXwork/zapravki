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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions_1 = __importDefault(require("../defaultOptions"));
var enums_1 = require("../enums");
var SortUtils_1 = require("./SortUtils");
exports.getUpdatedSortedColumns = function (columns, columnKey, sortingMode) {
    var newColumns = columns.map(function (c) { return (__assign({}, c)); });
    var curentColumn = newColumns.find(function (c) { return c.key === columnKey; });
    if (curentColumn) {
        var nextSortDirection = exports.getNextSortDirection(curentColumn.sortDirection);
        if (SortUtils_1.isTripleStateSorting(sortingMode)
            && curentColumn.sortDirection
            && nextSortDirection === defaultOptions_1.default.columnSortDirection) {
            nextSortDirection = undefined;
        }
        if (!SortUtils_1.isMultipleSorting(sortingMode)) {
            newColumns.forEach(function (c) {
                delete c.sortDirection;
                delete c.sortIndex;
            });
        }
        if (nextSortDirection) {
            curentColumn.sortDirection = nextSortDirection;
            if (SortUtils_1.isMultipleSorting(sortingMode) && !curentColumn.sortIndex) {
                var sortedColumns = newColumns.filter(function (c) { return c.sortDirection; });
                curentColumn.sortIndex = sortedColumns.length + 1;
            }
        }
        else {
            delete curentColumn.sortDirection;
            delete curentColumn.sortIndex;
        }
        if (SortUtils_1.isMultipleSorting(sortingMode)) {
            var sortedColumns = SortUtils_1.sortColumns(newColumns);
            sortedColumns.forEach(function (c, i) {
                c.sortIndex = i + 1;
            });
        }
    }
    return newColumns;
};
exports.getNextSortDirection = function (previousSortdirection) {
    var nextSortDirection;
    if (previousSortdirection) {
        nextSortDirection = previousSortdirection === enums_1.SortDirection.Ascend
            ? enums_1.SortDirection.Descend : enums_1.SortDirection.Ascend;
    }
    else {
        nextSortDirection = defaultOptions_1.default.columnSortDirection;
    }
    return nextSortDirection;
};
