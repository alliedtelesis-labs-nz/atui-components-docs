import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { GetImageSourceFunction, ITooltipCell } from '../../../../types/table-cells';
export interface ImageCell extends ITooltipCell {
    imageSource?: string;
    getImageSource?: GetImageSourceFunction;
}
interface InitParams extends ImageCell, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying an image.
 */
export declare class AtuiImageCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    imageSource: string;
    getImageSource: GetImageSourceFunction;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    protected updateCell(newValue: any): void;
    render(): any;
}
export {};
