var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var CellEditorNumber = function (_a) {
    var column = _a.column, dispatch = _a.dispatch, value = _a.value, rowKeyValue = _a.rowKeyValue, autoFocus = _a.autoFocus;
    return (react_1.default.createElement("input", { autoFocus: autoFocus, className: defaultOptions_1.default.css.numberInput, type: 'number', value: value === null || value === undefined ? '' : value, onChange: function (event) {
            var newValue = event.currentTarget.value !== '' ? Number(event.currentTarget.value) : null;
            dispatch(actionCreators_1.updateCellValue(rowKeyValue, column.key, newValue));
        }, onBlur: function () {
            dispatch(actionCreators_1.closeEditor(rowKeyValue, column.key));
        } }));
};
exports.default = CellEditorNumber;
