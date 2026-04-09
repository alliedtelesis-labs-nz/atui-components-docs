import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export type AtStatusType = 'disabled' | 'success' | 'warning' | 'error';
export interface AtIColorStatusCellData {
    status: AtStatusType;
}
export interface AtIColorStatusCellParams extends ICellRendererParams<AtIColorStatusCellData> {
    mapValueToStatus: (data: any) => AtStatusType;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a color status indicator based on predefined types
 */
export declare class AtColorStatusCell implements ICellRendererComp {
    el: HTMLElement;
    type: AtStatusType;
    init(params: AtIColorStatusCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIColorStatusCellParams): boolean;
    render(): any;
}
