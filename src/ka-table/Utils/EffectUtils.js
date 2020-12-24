"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
/*
  Used inside effects and returned as result from them,
  it adds listener to esc & enter keys on life cycle of component
*/
exports.addEscEnterKeyEffect = function (escKeyHandler, enterKeyHandler) {
    var handleKeyboard = function (event) {
        if (event.keyCode === enums_1.KeyboardEnum.Esc) {
            escKeyHandler();
        }
        if (event.keyCode === enums_1.KeyboardEnum.Enter) {
            enterKeyHandler();
        }
    };
    return exports.getEventListenerEffect('keyup', handleKeyboard);
};
exports.getEventListenerEffect = function (eventName, handler) {
    window.addEventListener(eventName, handler);
    return function () {
        window.removeEventListener(eventName, handler);
    };
};
