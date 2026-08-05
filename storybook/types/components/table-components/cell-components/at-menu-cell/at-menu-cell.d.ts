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
    /**
     * Returning `true` tells AG-Grid the cell handled the refresh itself, so the
     * component is reused rather than destroyed and recreated. That matters here
     * because the cell hosts an `at-menu` popover: on recreation the menu panel
     * briefly renders and measures before it is positioned and hidden, which
     * shows up as a flash/artifact in the column (most visible when the actions
     * column is pinned). `params` is `@State`, so reassigning it re-renders the
     * existing cell with the new data.
     */
    refresh(params: ICellRendererParams): boolean;
    render(): any;
}
