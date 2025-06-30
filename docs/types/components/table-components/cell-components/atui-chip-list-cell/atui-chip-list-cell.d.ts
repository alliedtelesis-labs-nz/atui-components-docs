import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ColorCell, IClickCell, ITooltipCell } from '../../../../types/table-cells';
export interface IChipCellParams extends ITooltipCell, IClickCell, ColorCell {
}
interface InitParams extends IChipCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a list of chips.
 */
export declare class AtuiChipListCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    protected updateCell(newValue: any): void;
    render(): any;
}
export {};
