import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface IEditTextCellParams {
    writePermission?: boolean;
    validator?: (value: string) => boolean;
    maxLength?: string;
    onValueChange: (params: ICellRendererParams) => void;
}
interface InitParams extends IEditTextCellParams, ICellRendererParams {
}
/**
 * @category Table Cell
 * @description A cell component for displaying and editing text.
 */
export declare class AtEditTextCell implements ICellRendererComp {
    el: HTMLElement;
    params: InitParams;
    init(params: InitParams): void;
    getGui(): HTMLElement;
    refresh(params: InitParams): boolean;
    protected updateCell(newValue: any): void;
    render(): any;
}
export {};
