import { ICellRendererComp } from 'ag-grid-community';
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export declare class AtuiMenuCellComponent implements ICellRendererComp {
    el: any;
    params: any;
    init(params: any): void;
    getGui(): HTMLElement;
    refresh(_: any): boolean;
    render(): any;
}
