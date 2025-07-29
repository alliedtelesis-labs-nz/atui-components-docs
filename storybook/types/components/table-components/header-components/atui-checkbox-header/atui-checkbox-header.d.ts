import { ICellRendererComp } from 'ag-grid-community';
/**
 * @category Table Cell
 * @description A header component for displaying a checkbox.
 */
export declare class AtuiCheckboxHeaderComponent implements ICellRendererComp {
    params: any;
    disabled: boolean;
    isChecked: boolean;
    el: HTMLAtuiCheckboxHeaderElement;
    init(params: any): void;
    getGui(): HTMLAtuiCheckboxHeaderElement;
    refresh(params: any): boolean;
    setRowsValue(checked: boolean): void;
    private setDisabled;
    render(): any;
}
