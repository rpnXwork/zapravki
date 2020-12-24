export declare enum DataType {
    Boolean = "boolean",
    Date = "date",
    Number = "number",
    Object = "object",
    String = "string"
}
export declare enum EditingMode {
    None = "none",
    Cell = "cell"
}
export declare enum ActionType {
    CloseEditor = "CloseEditor",
    CloseRowEditors = "CloseRowEditors",
    DeleteRow = "DeleteRow",
    DeselectAllFilteredRows = "DeselectAllFilteredRows",
    DeselectAllRows = "DeselectAllRows",
    DeselectAllVisibleRows = "DeselectAllVisibleRows",
    DeselectRow = "DeselectRow",
    HideColumn = "HideColumn",
    HideDetailsRow = "HideDetailsRow",
    HideLoading = "HideLoading",
    HideNewRow = "HideNewRow",
    OpenEditor = "OpenEditor",
    OpenRowEditors = "OpenRowEditors",
    ReorderColumns = "ReorderColumns",
    ReorderRows = "ReorderRows",
    ResizeColumn = "ResizeColumn",
    SaveNewRow = "SaveNewRow",
    SaveRowEditors = "SaveRowEditors",
    ScrollTable = "ScrollTable",
    Search = "Search",
    SelectAllFilteredRows = "SelectAllFilteredRows",
    SelectAllRows = "SelectAllRows",
    SelectAllVisibleRows = "SelectAllVisibleRows",
    SelectRow = "SelectRow",
    SelectRowsRange = "SelectRowsRange",
    SelectSingleRow = "SelectSingleRow",
    ShowColumn = "ShowColumn",
    ShowDetailsRow = "ShowDetailsRow",
    ShowLoading = "ShowLoading",
    ShowNewRow = "ShowNewRow",
    UpdateCellValue = "UpdateCellValue",
    UpdateData = "UpdateData",
    UpdateEditorValue = "UpdateEditorValue",
    UpdateFilterRowOperator = "UpdateFilterRowOperator",
    UpdateFilterRowValue = "UpdateFilterRowValue",
    UpdateGroupsExpanded = "UpdateGroupsExpanded",
    UpdatePageIndex = "UpdatePageIndex",
    UpdatePagesCount = "UpdatePagesCount",
    UpdateRow = "UpdateRow",
    UpdateSortDirection = "UpdateSortDirection",
    UpdateVirtualScrolling = "UpdateVirtualScrolling"
}
export declare enum KeyboardEnum {
    Esc = 27,
    Enter = 13
}
export declare enum SortDirection {
    Ascend = "ascend",
    Descend = "descend"
}
export declare enum SortingMode {
    None = "none",
    Single = "single",
    SingleTripleState = "singleTripleState",
    SingleRemote = "singleRemote",
    SingleTripleStateRemote = "singleTripleStateRemote",
    MultipleRemote = "multipleRemote",
    MultipleTripleStateRemote = "multipleTripleStateRemote"
}
export declare enum FilteringMode {
    None = "none",
    FilterRow = "filterRow"
}
export declare enum FilterOperatorName {
    Equal = "=",
    MoreThan = ">",
    LessThan = "<",
    MoreThanOrEqual = ">=",
    LessThanOrEqual = "<=",
    Contains = "contains",
    IsEmpty = "IsEmpty",
    IsNotEmpty = "IsNotEmpty"
}
