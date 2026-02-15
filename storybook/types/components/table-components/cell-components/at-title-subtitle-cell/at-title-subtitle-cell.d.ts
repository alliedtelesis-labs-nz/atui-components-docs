import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface AtITitleSubtitleData {
    title: string;
    subtitle: string;
    tooltip?: string;
}
export interface AtITitleSubtitleCellParams extends ICellRendererParams, ITooltipCell {
    title?: (data: any) => string;
    subtitle?: (data: any) => string;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a title and subtitle.
 */
export declare class AtTitleSubtitleCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtITitleSubtitleCellParams;
    title: string;
    subtitle: string;
    init(params: AtITitleSubtitleCellParams): void;
    refresh(params: AtITitleSubtitleCellParams): boolean;
    getGui(): HTMLElement;
    private setParams;
    render(): any;
}
