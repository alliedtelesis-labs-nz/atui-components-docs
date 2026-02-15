import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface AtITitleSubtitleDateData {
    date: string;
}
export interface AtITitleSubtitleDateCellParams extends ICellRendererParams {
    getTitleSubtitleDateData?: (data: any) => AtITitleSubtitleDateData;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a title and subtitle with a date.
 */
export declare class AtTitleSubtitleDateCell implements ICellRendererComp {
    el: HTMLElement;
    value: Date;
    params: ICellRendererParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    get hourMinuteSecond(): string;
    get yearMonthDay(): string;
    render(): any;
}
