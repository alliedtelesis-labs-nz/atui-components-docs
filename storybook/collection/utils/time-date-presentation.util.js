import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimeDateUtil } from "./time-date.util";
import { isEmpty, replace } from "lodash-es";
import { DateFormat, TimeRangeDisplay, TimeRangesInHours, } from "../types";
dayjs.extend(customParseFormat);
export class TimeDatePresentationUtil {
    static times = [
        '12:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
    ];
    static timeMode = ['am', 'pm'];
    static buildDateFromStrings(fromDate, fromTime) {
        return dayjs(`${fromDate} ${fromTime}`, 'YYYY-MM-DD hh:mm a').toDate();
    }
    static getDateLabelMessage(selectedTime, format) {
        if (!selectedTime) {
            return;
        }
        else if (TimeDatePresentationUtil.isCustomRange(selectedTime)) {
            const { from, to } = selectedTime.custom;
            return `${TimeDatePresentationUtil.getFormattedDate(from, format)} - ${TimeDatePresentationUtil.getFormattedDate(to, format)}`;
        }
        else {
            const time = TimeRangesInHours[selectedTime.selected];
            const todayDate = dayjs().format(format);
            const previousDate = dayjs().subtract(time, 'hours').format(format);
            return `${previousDate} - ${todayDate}`;
        }
    }
    static getCustomFromAndToDate(timeRange) {
        if (!timeRange) {
            return;
        }
        if (TimeDatePresentationUtil.isCustomRange(timeRange)) {
            const { from, to } = timeRange.custom;
            return { fromDate: new Date(from), toDate: new Date(to) };
        }
    }
    static getTimeOptions(startTime = '12:00 am', endTime = '11:00 pm') {
        const timeList = this.createTimeList();
        const startTimeIndex = this.getTimeIndex(startTime);
        const endTimeIndex = this.getTimeIndex(endTime) + 2;
        return timeList.slice(startTimeIndex, endTimeIndex).map((time) => ({
            value: time,
        }));
    }
    static createTimeList() {
        const list = [];
        for (const mode of this.timeMode) {
            for (const time of this.times) {
                list.push(`${time} ${mode}`);
            }
        }
        return list;
    }
    static createTimeIndex() {
        const timeList = this.createTimeList();
        return timeList.reduce((acc, cur, index) => {
            acc[cur] = index;
            return acc;
        }, {});
    }
    static getTimeIndex(time) {
        const index = this.createTimeIndex();
        return index[time];
    }
    static convertTimeRange(timeRange) {
        if (TimeDatePresentationUtil.isCustomRange(timeRange)) {
            return {
                start: new Date(timeRange.custom.from),
                end: new Date(timeRange.custom.to),
            };
        }
        else if (timeRange.selected) {
            return {
                start: dayjs()
                    .subtract(TimeRangesInHours[timeRange.selected], 'hours')
                    .toDate(),
                end: dayjs().toDate(),
            };
        }
    }
    static convertTimeRangeInNumber(timeRange) {
        const { start, end } = this.convertTimeRange(timeRange);
        return { start: start.getTime(), end: end.getTime() };
    }
    static getIntervalFor30sPollerFromTimeRange(timeRange) {
        const { start, end } = TimeDatePresentationUtil.convertTimeRange(timeRange);
        return TimeDateUtil.getDataPointIntervalFor30SecPoller(start, end);
    }
    static getFormattedDate(date, dateFormat = DateFormat.STANDARD) {
        if (!date)
            return '';
        const d = dayjs(date);
        if (!d.isValid())
            return '';
        return d.format(dateFormat);
    }
    static getDurationTranslations(translations) {
        const dayString = translations.ATUI.TIME.DURATION_SHORT.DAY;
        const daysString = translations.ATUI.TIME.DURATION_SHORT.DAYS;
        const hourString = translations.ATUI.TIME.DURATION_SHORT.HOUR;
        const hoursString = translations.ATUI.TIME.DURATION_SHORT.HOURS;
        const minuteString = translations.ATUI.TIME.DURATION_SHORT.MIN;
        const minutesString = translations.ATUI.TIME.DURATION_SHORT.MINS;
        return [
            { unit: 'day', translation: dayString },
            { unit: 'days', translation: daysString },
            { unit: 'hr', translation: hourString },
            { unit: 'hrs', translation: hoursString },
            { unit: 'min', translation: minuteString },
            { unit: 'mins', translation: minutesString },
        ];
    }
    static translateDurationString(duration, translations) {
        const translation = TimeDatePresentationUtil.getDurationTranslations(translations);
        const splitDuration = duration.split(',');
        const translatedDurations = splitDuration.map((duration) => {
            let translatedDuration = duration;
            translation.forEach((trans) => {
                if (duration.includes(' ' + trans.unit)) {
                    const unit = new RegExp(' ' + trans.unit);
                    translatedDuration = replace(duration, unit, ' ' + trans.translation);
                }
            });
            return translatedDuration;
        });
        return translatedDurations.join(',');
    }
    static getIntervalString(start, end, translations) {
        const ms = end.getTime() - start.getTime();
        const totalSeconds = Math.floor(Math.abs(ms) / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const parts = [];
        if (days > 0)
            parts.push(`${days} days`);
        if (hours > 0)
            parts.push(`${hours} hrs`);
        if (minutes > 0 || parts.length === 0)
            parts.push(`${minutes} min`);
        return TimeDatePresentationUtil.translateDurationString(parts.join(', '), translations);
    }
    static getDayCountFromDateFilter(dateFilter) {
        const ms = dateFilter.endDate.getTime() - dateFilter.startDate.getTime();
        return ms / (1000 * 60 * 60 * 24);
    }
    static getHourCountFromTimeRange(timeRange) {
        if (timeRange.selected == TimeRangeDisplay.CUSTOM) {
            if (timeRange.custom) {
                const to = new Date(timeRange.custom.to);
                const from = new Date(timeRange.custom.from);
                return (to.getTime() - from.getTime()) / (1000 * 3600);
            }
        }
        else {
            return TimeRangesInHours[timeRange.selected];
        }
    }
    // Return true if time range is custom (i.e. custom start and end
    // time selected, rather than predefined ranges e.g. 1hr, 24h)
    static isCustomRange(timeRange) {
        if (timeRange.selected === TimeRangeDisplay.CUSTOM) {
            const customRange = timeRange.custom;
            return (!isEmpty(customRange) && !!customRange.from && !!customRange.to);
        }
    }
}
export class FlooredDateRange {
    startDate;
    endDate;
    unit;
    constructor(startDate, endDate, unit) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.unit = unit;
        this.startDate = this.floorByMinutes(this.startDate);
        this.endDate = this.floorByMinutes(this.endDate);
    }
    static create(timeRange, unit) {
        return new FlooredDateRange(timeRange.start, timeRange.end, unit);
    }
    floorByMinutes(time) {
        return TimeDateUtil.floorDateByTimeUnit(time, this.unit);
    }
}
