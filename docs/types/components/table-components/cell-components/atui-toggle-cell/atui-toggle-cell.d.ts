import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface IToggleCellParams {
    getLabel: (params: ICellRendererParams) => string;
    onTrigger: (params: ICellRendererParams) => void;
    getDisabled?: (data: any) => boolean;
}
interface InitParams extends IToggleCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying a toggle.
 */
export declare class AtuiToggleCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    timer: any;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    toggleHandler(change: CustomEvent): void;
    private updateCell;
    render(): any;
}
export {};
