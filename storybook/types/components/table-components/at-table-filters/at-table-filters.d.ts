import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A component for filtering table data. Provides a user-friendly interface for filtering data from tables.
 * @internal
 */
export interface FilterEvent {
    id: string;
    value: string;
}
export declare class AtTableFilters {
    /**
     * Column definitions used in your at-table
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
    el: HTMLAtTableFiltersElement;
    /**
     * Emits id of column and filter value on change.
     */
    atChange: EventEmitter<FilterEvent[]>;
    componentWillLoad(): Promise<void>;
    filterChangeHandler(event: CustomEvent, columnId: string): void;
    clearFilters: () => void;
    clearSingleFilter: (columnId: string) => void;
    render(): any;
}
