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
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var EmptyCells_1 = __importDefault(require("../EmptyCells/EmptyCells"));
var GroupRowContent = function (props) {
    var childComponents = props.childComponents, contentColSpan = props.contentColSpan, dispatch = props.dispatch, groupIndex = props.groupIndex, groupKey = props.groupKey, isExpanded = props.isExpanded, text = props.text;
    var _a = ComponentUtils_1.getElementCustomization({
        className: defaultOptions_1.default.css.groupCell,
        colSpan: contentColSpan
    }, props, childComponents.groupCell), elementAttributes = _a.elementAttributes, content = _a.content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(EmptyCells_1.default, { count: groupIndex }),
        react_1.default.createElement("td", __assign({}, elementAttributes),
            react_1.default.createElement("div", { className: 'ka-group-cell-content' },
                react_1.default.createElement("div", { onClick: function () {
                        dispatch(actionCreators_1.updateGroupsExpanded(groupKey));
                    }, className: isExpanded
                        ? defaultOptions_1.default.css.iconGroupArrowExpanded : defaultOptions_1.default.css.iconGroupArrowCollapsed }),
                content || react_1.default.createElement("div", { className: 'ka-group-text' }, text)))));
};
exports.default = GroupRowContent;
