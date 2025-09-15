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
    changeHandler(event: CustomEvent): void;
    getVisibleColumns(): any[];
    render(): any;
}
