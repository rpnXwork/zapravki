import { DispatchFunc } from '../types';
export declare const HeadCellResizeStateAction = "HeadCellResizeStateAction";
export declare const getMouseMove: (currentWidth: any, minWidth: number, startX: number, dispatch: DispatchFunc) => (event: MouseEvent) => void;
export declare const getValidatedWidth: (newWidth: number, minWidth: number) => number;
export declare const getMinWidth: (style: any) => number;
export declare const headCellDispatchWrapper: (setWidth: any, dispatch: DispatchFunc) => DispatchFunc;
