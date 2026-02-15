import { AtIDateRange, AtIDateRangeStrings, TimeRangeDisplay } from './date';
export interface AtITimeWithUnit {
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
    custom?: AtIDateRangeStrings;
}
export interface ITimeDateFilter {
    dateFilter: AtIDateRange;
    relativeTimeFilter?: AtITimeWithUnit;
}
export declare class SelectedTimeRange {
    custom: any;
    selected: AtITimeWithUnit;
    /**
     * Generate a unique key when you need ISelectedTimeRange as an argument key of a function call caching.
     * Please see https://lodash.com/docs/4.17.15#memoize
     * @param value
     */
    static getCacheKey(value: ISelectedTimeRange): string;
}
