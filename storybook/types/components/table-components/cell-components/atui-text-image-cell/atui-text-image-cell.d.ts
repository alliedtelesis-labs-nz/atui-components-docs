import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface TextImageCellData {
    text: string;
    image: string;
    tooltip?: string;
}
export interface ITextImageCellParams extends ICellRendererParams, ITooltipCell {
    text?: (data: any) => string;
    imageSource: (data: any) => string;
    imageHeight?: number;
    imageWidth?: number;
    imageClass?: string;
    imagePosition?: 'before' | 'after';
}
/**
 * @category Table Cell
 * @description A cell component for displaying a text with an image.
 */
export declare class AtuiTextImageCell implements ICellRendererComp {
    el: HTMLElement;
    private params;
    text: string;
    private imageHeight;
    private imageWidth?;
    private imageClass?;
    private imagePosition;
    init(params: ICellRendererParams): void;
    refresh(params: ICellRendererParams): boolean;
    private updateTextAndImage;
    getGui(): HTMLElement;
    private get imageSource();
    render(): any;
}
