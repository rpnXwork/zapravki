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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var PropsUtils_1 = require("../../Utils/PropsUtils");
var DataRowContent_1 = __importDefault(require("../DataRowContent/DataRowContent"));
var EmptyCells_1 = __importDefault(require("../EmptyCells/EmptyCells"));
var DataRow = function (props) {
    var dispatch = props.dispatch, groupColumnsCount = props.groupColumnsCount, isSelectedRow = props.isSelectedRow, rowKeyValue = props.rowKeyValue, rowReordering = props.rowReordering, trRef = props.trRef;
    var dataRow = props.childComponents.dataRow;
    if (rowReordering) {
        var reorderedRowProps = PropsUtils_1.getDraggableProps(rowKeyValue, dispatch, actionCreators_1.reorderRows, defaultOptions_1.default.css.draggedRow, defaultOptions_1.default.css.dragOverRow);
        dataRow = ComponentUtils_1.addElementAttributes(reorderedRowProps, props, dataRow);
    }
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.row + " " + (isSelectedRow ? defaultOptions_1.default.css.rowSelected : '')
    }, props, dataRow), elementAttributes = _a.elementAttributes, content = _a.content;
    return (react_1.default.createElement("tr", __assign({}, elementAttributes, { ref: trRef }), content
        ? react_1.default.createElement(react_1.default.Fragment, null, content)
        : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(EmptyCells_1.default, { count: groupColumnsCount }),
            react_1.default.createElement(DataRowContent_1.default, __assign({}, props))))));
};
exports.default = DataRow;
