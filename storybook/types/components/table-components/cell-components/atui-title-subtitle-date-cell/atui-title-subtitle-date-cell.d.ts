import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
/**
 * @category Table Cell
 * @description A cell component for displaying a title and subtitle with a date.
 */
export declare class AtuiTitleSubtitleDateCell implements ICellRendererComp {
    el: any;
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
