import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { IClickCell } from '../../../../types/table-cells';
import { CSSProperties } from '../../../../types/styles';
export interface IMultiBtnCellParams extends IClickCell {
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
interface InitParams extends IMultiBtnCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying multiple buttons.
 */
export declare class AtuiMultiBtnCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    buttons: IBtnParams[];
    containerStyles: CSSProperties;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    private updateCell;
    handleClick(btn: IBtnParams): any;
    get buttonsToRender(): any;
    render(): any;
}
export {};
