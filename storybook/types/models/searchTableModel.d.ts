import { ColDef, Column, GridOptions } from 'ag-grid-community';
import { AtIDropdownKey } from '../types/generic-table';
import type { AtPlaceholderType } from '../components/at-placeholder/at-placeholder';
export interface AtITableColumnDef extends ColDef {
    /**
     * Keeps this column out of the keyword search. Client-side only: under
     * `server_side_mode` the search term goes to the server, which decides for
     * itself which columns it matches.
     */
    excludeFromGlobalSearch?: boolean;
    filterOptions?: {
        exclude?: boolean;
        dropdownKeys?: AtIDropdownKey[];
        character?: string;
    };
    sortable?: boolean;
}
export interface AtITableEmptyState {
    type: AtPlaceholderType;
    title?: string;
}
export declare const defaultGridOptions: GridOptions;
export interface ICellInfo {
    rowIndex: number;
    columnKey: Column | string;
}
export interface TableCSVData {
    [key: string]: string;
}
export interface TableCSV {
    data: TableCSVData[];
    headers: string[];
}
