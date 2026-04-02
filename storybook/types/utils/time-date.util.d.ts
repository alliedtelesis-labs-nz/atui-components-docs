import { Duration, ITimeDateFilter, TimeExtraOptions, TimeUnit, TimeWithUnit } from '../types/time';
import { DateRange, DateRangeStrings } from '../types/date';
export declare class TimeDateUtil {
    /**
     * convertSecondsToUnit: Convert time value from seconds to the specified unit.
     *
     * @param seconds: original number of seconds
     * @param unit: unit to convert seconds to (e.g. days, weeks, etc.)
     * @param roundUp: if true, rounds up. if false, rounds down.
     * @param decimalPlaces: if specified, rounds to these, otherwise rounds to the nearest whole number/integer
     **/
    static convertSecondsToUnit(seconds: number, unit: TimeUnit | TimeExtraOptions, decimalPlaces?: number, roundUp?: boolean): number;
    static convertToSeconds(time: TimeWithUnit): number;
    static getSecondsAgoFromDate(date: Date): number;
    static getDateFromRelativeTime(time: TimeWithUnit): Date;
    /**
     * getRelativeDateRange: convert relative date (e.g. 1 year ago) into absolute dates.
     * Round the these to the nearest minute because we don't care about the seconds
     *    startDate depends on what the user has chosen
     *    endDate is not set as technically there is no absolute end date - this will be set
     *    to the current date on the back-end (in time-date util -  getDateRangeWithEndDate)
     */
    static getRelativeDateRange(time: TimeWithUnit): DateRange;
    static getAbsoluteDateRange(time: DateRangeStrings): DateRange;
    static getDateRange(customDateRange: DateRange, relativeTime: TimeWithUnit, defaultDates: DateRange): DateRange;
    static getCurrentDatePlusHours(hours: number): Date;
    static getDateYearsAgo(years: number, originalDate: Date): Date;
    static getDateMonthsAgo(months: number, originalDate: Date): Date;
    static getCurrentOrDefaultUnit(currentUnit: TimeUnit | TimeExtraOptions, units: (TimeUnit | TimeExtraOptions)[]): TimeUnit | TimeExtraOptions | undefined;
    /**
     * getDataPointIntervalFor30SecPoller: return an interval
     * that provides up to 120 data points between the start and end date.
     * Ensure that this is at least one minute and goes up in one minute intervals,
     * which avoids creating empty buckets, except if the device or Vista is down.
     */
    static getDataPointIntervalFor30SecPoller(startDate: Date, endDate: Date): number;
    /**
     * shiftDateByUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param amount integer amount to shift date by .// can be negative for subtraction
     * @param unit: unit to shift by seconds to (e.g. days, weeks, etc.)
     **/
    static shiftDateByUnit(date: Date | string, amount: number, unit: Duration): Date;
    /**
     * floorDateByTimeUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static floorDateByTimeUnit(date: Date, unit: Duration): Date;
    /**
     * ceilingDateByTimeUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static ceilingDateByTimeUnit(date: Date, unit: Duration): Date;
    /**
     * isSameDateByUnit: returns true if the dates are the same to the specified unit granularity
     *
     * @param date1: original date 1
     * @param date2: original date 2
     * @param unit: granularity of check in by unit (e.g. days, weeks, etc.)
     **/
    static isSameDateByUnit(date1: Date | string, date2: Date | string, unit: Duration): boolean;
    static getCurrentDateFilterInDateRangeFormat(timeDateFilters: ITimeDateFilter): DateRange | undefined;
}
