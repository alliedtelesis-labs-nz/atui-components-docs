import { ICellRendererComp } from 'ag-grid-community';
import type { IconTextCellParams, ITooltipCell } from '../../../../types';
export interface IconConfig {
    iconName: string;
    iconClass?: string;
    tooltip?: string;
}
export interface TextIconCellData {
    text?: string;
    icons: IconConfig[];
}
export interface ITextIconCellParams extends IconTextCellParams, ITooltipCell {
    text?: (data: any) => string;
    iconPosition?: 'before' | 'after';
    icons: () => IconConfig[];
}
type InitParams = ITextIconCellParams;
/**
 * @category Data Tables
 * @description A cell component for displaying a text with icons, Text is optional and multiple icons are supported.
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
