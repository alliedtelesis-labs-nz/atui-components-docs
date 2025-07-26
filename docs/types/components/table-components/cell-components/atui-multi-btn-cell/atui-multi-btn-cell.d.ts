import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { IClickCell } from '../../../../types';
import { CSSProperties } from '../../../../types/styles';
export interface MultiBtnCellData {
    buttons: IBtnParams[];
}
export interface IMultiBtnCellParams extends ICellRendererParams, IClickCell {
    containerStyles?: CSSProperties;
    buttons?: IBtnParams[] | ((params: ICellRendererParams) => IBtnParams[]);
}
export interface IBtnParams {
    value: string;
    containerStyles?: CSSProperties;
    click?: (params: ICellRendererParams) => any;
    disabled: boolean;
    tooltip?: string;
    hidden?: boolean;
    dataNameValue?: string;
}
type InitParams = IMultiBtnCellParams;
/**
 * @category Table Cell
 * @description A cell component for displaying multiple buttons.
 */
export declare class AtuiMultiBtnCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    buttons: IBtnParams[];
    containerStyles: CSSProperties;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    handleClick(btn: IBtnParams): any;
    get buttonsToRender(): any;
    render(): any;
}
export {};
