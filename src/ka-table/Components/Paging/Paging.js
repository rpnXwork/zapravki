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
var PagingPages_1 = __importDefault(require("../PagingPages/PagingPages"));
var Paging = function (props) {
    var enabled = props.enabled, pagesCount = props.pagesCount;
    if (enabled) {
        var pages = new Array(pagesCount).fill(undefined).map(function (_, index) { return index; });
        return (React.createElement("div", { className: defaultOptions_1.default.css.paging },
            React.createElement(PagingPages_1.default, __assign({}, props, { pages: pages }))));
    }
    return (React.createElement(React.Fragment, null));
};
exports.default = Paging;
