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
Object.defineProperty(exports, "__esModule", { value: true });
var PropsUtils_1 = require("./PropsUtils");
var ElementCustomization = /** @class */ (function () {
    function ElementCustomization() {
    }
    return ElementCustomization;
}());
exports.getElementCustomization = function (childElementAttributes, props, childComponent) {
    var elementAttributes = PropsUtils_1.extendProps(childElementAttributes, props, childComponent);
    var content = childComponent && childComponent.content && childComponent.content(props);
    return {
        content: content,
        elementAttributes: elementAttributes,
    };
};
exports.addElementAttributes = function (elementAttributes, props, childComponent) {
    var updatedChildComponent = __assign({}, childComponent);
    var defaultElementAttributes = updatedChildComponent.elementAttributes && updatedChildComponent.elementAttributes(props);
    updatedChildComponent.elementAttributes = function () { return (__assign(__assign({}, defaultElementAttributes), elementAttributes)); };
    return updatedChildComponent;
};
