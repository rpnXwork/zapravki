"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateElementTop = function (elementRef) {
    if (elementRef && elementRef.current && elementRef.current.parentElement.previousSibling) {
        var bound = elementRef.current.parentElement.previousSibling.getBoundingClientRect();
        if (bound) {
            var newValue = bound.height + "px";
            if (newValue !== elementRef.current.style.top) {
                elementRef.current.style.top = newValue;
            }
        }
    }
};
