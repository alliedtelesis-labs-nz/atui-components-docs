import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface IMenuAction {
    title: string;
    onTrigger?: (params: any) => void;
    getDisabled?: (data: any) => boolean;
    disabledTooltip?: string;
}
export interface IMenuCellParams {
    icon?: string;
    actions: (IMenuAction | string)[];
}
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export declare class AtuiMenuCellComponent implements ICellRendererComp {
    el: any;
    params: ICellRendererParams & IMenuCellParams;
    init(params: ICellRendererParams & IMenuCellParams): void;
    getGui(): HTMLElement;
    refresh(_: any): boolean;
    render(): any;
}
