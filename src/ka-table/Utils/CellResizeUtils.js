"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadCellResizeStateAction = 'HeadCellResizeStateAction';
exports.getMouseMove = function (currentWidth, minWidth, startX, dispatch) { return function (event) {
    var newWidth = event.screenX - startX;
    if (newWidth !== currentWidth) {
        newWidth = exports.getValidatedWidth(newWidth, minWidth);
        dispatch({ type: exports.HeadCellResizeStateAction, width: newWidth });
    }
}; };
exports.getValidatedWidth = function (newWidth, minWidth) {
    if (newWidth < minWidth) {
        return minWidth;
    }
    return newWidth;
};
exports.getMinWidth = function (style) {
    var minWidth = 20;
    var styleMinWidth = style && style.minWidth;
    if (styleMinWidth && typeof styleMinWidth === 'number') {
        minWidth = styleMinWidth;
    }
    return minWidth;
};
exports.headCellDispatchWrapper = function (setWidth, dispatch) { return function (action) {
    if (action.type === exports.HeadCellResizeStateAction) {
        setWidth(action.width);
    }
    else {
        dispatch(action);
    }
}; };
