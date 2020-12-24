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
var CellResizeUtils_1 = require("../../Utils/CellResizeUtils");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var PropsUtils_1 = require("../../Utils/PropsUtils");
var SortUtils_1 = require("../../Utils/SortUtils");
var HeadCellContent_1 = __importDefault(require("../HeadCellContent/HeadCellContent"));
var HeadCellResize_1 = __importDefault(require("../HeadCellResize/HeadCellResize"));
var HeadCell = function (props) {
    var columnReordering = props.columnReordering, _a = props.column, style = _a.style, isResizable = _a.isResizable, key = _a.key, dispatch = props.dispatch, sortingMode = props.sortingMode;
    var headCell = props.childComponents.headCell;
    var _b = React.useState(style ? style.width : undefined), width = _b[0], setWidth = _b[1];
    var stateStyle = __assign(__assign({}, style), { width: width });
    var headCellDispatch = CellResizeUtils_1.headCellDispatchWrapper(setWidth, dispatch);
    if (columnReordering) {
        var reorderedRowProps = PropsUtils_1.getDraggableProps(key, dispatch, actionCreators_1.reorderColumns, defaultOptions_1.default.css.draggedColumn, defaultOptions_1.default.css.dragOverColumn);
        headCell = ComponentUtils_1.addElementAttributes(reorderedRowProps, props, headCell);
    }
    var _c = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.theadCell + " " + defaultOptions_1.default.css.theadBackground + " " + (SortUtils_1.isSortingEnabled(sortingMode) ? 'ka-pointer' : ''),
        style: stateStyle,
        scope: 'col'
    }, props, headCell), elementAttributes = _c.elementAttributes, content = _c.content;
    return (React.createElement("th", __assign({}, elementAttributes),
        React.createElement("div", { className: defaultOptions_1.default.css.theadCellWrapper },
            React.createElement("div", { className: defaultOptions_1.default.css.theadCellContentWrapper }, content || React.createElement(HeadCellContent_1.default, __assign({}, props))),
            isResizable && (React.createElement(HeadCellResize_1.default, __assign({}, props, { currentWidth: width, dispatch: headCellDispatch }))))));
};
exports.default = HeadCell;
