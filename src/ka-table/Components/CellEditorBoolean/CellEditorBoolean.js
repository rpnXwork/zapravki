var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var CommonUtils_1 = require("../../Utils/CommonUtils");
var CellEditorBoolean = function (_a) {
    var column = _a.column, dispatch = _a.dispatch, rowKeyValue = _a.rowKeyValue, value = _a.value, autoFocus = _a.autoFocus;
    return (react_1.default.createElement("input", { autoFocus: autoFocus, className: defaultOptions_1.default.css.checkbox, type: 'checkbox', ref: function (elem) { return elem && (elem.indeterminate = CommonUtils_1.isEmpty(value)); }, checked: value || false, onChange: function (event) {
            return dispatch(actionCreators_1.updateCellValue(rowKeyValue, column.key, event.currentTarget.checked));
        }, onBlur: function () {
            dispatch(actionCreators_1.closeEditor(rowKeyValue, column.key));
        } }));
};
exports.default = CellEditorBoolean;
