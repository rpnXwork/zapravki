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
var FilterRow_1 = __importDefault(require("../FilterRow/FilterRow"));
var HeadRow_1 = __importDefault(require("../HeadRow/HeadRow"));
exports.TableHead = function (props) {
    var areAllRowsSelected = props.areAllRowsSelected, childComponents = props.childComponents, columnReordering = props.columnReordering, columns = props.columns, dispatch = props.dispatch, filteringMode = props.filteringMode, groupColumnsCount = props.groupColumnsCount, sortingMode = props.sortingMode;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.thead,
    }, __assign(__assign({}, props), { dispatch: dispatch }), childComponents.tableHead), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("thead", __assign({}, elementAttributes), content || (React.createElement(React.Fragment, null,
        React.createElement(HeadRow_1.default, { areAllRowsSelected: areAllRowsSelected, childComponents: childComponents, columnReordering: columnReordering, columns: columns, dispatch: dispatch, groupColumnsCount: groupColumnsCount, sortingMode: sortingMode }),
        filteringMode === enums_1.FilteringMode.FilterRow &&
            (React.createElement(FilterRow_1.default, { childComponents: childComponents, columns: columns, dispatch: dispatch, groupColumnsCount: groupColumnsCount }))))));
};
