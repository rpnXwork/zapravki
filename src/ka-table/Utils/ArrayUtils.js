"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopyOfArrayAndAddItem = function (item, array) {
    if (array === void 0) { array = []; }
    return array.concat([item]);
};
exports.getCopyOfArrayAndDeleteItem = function (item, rowKeyField, array) {
    var rowKeyValue = item[rowKeyField];
    return array.filter(function (i) { return i[rowKeyField] !== rowKeyValue; });
};
exports.getCopyOfArrayAndInsertOrReplaceItem = function (item, rowKeyField, array) {
    var newArray = __spreadArrays(array);
    var rowKeyValue = item[rowKeyField];
    var index = newArray.findIndex(function (i) { return i[rowKeyField] === rowKeyValue; });
    index >= 0 ? newArray.splice(index, 1, item) : newArray.push(item);
    return newArray;
};
