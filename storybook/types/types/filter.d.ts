import { AtISelectOption } from './select';
export interface AtIFilter {
    id: string;
    value: string;
    label?: string;
    filter_options?: AtISelectOption[];
    operator?: AtFilterOperator;
}
export interface AtIFilterGroup {
    id: string;
    logical_operator: AtFilterLogicalOperator;
    children: Array<AtIFilter | AtIFilterGroup>;
}
export type AtFilterOperator = 'is' | 'is not' | 'contains';
export type AtFilterLogicalOperator = 'And' | 'Or';
export type ActiveSearchFilter = {
    operator: AtFilterOperator;
    value: string;
};
