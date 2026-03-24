import dayjs from "dayjs";
import floor from "lodash/floor.js";
import isEmpty from "lodash/isEmpty.js";
import round from "lodash/round.js";
import { Duration, TimeExtraOptions, TimeUnit, } from "../types/time";
const SECONDS_PER_UNIT = {
    [TimeUnit.SECONDS]: 1,
    [TimeUnit.MINUTES]: 60,
    [TimeUnit.HOURS]: 3600,
    [TimeUnit.DAYS]: 86400,
    [TimeUnit.WEEKS]: 604800,
    [TimeUnit.MONTHS]: 2629746, // 365.2425 * 86400 / 12
    [TimeUnit.YEARS]: 31557600, // 365.2425 * 86400
};
export class AtTimeDateUtil {
    /**
     * convertSecondsToUnit: Convert time value from seconds to the specified unit.
     *
     * @param seconds: original number of seconds
     * @param unit: unit to convert seconds to (e.g. days, weeks, etc.)
     * @param roundUp: if true, rounds up. if false, rounds down.
     * @param decimalPlaces: if specified, rounds to these, otherwise rounds to the nearest whole number/integer
     **/
    static convertSecondsToUnit(seconds, unit, decimalPlaces, roundUp = true) {
        if (unit === TimeUnit.SECONDS || unit === TimeExtraOptions.ALL) {
            return seconds;
        }
        const inUnit = seconds / SECONDS_PER_UNIT[unit];
        return roundUp
            ? round(inUnit, decimalPlaces)
            : floor(inUnit, decimalPlaces);
    }
    // convertToSeconds: Convert time value to seconds if it isn't already in this form
    static convertToSeconds(time) {
        return time.value * (SECONDS_PER_UNIT[time.unit] ?? 1);
    }
    static getSecondsAgoFromDate(date) {
        return dayjs().diff(date, 'seconds');
    }
    static getDateFromRelativeTime(time) {
        // Return current date minus the specified unit and value (e.g. if value 1 and unit hour, returns date an hour ago)
        return dayjs()
            .subtract(time.value, Duration[time.unit])
            .toDate();
    }
    /**
     * getRelativeDateRange: convert relative date (e.g. 1 year ago) into absolute dates.
     * Round the these to the nearest minute because we don't care about the seconds
     *    startDate depends on what the user has chosen
     *    endDate is not set as technically there is no absolute end date - this will be set
     *    to the current date on the back-end (in time-date util -  getDateRangeWithEndDate)
     */
    static getRelativeDateRange(time) {
        const fullStartDate = AtTimeDateUtil.getDateFromRelativeTime(time);
        const startDate = AtTimeDateUtil.floorDateByTimeUnit(fullStartDate, Duration.MINUTES);
        return { startDate, endDate: new Date() };
    }
    static getAbsoluteDateRange(time) {
        return {
            startDate: new Date(time.from),
            endDate: new Date(time.to),
        };
    }
    static getDateRange(customDateRange, relativeTime, defaultDates) {
        if (customDateRange) {
            return customDateRange;
        }
        else if (relativeTime) {
            return AtTimeDateUtil.getRelativeDateRange(relativeTime);
        }
        else {
            return defaultDates;
        }
    }
    static getCurrentDatePlusHours(hours) {
        return dayjs().add(hours, 'hours').startOf('hour').toDate();
    }
    static getDateYearsAgo(years, originalDate) {
        return dayjs(originalDate)
            .year(dayjs().year() - years)
            .toDate();
    }
    static getDateMonthsAgo(months, originalDate) {
        return dayjs(originalDate)
            .month(dayjs().month() - months)
            .toDate();
    }
    static getCurrentOrDefaultUnit(currentUnit, units) {
        // Return the first of an array of units if a current unit isn't specified
        if (currentUnit) {
            return currentUnit;
        }
        else if (!isEmpty(units)) {
            return units[0];
        }
    }
    /**
     * getDataPointIntervalFor30SecPoller: return an interval
     * that provides up to 120 data points between the start and end date.
     * Ensure that this is at least one minute and goes up in one minute intervals,
     * which avoids creating empty buckets, except if the device or Vista is down.
     */
    static getDataPointIntervalFor30SecPoller(startDate, endDate) {
        const diffSeconds = dayjs(endDate).diff(startDate, 'seconds');
        const interval = diffSeconds / 120; // in seconds
        // Ceiling interval to nearest one minute to avoid empty buckets
        const intervalToNearestMinute = Math.ceil(interval / 60) * 60;
        return intervalToNearestMinute;
    }
    /**
     * shiftDateByUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param amount integer amount to shift date by. Can be negative for subtraction
     * @param unit: unit to shift by (e.g. days, weeks, etc.)
     **/
    static shiftDateByUnit(date, amount, unit) {
        return dayjs(date).add(amount, unit).toDate();
    }
    /**
     * floorDateByTimeUnit: returns a new date floored to the start of the given unit
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static floorDateByTimeUnit(date, unit) {
        return dayjs(date).startOf(unit).toDate();
    }
    /**
     * ceilingDateByTimeUnit: returns a new date ceiled to the end of the given unit
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static ceilingDateByTimeUnit(date, unit) {
        return dayjs(date)
            .subtract(1, 'second')
            .add(1, unit)
            .startOf(unit)
            .toDate();
    }
    /**
     * isSameDateByUnit: returns true if the dates are the same to the specified unit granularity
     *
     * @param date1: original date 1
     * @param date2: original date 2
     * @param unit: granularity of check by unit (e.g. days, weeks, etc.)
     **/
    static isSameDateByUnit(date1, date2, unit) {
        return dayjs(date1).isSame(date2, unit);
    }
    static getCurrentDateFilterInDateRangeFormat(timeDateFilters) {
        // This returns absolute start and end dates, even if a user chose 'Last 5 years' as their filter
        if (timeDateFilters) {
            if (timeDateFilters.relativeTimeFilter) {
                return AtTimeDateUtil.getRelativeDateRange(timeDateFilters.relativeTimeFilter);
            }
            else if (timeDateFilters.dateFilter) {
                return timeDateFilters.dateFilter;
            }
        }
    }
}
