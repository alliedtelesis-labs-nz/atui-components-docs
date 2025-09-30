import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment } from './p-Bx9nFool.js';
import { a as TimeExtraOptions, T as TimeDateUtil } from './p-BI7XO4bL.js';
import { T as TimeRangeDisplay } from './p-DJyIoUiL.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$6 } from './p-C5bGvK_v.js';
import { d as defineCustomElement$5 } from './p-BwHFyXUC.js';
import { d as defineCustomElement$4 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$3 } from './p-DmKmq4RT.js';
import { d as defineCustomElement$2 } from './p-CxffRu7z.js';
import { d as defineCustomElement$1 } from './p-CDDohbWp.js';

const AtTimeWithUnitComponent = /*@__PURE__*/ proxyCustomElement(class AtTimeWithUnitComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h("div", { key: '0f9fd3c90d4cb183ce0d36dd75f65e5db530ccc4', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: 'f116463896c4f98dc0bccf14fd85d285e3ed16bd', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'a810248c3eb6c280385ff342c5f3152295fb8827', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '67d4b84c34a8bf150f36209f8139d3abb1ff4b49', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: '530d69b1b61bf4c4879ec25cad592fb3c0ecf824', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("at-select", { key: 'b57fe2de231f609a89464b22dbc9d23af77fd592', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.unit) && (h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: '2bb5f6ff21d941ca6f5fdc7a2b249da173b8fb7b', class: "flex flex-col gap-8 px-12" }, h("h5", { key: 'fe92137e5bcfe2e198c9cb8c51b9cc518e8a15de', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '5f93391ed245c85cd8b9a88d75700948d0e8bf88', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => {
                var _a, _b;
                return (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                        event.stopPropagation();
                        if (event.key === 'Enter' ||
                            event.key === ' ')
                            this.updateSelectedRange(timerange);
                    }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.value) === timerange.value && ((_b = this.selectedTime) === null || _b === void 0 ? void 0 : _b.unit) === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit])));
            })))), h("footer", { key: '70292ad93d4d1292394774cd0327e476e2b16fdf', class: "flex justify-between p-8" }, h("at-button", { key: '71613190e21abf2773634ac1cf22cc00e72d0fa0', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '9c43fd250b55514230fb7df776102c98d8a5d307', class: "flex gap-8" }, h("at-button", { key: '9a4efee52f98a7ff73baeb6ce20fb24b20bb4bd7', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: 'caed0786e9d8f7aa58860431a87b018fbc588fd7', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
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
//# sourceMappingURL=p-DaBZ8Dq2.js.map

//# sourceMappingURL=p-DaBZ8Dq2.js.map