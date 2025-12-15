import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface TitleSubtitleData {
    title: string;
    subtitle: string;
    tooltip?: string;
}
export interface ITitleSubtitleCellParams extends ICellRendererParams, ITooltipCell {
    title?: (data: any) => string;
    subtitle?: (data: any) => string;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a title and subtitle.
 */
export declare class AtTitleSubtitleCell implements ICellRendererComp {
    el: HTMLElement;
    params: ITitleSubtitleCellParams;
    title: string;
    subtitle: string;
    init(params: ITitleSubtitleCellParams): void;
    refresh(params: ITitleSubtitleCellParams): boolean;
    getGui(): HTMLElement;
    private setParams;
    render(): any;
}
