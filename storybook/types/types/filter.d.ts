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
/** Payload of `at-search-table`'s `atExternalFiltersChange`. */
export interface AtIExternalFiltersChange {
    /** The conditions the user removed from `search_filters`. */
    removed: AtIFilter[];
    /** `search_filters` without them, ready to assign straight back. */
    filters: AtIFilterGroup;
}
export type AtFilterOperator = 'is' | 'is not' | 'contains';
export type AtFilterLogicalOperator = 'And' | 'Or';
export type ActiveSearchFilter = {
    operator: AtFilterOperator;
    value: string;
};
