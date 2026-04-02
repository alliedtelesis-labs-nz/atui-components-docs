import { SortDirection } from '../sort';
import { TimeWithUnit } from '../time';
import { ColumnState } from 'ag-grid-community';
interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface ISearchData<T> {
    items: T[];
    total: number;
}
export type TableFilterContent = string | string[] | number | {
    [key: string]: any;
};
export interface IFieldFilters {
    [key: string]: TableFilterContent;
}
export interface ISearchTableParams {
    sort?: string;
    startRow?: number;
    endRow?: number;
    direction?: SortDirection.ASC | SortDirection.DESC;
    globalFilter?: string;
    fieldFilters?: IFieldFilters;
    columns?: string[];
    customDateFilter?: DateRange;
    relativeTime?: TimeWithUnit;
}
export interface IPaging {
    num?: number;
    page?: number;
}
export interface IMultiSelectFieldFilters {
    [key: string]: TableFilterContent[];
}
export interface ISortParams {
    type?: string;
    direction?: SortDirection;
}
export interface IPaginationParams {
    start?: number;
    end?: number;
}
export interface AgGridSortModel {
    colId: string;
    sort: 'asc' | 'desc';
}
export interface DropdownKey {
    translationKey: string;
    content: IFilter['content'];
}
export interface IFilter {
    columnName: string;
    columnField: string;
    content: TableFilterContent;
    isVisible: boolean;
    dropdownKeys?: DropdownKey[];
    type?: 'number';
}
export interface TablePaginationValues {
    page: string;
    more: string;
    to: string;
    of: string;
}
export declare const paginationText: TablePaginationValues;
export interface ITableState {
    stateDict: ITableDict;
}
export interface ITableDict {
    [tableType: string]: ITableData;
}
export interface ITableData extends ITableUserSettings {
    searchData: ISearchData<any>;
}
export interface ITableUserSettings {
    searchParams: ISearchTableParams;
    columnState: ColumnState[];
}
export type TableId = string;
export interface ColumnDetails {
    actualWidth?: number;
    field: string;
    displayName: string;
}
export {};
