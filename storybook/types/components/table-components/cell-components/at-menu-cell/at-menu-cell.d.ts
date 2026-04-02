import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface MenuAction {
    title: string;
    onTrigger: (params: ICellRendererParams) => void;
    disabled?: (data: any) => boolean;
    disabledTooltip?: string;
}
export interface MenuCellData {
    text?: string;
    actions: MenuAction[];
}
export interface AtuiMenuCellParams extends ICellRendererParams, ITooltipCell {
    icon?: string;
    actions: MenuAction[] | ((params: ICellRendererParams) => MenuAction[]);
}
/**
 * @category Table Cell
 * @description A cell component for displaying a menu.
 */
export declare class AtMenuCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtuiMenuCellParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    render(): any;
}
