import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { T as TimeDateUtil, D as Duration } from './p-BI7XO4bL.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { T as TimeDatePresentationUtil } from './p-C75v68Jh.js';
import { h as hooks } from './p-BMuAbjcg.js';
import { d as defineCustomElement$7 } from './p-DCrgmCxL.js';
import { d as defineCustomElement$6 } from './p-DUaiIRm3.js';
import { d as defineCustomElement$5 } from './p-pDYyfeah.js';
import { d as defineCustomElement$4 } from './p-BvmILoSj.js';
import { d as defineCustomElement$3 } from './p-w8B7AqwF.js';
import { d as defineCustomElement$2 } from './p-BMrwxCv3.js';
import { d as defineCustomElement$1 } from './p-BNT2yQBz.js';
import { M as MIN_DATE, D as DateFormat } from './p-DJyIoUiL.js';

const AtCustomTimeRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtCustomTimeRangeComponent extends H {
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
        return (h("div", { key: 'b27e634e855dfc94d93e623a75d6617a57c74010', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: '1efaeffc90df3bc2d1a6b091c1b252adab6d4381', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: 'de9827eed4ce9b6c66217b84e1ead7605304e807', class: "flex flex-row gap-16 px-12" }, h("div", { key: '2bc0f70a11fa3a1124452a23a5fdb1f1bfcde4fe', class: "flex-fill flex flex-col gap-8" }, h("div", { key: 'a21d51f9a6e8401f5a5e7a58113724e3197d8769' }, h("label", { key: 'cd9767226570aa25bc7c2a6867c65585383d3aaf' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: 'bce0c2bcb6191d259cc283668c60c5b23cdd1534' }, h("input", { key: '78c779f99920401d3cd2865a7e0b116fdc78a88e', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: 'c92624bef2058abeda3d9986bbf413ba404028f0' }, h("label", { key: '8a19fa79219493aafc71de3bae721911fb68dfc6' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: '82e77b3f3ba5c9cbd78d887d762d6f147f5eb855' }, h("at-select", { key: '2b6de8f6702ed3ec8fa04211e165cc861b4ff8e4', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: '8241dcb284fbf401f96a9a813c4d91d169e288f0', class: "flex-fill flex flex-col gap-8" }, h("div", { key: '2f84400d24db82de1cd937aeab82939ed2a927f8' }, h("label", { key: '7b9a6c28ae9141c6ea8c83405d1ce1157383ab28' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: '254d733e8f8139c3b40d6002a2eb2fea866dcaa9' }, h("input", { key: '89394982bb6824b7ba80ff41e8f30f056107e10f', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: 'f70ef77cb785b3712a36bebbf4688850913e0e4b' }, h("label", { key: '7d29028ca819218d37d2f27e2dd9621ee69d2ab7' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: '3177d3f0a960d24fbdbc46e9370113ab47e0ce10' }, h("at-select", { key: 'fa3524172ecd8f7b0a6539fb1eb340eabe86af09', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: '22af5749eaead7aedf815a20ef1f03c44fb500ee', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: '70f5754f8a85db35e7131cd7116beefd0ef412eb', class: "flex flex-col" }, h("label", { key: '283f5a80f7504c4987f06ba03410a20ffb7bb225', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '52212d7f61461a7e82e8202d7bc1943577526660', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: '43975939778cf7c5113b07cc214b94487a8a00fb', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: '4cd6105e0f3572bb213bc3a7f6cddd61fef19dfd', class: "flex flex-row justify-between p-8" }, h("at-button", { key: 'fe3b8696b49dc88bd690c42371f46d3f7b11b805', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: '8dd21a9739673131e9edb29e70d311b9ad5187de', class: "flex flex-row gap-8" }, h("at-button", { key: '5476b8b0203a0d64e02f96f31a3236b9ab0c4128', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("at-button", { key: 'd2ea78fbb637d4cff4e55b243befcac526a938e5', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
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
    const components = ["at-custom-time-range", "at-button", "at-form-label", "at-loading", "at-menu", "at-select", "at-toggle-switch", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-custom-time-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCustomTimeRangeComponent);
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
//# sourceMappingURL=p-BZRe3SEF.js.map

//# sourceMappingURL=p-BZRe3SEF.js.map