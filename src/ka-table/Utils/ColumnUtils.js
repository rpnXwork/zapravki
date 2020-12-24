"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions_1 = __importDefault(require("../defaultOptions"));
exports.getField = function (column) {
    return column.field || column.key;
};
exports.getLastField = function (field) {
    if (defaultOptions_1.default.fieldDelimiter) {
        return field.split(defaultOptions_1.default.fieldDelimiter).pop();
    }
    return field;
};
exports.getFieldParts = function (field) {
    return defaultOptions_1.default.fieldDelimiter ? field.split(defaultOptions_1.default.fieldDelimiter) : [field];
};
exports.getLastFieldParents = function (field) {
    if (defaultOptions_1.default.fieldDelimiter) {
        var fieldParents = field.split(defaultOptions_1.default.fieldDelimiter);
        fieldParents.pop();
        return fieldParents;
    }
    return [];
};
