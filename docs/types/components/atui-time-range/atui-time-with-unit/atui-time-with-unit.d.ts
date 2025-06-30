import { EventEmitter } from '../../../stencil-public-runtime';
import { TimeExtraOptions, TimeUnit, TimeWithUnit } from '../../../types/time';
import { TimePresets } from '../../../models/atui-time-range.models';
import { DateRange, TimeRangeDisplay } from '../../../types/date';
/**
 * @category Form Controls
 * @description A time with unit component for selecting a time period.
 */
export declare class AtuiTimeWithUnitComponent {
    units: TimeUnit[];
    common_options: TimePresets[];
    min_date: Date;
    min_seconds: number;
    max_seconds: number;
    initial_selected_time: TimeWithUnit | TimeRangeDisplay.ALL;
    custom_error_message: any;
    show_all_time: boolean;
    errorText: string;
    secondaryErrorText: string;
    translations: any;
    dropdownOptions: (TimeUnit | TimeExtraOptions)[];
    timeValue: number;
    watchTimeValue(): void;
    timeUnit: TimeUnit | TimeExtraOptions;
    watchTimeUnit(): void;
    selectedTime: TimeWithUnit | TimeRangeDisplay.ALL;
    startDate: any;
    el: any;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    private initDropdownOptions;
    private initSelectedTime;
    updateSelectedTime(value: number): void;
    validateInput(): void;
    updateSelectedRange(value: TimeWithUnit): void;
    getRelativeDate(): DateRange;
    clearSelection(): void;
    atuiCancel: EventEmitter<null>;
    atuiSubmit: EventEmitter<TimeWithUnit | TimeRangeDisplay.ALL>;
    handleCancel(): void;
    handleSubmit(): void;
    handleSelectChange(event: CustomEvent): void;
    render(): any;
}
