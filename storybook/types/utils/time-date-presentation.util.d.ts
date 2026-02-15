import { DateFormat, AtIDateRange, Duration, ISelectedTimeRange } from '../types';
import { AtISelectOption } from '../types/select';
export declare class TimeDatePresentationUtil {
    private static times;
    private static timeMode;
    static buildDateFromStrings(fromDate: string, fromTime: string): Date;
    private static dateBuilder;
    static getDateLabelMessage(selectedTime: ISelectedTimeRange, format: DateFormat): string;
    static getCustomFromAndToDate(timeRange: ISelectedTimeRange): {
        fromDate: Date;
        toDate: Date;
    } | undefined;
    static getTimeOptions(startTime?: string, endTime?: string): AtISelectOption[];
    private static createTimeList;
    private static createTimeIndex;
    private static getTimeIndex;
    static convertTimeRange(timeRange: ISelectedTimeRange): {
        start: Date;
        end: Date;
    };
    static convertTimeRangeInNumber(timeRange: ISelectedTimeRange): {
        start: number;
        end: number;
    };
    static getIntervalFor30sPollerFromTimeRange(timeRange: ISelectedTimeRange): number;
    static getFormattedDate(date: Date | string, dateFormat?: DateFormat): string;
    private static getDurationTranslations;
    static translateDurationString(duration: string, translations: any): string;
    static getIntervalString(start: Date, end: Date, translations: any): string;
    static getDayCountFromDateFilter(dateFilter: AtIDateRange): number;
    static getHourCountFromTimeRange(timeRange: ISelectedTimeRange): number | undefined;
    static isCustomRange(timeRange: ISelectedTimeRange): boolean;
}
export declare class FlooredDateRange implements AtIDateRange {
    readonly startDate: Date;
    readonly endDate: Date;
    private unit;
    constructor(startDate: Date, endDate: Date, unit: Duration);
    static create(timeRange: {
        start: Date;
        end: Date;
    }, unit: Duration): FlooredDateRange;
    private floorByMinutes;
}
