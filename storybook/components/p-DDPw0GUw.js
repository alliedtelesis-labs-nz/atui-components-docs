import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment } from './p-Cv5ME95Z.js';
import { a as TimeExtraOptions, T as TimeDateUtil } from './p-BI7XO4bL.js';
import { T as TimeRangeDisplay } from './p-DJyIoUiL.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-anL6prWM.js';
import { d as defineCustomElement$6 } from './p-CdWdq1MG.js';
import { d as defineCustomElement$5 } from './p-CaCFWbHQ.js';
import { d as defineCustomElement$4 } from './p-pDYyfeah.js';
import { d as defineCustomElement$3 } from './p-BvmILoSj.js';
import { d as defineCustomElement$2 } from './p-DqhL9GCv.js';
import { d as defineCustomElement$1 } from './p-D-MOVsDh.js';

const AtTimeWithUnitComponent = /*@__PURE__*/ proxyCustomElement(class AtTimeWithUnitComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
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
        return (h("div", { key: 'b1b7e287e71622d77bc33ccd06e1bbe250abbd38', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: 'a265d57c9b31bb7bd040de9c3f7832d8a85e52eb', class: "flex flex-col gap-8 p-12" }, h("h5", { key: '2b76fe53f54a50929ceb16f9a79cd904ceea4e28', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: 'd4d2e44df6537032150b0c88fe005df5340c5885', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: '08cae6fa018851eae7e7edbd21a032821d291f0f', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("at-select", { key: '655bf3fe91cbdd7a3bc74bb90ae6fd142ad45d1f', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.unit) && (h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: 'f80d86ed76f5415622a7f06393fa690363e9e50b', class: "flex flex-col gap-8 px-12" }, h("h5", { key: 'e4bf2b6f9e0e5754591acb68e63e1600eac826cc', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: 'f8ca9052d48a32d51654c7368010c987441e6007', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => {
                var _a, _b;
                return (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                        event.stopPropagation();
                        if (event.key === 'Enter' ||
                            event.key === ' ')
                            this.updateSelectedRange(timerange);
                    }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.value) === timerange.value && ((_b = this.selectedTime) === null || _b === void 0 ? void 0 : _b.unit) === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit])));
            })))), h("footer", { key: '02774887c1349b30b13e5c365d86121b0b542ef9', class: "flex justify-between p-8" }, h("at-button", { key: '54e23883fd89fdac939ce2e98f9131041a01f282', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: 'd749f97a0d75894a9885740b1b50227a6319fd4b', class: "flex gap-8" }, h("at-button", { key: 'ec9610eb7038459a5c023358e4c04b0916681d20', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '36c7ae34aa57eb04bb2664ffe001cf79594e91da', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "timeValue": ["watchTimeValue"],
        "timeUnit": ["watchTimeUnit"]
    }; }
}, [256, "at-time-with-unit", {
        "units": [16],
        "common_options": [16],
        "min_date": [16],
        "min_seconds": [2],
        "max_seconds": [2],
        "initial_selected_time": [1],
        "custom_error_message": [8],
        "show_all_time": [4],
        "errorText": [32],
        "secondaryErrorText": [32],
        "translations": [32],
        "dropdownOptions": [32],
        "timeValue": [32],
        "timeUnit": [32],
        "selectedTime": [32],
        "startDate": [32]
    }, undefined, {
        "timeValue": ["watchTimeValue"],
        "timeUnit": ["watchTimeUnit"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-time-with-unit", "at-button", "at-form-label", "at-input-numeric", "at-loading", "at-menu", "at-select", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-time-with-unit":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTimeWithUnitComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-input-numeric":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTimeWithUnitComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DDPw0GUw.js.map

//# sourceMappingURL=p-DDPw0GUw.js.map