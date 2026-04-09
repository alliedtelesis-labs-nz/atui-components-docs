import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface AtICheckboxCellData {
    checked: boolean;
    disabled?: boolean;
}
export interface AtICheckboxCellParams extends ICellRendererParams, ITooltipCell {
    checked?: (data: any) => boolean;
    setValue: (value: any) => void;
    getDisabled?: (data: any) => boolean;
}
/**
 * @category Data Tables
 * @description A checkbox cell component for table row selection and boolean data display. Provides accessible selection controls within data tables.
 */
export declare class AtCheckboxCellComponent implements ICellRendererComp {
    el: HTMLElement;
    private params;
    init(params: AtICheckboxCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtICheckboxCellParams): boolean;
    private setValue;
    render(): any;
}
