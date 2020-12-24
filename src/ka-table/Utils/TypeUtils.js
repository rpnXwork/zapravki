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
exports.convertToColumnTypes = function (data, columns) {
    var columnsToReplace = __spreadArrays(columns);
    var dataCopy = __spreadArrays(data);
    columnsToReplace.forEach(function (c) {
        if (c.dataType) {
            for (var i = 0; i < dataCopy.length; i++) {
                var value = DataUtils_1.getValueByColumn(dataCopy[i], c);
                if (value != null) {
                    switch (c.dataType) {
                        case enums_1.DataType.String:
                            if (value.constructor !== String) {
                                dataCopy[i] = DataUtils_1.replaceValue(dataCopy[i], c, value.toString());
                                continue;
                            }
                            break;
                        case enums_1.DataType.Number:
                            if (value.constructor !== Number) {
                                dataCopy[i] = DataUtils_1.replaceValue(dataCopy[i], c, Number(value));
                                continue;
                            }
                            break;
                        case enums_1.DataType.Date:
                            if (value.constructor !== Date) {
                                dataCopy[i] = DataUtils_1.replaceValue(dataCopy[i], c, new Date(value));
                                continue;
                            }
                            break;
                        case enums_1.DataType.Boolean:
                            if (value.constructor !== Boolean) {
                                dataCopy[i] = DataUtils_1.replaceValue(dataCopy[i], c, exports.toBoolean(value));
                                continue;
                            }
                            break;
                    }
                    break;
                }
            }
        }
    });
    return dataCopy;
};
exports.toBoolean = function (value) {
    if (typeof value === 'string') {
        switch (value.toLowerCase().trim()) {
            case 'true':
            case 'yes':
            case '1': return true;
            case 'false':
            case 'no':
            case '0':
            case null: return false;
        }
    }
    return Boolean(value);
};
