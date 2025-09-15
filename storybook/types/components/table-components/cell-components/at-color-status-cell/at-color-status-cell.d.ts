import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export type StatusType = 'disabled' | 'success' | 'warning' | 'error';
export interface ColorStatusCellData {
    status: StatusType;
}
export interface ColorStatusCellParams extends ICellRendererParams<ColorStatusCellData> {
    mapValueToStatus: (data: any) => StatusType;
}
/**
 * @category Table Cell
 * @description A cell component for displaying a color status indicator based on predefined types
 */
export declare class AtColorStatusCell implements ICellRendererComp {
    el: HTMLElement;
    type: StatusType;
    init(params: ColorStatusCellParams): void;
    getGui(): HTMLElement;
    refresh(params: ColorStatusCellParams): boolean;
    render(): any;
}
