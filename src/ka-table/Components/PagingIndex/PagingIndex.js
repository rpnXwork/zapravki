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
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var PagingIndex = function (props) {
    var childComponents = props.childComponents, dispatch = props.dispatch, isActive = props.isActive, pageIndex = props.pageIndex, text = props.text;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.pagingPageIndex + " " + (isActive ? 'ka-paging-page-index-active' : ''),
        onClick: function () { return dispatch(actionCreators_1.updatePageIndex(pageIndex)); }
    }, props, childComponents.pagingIndex), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("li", __assign({}, elementAttributes), content || text));
};
exports.default = PagingIndex;
