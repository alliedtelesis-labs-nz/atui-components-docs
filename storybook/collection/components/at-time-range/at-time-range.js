import { h, Host, } from "@stencil/core";
import { FullTimeUnits, } from "../../models/at-time-range.models";
import { Duration, MIN_DATE, TimeRangeDisplay, TimeUnit, } from "../../types";
import { TimeDateUtil } from "../../utils/time-date.util";
import { fetchTranslations } from "../../utils/translation";
/**
 * @category Form Controls
 * @description A time range component for selecting time periods.
 */
export class AtTimeRangeComponent {
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
    el;
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
            return (h("div", { id: "relative", class: "text-dark flex items-center gap-4 font-normal" }, h("span", null, "Last ", selected.value, " ", unitLabel, ":"), startDate && h("span", null, this.formatDate(startDate)), h("span", { class: "icon-md material-icons text-disabled" }, "arrow_forward"), h("span", null, "NOW")));
        }
    }
    render() {
        return (h(Host, { key: '4a6341ff8d52eca9cbdbd011c2f85bcc122e0f54', class: "relative flex justify-center gap-8" }, this.enable_relative_time
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
    static get is() { return "at-time-range"; }
    static get properties() {
        return {
            "selected_time_range": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "AtSelectedTimeRangeExtended",
                    "resolved": "AtISelectedTimeRange | { selected: TimeRangeDisplay.ALL; custom?: undefined; }",
                    "references": {
                        "AtSelectedTimeRangeExtended": {
                            "location": "import",
                            "path": "../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::AtSelectedTimeRangeExtended",
                            "referenceLocation": "AtSelectedTimeRangeExtended"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected time range."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n        selected: {\n            unit: TimeUnit.HOURS,\n            value: 1,\n        },\n    }"
            },
            "range_limit": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Lower limit of the time range."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "range_limit",
                "defaultValue": "7"
            },
            "presets": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TimePresets[]",
                    "resolved": "TimePresets[]",
                    "references": {
                        "TimePresets": {
                            "location": "import",
                            "path": "../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::TimePresets",
                            "referenceLocation": "TimePresets"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define the presets for the relative time ranges."
                },
                "getter": false,
                "setter": false
            },
            "enable_relative_time": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable relative time selection."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_relative_time",
                "defaultValue": "true"
            },
            "custom_error_message": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Custom error message to show when an invalid time is inputted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "custom_error_message",
                "defaultValue": "null"
            },
            "show_all_time": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable all time selection."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_all_time",
                "defaultValue": "false"
            },
            "enable_range_limit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring\nthe value of range limit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_range_limit",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "today": {},
            "translations": {},
            "displayedTimeRange": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event containing the selected time range when it changes"
                },
                "complexType": {
                    "original": "AtSelectedTimeRangeExtended",
                    "resolved": "AtISelectedTimeRange | { selected: TimeRangeDisplay.ALL; custom?: undefined; }",
                    "references": {
                        "AtSelectedTimeRangeExtended": {
                            "location": "import",
                            "path": "../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::AtSelectedTimeRangeExtended",
                            "referenceLocation": "AtSelectedTimeRangeExtended"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
