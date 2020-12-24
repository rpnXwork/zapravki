"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataUtils_1 = require("./DataUtils");
var groupMark = {};
exports.updateExpandedGroups = function (groupsExpanded, groupKey) {
    var newGroupsExpanded = groupsExpanded.filter(function (ge) { return JSON.stringify(ge) !== JSON.stringify(groupKey); });
    if (newGroupsExpanded.length === groupsExpanded.length) {
        newGroupsExpanded.push(groupKey);
    }
    return newGroupsExpanded;
};
exports.getExpandedGroups = function (groupedData) {
    return groupedData
        .filter(function (g) { return g.groupMark === groupMark; })
        .map(function (g) { return g.key; });
};
exports.getGroupedData = function (data, groups, groupedColumns, groupsExpanded) {
    var grouped = exports.getGroupedStructure(data, groups, groupedColumns, 0, groupsExpanded);
    return exports.convertToFlat(grouped);
};
exports.convertToFlat = function (grouped, key) {
    if (key === void 0) { key = []; }
    var result = [];
    grouped.forEach(function (value, groupValue) {
        var groupKey = __spreadArrays(key);
        groupKey.push(groupValue);
        result.push({ groupMark: groupMark, key: groupKey, value: groupValue });
        result = __spreadArrays(result, (Array.isArray(value) ? value : exports.convertToFlat(value, groupKey)));
    });
    return result;
};
exports.getGroupedStructure = function (data, groups, groupedColumns, expandedDeep, groupsExpanded) {
    if (expandedDeep === void 0) { expandedDeep = 0; }
    groups = __spreadArrays(groups);
    var group = groups.shift();
    if (group) {
        var column_1 = groupedColumns && groupedColumns.find(function (g) { return g.key === group.columnKey; });
        if (column_1) {
            var grouped_1 = exports.groupBy(data, function (item) { return DataUtils_1.getValueByColumn(item, column_1); });
            grouped_1.forEach(function (value, key) {
                var groupExpandedItems = groupsExpanded && groupsExpanded.filter(function (ge) { return ge[expandedDeep] === key; });
                var isThisGroupExpanded = !groupExpandedItems
                    || groupExpandedItems.some(function (ge) { return ge.length === expandedDeep + 1; });
                if (isThisGroupExpanded) {
                    var newStructure = exports.getGroupedStructure(value, groups, groupedColumns, expandedDeep + 1, groupExpandedItems && groupExpandedItems.filter(function (ge) { return ge.length > expandedDeep + 1; }));
                    if (newStructure) {
                        grouped_1.set(key, newStructure);
                    }
                }
                else {
                    grouped_1.set(key, []);
                }
            });
            return grouped_1;
        }
    }
};
exports.groupBy = function (data, keyGetter, isEmptyValue) {
    if (isEmptyValue === void 0) { isEmptyValue = false; }
    var map = new Map();
    data.forEach(function (item) {
        var key = keyGetter(item);
        if (isEmptyValue) {
            map.set(key, []);
        }
        else {
            var collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        }
    });
    return map;
};
exports.getGroupMark = function () { return groupMark; };
exports.getGroupText = function (value, column, format) {
    return format ? format({ column: column, value: value }) : "" + (column && column.title ? column.title + ': ' : '') + value;
};
