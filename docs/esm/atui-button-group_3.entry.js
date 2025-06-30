import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-HJO1YDmC.js';
import { M as MIN_DATE, T as TimeDateUtil, D as Duration, c as DateFormat, d as TimeExtraOptions, b as TimeRangeDisplay } from './time-date.util-BsTT-_r-.js';
import { f as fetchTranslations } from './translation-CDu8lP-T.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-DxoFI1OS.js';
import { h as hooks } from './moment-C5Sle45O.js';
import './moment-9az102YM.js';

const AtuiButtonGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiIndexChange = createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * List of options to be displayed on the button group.
         */
        this.options = [];
        this.buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
        this.buttonRefs = [];
    }
    componentDidLoad() {
        this.setInitialActiveButton();
    }
    handleChange(value, index) {
        this.value = value;
        this.atuiChange.emit(value);
        this.atuiIndexChange.emit(index);
    }
    setInitialActiveButton() {
        const activeOption = this.options.find((option) => option.option_id === this.value);
        if (activeOption) {
            this.value = activeOption.option_id;
        }
        else if (this.options.length > 0) {
            this.value = this.options[0].option_id;
        }
    }
    render() {
        return (h(Host, { key: 'de0401ae303ce337ead2b86b8a4b482b649113b9', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '63262ebcd10c33b6ba0fa6c8af95aa8d389e1793', class: "flex flex-col" }, h("slot", { key: '9df101ff3e8e1993cabd7195fa572fd1478ab69e', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'f855b33e54e7e9fc07958a3ecc6981e6a7a6f9f5', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '8fd299e092f52aec2f77ba2dac64b79fc5ca1932', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: 'f8dee734765778572e368a8078d25dd2db35a2a6', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, h("ul", { key: 'be74d62f28bdb51de90d4628d539877f8624f81d', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: 'd5610ddc38b72adcdf11247ad11a439d5a4f386d' }))), this.error_text && (h("span", { key: 'a32aa56ab01f95113d72b57cdc88894e9b98d5ec', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index) => (h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index] = el) }, h("atui-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index);
                    event.preventDefault();
                }
            } }))));
    }
    get el() { return getElement(this); }
};

const AtuiCustomTimeRangeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "min_date": ["validateMinDate"],
        "max_date": ["validateMaxDate"],
        "default_from_date": ["validateDefaultFromDate"],
        "default_to_date": ["validateDefaultToDate"],
        "from_date_value": ["validateFromDateValue"],
        "to_date_value": ["validateToDateValue"]
    }; }
};

const AtuiTimeWithUnitComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.min_date = null;
        this.min_seconds = 60;
        this.max_seconds = Number.MAX_SAFE_INTEGER;
        this.custom_error_message = null;
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
        return (h("div", { key: '67b050ff2bdee15b893631c7c3c809150cf9611a', class: "flex w-panel-sm flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: '13165edcd0b79f7ca1cda798f4f6ab70f7e098a2', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'd25ad5824ed26eba77b82fa03e83d664909d0d4a', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '5df0ec9c5898c9d4655f206ddaf7ca8f98430761', class: "flex flex-col gap-8" }, h("atui-input-numeric", { key: 'a37447def06ba6c3214c89fef898bb41a45b0447', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), h("atui-select", { key: '63f4780e1284648486cfd8b11d908b8256f4c2df', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.unit) && (h("span", { class: "text-sm font-normal text-med" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-sm font-normal text-med" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: '99ce06ef1a4b1c1f92572ba0a0660ad5a8f742e2', class: "flex flex-col gap-8 px-12" }, h("h5", { key: '7851dbaf4c5929240599108dec451c64eb7512f8', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '64cbab4559408a85bd52a24f20e475ef5a6e72f2', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => {
                var _a, _b;
                return (h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                        event.stopPropagation();
                        if (event.key === 'Enter' ||
                            event.key === ' ')
                            this.updateSelectedRange(timerange);
                    }, tabindex: 0, class: `${this.selectedTime !== TimeRangeDisplay.ALL && ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.value) === timerange.value && ((_b = this.selectedTime) === null || _b === void 0 ? void 0 : _b.unit) === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit])));
            })))), h("footer", { key: '6ca3a2bb83c7cc1982c7160e9f431ef12d74fdbc', class: "flex justify-between p-8" }, h("atui-button", { key: '2e26362728dfebd1f537acb7c0c1da7c23e64f58', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: 'a387c8e284990570942ad57202e2ffc9b8a4b622', class: "flex gap-8" }, h("atui-button", { key: 'a10c976a166fc3832bf2f5865e99700501da3c54', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("atui-button", { key: '943faf0b795f3f3a294a817a650c72bb0c4daeab', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "timeValue": ["watchTimeValue"],
        "timeUnit": ["watchTimeUnit"]
    }; }
};

export { AtuiButtonGroup as atui_button_group, AtuiCustomTimeRangeComponent as atui_custom_time_range, AtuiTimeWithUnitComponent as atui_time_with_unit };
//# sourceMappingURL=atui-button-group.atui-custom-time-range.atui-time-with-unit.entry.js.map

//# sourceMappingURL=atui-button-group_3.entry.js.map