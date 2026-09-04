'use strict';

var atTimeDate_util = require('./at-time-date.util-6Fmc04Ie.js');

const AT_DEFAULT_TIME_PRESETS = [
    { unit: atTimeDate_util.AtTimeUnit.MINUTES, value: 30 },
    { unit: atTimeDate_util.AtTimeUnit.HOURS, value: 1 },
    { unit: atTimeDate_util.AtTimeUnit.HOURS, value: 6 },
    { unit: atTimeDate_util.AtTimeUnit.HOURS, value: 12 },
    { unit: atTimeDate_util.AtTimeUnit.HOURS, value: 24 },
    { unit: atTimeDate_util.AtTimeUnit.DAYS, value: 7 },
    { unit: atTimeDate_util.AtTimeUnit.MONTHS, value: 1 },
];
exports.AbreviatedTimeUnits = void 0;
(function (AbreviatedTimeUnits) {
    AbreviatedTimeUnits["SECONDS"] = "s";
    AbreviatedTimeUnits["MINUTES"] = "min";
    AbreviatedTimeUnits["HOURS"] = "hr";
    AbreviatedTimeUnits["DAYS"] = "d";
    AbreviatedTimeUnits["WEEKS"] = "w";
    AbreviatedTimeUnits["MONTHS"] = "m";
    AbreviatedTimeUnits["YEARS"] = "yr";
})(exports.AbreviatedTimeUnits || (exports.AbreviatedTimeUnits = {}));
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

exports.AT_DEFAULT_TIME_PRESETS = AT_DEFAULT_TIME_PRESETS;
