import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export type AtHealthDotCellStatus = 'good' | 'warn' | 'bad';
export interface AtIHealthDotCellParams extends ICellRendererParams {
    mapValueToStatus?: (data: any) => AtHealthDotCellStatus;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a compact health status dot.
 */
export declare class AtHealthDotCell implements ICellRendererComp {
    el: HTMLElement;
    type: AtHealthDotCellStatus;
    init(params: AtIHealthDotCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIHealthDotCellParams): boolean;
    render(): any;
}
