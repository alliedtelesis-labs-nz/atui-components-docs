import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { IClickCell, ITooltipCell } from '../../../../types/table-cells';
import { CSSProperties } from '../../../../types/styles';
export interface ColorStatusCellParams extends ITooltipCell, IClickCell {
    color: string;
    dataPresent: boolean;
    containerStyles: CSSProperties;
}
interface InitParams extends ColorStatusCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a color status.
 */
export declare class AtuiColorStatusCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    containerStyles: CSSProperties;
    dataPresent: boolean;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    protected updateCell(newValue: any): void;
    render(): any;
}
export {};
