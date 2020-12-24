"use strict";
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
var CellResizeUtils_1 = require("../../Utils/CellResizeUtils");
var EffectUtils_1 = require("../../Utils/EffectUtils");
var HeadCellResize = function (props) {
    var _a = props.column, key = _a.key, style = _a.style, dispatch = props.dispatch, currentWidth = props.currentWidth;
    var minWidth = CellResizeUtils_1.getMinWidth(style);
    return (React.createElement("div", { className: defaultOptions_1.default.css.theadCellResize, draggable: 'false', onMouseDown: function (mouseDownEvent) {
            var startX = mouseDownEvent.screenX - mouseDownEvent.currentTarget.parentElement.offsetWidth;
            var mouseMoveStop = EffectUtils_1.getEventListenerEffect('mousemove', CellResizeUtils_1.getMouseMove(currentWidth, minWidth, startX, dispatch));
            var mouseUpStop = EffectUtils_1.getEventListenerEffect('mouseup', function (event) {
                var newWidth = CellResizeUtils_1.getValidatedWidth(event.screenX - startX, minWidth);
                dispatch(actionCreators_1.resizeColumn(key, newWidth));
                dispatch({ type: CellResizeUtils_1.HeadCellResizeStateAction, width: newWidth });
                mouseUpStop();
                mouseMoveStop();
            });
        } }, "\u00A0"));
};
exports.default = HeadCellResize;
