import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface ChipCellData {
    chips: string[];
}
export interface IChipCellParams extends ICellRendererParams {
    chips: (data: any) => string[];
}
/**
 * @category Data Tables
 * @description A cell component for displaying a list of chips.
 */
export declare class AtChipListCell implements ICellRendererComp {
    el: HTMLElement;
    params: IChipCellParams;
    chips: string[];
    init(params: IChipCellParams): void;
    getGui(): HTMLElement;
    refresh(params: IChipCellParams): boolean;
    render(): any;
}
