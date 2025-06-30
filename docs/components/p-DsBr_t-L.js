import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { M as MIN_DATE, T as TimeDateUtil, D as Duration, a as DateFormat } from './p-BP6gV1HR.js';
import { f as fetchTranslations } from './p-CDu8lP-T.js';
import { T as TimeDatePresentationUtil } from './p-rzsGt5mL.js';
import { h as hooks } from './p-C5Sle45O.js';
import { d as defineCustomElement$7 } from './p-CNIPth1r.js';
import { d as defineCustomElement$6 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$5 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$4 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$3 } from './p-B-R-HO9p.js';
import { d as defineCustomElement$2 } from './p-C7zFI4_B.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

const AtuiCustomTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCustomTimeRangeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.can_set_time = true;
        this.min_seconds = 60;
        this.min_date = MIN_DATE;
        this.max_date = new Date(Date.now());
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
        return (h("div", { key: 'e59f442ac72c34909f7c3d05dda6267753246d52', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: 'dfbcfcdfc55dc9fe0064b9e1da8bb253b6836b56', class: "p-12 text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: 'bc3d6facdd4e517b20e38d3b53fd0264484cf78d', class: "flex flex-row gap-16 px-12" }, h("div", { key: '62cc603a9f3ad799c43230891cd058af5891895d', class: "flex flex-fill flex-col gap-8" }, h("div", { key: 'e2f88d1bd04410811c78e8c2335da38b1fb6e15d' }, h("label", { key: 'a6111fab42f25e3d5cbe433fe96613ddb3ad4e9a' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: '330b407cf790b8592d5df4903b802090c5fb992a' }, h("input", { key: '70deabfcbace0488a17f19b41deaeed85e5a55e1', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '74801bd566fa47ba525e663f741c1ce307dd1bb4' }, h("label", { key: '93baeb74fea305155a8f460cb3ace34a2f568f86' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: 'dfeafd0df623e9b7b68cc565662606a63ad732a5' }, h("atui-select", { key: '4a293942924592475c120fb22ef09a0cde04e11d', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: 'ad246ce262e64dca0217da4bf9021e34c9e73a68', class: "flex flex-fill flex-col gap-8" }, h("div", { key: '0bf5ecdc894145fb1c8e07759f47c8e022beb590' }, h("label", { key: 'cd84b927e1de2655b1bcb653c21f87bd98f5dbc8' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: '75050d6e715348b7d9cd3b9ceb0a03edf3eca774' }, h("input", { key: '89365c32f400724cf4d27be5ae529ec2cfea5302', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '196cb439af56c34624f575a12a003e9e14e730eb' }, h("label", { key: 'f4befc9745710d947cb2ef8e7789cdbda43e4d4e' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: '01a5e7176b89caba69421e7d1309242cc174e8bc' }, h("atui-select", { key: '50dd4ae025b4252e2951f32a5e5c8858c7e5a13a', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: '365e2eaad0ac221a91c7da06890f469cb2f365fb', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: 'f808a00e5fb314fa1c3c7c1c1a47d057704b22d3', class: "flex flex-col" }, h("label", { key: '85ff7ac584be127388cf2fd53681d6144c48d463', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: 'c92f53e7b68a488e168c8836924b50ceba479db3', class: "text-xs text-med" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("atui-toggle-switch", { key: '70b44b220b448e0446287503cb51c2cb2efda8f1', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: '5b6cbe3828e043f96cf37ab536bb01e04adc00bc', class: "flex flex-row justify-between p-8" }, h("atui-button", { key: '6c68836706147df9af4e105ee31791815d24005e', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: 'c980852d1c402cf5498a538a51c0a09d831b2e75', class: "flex flex-row gap-8" }, h("atui-button", { key: '0ba69f0e23b339f19e6caf277703f8ddeb6b5189', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("atui-button", { key: 'd8ebd36e6151c7196b018cdcbb4903a2ae5c7a4a', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
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
}, [0, "atui-custom-time-range", {
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
//# sourceMappingURL=p-DsBr_t-L.js.map

//# sourceMappingURL=p-DsBr_t-L.js.map