"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Loading = function (props) {
    var enabled = props.enabled, text = props.text;
    if (enabled) {
        return (React.createElement("div", { className: 'ka-loading' },
            React.createElement("div", { className: 'ka-loading-icon' }),
            text && (React.createElement("div", { className: 'ka-loading-text' }, text))));
    }
    return (React.createElement(React.Fragment, null));
};
exports.default = Loading;
