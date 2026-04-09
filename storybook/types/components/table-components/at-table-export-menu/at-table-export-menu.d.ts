import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Data Tables
 * @description A menu component for exporting table data in CSV or PDF formats. Provides a user-friendly interface for exporting data from tables.
 */
export declare class AtTableExportMenu {
    /**
     * If true, hides the CSV export option in the export menu.
     */
    hide_csv?: boolean;
    /**
     * If true, hides the PDF export option in the export menu.
     */
    hide_pdf?: boolean;
    el: any;
    translations: any;
    componentWillLoad(): Promise<void>;
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange: EventEmitter<string>;
    render(): any;
}
