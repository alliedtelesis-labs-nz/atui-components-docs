import { ColDef, Column, GridOptions } from 'ag-grid-community';
import { DropdownKey } from '../types/generic-table';
export interface ITableColumnDef extends ColDef {
    excludeFromGlobalSearch?: boolean;
    filterOptions?: {
        exclude?: boolean;
        dropdownKeys?: DropdownKey[];
        character?: string;
    };
    sortable?: boolean;
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
