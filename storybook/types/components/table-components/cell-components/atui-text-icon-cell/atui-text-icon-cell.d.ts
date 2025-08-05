import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { IconTextCellParams, IIconCell, ITextWithIconCell, ITooltipCell } from '../../../../types/table-cells';
export interface ITextIconCellParams extends IconTextCellParams, ITooltipCell {
    icon_position?: 'before' | 'after';
}
type InitParams = ITextIconCellParams;
/**
 * @category Table Cell
 * @description A cell component for displaying a text with an icon.
 */
export declare class AtuiTextIconCell implements ICellRendererComp {
    el: HTMLElement;
    value: ITextWithIconCell;
    params: InitParams;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    getIconClick(icon: IIconCell): any;
    getTextClick(cell: ITextWithIconCell): any;
    get getIcons(): any;
    render(): any;
}
export {};
