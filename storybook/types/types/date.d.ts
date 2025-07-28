export interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface DateRangeStrings {
    from: string;
    to: string;
    lockEndDateToNow?: boolean;
}
export declare enum DateFormat {
    SHORT = "hh:mm A MMM DD",
    STANDARD = "DD/MM/YYYY, HH:mm:ss",// displayed in 24hr time
    YEAR_MONTH_DAY = "YYYY/MM/DD",
    FULL_MONTH = "MMMM D YYYY, h:mm a",// displayed in 12hr time
    HOURS_ONLY = "hh:00 a",
    HOURS_MINUTES_SECONDS = "HH:mm:ss",
    NOW = "hh:mm a"
}
export declare enum TimeRangeDisplay {
    ONE_HOUR = "1h",
    TWELVE_HOURS = "12h",
    TWENTY_FOUR_HOURS = "24h",
    SEVEN_DAYS = "7d",
    CUSTOM = "custom",
    ALL = "all"
}
export declare enum TimeRangesInHours {
    '1h' = 1,
    '12h' = 12,
    '24h' = 24,
    '7d' = 168
}
export declare const MIN_DATE: Date;
export declare const DEFAULT_TIME_RANGE = TimeRangeDisplay.TWENTY_FOUR_HOURS;
