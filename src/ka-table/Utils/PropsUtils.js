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
var enums_1 = require("../enums");
var FilterUtils_1 = require("./FilterUtils");
var GroupUtils_1 = require("./GroupUtils");
var PagingUtils_1 = require("./PagingUtils");
var SortUtils_1 = require("./SortUtils");
exports.extendProps = function (childElementAttributes, childProps, childComponent) {
    var resultProps = childElementAttributes;
    var childCustomAttributes = childComponent && childComponent.elementAttributes && childComponent.elementAttributes(childProps);
    if (childCustomAttributes) {
        var dispatch = childProps.dispatch;
        resultProps = exports.mergeProps(childElementAttributes, childProps, childCustomAttributes, dispatch);
    }
    return resultProps;
};
var emptyFunc = function () { };
exports.mergeProps = function (childElementAttributes, childProps, childCustomAttributes, dispatch) {
    var customPropsWithEvents = {};
    var _loop_1 = function (prop) {
        if (childCustomAttributes.hasOwnProperty(prop)) {
            var propName = prop;
            var propValue_1 = childCustomAttributes[propName];
            var baseFunc_1 = childElementAttributes[propName] || emptyFunc;
            if (typeof propValue_1 === 'function') {
                customPropsWithEvents[prop] = function (e) {
                    propValue_1(e, {
                        baseFunc: baseFunc_1,
                        childElementAttributes: childElementAttributes,
                        childProps: childProps,
                        dispatch: dispatch,
                    });
                };
            }
        }
    };
    for (var prop in childCustomAttributes) {
        _loop_1(prop);
    }
    var mergedResult = __assign(__assign(__assign(__assign({}, childElementAttributes), childCustomAttributes), customPropsWithEvents), { className: (childElementAttributes.className || '') + " " + (childCustomAttributes.className || ''), style: __assign(__assign({}, childCustomAttributes.style), childElementAttributes.style) });
    return mergedResult;
};
exports.areAllFilteredRowsSelected = function (props) {
    var _a = props.selectedRows, selectedRows = _a === void 0 ? [] : _a;
    return FilterUtils_1.filterAndSearchData(props).every(function (d) { return selectedRows.includes(d.id); });
};
exports.areAllVisibleRowsSelected = function (props) {
    var _a = props.selectedRows, selectedRows = _a === void 0 ? [] : _a;
    return exports.getData(props).every(function (d) { return selectedRows.includes(d.id); });
};
exports.getData = function (props) {
    var columns = props.columns, groups = props.groups, groupsExpanded = props.groupsExpanded, paging = props.paging, _a = props.sortingMode, sortingMode = _a === void 0 ? enums_1.SortingMode.None : _a;
    var _b = props.data, data = _b === void 0 ? [] : _b;
    data = __spreadArrays(data);
    data = FilterUtils_1.filterAndSearchData(props);
    if (!SortUtils_1.isRemoteSorting(sortingMode)) {
        data = SortUtils_1.sortData(columns, data);
    }
    var groupedColumns = groups ? columns.filter(function (c) { return groups.some(function (g) { return g.columnKey === c.key; }); }) : [];
    var groupedData = groups ? GroupUtils_1.getGroupedData(data, groups, groupedColumns, groupsExpanded) : data;
    data = PagingUtils_1.getPageData(groupedData, paging);
    return data;
};
exports.getSortedColumns = function (props) {
    return SortUtils_1.sortColumns(props.columns);
};
exports.getPagesCountByProps = function (props) {
    var paging = props.paging;
    var pagesCount = 1;
    if (paging && paging.enabled) {
        pagesCount = PagingUtils_1.getPagesCount(FilterUtils_1.filterAndSearchData(props), paging);
    }
    return pagesCount;
};
exports.prepareTableOptions = function (props) {
    var groups = props.groups;
    var columns = props.columns;
    var groupedData = exports.getData(props);
    var groupColumnsCount = 0;
    var groupedColumns = [];
    if (groups) {
        groupColumnsCount = groups.length;
        groupedColumns = columns.filter(function (c) { return groups.some(function (g) { return g.columnKey === c.key; }); });
        columns = columns.filter(function (c) { return !groups.some(function (g) { return g.columnKey === c.key; }); });
    }
    columns = columns.filter(function (c) { return c.visible !== false; });
    return {
        columns: columns,
        groupColumnsCount: groupColumnsCount,
        groupedColumns: groupedColumns,
        groupedData: groupedData
    };
};
exports.getDraggableProps = function (key, dispatch, actionCreator, draggedClass, dragOverClass) {
    var count = 0;
    return {
        draggable: true,
        onDragStart: function (event) {
            count = 0;
            event.dataTransfer.setData('ka-draggableKeyValue', JSON.stringify(key));
            event.currentTarget.classList.add(draggedClass);
            event.dataTransfer.effectAllowed = 'move';
        },
        onDragEnd: function (event) {
            event.currentTarget.classList.remove(draggedClass);
        },
        onDrop: function (event) {
            event.currentTarget.classList.remove(dragOverClass);
            var draggableKeyValue = JSON.parse(event.dataTransfer.getData('ka-draggableKeyValue'));
            dispatch(actionCreator(draggableKeyValue, key));
        },
        onDragEnter: function (event) {
            count++;
            if (!event.currentTarget.classList.contains(dragOverClass)) {
                event.currentTarget.classList.add(dragOverClass);
            }
            event.preventDefault();
        },
        onDragLeave: function (event) {
            count--;
            if (count === 0) {
                event.currentTarget.classList.remove(dragOverClass);
            }
        },
        onDragOver: function (event) {
            if (!event.currentTarget.classList.contains(dragOverClass)) {
                event.currentTarget.classList.add(dragOverClass);
            }
            event.preventDefault();
        }
    };
};
