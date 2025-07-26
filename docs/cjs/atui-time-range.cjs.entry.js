'use strict';

var index = require('./index-BAt2i-T2.js');
var timeDate_util = require('./time-date.util-CvNz3hWU.js');
require('./table-styles-wF-7Uyu8.js');
var moment = require('./moment-DRlRqWvO.js');
var translation = require('./translation-HqquF7bU.js');

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

const AtuiTimeRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Selected time range.
         */
        this.selected_time_range = {
            selected: {
                unit: timeDate_util.TimeUnit.HOURS,
                value: 1,
            },
        };
        /**
         * Lower limit of the time range.
         */
        this.range_limit = 7;
        /**
         * Enable relative time selection.
         */
        this.enable_relative_time = true;
        /**
         * Custom error message to show when an invalid time is inputted.
         */
        this.custom_error_message = null;
        /**
         * Enable all time selection.
         */
        this.show_all_time = false;
        /**
         * Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring
         * the value of range limit.
         */
        this.enable_range_limit = true;
        this.units = [
            timeDate_util.TimeUnit.MINUTES,
            timeDate_util.TimeUnit.HOURS,
            timeDate_util.TimeUnit.DAYS,
            timeDate_util.TimeUnit.WEEKS,
            timeDate_util.TimeUnit.MONTHS,
            timeDate_util.TimeUnit.YEARS,
        ];
        this.minSeconds = 300;
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
        this.today = new Date();
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? moment.hooks().subtract(this.range_limit, 'day').toDate()
            : timeDate_util.TimeDateUtil.floorDateByTimeUnit(timeDate_util.MIN_DATE, timeDate_util.Duration.HOURS);
        this.defaultFromDate = moment.hooks(this.today).subtract(1, 'hours').toDate();
    }
    getLongUnitDisplay(time) {
        if (time.custom || !time.selected) {
            return;
        }
        return FullTimeUnits[time.selected['unit']];
    }
    getRelativeDate(time) {
        if (time.custom || !time.selected) {
            return;
        }
        return timeDate_util.TimeDateUtil.getRelativeDateRange(time.selected);
    }
    getCustomStartAndEndDate(selectedTime) {
        if (!selectedTime.custom) {
            return;
        }
        const { from, to } = selectedTime.custom;
        const fromDate = moment.hooks(from).toDate();
        const toDate = moment.hooks(to).toDate();
        return { fromDate, toDate };
    }
    getShortUnitDisplay(time) {
        return AbreviatedTimeUnits[time.unit];
    }
    onChangeCustomTime(customTime) {
        this.selected_time_range = {
            selected: timeDate_util.TimeRangeDisplay.CUSTOM,
            custom: customTime,
        };
        this.atuiChange.emit(Object.assign({}, this.selected_time_range));
    }
    onChangeRelativeTime(time) {
        this.selected_time_range = {
            selected: time,
        };
        this.atuiChange.emit(Object.assign({}, this.selected_time_range));
    }
    get buttonGroupOptions() {
        var _a, _b;
        const output = [];
        if (this.selected_time_range.selected === timeDate_util.TimeRangeDisplay.ALL) {
            output.push({
                value: (index.h("div", { class: "flex items-center gap-4 font-normal text-dark" }, index.h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    index.h("div", { class: "flex items-center gap-4 font-normal text-dark" }, index.h("span", null, (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate.toLocaleString()), index.h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), index.h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate.toLocaleString())),
                ],
            });
        }
        else {
            output.push({
                value: (index.h("div", { class: "flex items-center gap-4 font-normal text-dark" }, index.h("span", { class: "font-medium" }, this.translations.ATUI.TIME.LAST, ` `, this.selected_time_range.selected['value'], ` `, this.translations.ATUI.TIME[this.getLongUnitDisplay(this.selected_time_range)], ' ', ":"), index.h("span", null, this.getRelativeDate(this.selected_time_range).startDate.toLocaleString()), index.h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), index.h("span", null, "NOW"))),
            });
        }
        output.push({
            value: (index.h("div", { class: "flex items-center" }, index.h("span", { class: "icon-md material-icons text-light" }, "date_range"))),
        });
        return output;
    }
    get predefinedTimeRanges() {
        const output = [];
        this.presets.forEach((timerange) => {
            output.push({
                value: (index.h("span", null, timerange.value, this.getShortUnitDisplay(timerange))),
            });
        });
        output.push({
            value: (index.h("div", { class: "flex items-center" }, index.h("span", { class: "material-icons text-body text-light" }, "date_range"))),
        });
        return output;
    }
    render() {
        var _a, _b, _c;
        return (index.h(index.Host, { key: '76db95cfb7ceff52ce16ec1db94eee77c7c26d6e', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (index.h("atui-button-group", { key: 'ad2c79667f6cf58e66d24b69d332b374727ec99d', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (index.h("atui-button-group", { key: 'a634bf94e71bbd3dd1e6b80708203573e2c36fab', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), index.h("div", { key: '7aa694ec1203dab14724d4fd42575777a1ce5617', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, index.h("atui-time-with-unit", { key: 'f438e5384a6e3080a38c6a8f363303f91bd2cf27', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                timeDate_util.TimeRangeDisplay.CUSTOM
                ? timeDate_util.TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), index.h("div", { key: 'd0220996a4cc8e24f19e5adc88c9f91d460e20d5', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, index.h("atui-custom-time-range", { key: '9bcef8a9bfb3b6e0b26a5483ffccfc3e472402b4', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: (_a = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _a === void 0 ? void 0 : _a.fromDate, to_date_value: (_b = this.getCustomStartAndEndDate(this.selected_time_range)) === null || _b === void 0 ? void 0 : _b.toDate, lock_end_date_to_now: (_c = this.selected_time_range.custom) === null || _c === void 0 ? void 0 : _c.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_time_range = AtuiTimeRangeComponent;
//# sourceMappingURL=atui-time-range.entry.cjs.js.map

//# sourceMappingURL=atui-time-range.cjs.entry.js.map