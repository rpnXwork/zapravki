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
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var enums_1 = require("../../enums");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var SortUtils_1 = require("../../Utils/SortUtils");
var HeadCellContent = function (props) {
    var column = props.column, dispatch = props.dispatch, sortingMode = props.sortingMode, headCellContent = props.childComponents.headCellContent;
    var sortingEnabled = SortUtils_1.isSortingEnabled(sortingMode);
    var onClick = sortingEnabled ? function () {
        dispatch(actionCreators_1.updateSortDirection(column.key));
    } : undefined;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.theadCellContent + " " + (sortingEnabled ? 'ka-pointer' : ''),
        onClick: onClick
    }, props, headCellContent), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("div", __assign({}, elementAttributes),
        content || React.createElement("span", null, column.title),
        column.sortDirection && sortingEnabled && (React.createElement("span", { className: column.sortDirection === enums_1.SortDirection.Ascend
                ? defaultOptions_1.default.css.iconSortArrowUp
                : defaultOptions_1.default.css.iconSortArrowDown }, column.sortIndex))));
};
exports.default = HeadCellContent;
