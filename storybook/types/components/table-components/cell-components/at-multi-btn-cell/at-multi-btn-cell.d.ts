import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { IClickCell } from '../../../../types';
import { AtICSSProperties } from '../../../../types/styles';
export interface AtMultiBtnCellData {
    buttons: AtIBtnParams[];
}
export interface AtIMultiBtnCellParams extends ICellRendererParams, IClickCell {
    containerStyles?: AtICSSProperties;
    buttons?: AtIBtnParams[] | ((params: ICellRendererParams) => AtIBtnParams[]);
}
export interface AtIBtnParams {
    value: string;
    containerStyles?: AtICSSProperties;
    click?: (params: ICellRendererParams) => any;
    disabled: boolean;
    tooltip?: string;
    hidden?: boolean;
    dataNameValue?: string;
}
type InitParams = AtIMultiBtnCellParams;
/**
 * @category Data Tables
 * @description A cell component for displaying multiple buttons.
 */
export declare class AtMultiBtnCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    buttons: AtIBtnParams[];
    containerStyles: AtICSSProperties;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    handleClick(btn: AtIBtnParams): any;
    get buttonsToRender(): any;
    render(): any;
}
export {};
