import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface AtIChipCellData {
    chips: string[];
}
export interface AtIChipCellParams extends ICellRendererParams {
    chips: (data: any) => string[];
}
/**
 * @category Data Tables
 * @description A cell component for displaying a list of chips.
 */
export declare class AtChipListCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtIChipCellParams;
    chips: string[];
    init(params: AtIChipCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIChipCellParams): boolean;
    render(): any;
}
