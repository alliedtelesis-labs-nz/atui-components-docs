import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import type { ITooltipCell } from '../../../../types';
export interface AtIRadioCellData {
    checked: boolean;
    disabled?: boolean;
}
export interface AtIRadioCellParams extends ICellRendererParams, ITooltipCell {
    checked?: (data: any) => boolean;
    setValue: (value: any) => void;
    getDisabled?: (data: any) => boolean;
    group?: string;
}
/**
 * @category Data Tables
 * @description A radio cell component for single row selection in data tables. Selecting a row reports through the cell renderer params and clears every other row in the column.
 */
export declare class AtRadioCellComponent implements ICellRendererComp {
    el: HTMLElement;
    private params;
    init(params: AtIRadioCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIRadioCellParams): boolean;
    /**
     * Every cell in the column is refreshed, not just this one: a radio that gains the
     * selection takes it from a row that may be rendered anywhere above or below, and
     * only a re-read of `checked` clears it.
     */
    private setValue;
    private columnId;
    private groupName;
    render(): any;
}
