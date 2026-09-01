import { EventEmitter } from '../../../stencil-public-runtime';
import { GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A container component for table actions, including search, export, and column management. Provides a unified interface for managing table interactions and data export.
 *
 * @slot column-manager - Used to place an at-column-manager
 * @slot search - Used to place an at-search
 * @slot filter-bar - Used to place the persistent filter controls that sit beside the search field
 * @slot filters - Used to place an at-table-filters
 * @slot reload-button - Used to place an at-reload-button
 * @slot export-menu - Used to place an at-export-menu
 * @slot leading-actions - Used to place actions immediately left of the column manager
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
     * Every component slotted into this toolbar emits `atChange`, not
     * `atuiChange`:
     *
     * - `at-table-filters`     — `@Event() atChange`
     * - `at-table-export-menu` — `@Event() atChange`
     * - `at-column-manager`    — `@Event({ eventName: 'atChange' })`
     * - `at-search`            — `@Event({ eventName: 'atChange' })`; the class
     *   property is named `atuiChange`, but the event emitted is `atChange`
     *
     * Listening for `atuiChange` meant this switch never ran, so a toolbar
     * composed directly from these parts had inert search, filters and export.
     * The only `atuiChange` that reaches here bubbles out of
     * `at-column-manager`'s inner `at-checkbox-group`, whose `string[]` payload
     * does not match what the `column-manager` branch reads.
     *
     * These event names break the repo's `atui*` convention, which is what made
     * the mismatch easy to miss. Renaming them is a breaking public API change,
     * so this aligns the listener with what is emitted today.
     *
     * The host re-emits `atChange` for the `filters` case. That re-enters this
     * handler with `event.target` as the host, whose `slot` is empty, so no case
     * matches and it terminates.
     *
     * `ag_grid` is optional-chained because the toolbar can be interacted with
     * before a host has handed it a grid.
     */
    changeHandler(event: CustomEvent): void;
    getVisibleColumns(): any[];
    render(): any;
}
