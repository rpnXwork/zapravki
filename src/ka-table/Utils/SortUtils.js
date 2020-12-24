"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var DataUtils_1 = require("./DataUtils");
exports.sortColumns = function (columns) {
    return columns.filter(function (c) { return c.sortDirection; }).sort(function (a, b) {
        if (a.sortIndex === b.sortIndex) {
            return 0;
        }
        if (!a.sortIndex) {
            return -1;
        }
        if (!b.sortIndex) {
            return 1;
        }
        if (a.sortIndex < b.sortIndex) {
            return -1;
        }
        return 1;
    });
};
exports.sortData = function (columns, data) {
    var sortedColumn = columns.find(function (column) { return column.sortDirection; });
    if (!sortedColumn) {
        return data;
    }
    var sortFunc = sortedColumn.sortDirection === enums_1.SortDirection.Ascend
        ? ascendSort(sortedColumn) : descendSort(sortedColumn);
    var newData = __spreadArrays(data).sort(sortFunc);
    return newData;
};
var ascendSort = function (sortedColumn) {
    return function (a, b) {
        var aValue = DataUtils_1.getValueByColumn(a, sortedColumn);
        var bValue = DataUtils_1.getValueByColumn(b, sortedColumn);
        if (aValue === bValue) {
            return 0;
        }
        else if (aValue == null) {
            return -1;
        }
        else if (bValue == null) {
            return 1;
        }
        return aValue < bValue ? -1 : 1;
    };
};
var descendSort = function (sortedColumn) {
    return function (a, b) {
        var aValue = DataUtils_1.getValueByColumn(a, sortedColumn);
        var bValue = DataUtils_1.getValueByColumn(b, sortedColumn);
        if (aValue === bValue) {
            return 0;
        }
        else if (aValue == null) {
            return 1;
        }
        else if (bValue == null) {
            return -1;
        }
        return aValue > bValue ? -1 : 1;
    };
};
exports.isTripleStateSorting = function (sortingMode) {
    return sortingMode === enums_1.SortingMode.MultipleTripleStateRemote
        || sortingMode === enums_1.SortingMode.SingleTripleState
        || sortingMode === enums_1.SortingMode.SingleTripleStateRemote;
};
exports.isMultipleSorting = function (sortingMode) {
    return sortingMode === enums_1.SortingMode.MultipleTripleStateRemote
        || sortingMode === enums_1.SortingMode.MultipleRemote;
};
exports.isRemoteSorting = function (sortingMode) {
    return sortingMode === enums_1.SortingMode.SingleRemote
        || sortingMode === enums_1.SortingMode.MultipleTripleStateRemote
        || sortingMode === enums_1.SortingMode.SingleTripleStateRemote
        || sortingMode === enums_1.SortingMode.MultipleRemote;
};
exports.isSortingEnabled = function (sortingMode) {
    return sortingMode !== enums_1.SortingMode.None;
};
