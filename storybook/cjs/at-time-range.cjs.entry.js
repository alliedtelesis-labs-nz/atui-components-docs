'use strict';

var index = require('./index-CzDB71Wy.js');
var timeDate_util = require('./time-date.util-6pY7cZX6.js');
var moment = require('moment');
var translation = require('./translation-HqquF7bU.js');
var date = require('./date-DDRmOnS1.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var moment__default = /*#__PURE__*/_interopDefault(moment);

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

const AtTimeRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Selected time range.
     */
    selected_time_range = {
        selected: {
            unit: timeDate_util.TimeUnit.HOURS,
            value: 1,
        },
    };
    /**
     * Lower limit of the time range.
     */
    range_limit = 7;
    /**
     * Define the presets for the relative time ranges.
     */
    presets;
    /**
     * Enable relative time selection.
     */
    enable_relative_time = true;
    /**
     * Custom error message to show when an invalid time is inputted.
     */
    custom_error_message = null;
    /**
     * Enable all time selection.
     */
    show_all_time = false;
    /**
     * Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring
     * the value of range limit.
     */
    enable_range_limit = true;
    today;
    lowerLimit;
    defaultFromDate;
    translations;
    relativeTimeMenuEl;
    absoluteTimeMenuEl;
    get el() { return index.getElement(this); }
    units = [
        timeDate_util.TimeUnit.MINUTES,
        timeDate_util.TimeUnit.HOURS,
        timeDate_util.TimeUnit.DAYS,
        timeDate_util.TimeUnit.WEEKS,
        timeDate_util.TimeUnit.MONTHS,
        timeDate_util.TimeUnit.YEARS,
    ];
    minSeconds = 300;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
        this.today = new Date();
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? moment__default.default().subtract(this.range_limit, 'day').toDate()
            : timeDate_util.TimeDateUtil.floorDateByTimeUnit(date.MIN_DATE, timeDate_util.Duration.HOURS);
        this.defaultFromDate = moment__default.default(this.today).subtract(1, 'hours').toDate();
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
        const fromDate = moment__default.default(from).toDate();
        const toDate = moment__default.default(to).toDate();
        return { fromDate, toDate };
    }
    getShortUnitDisplay(time) {
        return AbreviatedTimeUnits[time.unit];
    }
    /**
     * Emits an event containing the selected time range when it changes
     */
    atuiChange;
    onChangeCustomTime(customTime) {
        this.selected_time_range = {
            selected: date.TimeRangeDisplay.CUSTOM,
            custom: customTime,
        };
        this.atuiChange.emit({ ...this.selected_time_range });
    }
    onChangeRelativeTime(time) {
        this.selected_time_range = {
            selected: time,
        };
        this.atuiChange.emit({ ...this.selected_time_range });
    }
    get buttonGroupOptions() {
        const output = [];
        if (this.selected_time_range.selected === date.TimeRangeDisplay.ALL) {
            output.push({
                value: (index.h("div", { class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    index.h("div", { class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", null, this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate.toLocaleString()), index.h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), index.h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : this.getCustomStartAndEndDate(this.selected_time_range)?.toDate.toLocaleString())),
                ],
            });
        }
        else {
            output.push({
                value: (index.h("div", { class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", { class: "font-medium" }, this.translations.ATUI.TIME.LAST, ` `, this.selected_time_range.selected['value'], ` `, this.translations.ATUI.TIME[this.getLongUnitDisplay(this.selected_time_range)], ' ', ":"), index.h("span", null, this.getRelativeDate(this.selected_time_range).startDate.toLocaleString()), index.h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), index.h("span", null, "NOW"))),
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
        return (index.h(index.Host, { key: 'c10f63881649d29383e43f2c50b1909f9dacdfed', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (index.h("at-button-group", { key: '1a47087f0927298fe9c66969ce1c9f3b9f5a4263', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (index.h("at-button-group", { key: 'a7da74450840f2cd6672cafc4e2825cb2cfa8c43', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), index.h("div", { key: '669af437073dc89e5680bd87ebd3165faf8bc5fd', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, index.h("at-time-with-unit", { key: 'e35e1c02e99276a369dc88294b0866a8266a708a', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                date.TimeRangeDisplay.CUSTOM
                ? date.TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), index.h("div", { key: '57c7c7058ab2c28b220eeba0d9248de41a8177a3', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, index.h("at-custom-time-range", { key: '1d0b52a6b3951060db8d11778dbf5e59ece7a604', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.toDate, lock_end_date_to_now: this.selected_time_range.custom?.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
};

exports.at_time_range = AtTimeRangeComponent;
