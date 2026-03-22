'use strict';

var index = require('./index-CzDB71Wy.js');
var timeDate_util = require('./time-date.util-MIIqV63j.js');
var translation = require('./translation-B-kubNyM.js');
var date = require('./date-DDRmOnS1.js');

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
    translations;
    displayedTimeRange;
    lowerLimit;
    defaultFromDate;
    relativeTimeMenuEl;
    absoluteTimeMenuEl;
    get el() { return index.getElement(this); }
    instanceId = `atr-${Math.random().toString(36).slice(2, 8)}`;
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
        this.displayedTimeRange = this.selected_time_range;
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? new Date(Date.now() - this.range_limit * 86400 * 1000)
            : timeDate_util.TimeDateUtil.floorDateByTimeUnit(date.MIN_DATE, timeDate_util.Duration.HOURS);
        this.defaultFromDate = new Date(this.today.getTime() - 3600 * 1000);
    }
    getCustomStartAndEndDate(selectedTime) {
        if (!selectedTime?.custom) {
            return;
        }
        const { from, to } = selectedTime.custom;
        const fromDate = new Date(from);
        const toDate = new Date(to);
        return { fromDate, toDate };
    }
    getShortUnitDisplay(time) {
        return FullTimeUnits[time.unit];
    }
    /**
     * Emits an event containing the selected time range when it changes
     */
    atuiChange;
    onChangeCustomTime(customTime) {
        this.displayedTimeRange = {
            selected: date.TimeRangeDisplay.CUSTOM,
            custom: { ...customTime },
        };
        this.atuiChange.emit({ ...this.displayedTimeRange });
    }
    onChangeRelativeTime(time) {
        this.displayedTimeRange = { selected: time, custom: undefined };
        this.atuiChange.emit({ ...this.displayedTimeRange });
    }
    formatDate(date) {
        return new Date(date).toLocaleString(undefined, {
            year: '2-digit',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }
    renderSelectedTimeDisplay() {
        const time = this.displayedTimeRange;
        if (!time?.selected) {
            return null;
        }
        if (time.selected === date.TimeRangeDisplay.ALL) {
            return (index.h("div", { class: "text-dark flex items-center gap-4 font-normal" }, this.translations?.ATUI?.TIME?.ALL_TIME_LABEL ||
                'All Time'));
        }
        if (time.custom) {
            return (index.h("div", { id: "custom", class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", { class: "font-medium" }, this.formatDate(time.custom.from)), index.h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), index.h("span", null, time.custom.lockEndDateToNow
                ? 'NOW'
                : this.formatDate(time.custom.to))));
        }
        const selected = time.selected;
        if (selected?.value && selected?.unit) {
            const unitLabel = this.getShortUnitDisplay(selected);
            const startDate = timeDate_util.TimeDateUtil.getRelativeDateRange(selected)?.startDate;
            return (index.h("div", { id: "relative", class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", { class: "font-medium" }, "Last ", selected.value, " ", unitLabel, ":"), startDate && index.h("span", null, this.formatDate(startDate)), index.h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), index.h("span", null, "NOW")));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'd75047752eeb857ef1b8dd74b7efd8808743b1b4', class: "relative flex justify-center gap-8" }, this.enable_relative_time
            ? this.renderRelativeTimeButtonGroup()
            : this.renderPredefinedTimeButtonGroup(), this.enable_relative_time && this.renderRelativeTimeMenu(), this.renderAbsoluteTimeMenu()));
    }
    renderRelativeTimeButtonGroup() {
        return (index.h("at-button-group", { key: "relative-time-group" }, index.h("at-button-group-option", { value: this.renderSelectedTimeDisplay(), "data-menu": `${this.instanceId}-rel` }), index.h("at-button-group-option", { "data-menu": `${this.instanceId}-abs` }, index.h("div", { class: "flex items-center" }, index.h("span", { class: "icon-md material-icons" }, "date_range")))));
    }
    renderPredefinedTimeButtonGroup() {
        return (index.h("at-button-group", { key: "predefined-time-group", onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
            } }, this.presets.map((preset, idx) => (index.h("at-button-group-option", { key: idx }, index.h("span", null, preset.value, this.getShortUnitDisplay(preset))))), index.h("at-button-group-option", { value: index.h("div", { class: "flex items-center" }, index.h("span", { class: "material-icons text-body text-light" }, "date_range")), "data-menu": `${this.instanceId}-abs` })));
    }
    renderRelativeTimeMenu() {
        return (index.h("at-menu", { ref: (el) => (this.relativeTimeMenuEl = el), trigger: "click", width: "fit-content", autoclose: false, align: "end", trigger_id: `${this.instanceId}-rel` }, index.h("at-time-with-unit", { units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range?.selected ===
                date.TimeRangeDisplay.CUSTOM
                ? date.TimeRangeDisplay.ALL
                : this.selected_time_range?.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => {
                this.onChangeRelativeTime(event.detail);
                this.relativeTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.relativeTimeMenuEl?.closeMenu() })));
    }
    renderAbsoluteTimeMenu() {
        return (index.h("at-menu", { ref: (el) => (this.absoluteTimeMenuEl = el), trigger: "click", width: "fit-content", align: "end", autoclose: false, trigger_id: `${this.instanceId}-abs` }, index.h("at-custom-time-range", { min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.toDate, lock_end_date_to_now: this.selected_time_range?.custom?.lockEndDateToNow, onAtuiSubmit: (event) => {
                this.onChangeCustomTime(event.detail);
                this.absoluteTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.absoluteTimeMenuEl?.closeMenu() })));
    }
};

exports.at_time_range = AtTimeRangeComponent;
