import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { InitTextCellParams, ITooltipCell } from '../../../../types';
import { CSSProperties } from '../../../../types/styles';
export interface TextCellData {
    text: string;
    tooltip?: string;
}
export interface ITextCellParams extends ICellRendererParams, ITooltipCell {
    text?: (data: TextCellData) => string;
    color?: string;
    textStyles?: any | ((params: ICellRendererParams) => any);
    textClass?: string;
    textTransform?: (data: any, value: any) => string;
}
/**
 * @category Table Cell
 * @description A basic text cell component for displaying simple text content in data tables. Provides consistent typography and overflow handling.
 */
export declare class AtuiTextCellComponent implements ICellRendererComp {
    el: HTMLElement;
    containerStyles: CSSProperties;
    textStyles: CSSProperties;
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
