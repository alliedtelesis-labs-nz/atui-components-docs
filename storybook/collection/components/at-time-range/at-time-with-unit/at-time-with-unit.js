import { h, Fragment, } from "@stencil/core";
import { TimeExtraOptions, } from "../../../types/time";
import { TimeRangeDisplay } from "../../../types/date";
import { fetchTranslations } from "../../../utils/translation";
import { AtTimeDateUtil } from "../../../utils/at-time-date.util";
import { atGetRelativeRangeLabel } from "../../../utils/time-range-label.util";
const LIMIT_DRIFT_TOLERANCE_SECONDS = 60;
/**
 * @category Form Controls
 * @description A time with unit component for selecting a time period.
 */
export class AtTimeWithUnitComponent {
    /**
     * Available time units for selection
     */
    units;
    /**
     * Common time preset options to display
     */
    common_options;
    /**
     * Minimum date constraint for time selection
     */
    min_date = null;
    /**
     * Minimum number of seconds allowed for time selection
     */
    min_seconds = 60;
    /**
     * Maximum number of seconds allowed for time selection
     */
    max_seconds = Number.MAX_SAFE_INTEGER;
    /**
     * Initial time selection value
     */
    initial_selected_time;
    /**
     * Custom error message to display when validation fails
     */
    custom_error_message = null;
    /**
     * Whether to show the 'All Time' option
     */
    show_all_time = false;
    errorText = '';
    secondaryErrorText = '';
    translations;
    dropdownOptions;
    timeValue;
    watchTimeValue() {
        this.updateSelectedTime();
    }
    timeUnit;
    watchAtTimeUnit() {
        this.updateSelectedTime();
    }
    selectedTime;
    startDate;
    disabledTimeValue = false;
    el;
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.selectedTime) {
            this.initSelectedTime(this.initial_selected_time);
            this.initDropdownOptions();
        }
    }
    initDropdownOptions() {
        const units = this.getVisibleUnitsWithinRangeLimit();
        this.dropdownOptions = this.show_all_time
            ? [TimeExtraOptions.ALL, ...units]
            : units;
    }
    getVisibleUnitsWithinRangeLimit() {
        if (!this.units) {
            return [];
        }
        if (!this.min_date) {
            return this.units;
        }
        const maxSeconds = AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.units.filter((unit) => AtTimeDateUtil.convertToSeconds({ unit, value: 1 }) <=
            maxSeconds);
    }
    initSelectedTime(initialTimeRange) {
        const unit = typeof initialTimeRange === 'object'
            ? AtTimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : TimeExtraOptions.ALL;
        const value = typeof initialTimeRange === 'object'
            ? initialTimeRange.value
            : null;
        this.timeUnit = unit;
        this.timeValue = value;
        this.selectedTime = initialTimeRange;
        this.startDate = this.getRelativeDate()?.startDate;
    }
    updateSelectedTime() {
        const unit = this.timeUnit;
        const value = this.timeValue;
        if (unit !== TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
            this.disabledTimeValue = false;
        }
        else {
            this.selectedTime = TimeRangeDisplay.ALL;
            this.timeValue = null;
            this.disabledTimeValue = true;
        }
        this.validateInput();
        this.startDate = this.getRelativeDate()?.startDate;
    }
    formatDuration(seconds) {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        if (days > 0)
            return hours > 0 ? `${days}d ${hours}hr` : `${days}d`;
        if (hours > 0)
            return mins > 0 ? `${hours}hr ${mins}min` : `${hours}hr`;
        return `${mins}min`;
    }
    getMaxSeconds() {
        return this.min_date
            ? AtTimeDateUtil.getSecondsAgoFromDate(this.min_date)
            : this.max_seconds;
    }
    getMaxTimeValue() {
        const secondsPerUnit = this.timeUnit === TimeExtraOptions.ALL
            ? 1
            : AtTimeDateUtil.convertToSeconds({
                unit: this.timeUnit,
                value: 1,
            });
        // The limit is re-derived from Date.now() on every render, so an exact
        // bound (a 7-day range_limit) arrives a few seconds short; flooring it
        // without the tolerance would drop a whole unit and clamp 7 days to 6.
        return Math.floor((this.getMaxSeconds() + LIMIT_DRIFT_TOLERANCE_SECONDS) /
            secondsPerUnit);
    }
    getMinTimeValue() {
        return AtTimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
    }
    validateInput() {
        if (this.selectedTime !== TimeRangeDisplay.ALL) {
            const maxSeconds = this.getMaxSeconds();
            const maxTimeValue = this.getMaxTimeValue();
            const minTimeValue = this.getMinTimeValue();
            if (this.timeValue > maxTimeValue) {
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MAX_NUMBER.replace('{lowerThanValue}', this.formatDuration(maxSeconds))
                    : `Please enter a value lower than ${this.formatDuration(maxSeconds)}`;
            }
            else if (this.timeValue < minTimeValue) {
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MIN_NUMBER.replace('{min}', this.formatDuration(this.min_seconds))
                    : `Please enter a value larger than ${this.formatDuration(this.min_seconds)}`;
            }
            else {
                this.errorText = '';
            }
            if (this.errorText && this.custom_error_message) {
                this.secondaryErrorText = this.custom_error_message;
            }
        }
        else {
            this.errorText = '';
        }
    }
    updateSelectedRange(value) {
        this.timeUnit = value.unit;
        this.timeValue = value.value;
        this.selectedTime = value;
    }
    isSelectedOption(option) {
        return (this.selectedTime !== TimeRangeDisplay.ALL &&
            this.selectedTime?.value === option.value &&
            this.selectedTime?.unit === option.unit);
    }
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return AtTimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
    }
    getVisibleCommonOptionsWithinRangeLimit() {
        if (!this.common_options) {
            return [];
        }
        if (!this.min_date) {
            return this.common_options;
        }
        const maxSeconds = AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.common_options.filter((option) => AtTimeDateUtil.convertToSeconds(option) <= maxSeconds);
    }
    clearSelection() {
        if (typeof this.initial_selected_time === 'object') {
            this.timeUnit = this.initial_selected_time.unit;
            this.timeValue = this.initial_selected_time.value;
        }
        else {
            this.timeUnit = TimeExtraOptions.ALL;
            this.timeValue = null;
        }
    }
    handleCancel() {
        this.clearSelection();
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (this.errorText === '') {
            this.atuiSubmit.emit(this.selectedTime);
        }
    }
    handleSelectChange(event) {
        this.timeUnit = event.detail;
    }
    render() {
        const visibleCommonOptions = this.getVisibleCommonOptionsWithinRangeLimit();
        return (h("div", { key: '683652374a49aecff299f5b7d9fb5cd838411e5c', class: "w-panel-sm flex flex-col" }, h("div", { key: 'b93a4b9315a25327daf892438a4eca22b47c094c', class: "grid grid-cols-[1fr_1fr] gap-8" }, h("div", { key: '30ee49438803b924ff570f78e1ef3a6f7e151a07', class: "border-muted flex flex-col gap-8 border-r p-12" }, h("h5", { key: '6abcfcb986f6dc228d350e2fba08b4a3cf394685', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '5dd497c83a4ae2450c80057e9c75e588a51f7105', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: 'a84123d2f6d04e73da16db0a669d9a037dec667d', value: this.timeValue, min: 1, max: this.getMaxTimeValue(), disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), h("at-select", { key: '9059e119bad7ce1916988047a90422193825a18c', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI
                        .TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2013", ' ', this.translations?.ATUI?.TIME?.NOW ||
            'Now'))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (h("div", { key: '1cffaed460881c1387b3a44303ff97de8e8119ff', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'a36125698521309a61b674f3afe4f7ddf179bead', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: 'b2df0e131bf16f29ebafbb253902ad940e3dbd6f', class: "flex flex-col content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                event.stopPropagation();
                if (event.key === 'Enter' ||
                    event.key === ' ')
                    this.updateSelectedRange(timerange);
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background text-foreground' : 'hover:bg-surface-2'}` }, h("small", null, atGetRelativeRangeLabel(timerange, this.translations))))))))), h("footer", { key: 'fe08b6488f83fbb7cd1419f042d215e71ebb77f6', class: "border-muted flex justify-between border-t p-8" }, h("at-button", { key: '8a141511e165fd188e2f3575ae0a54922c3031da', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '2e4b147f6b96732996650bca7aa8d88837bd0972', class: "flex gap-8" }, h("at-button", { key: 'baec3efe36493a045a8549c4e35a2ae1a1c0dcc8', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '1b1910373ea47ef94f41a2c1e7afe6a4ea8ee71e', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get is() { return "at-time-with-unit"; }
    static get properties() {
        return {
            "units": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtTimeUnit[]",
                    "resolved": "AtTimeUnit[]",
                    "references": {
                        "AtTimeUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::AtTimeUnit",
                            "referenceLocation": "AtTimeUnit"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Available time units for selection"
                },
                "getter": false,
                "setter": false
            },
            "common_options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtTimePresets[]",
                    "resolved": "AtTimePresets[]",
                    "references": {
                        "AtTimePresets": {
                            "location": "import",
                            "path": "../../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::AtTimePresets",
                            "referenceLocation": "AtTimePresets"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Common time preset options to display"
                },
                "getter": false,
                "setter": false
            },
            "min_date": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum date constraint for time selection"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "min_seconds": {
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
                    "text": "Minimum number of seconds allowed for time selection"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min_seconds",
                "defaultValue": "60"
            },
            "max_seconds": {
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
                    "text": "Maximum number of seconds allowed for time selection"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_seconds",
                "defaultValue": "Number.MAX_SAFE_INTEGER"
            },
            "initial_selected_time": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtITimeWithUnit | TimeRangeDisplay.ALL",
                    "resolved": "AtITimeWithUnit | TimeRangeDisplay.ALL",
                    "references": {
                        "AtITimeWithUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::AtITimeWithUnit",
                            "referenceLocation": "AtITimeWithUnit"
                        },
                        "TimeRangeDisplay": {
                            "location": "import",
                            "path": "../../../types/date",
                            "id": "src/types/date.ts::TimeRangeDisplay",
                            "referenceLocation": "TimeRangeDisplay"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial time selection value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "initial_selected_time"
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
                    "text": "Custom error message to display when validation fails"
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
                    "text": "Whether to show the 'All Time' option"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_all_time",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "errorText": {},
            "secondaryErrorText": {},
            "translations": {},
            "dropdownOptions": {},
            "timeValue": {},
            "timeUnit": {},
            "selectedTime": {},
            "startDate": {},
            "disabledTimeValue": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiCancel",
                "name": "atuiCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user cancels the time selection"
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "atuiSubmit",
                "name": "atuiSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user submits the time selection"
                },
                "complexType": {
                    "original": "AtITimeWithUnit | TimeRangeDisplay.ALL",
                    "resolved": "AtITimeWithUnit | TimeRangeDisplay.ALL",
                    "references": {
                        "AtITimeWithUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::AtITimeWithUnit",
                            "referenceLocation": "AtITimeWithUnit"
                        },
                        "TimeRangeDisplay": {
                            "location": "import",
                            "path": "../../../types/date",
                            "id": "src/types/date.ts::TimeRangeDisplay",
                            "referenceLocation": "TimeRangeDisplay"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "timeValue",
                "methodName": "watchTimeValue"
            }, {
                "propName": "timeUnit",
                "methodName": "watchAtTimeUnit"
            }];
    }
}
