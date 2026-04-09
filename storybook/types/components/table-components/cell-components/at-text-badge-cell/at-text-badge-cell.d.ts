import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface AtITextBadgeCellData {
    text: string;
    badgeText: string;
    tooltip?: string;
}
export interface AtITextBadgeCellParams extends ICellRendererParams, ITooltipCell {
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
    params: AtITextBadgeCellParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    render(): any;
}
