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
var TableBodyContent_1 = __importDefault(require("../TableBodyContent/TableBodyContent"));
var TableBody = function (props) {
    var childComponents = props.childComponents, dispatch = props.dispatch;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.tbody,
    }, __assign(__assign({}, props), { dispatch: dispatch }), childComponents.tableBody), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("tbody", __assign({}, elementAttributes, { className: defaultOptions_1.default.css.tbody }), content || React.createElement(TableBodyContent_1.default, __assign({}, props))));
};
exports.default = TableBody;
