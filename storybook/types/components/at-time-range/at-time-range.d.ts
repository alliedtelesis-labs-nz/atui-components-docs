import { EventEmitter } from '../../stencil-public-runtime';
import { AtSelectedTimeRangeExtended, TimePresets } from '../../models/at-time-range.models';
import { AtIDateRange, AtIDateRangeStrings, TimeRangeDisplay, TimeUnit, AtITimeWithUnit } from '../../types';
/**
 * @category Form Controls
 * @description A time range component for selecting time periods.
 */
export declare class AtTimeRangeComponent {
    /**
     * Selected time range.
     */
    selected_time_range: AtSelectedTimeRangeExtended;
    /**
     * Lower limit of the time range.
     */
    range_limit: number;
    /**
     * Define the presets for the relative time ranges.
     */
    presets: TimePresets[];
    /**
     * Enable relative time selection.
     */
    enable_relative_time: boolean;
    /**
     * Custom error message to show when an invalid time is inputted.
     */
    custom_error_message: any;
    /**
     * Enable all time selection.
     */
    show_all_time: boolean;
    /**
     * Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring
     * the value of range limit.
     */
    enable_range_limit: boolean;
    today: Date;
    lowerLimit: any;
    defaultFromDate: any;
    translations: any;
    relativeTimeMenuEl: any;
    absoluteTimeMenuEl: any;
    el: any;
    units: TimeUnit[];
    minSeconds: number;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    getLongUnitDisplay(time: AtSelectedTimeRangeExtended): string;
    getRelativeDate(time: AtSelectedTimeRangeExtended): AtIDateRange;
    getCustomStartAndEndDate(selectedTime: AtSelectedTimeRangeExtended): {
        fromDate: Date;
        toDate: Date;
    };
    getShortUnitDisplay(time: AtITimeWithUnit): string;
    /**
     * Emits an event containing the selected time range when it changes
     */
    atuiChange: EventEmitter<AtSelectedTimeRangeExtended>;
    onChangeCustomTime(customTime: AtIDateRangeStrings): void;
    onChangeRelativeTime(time: AtITimeWithUnit | TimeRangeDisplay.ALL): void;
    get buttonGroupOptions(): any[];
    get predefinedTimeRanges(): any[];
    render(): any;
}
