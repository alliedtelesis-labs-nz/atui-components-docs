import { IClickCell, ITooltipCell } from '../../../../types/table-cells';
import { CSSProperties } from '../../../../types/styles';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { BadgeType } from '../../../atui-badge/atui-badge';
export interface ITextStatusCellParams extends ITooltipCell, IClickCell {
    mapValueToText?: (value: any) => string;
    checkShouldShowSimpleText?: (value: any) => boolean;
    textStyles?: CSSProperties;
    containerStyles?: CSSProperties;
    mapValueToBadge?: (value: any) => string | 'default';
    textTransform?: (params: ICellRendererParams, value: string) => string;
    useIconHeaderTooltip?: boolean;
}
export interface TextStatusValueParam {
    status: string;
}
interface InitParams extends ITextStatusCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a text with a status.
 */
export declare class AtuiTextStatusCellComponent implements ICellRendererComp {
    el: any;
    params: InitParams;
    text: string;
    type: BadgeType;
    showSimpleText: boolean;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(_: InitParams): boolean;
    private setCellData;
    private mapValueToBadgeType;
    render(): any;
}
export {};
