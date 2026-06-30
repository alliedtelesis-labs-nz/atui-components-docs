import { h, Fragment, } from "@stencil/core";
import { TimeExtraOptions, } from "../../../types/time";
import { TimeRangeDisplay } from "../../../types/date";
import { fetchTranslations } from "../../../utils/translation";
import { AtTimeDateUtil } from "../../../utils/at-time-date.util";
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
        this.dropdownOptions = this.show_all_time
            ? [TimeExtraOptions.ALL, ...this.units]
            : this.units;
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
    validateInput() {
        if (this.selectedTime !== TimeRangeDisplay.ALL) {
            const maxSeconds = this.min_date
                ? AtTimeDateUtil.getSecondsAgoFromDate(this.min_date)
                : this.max_seconds;
            const maxTimeValue = AtTimeDateUtil.convertSecondsToUnit(maxSeconds, this.timeUnit, 0, true);
            const minTimeValue = AtTimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
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
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return AtTimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
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
        return (h("div", { key: '369404a3f017c4c3b6034abc66812ade99c9b5f9', class: "w-panel-sm flex flex-col gap-16", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: '12991398bde0caac8d604361c768d129f54aa179', class: "flex flex-col gap-8 p-12" }, h("h5", { key: '3960d7b00e606eb4c1a5109b96c6633c6c340d6b', class: "text-h5 text-foreground font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '2457e3180e14600780c062af71b498299df2edeb', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: 'bed20252f482347a1a5657ce3c30e4f2656e8569', value: this.timeValue, disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), h("at-select", { key: 'd422982dee6aa423a4eb3e986a017f8c7969301e', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI.TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: '650e0e94b95ca0eaa5551893f3bdd4868ff3bb19', class: "flex flex-col gap-8 px-12" }, h("h5", { key: '29884b4f943c8fee972bb9bee04f61ab8cd57f13', class: "text-h5 text-foreground font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '38b225533f9cb24853fe04497db3c8502c4a85c1', class: "grid grid-cols-2 content-stretch", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `hover:bg-surface-1 rounded-sm px-[6px] py-2 text-left ${this.selectedTime !== TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light hover:bg-active-light' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), h("footer", { key: '3ba3203aea5b46d3dd7e9a0d3cc48fb863172450', class: "flex justify-between p-8" }, h("at-button", { key: '692e55921dfdd112f1bde8358ab5e1ffa9825328', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '0f7f0638ba61b0e774faa4fb97e493b832231377', class: "flex gap-8" }, h("at-button", { key: '29fb7556e76f4d27f5ac39f6198ae4602fa92103', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '0f3a236ae1ec2f6635b2de598404cae15e915d39', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
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
