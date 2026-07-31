import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
import type { AtProgressBarType } from '../../../at-progress-bar/at-progress-bar';
export interface AtIProgressBarCellData {
    used: number;
    total: number;
    percentage?: number;
    label?: string;
}
export interface AtIProgressBarCellThresholds {
    /** Percentage at or above which the bar turns warning. */
    warning: number;
    /** Percentage at or above which the bar turns error. */
    error: number;
}
export interface AtIProgressBarCellParams extends ICellRendererParams, ITooltipCell {
    /** Devices/items consuming the capacity. Falls back to `params.value.used`. */
    used?: (data: any) => number;
    /** Total capacity. Falls back to `params.value.total`. */
    total?: (data: any) => number;
    /** Supplies the percentage directly, bypassing the used/total calculation. */
    percentage?: (data: any) => number;
    /** Overrides the trailing label text. Defaults to a rounded percentage. */
    label?: (data: any) => string;
    /** Hides the trailing label, leaving the bar only. */
    hideLabel?: boolean;
    /** Overrides the derived colour of the bar. */
    mapValueToType?: (data: any) => AtProgressBarType;
    /** Percentage breakpoints that colour the bar. Ignored when `mapValueToType` is set. */
    thresholds?: AtIProgressBarCellThresholds;
    /** Height of the bar. */
    size?: 'sm' | 'lg';
}
/**
 * @category Data Tables
 * @description A cell component for displaying capacity usage as a progress bar with a percentage label. Derives its colour from usage thresholds, so a full or over-subscribed row reads as at-risk without the user comparing numbers.
 */
export declare class AtProgressBarCell implements ICellRendererComp {
    el: HTMLElement;
    percentage: number;
    labelValue: string;
    type: AtProgressBarType;
    params: AtIProgressBarCellParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private setCellValues;
    private resolvePercentage;
    private resolveType;
    private toNumber;
    render(): any;
}
