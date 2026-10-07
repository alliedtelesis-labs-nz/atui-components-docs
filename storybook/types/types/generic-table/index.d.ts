import { AtIFilterGroup } from '../filter';
import { SortDirection } from '../sort';
import { AtITimeWithUnit } from '../time';
import { ColumnState } from 'ag-grid-community';
interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface AtISearchData<T> {
    items: T[];
    total: number;
}
export type AtTableFilterContent = string | string[] | number | {
    [key: string]: any;
};
/** @deprecated Only the deprecated `AtISearchTableParams.fieldFilters` uses it. */
export interface AtIFieldFilters {
    [key: string]: AtTableFilterContent;
}
export interface AtISearchTableParams {
    sort?: string;
    startRow?: number;
    endRow?: number;
    direction?: SortDirection.ASC | SortDirection.DESC;
    globalFilter?: string;
    /**
     * @deprecated Use `column_filters`, and join it with your own `search_filters`. This
     * flat map keeps one value per column and drops operators and And/Or grouping, so a
     * query built from it can return the wrong rows. It will be removed in the next minor
     * release.
     */
    fieldFilters?: AtIFieldFilters;
    /**
     * The conditions built in the column filter menu, with their And/Or grouping. The
     * host's own `search_filters` are not included: the host holds them already and
     * joins the two with And when it builds a query. Absent when no column filter is set.
     */
    column_filters?: AtIFilterGroup;
    columns?: string[];
    customDateFilter?: DateRange;
    relativeTime?: AtITimeWithUnit;
}
export type AtSelectionScope = 'none' | 'explicit' | 'all-matching';
/**
 * How many rows can be selected at once. `single` is the picker shape: a radio column,
 * no select-all header, and no way to unpick other than picking elsewhere.
 */
export type AtSelectionMode = 'multiple' | 'single';
/**
 * What the user has selected. Two scopes, because they are two different things: a set
 * of rows the user picked, or every row matching the current query - which server-side
 * is a set the browser has never held and cannot enumerate.
 */
export interface AtISelection<T = any> {
    scope: AtSelectionScope;
    /** The picked rows' ids. Empty when scope is 'all-matching'. */
    ids: string[];
    /** Rows unticked after expanding to the whole result. Empty otherwise. */
    excluded_ids: string[];
    /** The picked rows, limited to those the grid currently holds. */
    rows: T[];
    /** How many rows an action would affect. */
    count: number;
    /** Rows matching the query, as the host last reported it in `table_data.total`. */
    total_matching: number;
    /** True while `count` is derived from `total_matching` rather than counted ids. */
    count_is_estimate: boolean;
    /**
     * The query the selection is relative to, for acting on 'all-matching' server-side.
     * Paging is deliberately absent: this describes the whole matching set, and sending
     * a paged query to a bulk endpoint would act on one page of it.
     */
    query?: AtISelectionQuery;
}
export type AtISelectionQuery = Omit<AtISearchTableParams, 'startRow' | 'endRow'>;
export interface AtIPaging {
    num?: number;
    page?: number;
}
export interface AtIMultiSelectFieldFilters {
    [key: string]: AtTableFilterContent[];
}
export interface AtISortParams {
    type?: string;
    direction?: SortDirection;
}
export interface AtIPaginationParams {
    start?: number;
    end?: number;
}
export interface AgGridSortModel {
    colId: string;
    sort: 'asc' | 'desc';
}
export interface AtIDropdownKey {
    translationKey: string;
    content: AtITableFilter['content'];
}
export interface AtITableFilter {
    columnName: string;
    columnField: string;
    content: AtTableFilterContent;
    isVisible: boolean;
    dropdownKeys?: AtIDropdownKey[];
    type?: 'number';
}
export interface AtTablePaginationValues {
    page: string;
    more: string;
    to: string;
    of: string;
}
export declare const paginationText: AtTablePaginationValues;
export interface AtITableState {
    stateDict: AtITableDict;
}
export interface AtITableDict {
    [tableType: string]: AtITableData;
}
export interface AtITableData extends AtITableUserSettings {
    searchData: AtISearchData<any>;
}
export interface AtITableUserSettings {
    searchParams: AtISearchTableParams;
    columnState: ColumnState[];
}
export type AtTableId = string;
export interface AtIColumnDetails {
    actualWidth?: number;
    field: string;
    displayName: string;
}
export {};
