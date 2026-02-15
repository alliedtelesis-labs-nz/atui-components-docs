import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
import { AtBadgeType } from '../../../at-badge/at-badge';
export interface AtITextStatusCellData {
    value: 'active' | 'warning' | 'error' | 'default' | string;
    tooltip?: string;
}
export interface AtITextStatusCellParams extends ITooltipCell {
    mapValueToText?: (value: any) => string;
    mapValueToStatus?: (value: any) => string | 'default';
    showSimpleText?: boolean;
    checkShouldShowSimpleText?: (value: any) => boolean;
    textTransform?: (params: ICellRendererParams, value: string) => string;
    useIconHeaderTooltip?: boolean;
}
export interface AtITextStatusValueParam {
    status: string;
}
interface AtInitParams extends AtITextStatusCellParams, ICellRendererParams {
}
/**
 * @category Data Tables
 * @description A cell component for displaying a text with a status.
 */
export declare class AtTextStatusCellComponent implements ICellRendererComp {
    el: any;
    params: AtInitParams;
    text: string;
    type: AtBadgeType;
    showSimpleText: boolean;
    init(params: AtInitParams): void;
    getGui(): HTMLElement;
    refresh(_: AtInitParams): boolean;
    private setCellData;
    private mapValueToBadgeType;
    render(): any;
}
export {};
