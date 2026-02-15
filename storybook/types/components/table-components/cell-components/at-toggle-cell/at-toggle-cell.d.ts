import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { AtLabelPosition } from '../../../at-toggle-switch/at-toggle-switch';
import { ITooltipCell } from '../../../../types/table-cells';
export interface AtIToggleCellData {
    value: boolean;
    label?: string;
    labelPosition?: 'before' | 'after';
    disabled?: boolean;
}
export interface AtIToggleCellParams extends ICellRendererParams, ITooltipCell {
    toggleValue?: (data: any) => boolean;
    label?: (data: any) => string;
    labelPosition?: (data: any) => AtLabelPosition;
    onTrigger?: (params: ICellRendererParams) => void;
    disabled?: (data: any) => boolean;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a toggle.
 */
export declare class AtToggleCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtIToggleCellParams;
    label: string;
    labelPosition: AtLabelPosition;
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
