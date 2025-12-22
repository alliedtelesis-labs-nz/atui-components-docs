import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { T as TimeDateUtil, D as Duration } from './p-BI7XO4bL.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { T as TimeDatePresentationUtil } from './p-DNVc4J1B.js';
import { h as hooks } from './p-BMuAbjcg.js';
import { d as defineCustomElement$8 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$7 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$6 } from './p-bn76tgB4.js';
import { d as defineCustomElement$5 } from './p-C1-3O-ig.js';
import { d as defineCustomElement$4 } from './p-CaMeultz.js';
import { d as defineCustomElement$3 } from './p-yH1iu8rH.js';
import { d as defineCustomElement$2 } from './p-CASkfbwQ.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';
import { M as MIN_DATE, D as DateFormat } from './p-DJyIoUiL.js';

const AtCustomTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtCustomTimeRangeComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
    }
    /**
     * Whether time selection is enabled in addition to date selection
     */
    can_set_time = true;
    /**
     * Minimum number of seconds for the time range
     */
    min_seconds = 60;
    /**
     * Minimum selectable date
     */
    min_date = MIN_DATE;
    validateMinDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.min_date = this.floorMinDate(newValue);
    }
    /**
     * Maximum selectable date
     */
    max_date = new Date(Date.now());
    validateMaxDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.max_date = this.ceilingMaxDate(newValue);
    }
    /**
     * Default value for the from date
     */
    default_from_date;
    validateDefaultFromDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_from_date = this.floorMinDate(newValue);
        this.from_date_value = this.default_from_date;
    }
    /**
     * Default value for the to date
     */
    default_to_date;
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.ceilingMaxDate(newValue);
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    /**
     * Current value of the from date
     */
    from_date_value;
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
    /**
     * Current value of the to date
     */
    to_date_value;
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
    /**
     * Whether to lock the end date to the current time
     */
    lock_end_date_to_now = false;
    isFromMinDay = true;
    isToMaxDay = true;
    isFromMaxDay = false;
    isToMinDay = false;
    toDate;
    toTime;
    fromDate;
    fromTime;
    translations;
    setDateNowSwitch;
    toDatePickerEl;
    toTimePickerEl;
    get el() { return this; }
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
    /**
     * Emitted when the user cancels the time range selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time range selection
     */
    atuiSubmit;
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
        return (h("div", { key: '10d9aa843d52ea23a8295bb56cd956071acef99f', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: '96f2e5c1587e478269f0fc4bd7216fd5c10cbf6e', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '33851014a9f123b6d2547b073866696e33bbaa06', class: "flex flex-row gap-16 px-12" }, h("div", { key: '41ef98c6fec1b8662f69aa8f898f754d1c5de780', class: "flex-fill flex flex-col gap-8" }, h("div", { key: '3d72b4d5e2befbff966898bd5e0205ca924a9c1b' }, h("label", { key: '886c554e626ad2ef1d9b7eb4efab1e6ece6ef31e' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: 'e3d3d6e01b9280c009b78dd77f385f02a60fdf0b' }, h("input", { key: '7a436e38638d4230149ae9d2be02ca7bd69e40b6', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '34db8381a4e06061e3ee81f82c81c086bceadfc5' }, h("label", { key: '94e212867aa05dc1afa1790d12a6f9ee5a043921' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: 'b04977b0cbc2a5ec1cf9a4672c1d358a8a43de4d' }, h("at-select", { key: 'c91041b61a5d75adb047cafd4858db17cb95d0ce', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: '09e9c5470b2bef20a5fff40ac25244ee5c2e5bd2', class: "flex-fill flex flex-col gap-8" }, h("div", { key: 'd28befdd713c8b7ddc468615238a1e8303fc3664' }, h("label", { key: 'bedc0aec43b25e277be5710ac310932358373f83' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: 'e3285d5132dda8049ea317ac46183323b07c17b8' }, h("input", { key: '2e0f0b84c55aa9cf13646d2c3b33223162f54d7b', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '08106072e3769d0eaa2c61e56e2d768da718b967' }, h("label", { key: 'b68fd8a809a4890e8b192f5147f2b9efbb7a2fd3' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: 'c6092a0e119ad86826f030103f1b6dd3d29c7de0' }, h("at-select", { key: 'fb0ffe4f6ce06d6db53d01c9a4c926bd96a968d4', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: 'bfb8015332d5c25e1fa16504370a7107e5360332', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: 'f145c3686ebe1602e5c1f91cb9ba6043ece75aaf', class: "flex flex-col" }, h("label", { key: '1a725edb93125b8888a8457ca3192ea1d64a1830', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: 'e6d4fff84ed35d507bda65654dd71f87f3deb483', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: '77de04447a042bb44bb189bb1aabb783fb1fb6a6', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: 'f1f981ebf5739246d2e5bd4b774442f5a720c3f5', class: "flex flex-row justify-between p-8" }, h("at-button", { key: '24c0e060ff60214ecc35ce0ba9f062428ea8bae9', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: 'cdf3b5b4e50d8a3e3c8363d89faaad1bd9ec3939', class: "flex flex-row gap-8" }, h("at-button", { key: 'b259daaf4cd1ffbda7773077186cb2effc49eff4', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("at-button", { key: 'ec1a9ccb298b4b4d0cbda4e54d2fe9732522671d', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "min_date": ["validateMinDate"],
        "max_date": ["validateMaxDate"],
        "default_from_date": ["validateDefaultFromDate"],
        "default_to_date": ["validateDefaultToDate"],
        "from_date_value": ["validateFromDateValue"],
        "to_date_value": ["validateToDateValue"]
    }; }
}, [256, "at-custom-time-range", {
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
    const components = ["at-custom-time-range", "at-button", "at-form-label", "at-loading", "at-menu", "at-select", "at-select-option", "at-toggle-switch", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-custom-time-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCustomTimeRangeComponent);
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
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-select-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-toggle-switch":
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

export { AtCustomTimeRangeComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CNlxxKyN.js.map

//# sourceMappingURL=p-CNlxxKyN.js.map