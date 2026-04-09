import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { InitTextCellParams, ITooltipCell } from '../../../../types';
import { AtICSSProperties } from '../../../../types/styles';
export interface AtITextCellData {
    text: string;
    tooltip?: string;
}
export interface AtITextCellParams extends ICellRendererParams, ITooltipCell {
    text?: (data: AtITextCellData) => string;
    color?: string;
    textStyles?: any | ((params: ICellRendererParams) => any);
    textClass?: string;
    textTransform?: (data: any, value: any) => string;
}
/**
 * @category Data Tables
 * @description A basic text cell component for displaying simple text content in data tables. Provides consistent typography and overflow handling.
 */
export declare class AtTextCellComponent implements ICellRendererComp {
    el: HTMLElement;
    containerStyles: AtICSSProperties;
    textStyles: AtICSSProperties;
    textClass: string;
    textValue: string;
    params: InitTextCellParams;
    init(params: InitTextCellParams): void;
    getGui(): HTMLElement;
    refresh(params: InitTextCellParams): boolean;
    private getTextValue;
    private transferArrayValueToString;
    render(): any;
}
