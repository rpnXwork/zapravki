"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateInputValue = function (date) {

    return new Date(date).toISOString().split('T')[0];
};
