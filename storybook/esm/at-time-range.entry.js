import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
import { a as TimeUnit, T as TimeDateUtil, D as Duration } from './time-date.util-BVcKLUhw.js';
import { f as fetchTranslations } from './translation-BEQMH4Lc.js';
import { M as MIN_DATE, T as TimeRangeDisplay } from './date-C3LwY5aR.js';

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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Selected time range.
     */
    selected_time_range = {
        selected: {
            unit: TimeUnit.HOURS,
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
    get el() { return getElement(this); }
    instanceId = `atr-${Math.random().toString(36).slice(2, 8)}`;
    units = [
        TimeUnit.MINUTES,
        TimeUnit.HOURS,
        TimeUnit.DAYS,
        TimeUnit.WEEKS,
        TimeUnit.MONTHS,
        TimeUnit.YEARS,
    ];
    minSeconds = 300;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.today = new Date();
        this.displayedTimeRange = this.selected_time_range;
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? new Date(Date.now() - this.range_limit * 86400 * 1000)
            : TimeDateUtil.floorDateByTimeUnit(MIN_DATE, Duration.HOURS);
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
            selected: TimeRangeDisplay.CUSTOM,
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
        if (time.selected === TimeRangeDisplay.ALL) {
            return (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, this.translations?.ATUI?.TIME?.ALL_TIME_LABEL ||
                'All Time'));
        }
        if (time.custom) {
            return (h("div", { id: "custom", class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.formatDate(time.custom.from)), h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), h("span", null, time.custom.lockEndDateToNow
                ? 'NOW'
                : this.formatDate(time.custom.to))));
        }
        const selected = time.selected;
        if (selected?.value && selected?.unit) {
            const unitLabel = this.getShortUnitDisplay(selected);
            const startDate = TimeDateUtil.getRelativeDateRange(selected)?.startDate;
            return (h("div", { id: "relative", class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, "Last ", selected.value, " ", unitLabel, ":"), startDate && h("span", null, this.formatDate(startDate)), h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), h("span", null, "NOW")));
        }
    }
    render() {
        return (h(Host, { key: 'd75047752eeb857ef1b8dd74b7efd8808743b1b4', class: "relative flex justify-center gap-8" }, this.enable_relative_time
            ? this.renderRelativeTimeButtonGroup()
            : this.renderPredefinedTimeButtonGroup(), this.enable_relative_time && this.renderRelativeTimeMenu(), this.renderAbsoluteTimeMenu()));
    }
    renderRelativeTimeButtonGroup() {
        return (h("at-button-group", { key: "relative-time-group" }, h("at-button-group-option", { value: this.renderSelectedTimeDisplay(), "data-menu": `${this.instanceId}-rel` }), h("at-button-group-option", { "data-menu": `${this.instanceId}-abs` }, h("div", { class: "flex items-center" }, h("span", { class: "icon-md material-icons" }, "date_range")))));
    }
    renderPredefinedTimeButtonGroup() {
        return (h("at-button-group", { key: "predefined-time-group", onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
            } }, this.presets.map((preset, idx) => (h("at-button-group-option", { key: idx }, h("span", null, preset.value, this.getShortUnitDisplay(preset))))), h("at-button-group-option", { value: h("div", { class: "flex items-center" }, h("span", { class: "material-icons text-body text-light" }, "date_range")), "data-menu": `${this.instanceId}-abs` })));
    }
    renderRelativeTimeMenu() {
        return (h("at-menu", { ref: (el) => (this.relativeTimeMenuEl = el), trigger: "click", width: "fit-content", autoclose: false, align: "end", trigger_id: `${this.instanceId}-rel` }, h("at-time-with-unit", { units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range?.selected ===
                TimeRangeDisplay.CUSTOM
                ? TimeRangeDisplay.ALL
                : this.selected_time_range?.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => {
                this.onChangeRelativeTime(event.detail);
                this.relativeTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.relativeTimeMenuEl?.closeMenu() })));
    }
    renderAbsoluteTimeMenu() {
        return (h("at-menu", { ref: (el) => (this.absoluteTimeMenuEl = el), trigger: "click", width: "fit-content", align: "end", autoclose: false, trigger_id: `${this.instanceId}-abs` }, h("at-custom-time-range", { min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.toDate, lock_end_date_to_now: this.selected_time_range?.custom?.lockEndDateToNow, onAtuiSubmit: (event) => {
                this.onChangeCustomTime(event.detail);
                this.absoluteTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.absoluteTimeMenuEl?.closeMenu() })));
    }
};

export { AtTimeRangeComponent as at_time_range };
