'use strict';

var index = require('./index-DYE55yNY.js');
var atTimeRange_models = require('./at-time-range.models-BPZ2R6EI.js');
var atTimeDate_util = require('./at-time-date.util-6Fmc04Ie.js');
var translation = require('./translation-NP6A4XKu.js');
var timeRangeLabel_util = require('./time-range-label.util-BR6KvMfz.js');
var date = require('./date-DDRmOnS1.js');

const AtTimeRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiTimeChange = index.createEvent(this, "atuiTimeChange", 7);
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
    watchSelectedTimeRange(next) {
        this.displayedTimeRange = next;
    }
    /**
     * Lower limit of the time range.
     */
    range_limit = 7;
    /**
     * Define the presets for the relative time ranges. Presets longer than the
     * range limit are not shown.
     */
    presets = [...atTimeRange_models.AT_DEFAULT_TIME_PRESETS];
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
    translations;
    displayedTimeRange;
    defaultFromDate;
    defaultToDate;
    absoluteMaxDate;
    // Bumped on hover so the tooltip resolves the range as it is shown rather
    // than as it was last rendered.
    previewedAt;
    relativeTimeMenuEl;
    absoluteTimeMenuEl;
    absoluteTimeRangeEl;
    absoluteTimeApplied = false;
    get el() { return index.getElement(this); }
    /**
     * Emits an event containing the selected time range when it changes
     */
    atuiTimeChange;
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
        this.displayedTimeRange = this.selected_time_range;
        const { fromDate, toDate } = this.getDefaultDateRange();
        this.defaultFromDate = fromDate;
        this.defaultToDate = toDate;
        this.absoluteMaxDate = new Date();
    }
    // Every limit below is measured from the current time, so it is derived when
    // read rather than cached: a dashboard can sit open for days between renders.
    getLowerLimit() {
        return this.enable_range_limit
            ? new Date(Date.now() - this.range_limit * 86400 * 1000)
            : atTimeDate_util.AtTimeDateUtil.floorDateByTimeUnit(date.MIN_DATE, atTimeDate_util.Duration.HOURS);
    }
    getDefaultDateRange() {
        const selected = this.displayedTimeRange?.selected;
        if (selected &&
            typeof selected === 'object' &&
            selected.unit &&
            selected.value) {
            const { startDate, endDate } = atTimeDate_util.AtTimeDateUtil.getRelativeDateRange(selected);
            return { fromDate: startDate, toDate: endDate };
        }
        const now = new Date();
        return {
            fromDate: new Date(now.getTime() - 3600 * 1000),
            toDate: now,
        };
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
        return atTimeRange_models.AbreviatedTimeUnits[time.unit];
    }
    getVisiblePresetsWithinRangeLimit() {
        if (!this.presets) {
            return [];
        }
        const maxSeconds = atTimeDate_util.AtTimeDateUtil.getSecondsAgoFromDate(this.getLowerLimit());
        return this.presets.filter((preset) => atTimeDate_util.AtTimeDateUtil.convertToSeconds(preset) <= maxSeconds);
    }
    onChangeCustomTime(customTime) {
        this.displayedTimeRange = {
            selected: date.TimeRangeDisplay.CUSTOM,
            custom: { ...customTime },
        };
        this.atuiTimeChange.emit({ ...this.displayedTimeRange });
    }
    onChangeRelativeTime(time) {
        this.displayedTimeRange = { selected: time, custom: undefined };
        this.atuiTimeChange.emit({ ...this.displayedTimeRange });
    }
    onAbsoluteMenuStateChange(isOpen) {
        if (isOpen) {
            const { fromDate, toDate } = this.getDefaultDateRange();
            this.defaultFromDate = fromDate;
            this.defaultToDate = toDate;
            this.absoluteMaxDate = new Date();
            return;
        }
        if (!this.absoluteTimeApplied) {
            this.absoluteTimeRangeEl?.resetForm();
        }
        this.absoluteTimeApplied = false;
    }
    renderSelectedTimeDisplay() {
        const time = this.displayedTimeRange;
        if (!time?.selected) {
            return null;
        }
        if (time.selected === date.TimeRangeDisplay.ALL) {
            // "All time" reaches only as far back as the range limit allows, so
            // say where it actually starts rather than claiming no limit.
            const label = this.enable_range_limit
                ? (this.translations?.ATUI?.TIME?.ALL_TIME_SINCE ||
                    'All Time (since {date})').replace('{date}', timeRangeLabel_util.atGetTimestampLabel(this.getLowerLimit()))
                : this.translations?.ATUI?.TIME?.ALL_TIME_LABEL || 'All Time';
            return (index.h("div", { id: "all", class: "text-foreground flex items-center gap-4 font-normal" }, label));
        }
        if (time.custom) {
            const { start, end } = timeRangeLabel_util.atGetAbsoluteRangeParts(time.custom.from, time.custom.to);
            return (index.h("div", { id: "custom", class: "text-foreground flex items-center gap-4 font-normal" }, index.h("span", null, start), index.h("span", { class: "text-muted", "aria-hidden": "true" }, "-"), index.h("span", { class: "sr-only" }, this.translations?.ATUI?.TIME?.TO_SEPARATOR || 'to'), index.h("span", null, time.custom.lockEndDateToNow
                ? this.translations?.ATUI?.TIME?.NOW || 'Now'
                : end)));
        }
        const selected = time.selected;
        if (selected?.value && selected?.unit) {
            const { startDate, endDate } = atTimeDate_util.AtTimeDateUtil.getRelativeDateRange(selected);
            const resolved = timeRangeLabel_util.atGetAbsoluteRangeParts(startDate, endDate);
            const now = this.translations?.ATUI?.TIME?.NOW || 'Now';
            const to = this.translations?.ATUI?.TIME?.TO_SEPARATOR || 'to';
            return (index.h("div", { id: "relative", class: "text-foreground flex items-center gap-4 font-normal", onMouseEnter: () => (this.previewedAt = Date.now()), onFocusin: () => (this.previewedAt = Date.now()) }, index.h("at-tooltip", { position: "bottom" }, index.h("span", { slot: "tooltip-trigger" }, timeRangeLabel_util.atGetRelativeRangeLabel(selected, this.translations)), `${resolved.start} ${to} ${now}`)));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'fe0fc69a10f9fde2ee5fc32be091f75eb9100bbe', class: "relative flex justify-center gap-8" }, this.enable_relative_time
            ? this.renderRelativeTimeButtonGroup()
            : this.renderPredefinedTimeButtonGroup(), this.enable_relative_time && this.renderRelativeTimeMenu(), this.renderAbsoluteTimeMenu()));
    }
    renderRelativeTimeButtonGroup() {
        return (index.h("at-button-group", { key: "relative-time-group" }, index.h("at-button-group-option", { is_active: !this.displayedTimeRange?.custom, "data-ignore-selection": true, value: this.renderSelectedTimeDisplay(), "data-menu": `${this.instanceId}-rel` }), index.h("at-button-group-option", { class: "px-8", is_active: !!this.displayedTimeRange?.custom, "data-ignore-selection": true, "data-menu": `${this.instanceId}-abs` }, index.h("at-icon", { slot: "icon", name: "schedule" }))));
    }
    renderPredefinedTimeButtonGroup() {
        const selectedKey = typeof this.displayedTimeRange?.selected === 'object'
            ? `${this.displayedTimeRange.selected.unit}-${this.displayedTimeRange.selected.value}`
            : null;
        const presets = this.getVisiblePresetsWithinRangeLimit();
        return (index.h("at-button-group", { key: "predefined-time-group", value: selectedKey, onAtuiIndexChange: (event) => {
                if (event.detail < presets.length) {
                    this.onChangeRelativeTime(presets[event.detail]);
                }
            } }, presets.map((preset, idx) => (index.h("at-button-group-option", { key: idx, value: `${preset.unit}-${preset.value}`, label: `${preset.value}${this.getShortUnitDisplay(preset)}` }))), index.h("at-button-group-option", { is_active: !!this.displayedTimeRange?.custom, "data-ignore-selection": true, "data-menu": `${this.instanceId}-abs` }, index.h("at-icon", { slot: "icon", name: "schedule" }))));
    }
    renderRelativeTimeMenu() {
        return (index.h("at-menu", { ref: (el) => (this.relativeTimeMenuEl = el), trigger: "click", width: "fit-content", autoclose: false, align: "end", trigger_id: `${this.instanceId}-rel` }, index.h("at-time-with-unit", { units: this.units, common_options: this.presets, min_date: this.getLowerLimit(), min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range?.selected ===
                date.TimeRangeDisplay.CUSTOM
                ? date.TimeRangeDisplay.ALL
                : this.selected_time_range?.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => {
                this.onChangeRelativeTime(event.detail);
                this.relativeTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.relativeTimeMenuEl?.closeMenu() })));
    }
    renderAbsoluteTimeMenu() {
        return (index.h("at-menu", { ref: (el) => (this.absoluteTimeMenuEl = el), trigger: "click", width: "fit-content", align: "end", autoclose: false, trigger_id: `${this.instanceId}-abs`, onAtuiMenuStateChange: (event) => {
                this.onAbsoluteMenuStateChange(event.detail);
            } }, index.h("at-custom-time-range", { ref: (el) => (this.absoluteTimeRangeEl = el), min_date: this.getLowerLimit(), max_date: this.absoluteMaxDate, default_to_date: this.defaultToDate, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)
                ?.toDate, lock_end_date_to_now: this.selected_time_range?.custom?.lockEndDateToNow, onAtuiSubmit: (event) => {
                this.absoluteTimeApplied = true;
                this.onChangeCustomTime(event.detail);
                this.absoluteTimeMenuEl?.closeMenu();
            }, onAtuiCancel: () => this.absoluteTimeMenuEl?.closeMenu() })));
    }
    static get watchers() { return {
        "selected_time_range": [{
                "watchSelectedTimeRange": 0
            }]
    }; }
};

exports.at_time_range = AtTimeRangeComponent;
