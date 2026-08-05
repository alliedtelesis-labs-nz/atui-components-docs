import { ICellRendererComp } from 'ag-grid-community';
import type { IconTextCellParams, ITooltipCell } from '../../../../types';
export interface AtIconConfig {
    /**
     * Name of an icon in the global icon registry (`ATUI_ICONS`, or one registered
     * by the consuming app). Rendered through `at-icon` as an SVG.
     */
    iconName: string;
    /**
     * Classes applied to the `at-icon` host. Colour an icon with `fill-*` — an SVG
     * takes no colour from `text-*`.
     */
    iconClass?: string;
    tooltip?: string;
}
export interface AtITextIconCellData {
    text?: string;
    icons: AtIconConfig[];
}
export interface AtITextIconCellParams extends IconTextCellParams, ITooltipCell {
    text?: (data: any) => string;
    iconPosition?: 'before' | 'after';
    /**
     * Icons for the row. Receives the row's data so a cell can show an icon only
     * when that row warrants one; ignore the argument for a constant set.
     */
    icons: (data?: any) => AtIconConfig[];
}
type InitParams = AtITextIconCellParams;
/**
 * @category Data Tables
 * @description A cell component for displaying a text with icons. Text is optional and multiple icons are supported. Icons are resolved from the global icon registry via `at-icon`, and the `icons` accessor receives the row's data so a cell can show an icon only when that row warrants one.
 */
export declare class AtTextIconCell implements ICellRendererComp {
    el: HTMLElement;
    text: string;
    private params;
    private update;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    private renderIcons;
    render(): any;
}
export {};
