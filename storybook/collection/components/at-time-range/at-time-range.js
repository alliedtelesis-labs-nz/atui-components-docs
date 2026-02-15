import { h, Host, } from "@stencil/core";
import { AbreviatedTimeUnits, FullTimeUnits, } from "../../models/at-time-range.models";
import { Duration, MIN_DATE, TimeRangeDisplay, TimeUnit, } from "../../types";
import { TimeDateUtil } from "../../utils/time-date.util";
import moment from "moment";
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
    lowerLimit;
    defaultFromDate;
    translations;
    relativeTimeMenuEl;
    absoluteTimeMenuEl;
    el;
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
    }
    componentWillRender() {
        this.lowerLimit = this.enable_range_limit
            ? moment().subtract(this.range_limit, 'day').toDate()
            : TimeDateUtil.floorDateByTimeUnit(MIN_DATE, Duration.HOURS);
        this.defaultFromDate = moment(this.today).subtract(1, 'hours').toDate();
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
        return TimeDateUtil.getRelativeDateRange(time.selected);
    }
    getCustomStartAndEndDate(selectedTime) {
        if (!selectedTime.custom) {
            return;
        }
        const { from, to } = selectedTime.custom;
        const fromDate = moment(from).toDate();
        const toDate = moment(to).toDate();
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
            selected: TimeRangeDisplay.CUSTOM,
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
        if (this.selected_time_range.selected === TimeRangeDisplay.ALL) {
            output.push({
                value: (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.ALL_TIME_LABEL))),
            });
        }
        else if (this.selected_time_range.custom) {
            output.push({
                value: [
                    h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", null, this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, this.selected_time_range.custom.lockEndDateToNow
                        ? 'NOW'
                        : this.getCustomStartAndEndDate(this.selected_time_range)?.toDate.toLocaleString())),
                ],
            });
        }
        else {
            output.push({
                value: (h("div", { class: "text-dark flex items-center gap-4 font-normal" }, h("span", { class: "font-medium" }, this.translations.ATUI.TIME.LAST, ` `, this.selected_time_range.selected['value'], ` `, this.translations.ATUI.TIME[this.getLongUnitDisplay(this.selected_time_range)], ' ', ":"), h("span", null, this.getRelativeDate(this.selected_time_range).startDate.toLocaleString()), h("span", { class: "icon-md material-icons text-light" }, "arrow_forward"), h("span", null, "NOW"))),
            });
        }
        output.push({
            value: (h("div", { class: "flex items-center" }, h("span", { class: "icon-md material-icons text-light" }, "date_range"))),
        });
        return output;
    }
    get predefinedTimeRanges() {
        const output = [];
        this.presets.forEach((timerange) => {
            output.push({
                value: (h("span", null, timerange.value, this.getShortUnitDisplay(timerange))),
            });
        });
        output.push({
            value: (h("div", { class: "flex items-center" }, h("span", { class: "material-icons text-body text-light" }, "date_range"))),
        });
        return output;
    }
    render() {
        return (h(Host, { key: 'c10f63881649d29383e43f2c50b1909f9dacdfed', class: "relative flex justify-center gap-8" }, this.enable_relative_time && (h("at-button-group", { key: '1a47087f0927298fe9c66969ce1c9f3b9f5a4263', options: this.buttonGroupOptions, onAtuiIndexChange: (event) => (event.detail === 0 &&
                this.relativeTimeMenuEl.focus()) ||
                (event.detail === 1 &&
                    this.absoluteTimeMenuEl.focus()) })), !this.enable_relative_time && (h("at-button-group", { key: 'a7da74450840f2cd6672cafc4e2825cb2cfa8c43', options: this.predefinedTimeRanges, onAtuiIndexChange: (event) => {
                if (event.detail < this.presets.length) {
                    this.onChangeRelativeTime(this.presets[event.detail]);
                }
                else if (event.detail ===
                    this.predefinedTimeRanges.length - 1) {
                    this.absoluteTimeMenuEl.focus();
                }
            } })), h("div", { key: '669af437073dc89e5680bd87ebd3165faf8bc5fd', ref: (el) => (this.relativeTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-time-with-unit", { key: 'e35e1c02e99276a369dc88294b0866a8266a708a', units: this.units, common_options: this.presets, min_date: this.lowerLimit, min_seconds: this.minSeconds, initial_selected_time: this.selected_time_range.selected ===
                TimeRangeDisplay.CUSTOM
                ? TimeRangeDisplay.ALL
                : this.selected_time_range.selected, custom_error_message: this.custom_error_message, show_all_time: this.show_all_time, onAtuiSubmit: (event) => this.onChangeRelativeTime(event.detail), onAtuiCancel: () => {
                this.relativeTimeMenuEl.focus();
                this.relativeTimeMenuEl.blur();
            } })), h("div", { key: '57c7c7058ab2c28b220eeba0d9248de41a8177a3', ref: (el) => (this.absoluteTimeMenuEl = el), class: "absolute top-[42px] z-10 h-0 overflow-hidden bg-white focus-within:h-fit focus-within:overflow-visible focus:h-fit", tabindex: 0, onChange: (event) => event.stopPropagation() }, h("at-custom-time-range", { key: '1d0b52a6b3951060db8d11778dbf5e59ece7a604', min_date: this.lowerLimit, default_to_date: this.today, default_from_date: this.defaultFromDate, from_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.fromDate, to_date_value: this.getCustomStartAndEndDate(this.selected_time_range)?.toDate, lock_end_date_to_now: this.selected_time_range.custom?.lockEndDateToNow, onAtuiSubmit: (event) => this.onChangeCustomTime(event.detail), onAtuiCancel: () => {
                this.absoluteTimeMenuEl.focus();
                this.absoluteTimeMenuEl.blur();
            } }))));
    }
    static get is() { return "at-time-range"; }
    static get properties() {
        return {
            "selected_time_range": {
                "type": "unknown",
                "mutable": false,
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
            "lowerLimit": {},
            "defaultFromDate": {},
            "translations": {},
            "relativeTimeMenuEl": {},
            "absoluteTimeMenuEl": {}
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
