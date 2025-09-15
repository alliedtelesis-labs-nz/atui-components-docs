import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
import { BadgeType } from '../../../at-badge/at-badge';
export interface TextStatusCellData {
    value: 'active' | 'warning' | 'error' | 'default' | string;
    tooltip?: string;
}
export interface ITextStatusCellParams extends ITooltipCell {
    mapValueToText?: (value: any) => string;
    mapValueToStatus?: (value: any) => string | 'default';
    showSimpleText?: boolean;
    checkShouldShowSimpleText?: (value: any) => boolean;
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
export declare class AtTextStatusCellComponent implements ICellRendererComp {
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
