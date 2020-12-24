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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var actionCreators_1 = require("../../actionCreators");
var enums_1 = require("../../enums");
var DataUtils_1 = require("../../Utils/DataUtils");
var EffectUtils_1 = require("../../Utils/EffectUtils");
var Validation_1 = require("../../Utils/Validation");
var CellEditorValidation_1 = __importDefault(require("../CellEditorValidation/CellEditorValidation"));
var CellEditorState = function (props) {
    var column = props.column, dispatch = props.dispatch, editingMode = props.editingMode, rowData = props.rowData, rowKeyValue = props.rowKeyValue, validation = props.validation, value = props.value;
    var validationMessage = props.validationMessage;
    var _a = react_1.useState(rowData), rowDataState = _a[0], changeRowData = _a[1];
    var _b = react_1.useState(value), editorValueState = _b[0], changeEditorValue = _b[1];
    var isCellEditingMode = editingMode === enums_1.EditingMode.Cell;
    validationMessage = isCellEditingMode || validationMessage
        ? Validation_1.getValidationValue(editorValueState, rowDataState, column, validation) || ''
        : validationMessage;
    var onValueStateChange = function (action) {
        var newRowValue = DataUtils_1.replaceValue(rowData, column, action.value);
        changeRowData(newRowValue);
        changeEditorValue(action.value);
    };
    var close = react_1.useCallback(function () {
        dispatch(actionCreators_1.closeEditor(rowKeyValue, column.key));
    }, [dispatch, column, rowKeyValue]);
    var closeHandler = react_1.useCallback(function () {
        if (!isCellEditingMode || !validationMessage) {
            if (editorValueState !== value) {
                dispatch(actionCreators_1.updateEditorValue(rowKeyValue, column.key, editorValueState));
            }
            if (isCellEditingMode) {
                close();
            }
        }
    }, [validationMessage, dispatch, close, column, editorValueState, rowKeyValue, value, isCellEditingMode]);
    react_1.useEffect(function () {
        return EffectUtils_1.addEscEnterKeyEffect(close, closeHandler);
    }, [close, closeHandler]);
    var dispatchHandler = function (action) {
        if (action.type === enums_1.ActionType.CloseEditor) {
            closeHandler();
        }
        else if (action.type === enums_1.ActionType.UpdateCellValue) {
            onValueStateChange(action);
        }
        else {
            dispatch(action);
        }
    };
    var stateProps = __assign(__assign({}, props), {
        dispatch: dispatchHandler,
        value: editorValueState,
        editorValue: editorValueState,
        rowData: rowDataState,
        validationMessage: validationMessage || undefined
    });
    return (react_1.default.createElement(CellEditorValidation_1.default, __assign({}, stateProps)));
};
exports.default = CellEditorState;
