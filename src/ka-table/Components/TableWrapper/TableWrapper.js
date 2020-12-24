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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var enums_1 = require("../../enums");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var GroupUtils_1 = require("../../Utils/GroupUtils");
var PropsUtils_1 = require("../../Utils/PropsUtils");
var TableBody_1 = __importDefault(require("../TableBody/TableBody"));
var TableHead_1 = require("../TableHead/TableHead");
exports.TableWrapper = function (props) {
    var _a = props.childComponents, childComponents = _a === void 0 ? {} : _a, columnReordering = props.columnReordering, _b = props.data, data = _b === void 0 ? [] : _b, dispatch = props.dispatch, _c = props.editableCells, editableCells = _c === void 0 ? [] : _c, _d = props.editingMode, editingMode = _d === void 0 ? enums_1.EditingMode.None : _d, _e = props.filteringMode, filteringMode = _e === void 0 ? enums_1.FilteringMode.None : _e, groups = props.groups, _f = props.rowReordering, rowReordering = _f === void 0 ? false : _f, _g = props.selectedRows, selectedRows = _g === void 0 ? [] : _g, _h = props.sortingMode, sortingMode = _h === void 0 ? enums_1.SortingMode.None : _h, virtualScrolling = props.virtualScrolling;
    var groupsExpanded = props.groupsExpanded;
    var preparedOptions = PropsUtils_1.prepareTableOptions(props);
    if (groups && !groupsExpanded) {
        groupsExpanded = GroupUtils_1.getExpandedGroups(preparedOptions.groupedData);
    }
    var areAllRowsSelected = data.length === selectedRows.length;
    var tableWrapper = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.tableWrapper,
        onScroll: virtualScrolling ? function (event) {
            dispatch({
                scrollTop: event.currentTarget.scrollTop,
                type: enums_1.ActionType.ScrollTable,
            });
        } : undefined,
    }, __assign(__assign({}, props), { dispatch: dispatch }), childComponents.tableWrapper);
    var _j = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.table,
    }, __assign(__assign({}, props), { dispatch: dispatch }), childComponents.table), elementAttributes = _j.elementAttributes, content = _j.content;
    return (React.createElement("div", __assign({}, tableWrapper.elementAttributes), content || tableWrapper.content || (React.createElement("table", __assign({}, elementAttributes),
        React.createElement(TableHead_1.TableHead, { areAllRowsSelected: areAllRowsSelected, childComponents: childComponents, columnReordering: columnReordering, columns: preparedOptions.columns, dispatch: dispatch, filteringMode: filteringMode, groupColumnsCount: preparedOptions.groupColumnsCount, sortingMode: sortingMode }),
        React.createElement(TableBody_1.default, __assign({}, props, { childComponents: childComponents, columns: preparedOptions.columns, data: preparedOptions.groupedData, dispatch: dispatch, editableCells: editableCells, editingMode: editingMode, groupColumnsCount: preparedOptions.groupColumnsCount, groupedColumns: preparedOptions.groupedColumns, groupsExpanded: groupsExpanded, rowReordering: rowReordering, selectedRows: selectedRows }))))));
};
