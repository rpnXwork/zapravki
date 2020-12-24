"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationValue = function (value, rowData, column, validation) {
    if (validation) {
        return validation({ value: value, rowData: rowData, column: column });
    }
    return undefined;
};
