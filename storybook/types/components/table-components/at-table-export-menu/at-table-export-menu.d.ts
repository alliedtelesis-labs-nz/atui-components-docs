import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Data Tables
 * @description Exports table data as CSV or PDF. With both formats offered it opens a menu; with one, its button exports that format directly.
 */
export declare class AtTableExportMenu {
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv?: boolean;
    /**
     * Offers the PDF export option in the export menu. On by default.
     * @deprecated PDF export is being removed. Set it to false and offer CSV export.
     */
    show_pdf?: boolean;
    el: any;
    translations: any;
    componentWillLoad(): Promise<void>;
    /**
     * Emits the chosen format, either 'CSV' or 'PDF'.
     */
    atChange: EventEmitter<string>;
    private renderTrigger;
    render(): any;
}
