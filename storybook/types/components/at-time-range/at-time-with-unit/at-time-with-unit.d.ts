import { EventEmitter } from '../../../stencil-public-runtime';
import { TimeExtraOptions, TimeUnit, TimeWithUnit } from '../../../types/time';
import { TimePresets } from '../../../models/at-time-range.models';
import { DateRange, TimeRangeDisplay } from '../../../types/date';
/**
 * @category Form Controls
 * @description A time with unit component for selecting a time period.
 */
export declare class AtTimeWithUnitComponent {
    /**
     * Available time units for selection
     */
    units: TimeUnit[];
    /**
     * Common time preset options to display
     */
    common_options: TimePresets[];
    /**
     * Minimum date constraint for time selection
     */
    min_date: Date;
    /**
     * Minimum number of seconds allowed for time selection
     */
    min_seconds: number;
    /**
     * Maximum number of seconds allowed for time selection
     */
    max_seconds: number;
    /**
     * Initial time selection value
     */
    initial_selected_time: TimeWithUnit | TimeRangeDisplay.ALL;
    /**
     * Custom error message to display when validation fails
     */
    custom_error_message: any;
    /**
     * Whether to show the 'All Time' option
     */
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
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel: EventEmitter<null>;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit: EventEmitter<TimeWithUnit | TimeRangeDisplay.ALL>;
    handleCancel(): void;
    handleSubmit(): void;
    handleSelectChange(event: CustomEvent): void;
    render(): any;
}
