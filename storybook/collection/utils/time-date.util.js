import moment from "moment";
import { floor, isEmpty, round, clone } from "lodash-es";
import { Duration, TimeUnit, } from "../types/time";
export class TimeDateUtil {
    /**
     * convertSecondsToUnit: Convert time value from seconds to the specified unit.
     *
     * @param seconds: original number of seconds
     * @param unit: unit to convert seconds to (e.g. days, weeks, etc.)
     * @param roundUp: if true, rounds up. if false, rounds down.
     * @param decimalPlaces: if specified, rounds to these, otherwise rounds to the nearest whole number/integer
     **/
    static convertSecondsToUnit(seconds, unit, decimalPlaces, roundUp = true) {
        const momentSeconds = moment.duration(seconds, Duration[TimeUnit.SECONDS]);
        let secondsInUnit = seconds;
        switch (unit) {
            case TimeUnit.SECONDS:
                return secondsInUnit;
            case TimeUnit.MINUTES:
                secondsInUnit = momentSeconds.asMinutes();
                break;
            case TimeUnit.HOURS:
                secondsInUnit = momentSeconds.asHours();
                break;
            case TimeUnit.DAYS:
                secondsInUnit = momentSeconds.asDays();
                break;
            case TimeUnit.WEEKS:
                secondsInUnit = momentSeconds.asWeeks();
                break;
            case TimeUnit.MONTHS:
                secondsInUnit = momentSeconds.asMonths();
                break;
            case TimeUnit.YEARS:
                secondsInUnit = momentSeconds.asYears();
                break;
        }
        return roundUp
            ? round(secondsInUnit, decimalPlaces) // Round up
            : floor(secondsInUnit, decimalPlaces); // Round down
    }
    // convertToSeconds: Convert time value to seconds if it isn't already in this form
    static convertToSeconds(time) {
        const valueInUnit = moment.duration(time.value, Duration[time.unit]);
        return valueInUnit.asSeconds();
    }
    static getSecondsAgoFromDate(date) {
        return moment(new Date()).diff(date, Duration.SECONDS);
    }
    static getDateFromRelativeTime(time) {
        // Return current date minus the specified unit and value (e.g. if value 1 and unit hour, returns date an hour ago)
        return moment().subtract(time.value, Duration[time.unit]).toDate();
    }
    /**
     * getRelativeDateRange: convert relative date (e.g. 1 year ago) into absolute dates.
     * Round the these to the nearest minute because we don't care about the seconds
     *    startDate depends on what the user has chosen
     *    endDate is not set as technically there is no absolute end date - this will be set
     *    to the current date on the back-end (in time-date util -  getDateRangeWithEndDate)
     */
    static getRelativeDateRange(time) {
        const fullStartDate = TimeDateUtil.getDateFromRelativeTime(time);
        const startDate = TimeDateUtil.floorDateByTimeUnit(fullStartDate, Duration.MINUTES);
        return { startDate, endDate: new Date() };
    }
    static getAbsoluteDateRange(time) {
        return {
            startDate: moment(time.from).toDate(),
            endDate: moment(time.to).toDate(),
        };
    }
    static getDateRange(customDateRange, relativeTime, defaultDates) {
        if (customDateRange) {
            return customDateRange;
        }
        else if (relativeTime) {
            return TimeDateUtil.getRelativeDateRange(relativeTime);
        }
        else {
            return defaultDates;
        }
    }
    static getCurrentDatePlusHours(hours) {
        return new Date(new Date().setHours(new Date().getHours() + hours, 0, 0));
    }
    static getDateYearsAgo(years, originalDate) {
        return new Date(clone(originalDate).setFullYear(new Date().getFullYear() - years));
    }
    static getDateMonthsAgo(months, originalDate) {
        return new Date(clone(originalDate).setMonth(new Date().getMonth() - months));
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
        const diffSeconds = moment(endDate).diff(startDate, Duration.SECONDS);
        const interval = diffSeconds / 120; // in seconds
        // Ceiling interval to nearest one minute to avoid empty buckets
        const intervalToNearestMinute = Math.ceil(interval / 60) * 60;
        return intervalToNearestMinute;
    }
    /**
     * shiftDateByUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param amount integer amount to shift date by .// can be negative for subtraction
     * @param unit: unit to shift by seconds to (e.g. days, weeks, etc.)
     **/
    static shiftDateByUnit(date, amount, unit) {
        return moment(date).add(amount, unit).toDate();
    }
    /**
     * floorDateByTimeUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static floorDateByTimeUnit(date, unit) {
        return moment(date).startOf(unit).toDate();
    }
    /**
     * ceilingDateByTimeUnit: returns a new date with units added or subtracted
     *
     * @param date: original date
     * @param unit: unit to round to (e.g. days, weeks, etc.)
     **/
    static ceilingDateByTimeUnit(date, unit) {
        return moment(date)
            .subtract(1, Duration.SECONDS) // remove one second so square numbers are not rounded up
            .add(1, unit)
            .startOf(unit)
            .toDate();
    }
    /**
     * isSameDateByUnit: returns true if the dates are the same to the specified unit granularity
     *
     * @param date1: original date 1
     * @param date2: original date 2
     * @param unit: granularity of check in by unit (e.g. days, weeks, etc.)
     **/
    static isSameDateByUnit(date1, date2, unit) {
        return moment(date1).isSame(date2, unit);
    }
    static getCurrentDateFilterInDateRangeFormat(timeDateFilters) {
        // This returns absolute start and end dates, even if a user chose 'Last 5 years' as their filter
        if (timeDateFilters) {
            if (timeDateFilters.relativeTimeFilter) {
                return TimeDateUtil.getRelativeDateRange(timeDateFilters.relativeTimeFilter);
            }
            else if (timeDateFilters.dateFilter) {
                return timeDateFilters.dateFilter;
            }
        }
    }
}
//# sourceMappingURL=time-date.util.js.map
