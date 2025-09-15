import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A menu component for filtering table data. Provides a user-friendly interface for filtering data from tables.
 */
export declare class AtTableFilterMenu {
    /**
     * Column definitions used in your at-table
     */
    col_defs: ColDef[];
    /**
     * Currently selected filter columns
     */
    selected: string[];
    translations: any;
    el: HTMLAtTableFilterMenuElement;
    /**
     * Emits selected columns when checkbox selection changes
     */
    atChange: EventEmitter<string[]>;
    private get filteredColumns();
    componentWillLoad(): Promise<void>;
    handleSelectedChange(newValue: string[]): void;
    private handleColumnSelect;
    render(): any;
}
