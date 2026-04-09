import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface AtIEditTextCellParams {
    writePermission?: boolean;
    validator?: (value: string) => boolean;
    maxLength?: string;
    onValueChange: (params: ICellRendererParams) => void;
}
interface AtInitParams extends AtIEditTextCellParams, ICellRendererParams {
}
/**
 * @category Data Tables
 * @description A cell component for displaying and editing text.
 */
export declare class AtEditTextCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtInitParams;
    init(params: AtInitParams): void;
    getGui(): HTMLElement;
    refresh(params: AtInitParams): boolean;
    protected updateCell(newValue: any): void;
    render(): any;
}
export {};
