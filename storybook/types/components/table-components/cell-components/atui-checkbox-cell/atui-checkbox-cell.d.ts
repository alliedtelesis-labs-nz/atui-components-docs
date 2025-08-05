import { ICellRendererComp } from 'ag-grid-community';
/**
 * @category Table Cell
 * @description A checkbox cell component for table row selection and boolean data display. Provides accessible selection controls within data tables.
 */
export declare class AtuiCheckboxCellComponent implements ICellRendererComp {
    el: any;
    params: any;
    init(params: any): void;
    getGui(): HTMLAtuiCheckboxCellElement;
    refresh(params: any): boolean;
    setValue(checked: boolean): void;
    render(): any;
}
