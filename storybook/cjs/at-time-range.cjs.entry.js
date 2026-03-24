'use strict';

var index = require('./index-CdUivN1V.js');
var atTimeDate_util = require('./at-time-date.util-6Fmc04Ie.js');
var translation = require('./translation-C7aG_Jvq.js');
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
            unit: atTimeDate_util.AtTimeUnit.HOURS,
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
        atTimeDate_util.AtTimeUnit.MINUTES,
        atTimeDate_util.AtTimeUnit.HOURS,
        atTimeDate_util.AtTimeUnit.DAYS,
        atTimeDate_util.AtTimeUnit.WEEKS,
        atTimeDate_util.AtTimeUnit.MONTHS,
        atTimeDate_util.AtTimeUnit.YEARS,
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
            : atTimeDate_util.AtTimeDateUtil.floorDateByTimeUnit(date.MIN_DATE, atTimeDate_util.Duration.HOURS);
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
        return AbreviatedTimeUnits[time.unit];
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
        return atTimeDate_util.dayjs(date).format('D/M/YY, h:mm A');
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
            return (index.h("div", { id: "custom", class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", null, this.formatDate(time.custom.from)), index.h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), index.h("span", null, time.custom.lockEndDateToNow
                ? 'NOW'
                : this.formatDate(time.custom.to))));
        }
        const selected = time.selected;
        if (selected?.value && selected?.unit) {
            const unitLabel = this.getShortUnitDisplay(selected);
            const startDate = atTimeDate_util.AtTimeDateUtil.getRelativeDateRange(selected)?.startDate;
            return (index.h("div", { id: "relative", class: "text-dark flex items-center gap-4 font-normal" }, index.h("span", null, "Last ", selected.value, " ", unitLabel, ":"), startDate && index.h("span", null, this.formatDate(startDate)), index.h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), index.h("span", null, "NOW")));
        }
    }
    render() {
        return (index.h(index.Host, { key: '124d1b5dcc461c6374d9e88be10614b3d6381634', class: "relative flex justify-center gap-8" }, this.enable_relative_time
            ? this.renderRelativeTimeButtonGroup()
            : this.renderPredefinedTimeButtonGroup(), this.enable_relative_time && this.renderRelativeTimeMenu(), this.renderAbsoluteTimeMenu()));
    }
    renderRelativeTimeButtonGroup() {
        return (index.h("at-button-group", { key: "relative-time-group" }, index.h("at-button-group-option", { is_active: !this.displayedTimeRange?.custom, "data-ignore-selection": true, value: this.renderSelectedTimeDisplay(), "data-menu": `${this.instanceId}-rel` }), index.h("at-button-group-option", { is_active: !!this.displayedTimeRange?.custom, "data-ignore-selection": true, "data-menu": `${this.instanceId}-abs`, icon: "date_range" })));
    }
    renderPredefinedTimeButtonGroup() {
        const selectedKey = typeof this.displayedTimeRange?.selected === 'object'
            ? `${this.displayedTimeRange.selected.unit}-${this.displayedTimeRange.selected.value}`
            : null;
        return (index.h("at-button-group", { key: "predefined-time-group", value: selectedKey, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
            } }, this.presets.map((preset, idx) => (index.h("at-button-group-option", { key: idx, value: `${preset.unit}-${preset.value}` }, index.h("span", null, preset.value, this.getShortUnitDisplay(preset))))), index.h("at-button-group-option", { icon: "date_range", is_active: !!this.displayedTimeRange?.custom, "data-ignore-selection": true, "data-menu": `${this.instanceId}-abs` })));
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
