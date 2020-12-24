
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var actionCreators_1 = require("../../actionCreators");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var DateUtils_1 = require("../../Utils/DateUtils");
var CellEditorDate = function (_a) {
    var column = _a.column, dispatch = _a.dispatch, rowKeyValue = _a.rowKeyValue, value = _a.value, autoFocus = _a.autoFocus;
    var inputValue = value && DateUtils_1.getDateInputValue(value);
    return (react_1.default.createElement("input", { autoFocus: autoFocus, className: defaultOptions_1.default.css.dateInput, type: 'date', value: inputValue || '', onChange: function (event) {
            var targetValue = event.currentTarget.value;
            var newValue = targetValue ? new Date(targetValue) : null;
            dispatch(actionCreators_1.updateCellValue(rowKeyValue, column.key, Date.parse(newValue)));
        }, onBlur: function () {
            dispatch(actionCreators_1.closeEditor(rowKeyValue, column.key));
        } }));
};
exports.default = CellEditorDate;
