import { TimeUnit, AtITimeWithUnit } from '../types/time';
import { AtIDateRangeStrings, TimeRangeDisplay } from '../types/date';
export type TimePresets = {
    unit: TimeUnit.MINUTES;
    value: 5;
} | {
    unit: TimeUnit.MINUTES;
    value: 30;
} | {
    unit: TimeUnit.HOURS;
    value: 1;
} | {
    unit: TimeUnit.HOURS;
    value: 6;
} | {
    unit: TimeUnit.HOURS;
    value: 12;
} | {
    unit: TimeUnit.HOURS;
    value: 24;
} | {
    unit: TimeUnit.DAYS;
    value: 7;
} | {
    unit: TimeUnit.MONTHS;
    value: 1;
} | {
    unit: TimeUnit.MONTHS;
    value: 6;
} | {
    unit: TimeUnit.YEARS;
    value: 1;
} | {
    unit: TimeUnit.YEARS;
    value: 5;
};
export declare enum AbreviatedTimeUnits {
    SECONDS = "s",
    MINUTES = "min",
    HOURS = "hr",
    DAYS = "d",
    WEEKS = "w",
    MONTHS = "m",
    YEARS = "yr"
}
export declare enum FullTimeUnits {
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS",
    WEEKS = "WEEKS",
    MONTHS = "MONTHS",
    YEARS = "YEARS"
}
/**
 * @deprecated please use onChange to receive AtISelectedTimeRangeExtended event
 */
export interface AtISelectedTimeRange {
    selected: AtITimeWithUnit | TimeRangeDisplay.CUSTOM;
    custom?: AtIDateRangeStrings;
}
type AtSelectedAllTimeRange = {
    selected: TimeRangeDisplay.ALL;
    custom?: undefined;
};
export type AtSelectedTimeRangeExtended = AtISelectedTimeRange | AtSelectedAllTimeRange;
export {};
