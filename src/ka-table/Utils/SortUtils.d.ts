import { SortingMode } from '../enums';
import { Column } from '../Models/Column';
export declare const sortColumns: (columns: Column[]) => Column[];
export declare const sortData: (columns: Column[], data: any) => any[];
export declare const isTripleStateSorting: (sortingMode: SortingMode) => boolean;
export declare const isMultipleSorting: (sortingMode: SortingMode) => boolean;
export declare const isRemoteSorting: (sortingMode: SortingMode) => boolean;
export declare const isSortingEnabled: (sortingMode: SortingMode) => boolean;
