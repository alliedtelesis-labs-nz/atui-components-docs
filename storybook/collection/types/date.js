export var DateFormat;
(function (DateFormat) {
    DateFormat["SHORT"] = "hh:mm A MMM DD";
    DateFormat["STANDARD"] = "DD/MM/YYYY, HH:mm:ss";
    DateFormat["YEAR_MONTH_DAY"] = "YYYY/MM/DD";
    DateFormat["FULL_MONTH"] = "MMMM D YYYY, h:mm a";
    DateFormat["HOURS_ONLY"] = "hh:00 a";
    DateFormat["HOURS_MINUTES_SECONDS"] = "HH:mm:ss";
    DateFormat["NOW"] = "hh:mm a";
})(DateFormat || (DateFormat = {}));
export var TimeRangeDisplay;
(function (TimeRangeDisplay) {
    // Predefined ranges that the user can select
    TimeRangeDisplay["ONE_HOUR"] = "1h";
    TimeRangeDisplay["TWELVE_HOURS"] = "12h";
    TimeRangeDisplay["TWENTY_FOUR_HOURS"] = "24h";
    TimeRangeDisplay["SEVEN_DAYS"] = "7d";
    // Indicates selection of custom start/end dates
    TimeRangeDisplay["CUSTOM"] = "custom";
    TimeRangeDisplay["ALL"] = "all";
})(TimeRangeDisplay || (TimeRangeDisplay = {}));
export var TimeRangesInHours;
(function (TimeRangesInHours) {
    TimeRangesInHours[TimeRangesInHours["1h"] = 1] = "1h";
    TimeRangesInHours[TimeRangesInHours["12h"] = 12] = "12h";
    TimeRangesInHours[TimeRangesInHours["24h"] = 24] = "24h";
    TimeRangesInHours[TimeRangesInHours["7d"] = 168] = "7d";
})(TimeRangesInHours || (TimeRangesInHours = {}));
export const MIN_DATE = new Date('1985-01-01T00:00:00');
export const DEFAULT_TIME_RANGE = TimeRangeDisplay.TWENTY_FOUR_HOURS;
//# sourceMappingURL=date.js.map
