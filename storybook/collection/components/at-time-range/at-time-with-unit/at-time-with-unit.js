import { h, Fragment, } from "@stencil/core";
import { TimeExtraOptions } from "../../../types/time";
import { TimeRangeDisplay } from "../../../types/date";
import { fetchTranslations } from "../../../utils/translation";
import { TimeDateUtil } from "../../../utils/time-date.util";
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
        this.updateSelectedTime(this.timeValue);
    }
    timeUnit;
    watchTimeUnit() {
        this.updateSelectedTime(this.timeValue);
    }
    selectedTime;
    startDate;
    el;
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
            ? TimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : TimeExtraOptions.ALL;
        const value = typeof initialTimeRange === 'object'
            ? initialTimeRange.value
            : null;
        this.timeUnit = unit;
        this.timeValue = value;
        this.selectedTime = initialTimeRange;
        this.startDate = this.getRelativeDate()?.startDate;
    }
    updateSelectedTime(value) {
        const unit = this.timeUnit;
        if (unit !== TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
        }
        else {
            this.selectedTime = TimeRangeDisplay.ALL;
            if (this.timeValue) {
                this.timeValue = null;
            }
        }
        this.validateInput();
        this.startDate = this.getRelativeDate()?.startDate;
    }
    validateInput() {
        if (this.selectedTime !== TimeRangeDisplay.ALL) {
            const maxSeconds = this.min_date
                ? TimeDateUtil.getSecondsAgoFromDate(this.min_date)
                : this.max_seconds;
            const maxTimeValue = TimeDateUtil.convertSecondsToUnit(maxSeconds, this.timeUnit, 0, true);
            const minTimeValue = TimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
            if (this.timeValue > maxTimeValue)
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MAX_NUMBER.replace('{lowerThanValue}', `${maxTimeValue + 1} ${this.timeUnit}`)
                    : `Please enter a value lower than ${maxTimeValue} ${this.timeUnit}`;
            else if (this.timeValue < minTimeValue)
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MIN_NUMBER.replace('{min}', `${maxTimeValue} ${this.timeUnit}`)
                    : `Please enter a value larger than ${minTimeValue} ${this.timeUnit}`;
            else
                this.errorText = '';
            if (this.errorText && this.custom_error_message) {
                this.secondaryErrorText = this.custom_error_message;
            }
        }
    }
    updateSelectedRange(value) {
        this.timeUnit = value.unit;
        this.timeValue = value.value;
        this.selectedTime = value;
    }
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return TimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
    }
    clearSelection() {
        if (typeof this.initial_selected_time === 'object') {
            this.timeValue = this.initial_selected_time.value;
            this.timeUnit = this.initial_selected_time.unit;
        }
        else {
            this.timeValue = null;
            this.timeUnit = TimeExtraOptions.ALL;
        }
    }
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit;
    handleCancel() {
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (this.errorText === '') {
            this.atuiSubmit.emit(this.selectedTime);
        }
    }
    handleSelectChange(event) {
        const timeTranslationObject = this.translations.ATUI.TIME;
        const newValue = event.detail;
        this.timeUnit = (this.translations
            ? Object.keys(timeTranslationObject).find((key) => timeTranslationObject[key] === newValue)
            : newValue);
    }
    render() {
        return (h("div", { key: 'c39144a58e5fc13dfdf52d384a0defee93154204', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: 'ca761d69068f4ce9a7e6f40ab9d3fda65482e3be', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'a06b1f4eca47f9c5e884658724c0d8be677d360d', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '8eb803f7a0dcc3cf35f47be408f495cae5cf0f1e', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: '900517ab5af470643b078b2472bdd48e8bd256b1', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("at-select", { key: '79e18aed56ae6d3ebc0072e0f55cbfbe62091c4d', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: 'e60ee62c09602089eb73122d0a51519118860c05', class: "flex flex-col gap-8 px-12" }, h("h5", { key: '165b603b43e31cb947375f2a6c87e8ed14fce76d', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: 'bac68525eda5d741982b850c14727c524aff2a6b', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), h("footer", { key: '7b7f37453c97b3d6e36122341dbf53c26b6fd3e7', class: "flex justify-between p-8" }, h("at-button", { key: 'b9b420a9f9fc02a59d7f974f9d8df3e22d318537', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '70d6d7e2e599335a670661f0d68e3eae196dfc27', class: "flex gap-8" }, h("at-button", { key: '522d38cbe023332db73132bf4dec73c21e7fb3e4', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '988e37059fea0989adde06486a1e4415fac4064c', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get is() { return "at-time-with-unit"; }
    static get properties() {
        return {
            "units": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TimeUnit[]",
                    "resolved": "TimeUnit[]",
                    "references": {
                        "TimeUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::TimeUnit"
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
                    "original": "TimePresets[]",
                    "resolved": "TimePresets[]",
                    "references": {
                        "TimePresets": {
                            "location": "import",
                            "path": "../../../models/at-time-range.models",
                            "id": "src/models/at-time-range.models.ts::TimePresets"
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
                    "original": "TimeWithUnit | TimeRangeDisplay.ALL",
                    "resolved": "TimeRangeDisplay.ALL | TimeWithUnit",
                    "references": {
                        "TimeWithUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::TimeWithUnit"
                        },
                        "TimeRangeDisplay": {
                            "location": "import",
                            "path": "../../../types/date",
                            "id": "src/types/date.ts::TimeRangeDisplay"
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
            "startDate": {}
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
                    "original": "TimeWithUnit | TimeRangeDisplay.ALL",
                    "resolved": "TimeRangeDisplay.ALL | TimeWithUnit",
                    "references": {
                        "TimeWithUnit": {
                            "location": "import",
                            "path": "../../../types/time",
                            "id": "src/types/time.ts::TimeWithUnit"
                        },
                        "TimeRangeDisplay": {
                            "location": "import",
                            "path": "../../../types/date",
                            "id": "src/types/date.ts::TimeRangeDisplay"
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
                "methodName": "watchTimeUnit"
            }];
    }
}
//# sourceMappingURL=at-time-with-unit.js.map
