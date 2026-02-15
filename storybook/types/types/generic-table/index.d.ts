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
export interface AtIFieldFilters {
    [key: string]: AtTableFilterContent;
}
export interface AtISearchTableParams {
    sort?: string;
    startRow?: number;
    endRow?: number;
    direction?: SortDirection.ASC | SortDirection.DESC;
    globalFilter?: string;
    fieldFilters?: AtIFieldFilters;
    columns?: string[];
    customDateFilter?: DateRange;
    relativeTime?: AtITimeWithUnit;
}
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
    content: AtIFilter['content'];
}
export interface AtIFilter {
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
