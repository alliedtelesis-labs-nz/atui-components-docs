import { ICellRendererComp } from 'ag-grid-community';
/**
 * @category Table Cell
 * @description A header component for displaying a checkbox.
 */
export declare class AtCheckboxHeaderComponent implements ICellRendererComp {
    params: any;
    disabled: boolean;
    isChecked: boolean;
    el: HTMLAtCheckboxHeaderElement;
    init(params: any): void;
    getGui(): HTMLAtCheckboxHeaderElement;
    refresh(params: any): boolean;
    setRowsValue(checked: boolean): void;
    private setDisabled;
    render(): any;
}
