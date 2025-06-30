import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A component for filtering table data. Provides a user-friendly interface for filtering data from tables.
 * @internal
 */
export declare class AtuiTableFilters {
    /**
     * Column definitions used in your atui-table
     */
    col_defs: ColDef[];
    /**
     * Currently selected columns and filter values
     */
    selected: {
        id: string;
        value: string;
    }[];
    translations: any;
    el: HTMLAtuiTableFiltersElement;
    /**
     * Emits id of column to filter and value to filter by filter on change.
     */
    atuiChange: EventEmitter;
    componentWillLoad(): Promise<void>;
    filterChangeHandler(event: CustomEvent, columnId: string): void;
    clearFilters: () => void;
    clearSingleFilter: (columnId: string) => void;
    render(): any;
}
