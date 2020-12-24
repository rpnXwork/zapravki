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
var React = __importStar(require("react"));
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var enums_1 = require("../../enums");
var CellUtils_1 = require("../../Utils/CellUtils");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var CellEditorState_1 = __importDefault(require("../CellEditorState/CellEditorState"));
var CellEditor = function (props) {
    var childComponents = props.childComponents, dispatch = props.dispatch, editingMode = props.editingMode;
    var _a = ComponentUtils_1.getElementCustomization({
        className: "" + defaultOptions_1.default.css.cellEditor
    }, props, childComponents.cellEditor), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("div", __assign({}, elementAttributes), content || (editingMode === enums_1.EditingMode.Cell
        ? React.createElement(CellEditorState_1.default, __assign({}, props, { dispatch: CellUtils_1.getCellEditorDispatchHandler(dispatch), autoFocus: true }))
        : React.createElement(CellEditorState_1.default, __assign({}, props)))));
};
exports.default = CellEditor;
