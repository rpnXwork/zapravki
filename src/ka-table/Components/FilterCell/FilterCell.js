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
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var DomUtils_1 = require("../../Utils/DomUtils");
var FilterRowDataType_1 = __importDefault(require("../FilterRowDataType/FilterRowDataType"));
var FilterCell = function (props) {
    var childComponents = props.childComponents, style = props.column.style;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.theadCell + " ka-filter-row-cell " + defaultOptions_1.default.css.theadBackground,
        style: style
    }, props, childComponents.filterRowCell), elementAttributes = _a.elementAttributes, content = _a.content;
    var elementRef = React.useRef(null);
    React.useEffect(function () {
        DomUtils_1.updateElementTop(elementRef);
    }, [elementRef]);
    return (React.createElement("td", __assign({}, elementAttributes, { ref: elementRef }), content ? content :
        (React.createElement(FilterRowDataType_1.default, __assign({}, props)))));
};
exports.default = FilterCell;
