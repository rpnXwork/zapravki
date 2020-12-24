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
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var enums_1 = require("../../enums");
var Virtualize_1 = require("../../Utils/Virtualize");
var Rows_1 = __importDefault(require("../Rows/Rows"));
var VirtualizedRows = function (props) {
    var data = props.data, dispatch = props.dispatch, virtualScrolling = props.virtualScrolling;
    var onFirstRowRendered = function (firstRowRef) {
        if (firstRowRef
            && firstRowRef.current
            && (virtualScrolling
                && (!virtualScrolling.itemHeight
                    || !virtualScrolling.tbodyHeight))) {
            var itemHeight = firstRowRef.current.offsetHeight || 40;
            var rootElement = firstRowRef.current.closest("." + defaultOptions_1.default.css.root);
            var tbodyHeight = (rootElement && rootElement.offsetHeight)
                || 600;
            var newVirtualScrolling = __assign({ itemHeight: itemHeight,
                tbodyHeight: tbodyHeight }, virtualScrolling);
            dispatch({ type: enums_1.ActionType.UpdateVirtualScrolling, virtualScrolling: newVirtualScrolling });
        }
    };
    var virtualizedData = data;
    var virtualized;
    if (virtualScrolling) {
        virtualized = Virtualize_1.getVirtualized(virtualScrolling, virtualizedData);
        virtualizedData = virtualized.virtualizedData;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        virtualized && react_1.default.createElement("tr", { style: { height: virtualized.beginHeight } },
            react_1.default.createElement("td", { style: { height: virtualized.beginHeight } })),
        react_1.default.createElement(Rows_1.default, __assign({}, props, { data: virtualizedData, onFirstRowRendered: onFirstRowRendered })),
        virtualized && (react_1.default.createElement("tr", { style: { height: virtualized.endHeight } },
            react_1.default.createElement("td", { style: { height: virtualized.endHeight } })))));
};
exports.default = VirtualizedRows;
