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
var CommonUtils_1 = require("../../Utils/CommonUtils");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var CellText = function (props) {
    var childComponents = props.childComponents, column = props.column, format = props.format, dispatch = props.dispatch, editingMode = props.editingMode, rowKeyValue = props.rowKeyValue, value = props.value;
    var formatedValue = format && format({ column: column, value: value });
    formatedValue = formatedValue || (!CommonUtils_1.isEmpty(value) && value.toString());
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.cellText,
        onClick: function () {
            if (editingMode === enums_1.EditingMode.Cell) {
                dispatch(actionCreators_1.openEditor(rowKeyValue, column.key));
            }
        },
    }, props, childComponents.cellText), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("div", __assign({}, elementAttributes), content || formatedValue || React.createElement(React.Fragment, null, "\u00A0")));
};
exports.default = CellText;
