import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface CheckboxCellData {
    checked: boolean;
    disabled?: boolean;
}
export interface ICheckboxCellParams extends ICellRendererParams, ITooltipCell {
    checked?: (data: any) => boolean;
    setValue: (value: any) => void;
    getDisabled?: (data: any) => boolean;
}
/**
 * @category Table Cell
 * @description A checkbox cell component for table row selection and boolean data display. Provides accessible selection controls within data tables.
 */
export declare class AtuiCheckboxCellComponent implements ICellRendererComp {
    el: HTMLElement;
    private params;
    init(params: ICheckboxCellParams): void;
    getGui(): HTMLElement;
    refresh(params: ICheckboxCellParams): boolean;
    private setValue;
    render(): any;
}
