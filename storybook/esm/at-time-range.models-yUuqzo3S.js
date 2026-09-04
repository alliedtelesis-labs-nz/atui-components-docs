import { A as AtTimeUnit } from './at-time-date.util-Bfdzn_RG.js';

const AT_DEFAULT_TIME_PRESETS = [
    { unit: AtTimeUnit.MINUTES, value: 30 },
    { unit: AtTimeUnit.HOURS, value: 1 },
    { unit: AtTimeUnit.HOURS, value: 6 },
    { unit: AtTimeUnit.HOURS, value: 12 },
    { unit: AtTimeUnit.HOURS, value: 24 },
    { unit: AtTimeUnit.DAYS, value: 7 },
    { unit: AtTimeUnit.MONTHS, value: 1 },
];
var AbreviatedTimeUnits;
(function (AbreviatedTimeUnits) {
    AbreviatedTimeUnits["SECONDS"] = "s";
    AbreviatedTimeUnits["MINUTES"] = "min";
    AbreviatedTimeUnits["HOURS"] = "hr";
    AbreviatedTimeUnits["DAYS"] = "d";
    AbreviatedTimeUnits["WEEKS"] = "w";
    AbreviatedTimeUnits["MONTHS"] = "m";
    AbreviatedTimeUnits["YEARS"] = "yr";
})(AbreviatedTimeUnits || (AbreviatedTimeUnits = {}));
var FullTimeUnits;
(function (FullTimeUnits) {
    FullTimeUnits["SECONDS"] = "SECONDS";
    FullTimeUnits["MINUTES"] = "MINUTES";
    FullTimeUnits["HOURS"] = "HOURS";
    FullTimeUnits["DAYS"] = "DAYS";
    FullTimeUnits["WEEKS"] = "WEEKS";
    FullTimeUnits["MONTHS"] = "MONTHS";
    FullTimeUnits["YEARS"] = "YEARS";
})(FullTimeUnits || (FullTimeUnits = {}));

export { AT_DEFAULT_TIME_PRESETS as A, AbreviatedTimeUnits as a };
