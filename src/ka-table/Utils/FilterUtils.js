"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions_1 = __importDefault(require("../defaultOptions"));
var enums_1 = require("../enums");
var CommonUtils_1 = require("./CommonUtils");
var DataUtils_1 = require("./DataUtils");
var TypeUtils_1 = require("./TypeUtils");
exports.getRowEditableCells = function (rowKeyValue, editableCells) {
    return editableCells.filter(function (c) { return c.rowKeyValue === rowKeyValue; });
};
exports.searchData = function (columns, data, searchText, search) {
    var searched = columns.reduce(function (initialData, c) {
        var filterFunction = function (item) {
            if (initialData.indexOf(item) >= 0) {
                return false;
            }
            var searchContent = search && search({ column: c, searchText: searchText, rowData: item });
            if (searchContent != null) {
                return searchContent;
            }
            var columnValue = DataUtils_1.getValueByColumn(item, c);
            if (columnValue == null) {
                return false;
            }
            return columnValue.toString().toLowerCase().includes(searchText.toLowerCase());
        };
        return initialData.concat(data.filter(filterFunction));
    }, []);
    return data.filter(function (d) { return searched.indexOf(d) >= 0; });
};
exports.filterAndSearchData = function (props) {
    var extendedFilter = props.extendedFilter, searchText = props.searchText, columns = props.columns, search = props.search;
    var _a = props.data, data = _a === void 0 ? [] : _a;
    data = __spreadArrays(data);
    data = extendedFilter ? extendedFilter(data) : data;
    data = searchText ? exports.searchData(columns, data, searchText, search) : data;
    data = TypeUtils_1.convertToColumnTypes(data, columns);
    data = exports.filterData(data, columns);
    return data;
};
exports.filterData = function (data, columns) {
    return columns.reduce(function (initialData, column) {
        if (CommonUtils_1.isEmpty(column.filterRowValue)
            && column.filterRowOperator !== enums_1.FilterOperatorName.IsEmpty
            && column.filterRowOperator !== enums_1.FilterOperatorName.IsNotEmpty) {
            return initialData;
        }
        var filterRowOperator = column.filterRowOperator
            || exports.getDefaultOperatorForType(column.dataType || defaultOptions_1.default.columnDataType);
        var filterOperator = exports.predefinedFilterOperators.find(function (fo) { return filterRowOperator === fo.name; });
        if (!filterOperator) {
            throw new Error("'" + column.filterRowOperator + "' has not found in predefinedFilterOperators array, available operators: " + exports.predefinedFilterOperators.map(function (o) { return o.name; }).join(', '));
        }
        var compare = filterOperator.compare;
        return initialData.filter(function (d) {
            var fieldValue = DataUtils_1.getValueByColumn(d, column);
            var conditionValue = column.filterRowValue;
            if (column.dataType === enums_1.DataType.Date) {
                fieldValue = fieldValue == null ? fieldValue : new Date(fieldValue).setHours(0, 0, 0, 0);
                conditionValue = conditionValue == null ? conditionValue : new Date(conditionValue).setHours(0, 0, 0, 0);
            }
            return compare(fieldValue, conditionValue);
        });
    }, data);
};
exports.getDefaultOperatorForType = function (type) {
    var filterOperator = exports.predefinedFilterOperators.find(function (o) { return o.defaultForTypes && o.defaultForTypes.includes(type); });
    return (filterOperator && filterOperator.name) || '=';
};
exports.predefinedFilterOperators = [{
        compare: function (fieldValue, conditionValue) {
            return fieldValue === conditionValue;
        },
        defaultForTypes: [enums_1.DataType.Boolean, enums_1.DataType.Number, enums_1.DataType.Date],
        name: enums_1.FilterOperatorName.Equal,
    }, {
        compare: function (fieldValue, conditionValue) {
            return fieldValue > conditionValue;
        },
        name: enums_1.FilterOperatorName.MoreThan,
    }, {
        compare: function (fieldValue, conditionValue) {
            return fieldValue < conditionValue;
        },
        name: enums_1.FilterOperatorName.LessThan,
    }, {
        compare: function (fieldValue, conditionValue) {
            return fieldValue >= conditionValue;
        },
        name: enums_1.FilterOperatorName.MoreThanOrEqual,
    }, {
        compare: function (fieldValue, conditionValue) {
            return fieldValue <= conditionValue;
        },
        name: enums_1.FilterOperatorName.LessThanOrEqual,
    }, {
        compare: function (fieldValue, conditionValue) {
            return fieldValue != null && fieldValue.toString().toLowerCase().includes(conditionValue.toString().toLowerCase());
        },
        defaultForTypes: [enums_1.DataType.String],
        name: enums_1.FilterOperatorName.Contains,
    }, {
        compare: function (fieldValue) {
            return CommonUtils_1.isEmpty(fieldValue);
        },
        name: enums_1.FilterOperatorName.IsEmpty,
    }, {
        compare: function (fieldValue) {
            return !CommonUtils_1.isEmpty(fieldValue);
        },
        name: enums_1.FilterOperatorName.IsNotEmpty,
    }];
