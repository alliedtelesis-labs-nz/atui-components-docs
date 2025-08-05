import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { GetImageSourceFunction, ITooltipCell } from '../../../../types/table-cells';
export interface ITextWithImageCell extends ITooltipCell {
    imageSource?: string;
    text?: string;
    imageHeight?: number;
    isImageAtFront?: boolean;
    getImageSource?: GetImageSourceFunction;
    getRouterLink?: (cellInput: any, cellValue: string) => any[];
    isLinkDisabled?: (cellInput: any) => boolean;
}
interface InitParams extends ITextWithImageCell, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a text with an image.
 */
export declare class AtuiTextImageCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    imageSource: string;
    imageHeight: number;
    text: string;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    private updateCell;
    render(): any;
}
export {};
