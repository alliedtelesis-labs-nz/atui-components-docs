import { TimeRangeDisplay } from "./date";
export var AtTimeUnit;
(function (AtTimeUnit) {
    AtTimeUnit["SECONDS"] = "SECONDS";
    AtTimeUnit["MINUTES"] = "MINUTES";
    AtTimeUnit["HOURS"] = "HOURS";
    AtTimeUnit["DAYS"] = "DAYS";
    AtTimeUnit["WEEKS"] = "WEEKS";
    AtTimeUnit["MONTHS"] = "MONTHS";
    AtTimeUnit["YEARS"] = "YEARS";
})(AtTimeUnit || (AtTimeUnit = {}));
export var TimeExtraOptions;
(function (TimeExtraOptions) {
    TimeExtraOptions["ALL"] = "ALL";
})(TimeExtraOptions || (TimeExtraOptions = {}));
export var Duration;
(function (Duration) {
    Duration["SECONDS"] = "seconds";
    Duration["MINUTES"] = "minutes";
    Duration["HOURS"] = "hours";
    Duration["DAYS"] = "days";
    Duration["WEEKS"] = "weeks";
    Duration["MONTHS"] = "months";
    Duration["YEARS"] = "years";
})(Duration || (Duration = {}));
export class SelectedTimeRange {
    custom;
    selected;
    /**
     * Generate a unique key when you need ISelectedTimeRange as an argument key of a function call caching.
     * Please see https://lodash.com/docs/4.17.15#memoize
     * @param value
     */
    static getCacheKey(value) {
        if (value.selected === TimeRangeDisplay.CUSTOM) {
            return `${value.custom.from}-${value.custom.to}`;
        }
        return `${value.selected}`;
    }
}
