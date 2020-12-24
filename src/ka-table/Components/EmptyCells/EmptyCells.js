"use strict";
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
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var EmptyCells = function (_a) {
    var count = _a.count, isTh = _a.isTh;
    return (React.createElement(React.Fragment, null, __spreadArrays(Array(count)).map(function (item, index) {
        return isTh ?
            React.createElement("th", { key: index, className: "ka-empty-cell " + defaultOptions_1.default.css.theadBackground }) :
            React.createElement("td", { key: index, className: 'ka-empty-cell' });
    })));
};
exports.default = EmptyCells;
