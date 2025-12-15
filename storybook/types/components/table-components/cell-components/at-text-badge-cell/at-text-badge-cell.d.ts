import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface TextBadgeCellData {
    text: string;
    badgeText: string;
    tooltip?: string;
}
export interface ITextBadgeCellParams extends ICellRendererParams, ITooltipCell {
    text?: (data: any) => string;
    badgeText?: (data: any) => string;
    badgeType?: string;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a text with a badge.
 */
export declare class AtTextBadgeCell implements ICellRendererComp {
    el: HTMLElement;
    textValue: string;
    badgeTextValue: string;
    params: ITextBadgeCellParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    render(): any;
}
