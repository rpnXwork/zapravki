import { DataType } from '../enums';
export declare class FilterOperator {
    compare: (fieldValue: any, conditionValue: any) => boolean;
    defaultForTypes?: DataType[];
    name: string;
}
