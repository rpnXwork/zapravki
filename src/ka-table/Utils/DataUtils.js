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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtils_1 = require("./ColumnUtils");
exports.getParentValue = function (rowData, fieldParents) {
    var parentValue = fieldParents.reduce(function (previousValue, currentValue) {
        var result = (previousValue && previousValue[currentValue]);
        return result !== undefined ? result : undefined;
    }, rowData);
    return parentValue ? __assign({}, parentValue) : undefined;
};
exports.createObjByFields = function (fieldParents, field, value) {
    var parentValue = {};
    if (fieldParents.length) {
        fieldParents.reduce(function (previousValue, currentItem, currentIndex) {
            var lastObj = {};
            previousValue[currentItem] = lastObj;
            if (currentIndex === (fieldParents.length - 1)) {
                lastObj[field] = value;
            }
            return lastObj;
        }, parentValue);
    }
    else {
        parentValue[field] = value;
    }
    return __assign({}, parentValue);
};
exports.getValueByColumn = function (rowData, column) {
    return exports.getValueByField(rowData, ColumnUtils_1.getField(column));
};
exports.getValueByField = function (rowData, field) {
    var o = __assign({}, rowData);
    var names = ColumnUtils_1.getFieldParts(field);
    for (var i = 0, n = names.length; i < n; ++i) {
        var k = names[i];
        if (k in o) {
            o = o[k];
        }
        else {
            return;
        }
    }
    return o;
};
var replaceValueForField = function (rowData, field, newValue, fieldParents) {
    var result = __assign({}, rowData);
    if (fieldParents && fieldParents.length) {
        var parentValue = exports.getParentValue(result, fieldParents) || {};
        parentValue[field] = newValue;
        var parentsOfParent = __spreadArrays(fieldParents);
        var parentFieldName = parentsOfParent.pop();
        result = replaceValueForField(result, parentFieldName, parentValue, parentsOfParent);
    }
    else {
        result[field] = newValue;
    }
    return result;
};
exports.replaceValue = function (rowData, column, newValue) {
    var field = ColumnUtils_1.getField(column);
    return replaceValueForField(rowData, ColumnUtils_1.getLastField(field), newValue, ColumnUtils_1.getLastFieldParents(field));
};
exports.reorderData = function (data, getKey, keyValue, targetKeyValue) {
    var moved = data.find(function (d) { return getKey(d) === keyValue; });
    var newData = data.filter(function (d) { return getKey(d) !== keyValue; });
    var targetIndex = data.findIndex(function (d) { return getKey(d) === targetKeyValue; });
    newData.splice(targetIndex, 0, moved);
    return newData;
};
