"use strict";
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
var const_1 = require("../../const");
var DataUtils_1 = require("../../Utils/DataUtils");
var FilterUtils_1 = require("../../Utils/FilterUtils");
var GroupUtils_1 = require("../../Utils/GroupUtils");
var DataAndDetailsRows_1 = __importDefault(require("../DataAndDetailsRows/DataAndDetailsRows"));
var GroupRow_1 = __importDefault(require("../GroupRow/GroupRow"));
var NewRow_1 = __importDefault(require("../NewRow/NewRow"));
var Rows = function (props) {
    var childComponents = props.childComponents, columns = props.columns, data = props.data, _a = props.detailsRows, detailsRows = _a === void 0 ? [] : _a, dispatch = props.dispatch, editableCells = props.editableCells, format = props.format, groupColumnsCount = props.groupColumnsCount, groupedColumns = props.groupedColumns, _b = props.groups, groups = _b === void 0 ? [] : _b, _c = props.groupsExpanded, groupsExpanded = _c === void 0 ? [] : _c, onFirstRowRendered = props.onFirstRowRendered, rowKeyField = props.rowKeyField, rowReordering = props.rowReordering, selectedRows = props.selectedRows, validation = props.validation;
    var groupMark = GroupUtils_1.getGroupMark();
    var firstRowRef = react_1.useRef(null);
    react_1.useEffect(function () {
        onFirstRowRendered(firstRowRef);
    }, [firstRowRef, onFirstRowRendered]);
    var rowRefLink = firstRowRef;
    var newRowEditableCells = editableCells && editableCells.filter(function (c) { return c.rowKeyValue === const_1.newRowId; });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        newRowEditableCells && !!newRowEditableCells.length && (react_1.default.createElement(NewRow_1.default, { childComponents: childComponents, columns: columns, dispatch: dispatch, editableCells: newRowEditableCells, format: format, groupColumnsCount: groupColumnsCount, rowKeyField: rowKeyField, validation: validation })),
        data.map(function (d) {
            if (d.groupMark === groupMark) {
                var groupIndex = d.key.length - 1;
                var group_1 = groups && groups[groupIndex];
                var column = group_1 && groupedColumns.find(function (c) { return c.key === group_1.columnKey; });
                return (react_1.default.createElement(GroupRow_1.default, { childComponents: childComponents, column: column, contentColSpan: columns.length - groupIndex + groups.length, dispatch: dispatch, groupIndex: groupIndex, groupKey: d.key, isExpanded: groupsExpanded.some(function (ge) { return JSON.stringify(ge) === JSON.stringify(d.key); }), text: GroupUtils_1.getGroupText(d.value, column), key: d.key }));
            }
            else {
                var rowKeyValue_1 = DataUtils_1.getValueByField(d, rowKeyField);
                var isSelectedRow = selectedRows.some(function (s) { return s === rowKeyValue_1; });
                var isDetailsRowShown = detailsRows.some(function (r) { return r === rowKeyValue_1; });
                var rowEditableCells = FilterUtils_1.getRowEditableCells(rowKeyValue_1, editableCells);
                var dataRow = (react_1.default.createElement(DataAndDetailsRows_1.default, { childComponents: props.childComponents, columns: props.columns, dispatch: dispatch, editableCells: props.editableCells, editingMode: props.editingMode, format: format, groupColumnsCount: props.groupColumnsCount, isDetailsRowShown: isDetailsRowShown, isSelectedRow: isSelectedRow, key: rowKeyValue_1, rowData: d, rowEditableCells: rowEditableCells, rowKeyField: props.rowKeyField, rowKeyValue: rowKeyValue_1, rowReordering: rowReordering, selectedRows: props.selectedRows, trRef: rowRefLink, validation: validation }));
                rowRefLink = undefined;
                return dataRow;
            }
        })));
};
exports.default = Rows;
