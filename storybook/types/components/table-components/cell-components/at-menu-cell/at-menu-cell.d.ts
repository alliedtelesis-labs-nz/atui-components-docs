import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface AtIMenuAction {
    title: string;
    onTrigger: (params: ICellRendererParams) => void;
    disabled?: (data: any) => boolean;
    disabledTooltip?: string;
}
export interface AtIMenuCellData {
    text?: string;
    actions: AtIMenuAction[];
}
export interface AtIMenuCellParams extends ICellRendererParams, ITooltipCell {
    icon?: string;
    actions: AtIMenuAction[] | ((params: ICellRendererParams) => AtIMenuAction[]);
}
/**
 * @category Data Tables
 * @description A cell component for displaying a menu.
 */
export declare class AtMenuCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtIMenuCellParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    render(): any;
}
