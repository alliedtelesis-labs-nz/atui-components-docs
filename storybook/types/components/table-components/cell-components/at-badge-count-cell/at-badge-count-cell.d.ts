import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { AtBadgeContrast, AtBadgeType } from '../../../at-badge/at-badge';
export interface AtIBadgeCountSegment {
    count: number;
    type?: AtBadgeType;
    /** Accessible name for the segment, read as "{count} {label}". A bare number says nothing on its own. */
    label?: string;
}
export interface AtIBadgeCountCellParams extends ICellRendererParams {
    segments?: (data: any) => AtIBadgeCountSegment[];
    impact?: AtBadgeContrast;
    show_zero_counts?: boolean;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a distribution as a row of counted badges - how a population splits across states, such as devices by health. Segments keep the order they are given so a state sits in the same place in every row, and zero counts are dropped unless asked for.
 * @dependency at-badge
 */
export declare class AtBadgeCountCell implements ICellRendererComp {
    el: HTMLElement;
    segments: AtIBadgeCountSegment[];
    params: AtIBadgeCountCellParams;
    init(params: AtIBadgeCountCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIBadgeCountCellParams): boolean;
    render(): any;
}
