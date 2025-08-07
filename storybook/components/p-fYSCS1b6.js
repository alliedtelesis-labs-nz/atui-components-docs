import { p as proxyCustomElement, H, d as createEvent, h } from './p-CHjIMSAP.js';
import { M as MIN_DATE, T as TimeDateUtil, D as Duration, a as DateFormat } from './p-wxnR6VRT.js';
import { T as TimeDatePresentationUtil } from './p-CKQAHFp4.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { h as hooks } from './p-BMuAbjcg.js';
import { d as defineCustomElement$7 } from './p-DuXqj3_2.js';
import { d as defineCustomElement$6 } from './p-DROFJHTo.js';
import { d as defineCustomElement$5 } from './p-DbhUEjmd.js';
import { d as defineCustomElement$4 } from './p-Yk76b9OE.js';
import { d as defineCustomElement$3 } from './p-BzTz1KFC.js';
import { d as defineCustomElement$2 } from './p-fqSoX0bS.js';
import { d as defineCustomElement$1 } from './p-Dl92gNAv.js';

const AtuiCustomTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCustomTimeRangeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        /**
         * Whether time selection is enabled in addition to date selection
         */
        this.can_set_time = true;
        /**
         * Minimum number of seconds for the time range
         */
        this.min_seconds = 60;
        /**
         * Minimum selectable date
         */
        this.min_date = MIN_DATE;
        /**
         * Maximum selectable date
         */
        this.max_date = new Date(Date.now());
        /**
         * Whether to lock the end date to the current time
         */
        this.lock_end_date_to_now = false;
        this.isFromMinDay = true;
        this.isToMaxDay = true;
        this.isFromMaxDay = false;
        this.isToMinDay = false;
    }
    validateMinDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.min_date = this.floorMinDate(newValue);
    }
    validateMaxDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.max_date = this.ceilingMaxDate(newValue);
    }
    validateDefaultFromDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_from_date = this.floorMinDate(newValue);
        this.from_date_value = this.default_from_date;
    }
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.ceilingMaxDate(newValue);
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    validateFromDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.from_date_value === undefined)
            this.from_date_value = new Date();
        if (this.from_date_value.toISOString() !==
            this.floorMinDate(newValue).toISOString()) {
            this.from_date_value = newValue && this.floorMinDate(newValue);
        }
        this.setFromDateAndTime(this.from_date_value);
        this.updateMinMaxFlags();
    }
    validateToDateValue(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        if (this.to_date_value === undefined)
            this.to_date_value = new Date();
        if (this.to_date_value.toISOString() !==
            this.ceilingMaxDate(newValue).toISOString()) {
            this.to_date_value = newValue && this.ceilingMaxDate(newValue);
        }
        this.setToDateAndTime(this.to_date_value);
        this.updateMinMaxFlags();
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.fromDate && !this.fromTime) {
            this.from_date_value = this.default_from_date
                ? this.default_from_date
                : this.min_date;
        }
        if (!this.toDate && !this.toTime) {
            this.to_date_value = this.default_to_date
                ? this.default_to_date
                : this.max_date;
        }
    }
    clearSelection() {
        this.from_date_value = this.default_from_date
            ? this.default_from_date
            : this.min_date;
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    ceilingMaxDate(date) {
        return TimeDateUtil.ceilingDateByTimeUnit(date, Duration.HOURS);
    }
    floorMinDate(date) {
        return TimeDateUtil.floorDateByTimeUnit(date, Duration.HOURS);
    }
    getCustomToDateTime() {
        return TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime);
    }
    getCustomFromDateTime() {
        return TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime);
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = TimeDateUtil.isSameDateByUnit(to, this.min_date, Duration.DAYS);
        this.isToMaxDay = TimeDateUtil.isSameDateByUnit(to, this.max_date, Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = TimeDateUtil.isSameDateByUnit(from, this.min_date, Duration.DAYS);
        this.isFromMaxDay = TimeDateUtil.isSameDateByUnit(from, this.max_date, Duration.DAYS);
    }
    setDateNow() {
        const toggleValue = this.setDateNowSwitch.value;
        if (toggleValue) {
            this.lock_end_date_to_now = true;
            const date = this.ceilingMaxDate(new Date(Date.now()));
            this.to_date_value = date;
        }
        else {
            this.lock_end_date_to_now = false;
        }
    }
    setToDateAndTime(toDate) {
        this.toDate = TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = TimeDatePresentationUtil.getFormattedDate(toDate, 'hh:mm a');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = TimeDatePresentationUtil.getFormattedDate(fromDate, 'hh:mm a');
    }
    get getFromTimes() {
        this.updateMinMaxFlags();
        if (this.isFromMinDay) {
            return TimeDatePresentationUtil.getTimeOptions(TimeDatePresentationUtil.getFormattedDate(this.min_date, DateFormat.HOURS_ONLY));
        }
        else if (this.isFromMaxDay) {
            const fromMaxTime = TimeDatePresentationUtil.getFormattedDate(TimeDateUtil.shiftDateByUnit(this.max_date, -1, Duration.HOURS), DateFormat.HOURS_ONLY);
            return TimeDatePresentationUtil.getTimeOptions(undefined, fromMaxTime);
        }
        else {
            return TimeDatePresentationUtil.getTimeOptions();
        }
    }
    get getToTimes() {
        this.updateMinMaxFlags();
        if (this.isToMinDay) {
            const toMaxTime = TimeDatePresentationUtil.getFormattedDate(TimeDateUtil.shiftDateByUnit(this.min_date, 1, Duration.HOURS), DateFormat.HOURS_ONLY);
            return TimeDatePresentationUtil.getTimeOptions(toMaxTime);
        }
        else if (this.isToMaxDay) {
            return TimeDatePresentationUtil.getTimeOptions(undefined, TimeDatePresentationUtil.getFormattedDate(this.max_date, DateFormat.HOURS_ONLY));
        }
        else {
            return TimeDatePresentationUtil.getTimeOptions();
        }
    }
    handleCancel() {
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (hooks(this.from_date_value).isBefore(hooks(this.to_date_value))) {
            this.atuiSubmit.emit({
                from: TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime).toISOString(),
                to: TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime).toISOString(),
                lockEndDateToNow: this.lock_end_date_to_now,
            });
        }
    }
    render() {
        return (h("div", { key: '1678037fafb912f43b037e4ca439ba05fd99cb32', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: '6e16b8a26c976332bd31f7f8a8f64b6e5bb8c93a', class: "p-12 text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '291a54cf31091cf638c0e2bf33d789ec94a02429', class: "flex flex-row gap-16 px-12" }, h("div", { key: 'b1db062fa7ff2f4dbe276b2daa489420c46dd7a3', class: "flex flex-fill flex-col gap-8" }, h("div", { key: '33174a5f6dfe10a72ace03a1af15ad3627f40d92' }, h("label", { key: '016e3c19eea07047e0f3fb2998e7cea6eec45c90' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: '15061c8847ba61e4a5c37dcb82092a55d44f38f2' }, h("input", { key: '09c85ee3c86df63cfeddd81f274c72731dd5536b', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '3d116cec0a666d3b4ffcdadfce1acdb7bde21678' }, h("label", { key: '45df03769eec918c4390978c3febbdf256871aa5' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: '88aa2d654390a51c0f4f9bda54aa32038c5fd7d1' }, h("atui-select", { key: '16a230b0f3d48ba7823b9e61908209e5be3b3d52', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: '543cbf45088ca5d39e06f87816d44209a95271d4', class: "flex flex-fill flex-col gap-8" }, h("div", { key: 'b5f7bcd9fcba98aafac5dbce432432d531058095' }, h("label", { key: '9c859c692ac2329109617bb5dfee0272e125e49b' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: 'b5ea23f5fdaceeb862b739d29b8a3a5c7df7680c' }, h("input", { key: '1f71057cd2abe74f77f4d9bea189b8577afba1e6', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: 'e1c6f55f64659cc79954f05810a3cc332f532f00' }, h("label", { key: '907c2a838f1b7fc19ae8f64975de17c13ab3ad18' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: '520d98db4b9f9c10b81d8bba3b8f7dbd1921fd09' }, h("atui-select", { key: '148c4ec468c45e435f4fb5eed0aaa25bf8cab727', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: 'c16e539e6880905af0e1df1fb4bf785a1c7d6b48', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: 'fce40b903d9a645033c4de2c92537e4d6aeeb427', class: "flex flex-col" }, h("label", { key: '95c4708b390ab7a12341953b6b523b6a41b513f4', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: 'c243d16ed3966054690a71226f8dd00d1bac2757', class: "text-xs text-med" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("atui-toggle-switch", { key: 'f3548ef634ec2a777381ae74ad979190e3065c52', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: '91f31e9c79226d7a95bfcc32f3885efe04d4d9ed', class: "flex flex-row justify-between p-8" }, h("atui-button", { key: '6f8ceeb95fae744969c466d119c931be370c36f4', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: '46fd8c86957aeca16098f8deaa03018286f97421', class: "flex flex-row gap-8" }, h("atui-button", { key: '595a33de0c06705e2527dac50101800a965bbe73', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("atui-button", { key: '9cda42124bf0189e4931cc21fe9fa9301d30bee6', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "min_date": ["validateMinDate"],
        "max_date": ["validateMaxDate"],
        "default_from_date": ["validateDefaultFromDate"],
        "default_to_date": ["validateDefaultToDate"],
        "from_date_value": ["validateFromDateValue"],
        "to_date_value": ["validateToDateValue"]
    }; }
}, [256, "atui-custom-time-range", {
        "can_set_time": [4],
        "min_seconds": [2],
        "min_date": [1040],
        "max_date": [1040],
        "default_from_date": [1040],
        "default_to_date": [1040],
        "from_date_value": [1040],
        "to_date_value": [1040],
        "lock_end_date_to_now": [1028],
        "isFromMinDay": [32],
        "isToMaxDay": [32],
        "isFromMaxDay": [32],
        "isToMinDay": [32],
        "toDate": [32],
        "toTime": [32],
        "fromDate": [32],
        "fromTime": [32],
        "translations": [32],
        "setDateNowSwitch": [32],
        "toDatePickerEl": [32],
        "toTimePickerEl": [32]
    }, undefined, {
        "min_date": ["validateMinDate"],
        "max_date": ["validateMaxDate"],
        "default_from_date": ["validateDefaultFromDate"],
        "default_to_date": ["validateDefaultToDate"],
        "from_date_value": ["validateFromDateValue"],
        "to_date_value": ["validateToDateValue"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-custom-time-range", "atui-button", "atui-form-label", "atui-loading", "atui-menu", "atui-select", "atui-toggle-switch", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-custom-time-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCustomTimeRangeComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-toggle-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiCustomTimeRangeComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-fYSCS1b6.js.map

//# sourceMappingURL=p-fYSCS1b6.js.map