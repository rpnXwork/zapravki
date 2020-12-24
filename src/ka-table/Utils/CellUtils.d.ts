import { EditingMode } from '../enums';
import { Column, EditableCell } from '../models';
import { DispatchFunc } from '../types';
export declare const isEditableCell: (editingMode: EditingMode, column: Column, rowEditableCells: EditableCell[]) => boolean;
export declare const getEditableCell: (column: Column, rowEditableCells: EditableCell[]) => EditableCell;
export declare const addItemToEditableCells: (item: EditableCell, editableCells: EditableCell[]) => EditableCell[];
export declare const getCellEditorDispatchHandler: (dispatch: DispatchFunc) => (action: any) => void;
export declare const removeItemFromEditableCells: (item: EditableCell, editableCells: EditableCell[]) => EditableCell[];
