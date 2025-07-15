import { p as proxyCustomElement, H, d as createEvent, h } from './p-DDLUhBkV.js';
import { M as MIN_DATE, T as TimeDateUtil, D as Duration, a as DateFormat } from './p-BP6gV1HR.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { T as TimeDatePresentationUtil } from './p-rzsGt5mL.js';
import { h as hooks } from './p-C5Sle45O.js';
import { d as defineCustomElement$7 } from './p-BOygyBmB.js';
import { d as defineCustomElement$6 } from './p-Desv48Pq.js';
import { d as defineCustomElement$5 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$4 } from './p-CDm6COvb.js';
import { d as defineCustomElement$3 } from './p-fWvS3j9-.js';
import { d as defineCustomElement$2 } from './p-CFXPqWM9.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

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
        return (h("div", { key: 'fa8007db51a9ab1506df8621b147d2986160b81a', class: "flex w-fit flex-col gap-8 border border-gray-300" }, h("h5", { key: '1264a518f603585ccb8dd367dbef1e650546cbb0', class: "p-12 text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '8d5e30c57704334533137096ba82e4d9f07e94b0', class: "flex flex-row gap-16 px-12" }, h("div", { key: '5dabd08eaa9564af1b13ce76cc0e649750981dc8', class: "flex flex-fill flex-col gap-8" }, h("div", { key: 'de7ed2b35694cd03a254fede8bdecff90d4f0fb7' }, h("label", { key: '230c7de1d7cd81dd77afe050685d3d795cba6595' }, this.translations.ATUI.TIME.FROM_DATE), h("div", { key: 'dae0425c0f06a510706a020796e1a1eb166fa605' }, h("input", { key: '854c7dc486eb56ff881c91187e714a401e5a8305', type: "date", name: "fromDp", class: "cursor-pointer", min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '0b5ce12e745553213ab8b5bd78940b22bb0f3d18' }, h("label", { key: 'e745c53331ab86d8f87f786db98cf723c42c46b0' }, this.translations.ATUI.TIME.FROM_TIME), h("div", { key: '9420c90ef4ecd67aabdb703ef7963defaaaaa628' }, h("atui-select", { key: '8e6a09d5df6d1777295ff5f4657f93b1c08232c0', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), h("div", { key: '29b43ab1acfc47c590fad2f1ca02721598e0509a', class: "flex flex-fill flex-col gap-8" }, h("div", { key: 'c42a3c5ac4cc73506e60673622821bfc065f3605' }, h("label", { key: 'cd8ace8ba98833469751b432f8c812d0270f1588' }, this.translations.ATUI.TIME.TO_DATE), h("div", { key: 'bb4ed0305d1526a89202f9c97d38cb5cf2fb77f8' }, h("input", { key: 'a475f66bd4f35f7d2cfe82d9847f880fe28ce9d6', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (h("div", { key: '959ca07c8b09aaa9bb7d1e692d416d8a9906b4de' }, h("label", { key: '0fc5cd4ee995fb2e845a2e2f7ead765669e6324f' }, this.translations.ATUI.TIME.TO_TIME), h("div", { key: '9bc0b954db3d1c6059d083a0528c3f15128eec1b' }, h("atui-select", { key: '9b200ac80e760b1d486ee3f1a52ba8580310ae6c', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), h("div", { key: '68762f6f10a82de9f0cbc09d1375d09acb1f3099', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: '4e5a4bdf910a81119aa8b12e9cb42bc83a8c7142', class: "flex flex-col" }, h("label", { key: '99c38d39a1b554abf2d8e46b1fc910f75ea938e9', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '964b804e5948a51df3064d3f265dc355b310adaf', class: "text-xs text-med" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("atui-toggle-switch", { key: 'fd04d5d961d1ab8584dd4a742df5a16f60da40b0', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), h("div", { key: '04e2171cc943699e3e9b1ec3ea0ec93036450e3c', class: "flex flex-row justify-between p-8" }, h("atui-button", { key: 'db5894b50b088e0b36b194d030157d91d86f184f', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), h("div", { key: '6af1c21eeaa5100e440997203f76aa78f6de8135', class: "flex flex-row gap-8" }, h("atui-button", { key: 'fb19ed5e6ff784f455f93ad114a7fc9a27784c05', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), h("atui-button", { key: 'c43a78039a4a75d49c5c66351aec5483333cf10a', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
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
//# sourceMappingURL=p-CO8AWe7p.js.map

//# sourceMappingURL=p-CO8AWe7p.js.map