import { ITableProps } from '../';
import { ICellEditorProps, ICellProps, ICellTextProps, IDataRowProps, IFilterRowEditorProps, IGroupRowProps, IHeadCellProps, INoDataRowProps, IPagingIndexProps, IPagingPagesProps, ITableBodyProps, ITableHeadProps } from '../props';
import { ChildComponent } from './ChildComponent';
export declare class ChildComponents {
    cell?: ChildComponent<ICellProps>;
    cellEditor?: ChildComponent<ICellEditorProps>;
    cellText?: ChildComponent<ICellTextProps>;
    dataRow?: ChildComponent<IDataRowProps>;
    detailsRow?: ChildComponent<IDataRowProps>;
    filterRowCell?: ChildComponent<IFilterRowEditorProps>;
    pagingIndex?: ChildComponent<IPagingIndexProps>;
    pagingPages?: ChildComponent<IPagingPagesProps>;
    groupCell?: ChildComponent<IGroupRowProps>;
    groupRow?: ChildComponent<IGroupRowProps>;
    headCell?: ChildComponent<IHeadCellProps>;
    headCellContent?: ChildComponent<IHeadCellProps>;
    noDataRow?: ChildComponent<INoDataRowProps>;
    rootDiv?: ChildComponent<ITableProps>;
    table?: ChildComponent<ITableProps>;
    tableBody?: ChildComponent<ITableBodyProps>;
    tableHead?: ChildComponent<ITableHeadProps>;
    tableWrapper?: ChildComponent<ITableProps>;
}
