import { ICellRendererComp } from 'ag-grid-community';
import { IIconCell, IIconCellParams } from '../../../../types/table-cells';
interface InitParams extends IIconCellParams {
    generateTooltip?: (params: string) => HTMLElement | string;
}
/**
 * @category Table Cell
 * @description A cell component for displaying an icon.
 */
export declare class AtuiIconCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    icons: IIconCell[];
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    protected updateCell(newValue: any): void;
    get getIcons(): any;
    render(): any;
}
export {};
