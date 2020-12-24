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
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var PropsUtils_1 = require("../../Utils/PropsUtils");
var Loading_1 = __importDefault(require("../Loading/Loading"));
var Paging_1 = __importDefault(require("../Paging/Paging"));
var TableWrapper_1 = require("../TableWrapper/TableWrapper");
exports.Table = function (props) {
    var _a = props.childComponents, childComponents = _a === void 0 ? {} : _a, dispatch = props.dispatch, height = props.height, loading = props.loading, paging = props.paging, width = props.width;
    var isLoadingActive = loading && loading.enabled;
    var kaCss = isLoadingActive ? 'ka ka-loading-active' : 'ka';
    var _b = ComponentUtils_1.getElementCustomization({
        className: kaCss
    }, __assign(__assign({}, props), { dispatch: dispatch }), childComponents.rootDiv), elementAttributes = _b.elementAttributes, rootDivContent = _b.content;
    elementAttributes.style = __assign({ width: width, height: height }, elementAttributes.style);
    return (React.createElement("div", __assign({}, elementAttributes),
        rootDivContent || React.createElement(TableWrapper_1.TableWrapper, __assign({}, props)),
        React.createElement(Paging_1.default, __assign({}, paging, { dispatch: dispatch, childComponents: childComponents, pagesCount: PropsUtils_1.getPagesCountByProps(props) })),
        React.createElement(Loading_1.default, __assign({}, loading))));
};
