import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { InitTextCellParams, ITooltipCell } from '../../../../types/table-cells';
import { BadgeType } from '../../../atui-badge/atui-badge';
export interface ITextWithBadgeCellParams extends ITooltipCell {
    badgeText: (params: ICellRendererParams) => string;
    badgeType?: BadgeType;
    badgeTooltipClass?: string;
    generateBadgeTooltip?: (params: ICellRendererParams) => HTMLElement | string;
}
interface InitParams extends ITextWithBadgeCellParams, InitTextCellParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a text with a badge.
 */
export declare class AtuiTextBadgeCell implements ICellRendererComp {
    el: HTMLElement;
    textValue: string;
    badgeTextValue: string;
    params: InitParams;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    render(): any;
}
export {};
