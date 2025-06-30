import { DateRange, DateRangeStrings, TimeRangeDisplay } from './date';
export interface TimeWithUnit {
    unit: TimeUnit;
    value: number;
}
export declare enum TimeUnit {
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS",
    WEEKS = "WEEKS",
    MONTHS = "MONTHS",
    YEARS = "YEARS"
}
export declare enum TimeExtraOptions {
    ALL = "ALL"
}
export declare enum Duration {
    SECONDS = "seconds",
    MINUTES = "minutes",
    HOURS = "hours",
    DAYS = "days",
    WEEKS = "weeks",
    MONTHS = "months",
    YEARS = "years"
}
export interface ITimeRange {
    timeRange: ISelectedTimeRange;
}
export interface ISelectedTimeRange {
    selected: TimeRangeDisplay;
    custom?: DateRangeStrings;
}
export interface ITimeDateFilter {
    dateFilter: DateRange;
    relativeTimeFilter?: TimeWithUnit;
}
export declare class SelectedTimeRange {
    custom: any;
    selected: TimeWithUnit;
    /**
     * Generate a unique key when you need ISelectedTimeRange as an argument key of a function call caching.
     * Please see https://lodash.com/docs/4.17.15#memoize
     * @param value
     */
    static getCacheKey(value: ISelectedTimeRange): string;
}
