import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface MenuAction {
    title: string;
    onTrigger: (params: ICellRendererParams) => void;
    getDisabled?: (data: any) => boolean;
    disabledTooltip?: string;
}
export interface AtuiMenuCellParams extends ICellRendererParams {
    icon?: string;
    actions: MenuAction[] | ((params: ICellRendererParams) => MenuAction[]);
}
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export declare class AtuiMenuCellComponent implements ICellRendererComp {
    el: any;
    params: AtuiMenuCellParams;
    init(params: AtuiMenuCellParams): void;
    getGui(): HTMLElement;
    refresh(_: any): boolean;
    render(): any;
}
