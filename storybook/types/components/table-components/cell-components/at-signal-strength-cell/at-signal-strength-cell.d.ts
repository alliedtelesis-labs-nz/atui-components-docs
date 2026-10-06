import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { AtSignalStrengthSize, AtSignalStrengthVariant } from '../../../at-signal-strength/at-signal-strength';
export interface AtISignalStrengthCellParams extends ICellRendererParams {
    mapValueToRssi?: (data: any) => number | null | undefined;
    thresholds?: number[];
    variant?: AtSignalStrengthVariant;
    size?: AtSignalStrengthSize;
    show_value?: boolean;
}
/**
 * @category Data Tables
 * @description A cell component that renders an RSSI value in dBm as signal-strength bars, followed by the dBm value by default.
 */
export declare class AtSignalStrengthCell implements ICellRendererComp {
    el: HTMLElement;
    rssi?: number;
    params?: AtISignalStrengthCellParams;
    init(params: AtISignalStrengthCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtISignalStrengthCellParams): boolean;
    render(): any;
}
