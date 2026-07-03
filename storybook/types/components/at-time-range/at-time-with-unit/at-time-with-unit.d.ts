import { EventEmitter } from '../../../stencil-public-runtime';
import { TimeExtraOptions, AtTimeUnit, AtITimeWithUnit } from '../../../types/time';
import { AtTimePresets } from '../../../models/at-time-range.models';
import { TimeRangeDisplay } from '../../../types/date';
/**
 * @category Form Controls
 * @description A time with unit component for selecting a time period.
 */
export declare class AtTimeWithUnitComponent {
    /**
     * Available time units for selection
     */
    units: AtTimeUnit[];
    /**
     * Common time preset options to display
     */
    common_options: AtTimePresets[];
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
    initial_selected_time: AtITimeWithUnit | TimeRangeDisplay.ALL;
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
    dropdownOptions: (AtTimeUnit | TimeExtraOptions)[];
    timeValue: number;
    watchTimeValue(): void;
    timeUnit: AtTimeUnit | TimeExtraOptions;
    watchAtTimeUnit(): void;
    selectedTime: AtITimeWithUnit | TimeRangeDisplay.ALL;
    startDate: any;
    disabledTimeValue: boolean;
    el: any;
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel: EventEmitter<null>;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit: EventEmitter<AtITimeWithUnit | TimeRangeDisplay.ALL>;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    private initDropdownOptions;
    private getVisibleUnitsWithinRangeLimit;
    private initSelectedTime;
    updateSelectedTime(): void;
    private formatDuration;
    private validateInput;
    private updateSelectedRange;
    private isSelectedOption;
    private getRelativeDate;
    private getVisibleCommonOptionsWithinRangeLimit;
    clearSelection(): void;
    handleCancel(): void;
    handleSubmit(): void;
    handleSelectChange(event: CustomEvent): void;
    render(): any;
}
