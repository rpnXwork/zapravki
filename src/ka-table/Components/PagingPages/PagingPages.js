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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var PagingUtils_1 = require("../../Utils/PagingUtils");
var PagingIndex_1 = __importDefault(require("../PagingIndex/PagingIndex"));
var PagingPages = function (props) {
    var childComponents = props.childComponents, pages = props.pages, dispatch = props.dispatch;
    var _a = props.pageIndex, pageIndex = _a === void 0 ? 0 : _a;
    React.useEffect(function () {
        if (pageIndex !== 0 && pageIndex >= pages.length) {
            dispatch(actionCreators_1.updatePageIndex(0));
        }
    }, [dispatch, pageIndex, pages]);
    var isEndShown = pageIndex < pages.length - PagingUtils_1.centerLength && pages.length > PagingUtils_1.centerLength + Math.ceil(PagingUtils_1.centerLength / 2);
    var isStartShown = pageIndex >= PagingUtils_1.centerLength && pages.length > PagingUtils_1.centerLength + Math.ceil(PagingUtils_1.centerLength / 2);
    var centerPages = PagingUtils_1.getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);
    var _b = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.pagingPages
    }, props, childComponents.pagingPages), elementAttributes = _b.elementAttributes, content = _b.content;
    return (React.createElement("ul", __assign({}, elementAttributes), content || (React.createElement(React.Fragment, null,
        isStartShown &&
            (React.createElement(React.Fragment, null,
                React.createElement(PagingIndex_1.default, __assign({}, props, { pageIndex: 0, isActive: pageIndex === 0, text: 1 })),
                React.createElement(PagingIndex_1.default, __assign({}, props, { pageIndex: centerPages[0] - 1, isActive: false, text: '...' })))),
        centerPages.map(function (value, index) {
            return (React.createElement(PagingIndex_1.default, __assign({}, props, { pageIndex: value, isActive: pageIndex === value, key: value, text: value + 1 })));
        }),
        isEndShown &&
            (React.createElement(React.Fragment, null,
                React.createElement(PagingIndex_1.default, __assign({}, props, { pageIndex: __spreadArrays(centerPages).pop() + 1, isActive: false, text: '...' })),
                React.createElement(PagingIndex_1.default, __assign({}, props, { pageIndex: pages[pages.length - 1], isActive: pageIndex === pages[pages.length - 1], text: pages[pages.length - 1] + 1 }))))))));
};
exports.default = PagingPages;
