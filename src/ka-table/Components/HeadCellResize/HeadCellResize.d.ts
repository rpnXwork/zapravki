import * as React from 'react';
import { Column } from '../../Models/Column';
import { DispatchFunc } from '../../types';
declare const HeadCellResize: React.FunctionComponent<{
    dispatch: DispatchFunc;
    column: Column;
    currentWidth: any;
}>;
export default HeadCellResize;
