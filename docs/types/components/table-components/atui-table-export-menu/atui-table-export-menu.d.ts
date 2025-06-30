import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Data Tables
 * @description A menu component for exporting table data in CSV or PDF formats. Provides a user-friendly interface for exporting data from tables.
 */
export declare class AtuiTableExportMenu {
    el: HTMLAtuiTableExportMenuElement;
    translations: any;
    componentWillLoad(): Promise<void>;
    /**
     * Emits id of the clicked button, either 'CSV' or 'PDF'.
     */
    atuiChange: EventEmitter;
    clickHandler(event: Event): void;
    render(): any;
}
