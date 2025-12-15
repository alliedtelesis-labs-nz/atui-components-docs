import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { LabelPosition } from '../../../at-toggle-switch/at-toggle-switch';
import { ITooltipCell } from '../../../../types/table-cells';
export interface ToggleCellData {
    value: boolean;
    label?: string;
    labelPosition?: 'before' | 'after';
    disabled?: boolean;
}
export interface IToggleCellParams extends ICellRendererParams, ITooltipCell {
    toggleValue?: (data: any) => boolean;
    label?: (data: any) => string;
    labelPosition?: (data: any) => LabelPosition;
    onTrigger?: (params: ICellRendererParams) => void;
    disabled?: (data: any) => boolean;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a toggle.
 */
export declare class AtToggleCell implements ICellRendererComp {
    el: HTMLElement;
    params: IToggleCellParams;
    label: string;
    labelPosition: LabelPosition;
    disabled: boolean;
    value: boolean;
    timer: any;
    init(params: ICellRendererParams): void;
    getGui(): HTMLElement;
    refresh(params: ICellRendererParams): boolean;
    toggleHandler(change: CustomEvent): void;
    private updateCell;
    render(): any;
}
