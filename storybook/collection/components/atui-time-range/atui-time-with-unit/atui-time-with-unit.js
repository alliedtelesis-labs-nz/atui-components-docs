import { h, Fragment, } from "@stencil/core";
import { TimeExtraOptions } from "../../../types/time";
import { TimeRangeDisplay } from "../../../types/date";
import { fetchTranslations } from "../../../utils/translation";
import { TimeDateUtil } from "../../../utils/time-date.util";
/**
 * @category Form Controls
 * @description A time with unit component for selecting a time period.
 */
export class AtuiTimeWithUnitComponent {
    constructor() {
        /**
         * Minimum date constraint for time selection
         */
        this.min_date = null;
        /**
         * Minimum number of seconds allowed for time selection
         */
        this.min_seconds = 60;
        /**
         * Maximum number of seconds allowed for time selection
         */
        this.max_seconds = Number.MAX_SAFE_INTEGER;
        /**
         * Custom error message to display when validation fails
         */
        this.custom_error_message = null;
        /**
         * Whether to show the 'All Time' option
         */
        this.show_all_time = false;
        this.errorText = '';
        this.secondaryErrorText = '';
    }
    watchTimeValue() {
        this.updateSelectedTime(this.timeValue);
    }
    watchTimeUnit() {
        this.updateSelectedTime(this.timeValue);
    }
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
        var _a;
        const unit = typeof initialTimeRange === 'object'
            ? TimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : TimeExtraOptions.ALL;
        const value = typeof initialTimeRange === 'object'
            ? initialTimeRange.value
            : null;
        this.timeUnit = unit;
        this.timeValue = value;
        this.selectedTime = initialTimeRange;
        this.startDate = (_a = this.getRelativeDate()) === null || _a === void 0 ? void 0 : _a.startDate;
    }
    updateSelectedTime(value) {
        var _a;
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
        this.startDate = (_a = this.getRelativeDate()) === null || _a === void 0 ? void 0 : _a.startDate;
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
        var _a;
        return (h("div", { key: 'caf04031d068300e27e2e451ca0e26a1b86068e2', class: "flex w-panel-sm flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: '501d6a15c48fa7464f3f4f4fcf8b7c7250233cbf', class: "flex flex-col gap-8 p-12" }, h("h5", { key: '0ac468fead3098f3833fcb555494a47991e81bf8', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '41f208921e07c1a44ff466f4d6f48d45b92e2588', class: "flex flex-col gap-8" }, h("atui-input-numeric", { key: '8471144b124009b87048f3eafaf9f66b6e45ec45', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("atui-select", { key: '1cb6c8110284f44a36407eda88afa8bcb9e45089', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.unit) && (h("span", { class: "text-sm font-normal text-med" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-sm font-normal text-med" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: '9b2edfdcb98b2fa2fe43b0748c536ae1527b8368', class: "flex flex-col gap-8 px-12" }, h("h5", { key: '4318b4fb8d4a8354fa87bc9df4b1ca50c42e4f19', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '1c7c7319150c80097687b78cf2d9aed91e6c4c6e', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => {
                var _a, _b;
                return (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                        event.stopPropagation();
                        if (event.key === 'Enter' ||
                            event.key === ' ')
                            this.updateSelectedRange(timerange);
                    }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.value) === timerange.value && ((_b = this.selectedTime) === null || _b === void 0 ? void 0 : _b.unit) === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit])));
            })))), h("footer", { key: 'e760f3d8ddab2061ccd39462d05df16d1151d502', class: "flex justify-between p-8" }, h("atui-button", { key: '8bb121a49a906e36c08bca09e2c8a08a686e1684', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '95fe9f01bf4522a71185268cdce92cf45e49c124', class: "flex gap-8" }, h("atui-button", { key: '8baafda00be42256b3e46d923ca4e5a3c4bec5b5', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("atui-button", { key: 'f8e7dc5cfef38acc6a291e5fc7b7c3a0ec476763', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get is() { return "atui-time-with-unit"; }
    static get properties() {
        return {
            "units": {
                "type": "unknown",
                "attribute": "units",
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
                "attribute": "common_options",
                "mutable": false,
                "complexType": {
                    "original": "TimePresets[]",
                    "resolved": "TimePresets[]",
                    "references": {
                        "TimePresets": {
                            "location": "import",
                            "path": "../../../models/atui-time-range.models",
                            "id": "src/models/atui-time-range.models.ts::TimePresets"
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
                "attribute": "min_date",
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
                "attribute": "min_seconds",
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
                "defaultValue": "60"
            },
            "max_seconds": {
                "type": "number",
                "attribute": "max_seconds",
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
                "defaultValue": "Number.MAX_SAFE_INTEGER"
            },
            "initial_selected_time": {
                "type": "string",
                "attribute": "initial_selected_time",
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
                "reflect": false
            },
            "custom_error_message": {
                "type": "any",
                "attribute": "custom_error_message",
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
                "defaultValue": "null"
            },
            "show_all_time": {
                "type": "boolean",
                "attribute": "show_all_time",
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
//# sourceMappingURL=atui-time-with-unit.js.map
