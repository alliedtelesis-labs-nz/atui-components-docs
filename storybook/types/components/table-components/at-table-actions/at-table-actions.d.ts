import { EventEmitter } from '../../../stencil-public-runtime';
import { GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an at-column-manager
 * @slot search - Used to place an at-search
 * @slot dropdown-filters - Used to place an at-table-filters
 * @slot export-menu - Used to place an at-export-menu
 * @slot actions - Used to place actions related to table content

*/
export declare class AtTableActionsComponent {
    /**
     * AG Grid Api (provided by at-table createGrid method)
     */
    ag_grid: GridApi;
    /**
     * Emits an event when 'Export CSV' is pressed on provided at-table-export-menu
     */
    atExportCsv: EventEmitter;
    /**
     * Emits an event when 'Export PDF' is pressed on provided at-table-export-menu
     */
    atExportPdf: EventEmitter;
    /**
     * Emits an event when filters change
     */
    atChange: EventEmitter<any>;
    /**
     * Column visibility arrives on `atChange`, not `atuiChange`.
     *
     * `at-column-manager` emits its `{ id, checked }` payload as `atChange`. The
     * `atuiChange` that bubbles out of it belongs to the inner
     * `at-checkbox-group` and carries a `string[]` of still-checked columns, so
     * reading `.id` / `.checked` off it yielded `undefined` and the call below
     * was `setColumnsVisible([undefined], undefined)` — meaning no column was
     * ever actually hidden.
     */
    columnVisibilityHandler(event: CustomEvent): void;
    changeHandler(event: CustomEvent): void;
    getVisibleColumns(): any[];
    render(): any;
}
