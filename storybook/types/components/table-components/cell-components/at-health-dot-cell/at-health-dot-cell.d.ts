import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { AtHealthDotSize } from '../../../at-health-dot/at-health-dot';
export type AtHealthDotCellStatus = 'good' | 'warn' | 'bad';
export type AtHealthDotCellDisplay = 'dot' | 'bar';
export interface AtIHealthDotCellParams extends ICellRendererParams {
    mapValueToStatus?: (data: any) => AtHealthDotCellStatus;
    display?: AtHealthDotCellDisplay;
    size?: AtHealthDotSize;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a compact health status dot, or with `display: 'bar'` an 8px vertical bar spanning the full cell height at its left edge.
 */
export declare class AtHealthDotCell implements ICellRendererComp {
    el: HTMLElement;
    type: AtHealthDotCellStatus;
    display: AtHealthDotCellDisplay;
    size: AtHealthDotSize;
    init(params: AtIHealthDotCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIHealthDotCellParams): boolean;
    render(): any;
}
