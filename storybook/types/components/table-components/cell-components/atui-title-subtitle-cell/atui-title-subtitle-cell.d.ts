import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ITitleSubtitle } from '../../../../types/table-cells';
/**
 * @category Table Cell
 * @description A cell component for displaying a title and subtitle.
 */
export declare class AtuiTitleSubtitleCell implements ICellRendererComp {
    el: any;
    value: ITitleSubtitle;
    params: ICellRendererParams;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    render(): any;
}
