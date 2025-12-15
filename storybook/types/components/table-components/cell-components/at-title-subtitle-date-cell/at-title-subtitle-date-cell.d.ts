import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface TitleSubtitleDateData {
    date: string;
}
export interface ITitleSubtitleDateCellParams extends ICellRendererParams {
    getTitleSubtitleDateData?: (data: any) => TitleSubtitleDateData;
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
