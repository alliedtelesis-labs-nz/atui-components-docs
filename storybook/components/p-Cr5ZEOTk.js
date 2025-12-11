import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment } from './p-89eupKrN.js';
import { a as TimeExtraOptions, T as TimeDateUtil } from './p-BI7XO4bL.js';
import { T as TimeRangeDisplay } from './p-DJyIoUiL.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$8 } from './p-CneQ50Br.js';
import { d as defineCustomElement$7 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$6 } from './p-DYJeqWTW.js';
import { d as defineCustomElement$5 } from './p-bn76tgB4.js';
import { d as defineCustomElement$4 } from './p-C1-3O-ig.js';
import { d as defineCustomElement$3 } from './p-DKmuiKgQ.js';
import { d as defineCustomElement$2 } from './p-yH1iu8rH.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';

const AtTimeWithUnitComponent = /*@__PURE__*/ proxyCustomElement(class AtTimeWithUnitComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
    }
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
    get el() { return this; }
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
        return (h("div", { key: 'add61a393cf73c83423f1d560c6c978e0279dec7', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: '45700e1a9ec6effec657c03b55d2eed6dc6602d0', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'a73684a60546d80f9d227f93bc000d73e6090217', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: 'f724f779bea51282f793d4a634b1d404020de025', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: '3220ae82e43f1ea2010d4ca967ee2f777bc2fd48', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("at-select", { key: 'd36fca7bfa1fb8e276eae5de991d4b82b9a82508', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: '624fba843d82c6d61481212b1240eb789581e187', class: "flex flex-col gap-8 px-12" }, h("h5", { key: '1a5e65cefdb12dbd37e3e154b5300ef77c931c6c', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '2da79c30f4186b6aa3fa3e51b71087b91aac7a91', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), h("footer", { key: '0d472c286180b3bbe036647a4185c6856a517a7f', class: "flex justify-between p-8" }, h("at-button", { key: '3e1b3f7b8ce8ec51098f8d6e3dd83c9df6500634', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '07220852f54082be94ee30681f30dda7986f9a35', class: "flex gap-8" }, h("at-button", { key: '74c3e01034839905ad1a01c3111ffa3e73b400cd', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '0be86ff1f4b7aef3416f2f1f29681afeafb92c09', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
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
    const components = ["at-time-with-unit", "at-button", "at-form-label", "at-input-numeric", "at-loading", "at-menu", "at-select", "at-select-option", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-time-with-unit":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTimeWithUnitComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-input-numeric":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-select-option":
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
//# sourceMappingURL=p-Cr5ZEOTk.js.map

//# sourceMappingURL=p-Cr5ZEOTk.js.map