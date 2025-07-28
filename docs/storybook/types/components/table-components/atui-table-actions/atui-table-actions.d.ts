import { EventEmitter } from '../../../stencil-public-runtime';
import { GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an atui-column-manager
 * @slot search - Used to place an atui-search
 * @slot dropdown-filters - Used to place an atui-table-filters
 * @slot export-menu - Used to place an atui-export-menu
 * @slot actions - Used to place actions related to table content

*/
export declare class AtuiTableActionsComponent {
    /**
     * AG Grid Api (provided by atui-table createGrid method)
     */
    ag_grid: GridApi;
    /**
     * Emits an event when 'Export CSV' is pressed on provided atui-table-export-menu
     */
    atuiExportCsv: EventEmitter;
    /**
     * Emits an event when 'Export PDF' is pressed on provided atui-table-export-menu
     */
    atuiExportPdf: EventEmitter;
    /**
     * Emits an event when filters change
     */
    atuiChange: EventEmitter<any>;
    changeHandler(event: CustomEvent): void;
    getVisibleColumns(): any[];
    render(): any;
}
