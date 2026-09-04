import { AtTimeUnit } from "../types/time";
export const AT_DEFAULT_TIME_PRESETS = [
    { unit: AtTimeUnit.MINUTES, value: 30 },
    { unit: AtTimeUnit.HOURS, value: 1 },
    { unit: AtTimeUnit.HOURS, value: 6 },
    { unit: AtTimeUnit.HOURS, value: 12 },
    { unit: AtTimeUnit.HOURS, value: 24 },
    { unit: AtTimeUnit.DAYS, value: 7 },
    { unit: AtTimeUnit.MONTHS, value: 1 },
];
export var AbreviatedTimeUnits;
(function (AbreviatedTimeUnits) {
    AbreviatedTimeUnits["SECONDS"] = "s";
    AbreviatedTimeUnits["MINUTES"] = "min";
    AbreviatedTimeUnits["HOURS"] = "hr";
    AbreviatedTimeUnits["DAYS"] = "d";
    AbreviatedTimeUnits["WEEKS"] = "w";
    AbreviatedTimeUnits["MONTHS"] = "m";
    AbreviatedTimeUnits["YEARS"] = "yr";
})(AbreviatedTimeUnits || (AbreviatedTimeUnits = {}));
export var FullTimeUnits;
(function (FullTimeUnits) {
    FullTimeUnits["SECONDS"] = "SECONDS";
    FullTimeUnits["MINUTES"] = "MINUTES";
    FullTimeUnits["HOURS"] = "HOURS";
    FullTimeUnits["DAYS"] = "DAYS";
    FullTimeUnits["WEEKS"] = "WEEKS";
    FullTimeUnits["MONTHS"] = "MONTHS";
    FullTimeUnits["YEARS"] = "YEARS";
})(FullTimeUnits || (FullTimeUnits = {}));
