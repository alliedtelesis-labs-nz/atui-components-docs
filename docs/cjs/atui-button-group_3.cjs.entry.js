'use strict';

var index = require('./index-BAt2i-T2.js');
var timeDate_util = require('./time-date.util-CvNz3hWU.js');
require('./table-styles-wF-7Uyu8.js');
var translation = require('./translation-HqquF7bU.js');
var timeDatePresentation_util = require('./time-date-presentation.util-C0ftp5M6.js');
var moment = require('./moment-DRlRqWvO.js');
require('./moment-w2EYXu2o.js');

const AtuiButtonGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiIndexChange = index.createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        return (index.h(index.Host, { key: 'f824d6a66ff63fa2ac350022b8717891fd0ab47a', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, index.h("div", { key: '128f77f294a9a3ab3550f9a409ad14437ff488a0', class: "flex flex-col" }, index.h("slot", { key: '293ee9d5eb6757e16214c3c9dc6f445bd48ee689', name: "label" }), (this.label || this.info_text) && (index.h("atui-form-label", { key: '39e58688514062de416dc81bcadfa229af30ff1b', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '823a5df528c9e03327452f1ccd865a8cec604d74', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: '0ccff149a2e5263c5c784fe9a6b397476f127d3c', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, index.h("ul", { key: '581123574520ed428aced0231b7be33951630ce0', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), index.h("slot", { key: '6f0a5828b707133f16ed6afe3c414f1ee6c727e8' }))), this.error_text && (index.h("span", { key: 'c2cacf883b311a13a517072249e0c7cb90840472', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index$1) => (index.h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index$1] = el) }, index.h("atui-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index$1), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index$1);
                    event.preventDefault();
                }
            } }))));
    }
    get el() { return index.getElement(this); }
};

const AtuiCustomTimeRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiCancel = index.createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
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
        this.min_date = timeDate_util.MIN_DATE;
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return timeDate_util.TimeDateUtil.ceilingDateByTimeUnit(date, timeDate_util.Duration.HOURS);
    }
    floorMinDate(date) {
        return timeDate_util.TimeDateUtil.floorDateByTimeUnit(date, timeDate_util.Duration.HOURS);
    }
    getCustomToDateTime() {
        return timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime);
    }
    getCustomFromDateTime() {
        return timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime);
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = timeDate_util.TimeDateUtil.isSameDateByUnit(to, this.min_date, timeDate_util.Duration.DAYS);
        this.isToMaxDay = timeDate_util.TimeDateUtil.isSameDateByUnit(to, this.max_date, timeDate_util.Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = timeDate_util.TimeDateUtil.isSameDateByUnit(from, this.min_date, timeDate_util.Duration.DAYS);
        this.isFromMaxDay = timeDate_util.TimeDateUtil.isSameDateByUnit(from, this.max_date, timeDate_util.Duration.DAYS);
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
        this.toDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(toDate, 'hh:mm a');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(fromDate, 'hh:mm a');
    }
    get getFromTimes() {
        this.updateMinMaxFlags();
        if (this.isFromMinDay) {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, timeDate_util.DateFormat.HOURS_ONLY));
        }
        else if (this.isFromMaxDay) {
            const fromMaxTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(timeDate_util.TimeDateUtil.shiftDateByUnit(this.max_date, -1, timeDate_util.Duration.HOURS), timeDate_util.DateFormat.HOURS_ONLY);
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(undefined, fromMaxTime);
        }
        else {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions();
        }
    }
    get getToTimes() {
        this.updateMinMaxFlags();
        if (this.isToMinDay) {
            const toMaxTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(timeDate_util.TimeDateUtil.shiftDateByUnit(this.min_date, 1, timeDate_util.Duration.HOURS), timeDate_util.DateFormat.HOURS_ONLY);
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(toMaxTime);
        }
        else if (this.isToMaxDay) {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(undefined, timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, timeDate_util.DateFormat.HOURS_ONLY));
        }
        else {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions();
        }
    }
    handleCancel() {
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (moment.hooks(this.from_date_value).isBefore(moment.hooks(this.to_date_value))) {
            this.atuiSubmit.emit({
                from: timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime).toISOString(),
                to: timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime).toISOString(),
                lockEndDateToNow: this.lock_end_date_to_now,
            });
        }
    }
    render() {
        return (index.h("div", { key: '1678037fafb912f43b037e4ca439ba05fd99cb32', class: "flex w-fit flex-col gap-8 border border-gray-300" }, index.h("h5", { key: '6e16b8a26c976332bd31f7f8a8f64b6e5bb8c93a', class: "p-12 text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: '291a54cf31091cf638c0e2bf33d789ec94a02429', class: "flex flex-row gap-16 px-12" }, index.h("div", { key: 'b1db062fa7ff2f4dbe276b2daa489420c46dd7a3', class: "flex flex-fill flex-col gap-8" }, index.h("div", { key: '33174a5f6dfe10a72ace03a1af15ad3627f40d92' }, index.h("label", { key: '016e3c19eea07047e0f3fb2998e7cea6eec45c90' }, this.translations.ATUI.TIME.FROM_DATE), index.h("div", { key: '15061c8847ba61e4a5c37dcb82092a55d44f38f2' }, index.h("input", { key: '09c85ee3c86df63cfeddd81f274c72731dd5536b', type: "date", name: "fromDp", class: "cursor-pointer", min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (index.h("div", { key: '3d116cec0a666d3b4ffcdadfce1acdb7bde21678' }, index.h("label", { key: '45df03769eec918c4390978c3febbdf256871aa5' }, this.translations.ATUI.TIME.FROM_TIME), index.h("div", { key: '88aa2d654390a51c0f4f9bda54aa32038c5fd7d1' }, index.h("atui-select", { key: '16a230b0f3d48ba7823b9e61908209e5be3b3d52', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), index.h("div", { key: '543cbf45088ca5d39e06f87816d44209a95271d4', class: "flex flex-fill flex-col gap-8" }, index.h("div", { key: 'b5f7bcd9fcba98aafac5dbce432432d531058095' }, index.h("label", { key: '9c859c692ac2329109617bb5dfee0272e125e49b' }, this.translations.ATUI.TIME.TO_DATE), index.h("div", { key: 'b5ea23f5fdaceeb862b739d29b8a3a5c7df7680c' }, index.h("input", { key: '1f71057cd2abe74f77f4d9bea189b8577afba1e6', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (index.h("div", { key: 'e1c6f55f64659cc79954f05810a3cc332f532f00' }, index.h("label", { key: '907c2a838f1b7fc19ae8f64975de17c13ab3ad18' }, this.translations.ATUI.TIME.TO_TIME), index.h("div", { key: '520d98db4b9f9c10b81d8bba3b8f7dbd1921fd09' }, index.h("atui-select", { key: '148c4ec468c45e435f4fb5eed0aaa25bf8cab727', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), index.h("div", { key: 'c16e539e6880905af0e1df1fb4bf785a1c7d6b48', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, index.h("div", { key: 'fce40b903d9a645033c4de2c92537e4d6aeeb427', class: "flex flex-col" }, index.h("label", { key: '95c4708b390ab7a12341953b6b523b6a41b513f4', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: 'c243d16ed3966054690a71226f8dd00d1bac2757', class: "text-xs text-med" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("atui-toggle-switch", { key: 'f3548ef634ec2a777381ae74ad979190e3065c52', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), index.h("div", { key: '91f31e9c79226d7a95bfcc32f3885efe04d4d9ed', class: "flex flex-row justify-between p-8" }, index.h("atui-button", { key: '6f8ceeb95fae744969c466d119c931be370c36f4', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), index.h("div", { key: '46fd8c86957aeca16098f8deaa03018286f97421', class: "flex flex-row gap-8" }, index.h("atui-button", { key: '595a33de0c06705e2527dac50101800a965bbe73', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), index.h("atui-button", { key: '9cda42124bf0189e4931cc21fe9fa9301d30bee6', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
    }
    get el() { return index.getElement(this); }
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
        index.registerInstance(this, hostRef);
        this.atuiCancel = index.createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.selectedTime) {
            this.initSelectedTime(this.initial_selected_time);
            this.initDropdownOptions();
        }
    }
    initDropdownOptions() {
        this.dropdownOptions = this.show_all_time
            ? [timeDate_util.TimeExtraOptions.ALL, ...this.units]
            : this.units;
    }
    initSelectedTime(initialTimeRange) {
        var _a;
        const unit = typeof initialTimeRange === 'object'
            ? timeDate_util.TimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : timeDate_util.TimeExtraOptions.ALL;
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
        if (unit !== timeDate_util.TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
        }
        else {
            this.selectedTime = timeDate_util.TimeRangeDisplay.ALL;
            if (this.timeValue) {
                this.timeValue = null;
            }
        }
        this.validateInput();
        this.startDate = (_a = this.getRelativeDate()) === null || _a === void 0 ? void 0 : _a.startDate;
    }
    validateInput() {
        if (this.selectedTime !== timeDate_util.TimeRangeDisplay.ALL) {
            const maxSeconds = this.min_date
                ? timeDate_util.TimeDateUtil.getSecondsAgoFromDate(this.min_date)
                : this.max_seconds;
            const maxTimeValue = timeDate_util.TimeDateUtil.convertSecondsToUnit(maxSeconds, this.timeUnit, 0, true);
            const minTimeValue = timeDate_util.TimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
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
            return timeDate_util.TimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
    }
    clearSelection() {
        if (typeof this.initial_selected_time === 'object') {
            this.timeValue = this.initial_selected_time.value;
            this.timeUnit = this.initial_selected_time.unit;
        }
        else {
            this.timeValue = null;
            this.timeUnit = timeDate_util.TimeExtraOptions.ALL;
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
        return (index.h("div", { key: 'e8ad8be97acf12daa8e64d8f531700c83a0b0445', class: "flex w-panel-sm flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, index.h("div", { key: 'e378170733c4c50557fd27591b91362232281667', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: '1bce99aa78a43c687160a9ace78672edab0778d3', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: '3ad1a6f495170e0c0f654be155e6e317edc0d102', class: "flex flex-col gap-8" }, index.h("atui-input-numeric", { key: '33bd054ab6c3c5db47e96db4f6fbe35c2854c4e0', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), index.h("atui-select", { key: 'd7d0b764661f581db7ed2df6b232869b43fc165b', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-sm text-error", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== timeDate_util.TimeRangeDisplay.ALL ? (this.timeValue &&
            ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.unit) && (index.h("span", { class: "text-sm font-normal text-med" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === timeDate_util.TimeRangeDisplay.ALL && (index.h("span", { class: "text-sm font-normal text-med" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (index.h("div", { key: 'f20a6c27a2570d25a035772ccb308697cd5489fc', class: "flex flex-col gap-8 px-12" }, index.h("h5", { key: '86d6fdba39d3d40ebb66d98b82e7d3e530e747c3', class: "text-h5 font-medium text-dark" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: 'ac3a47a8c723d203a83f45c69ec9c96a23d51449', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => {
                var _a, _b;
                return (index.h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                        event.stopPropagation();
                        if (event.key === 'Enter' ||
                            event.key === ' ')
                            this.updateSelectedRange(timerange);
                    }, tabindex: 0, class: `${this.selectedTime !== timeDate_util.TimeRangeDisplay.ALL && ((_a = this.selectedTime) === null || _a === void 0 ? void 0 : _a.value) === timerange.value && ((_b = this.selectedTime) === null || _b === void 0 ? void 0 : _b.unit) === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, index.h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit])));
            })))), index.h("footer", { key: '0916d9e6512e9fef253cc19a704322c0d8000ed5', class: "flex justify-between p-8" }, index.h("atui-button", { key: '40f4a8f903d91850a4cf29e36ea704ae6c312b83', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: 'df4caf954d9040a00e90f6c74267c49050d8711c', class: "flex gap-8" }, index.h("atui-button", { key: '54eba46912b21531b6c2f2460b04eb19efaf2d0e', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("atui-button", { key: '321cb81635be6bde637af4f364f1fac555b3c0fb', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "timeValue": ["watchTimeValue"],
        "timeUnit": ["watchTimeUnit"]
    }; }
};

exports.atui_button_group = AtuiButtonGroup;
exports.atui_custom_time_range = AtuiCustomTimeRangeComponent;
exports.atui_time_with_unit = AtuiTimeWithUnitComponent;
//# sourceMappingURL=atui-button-group.atui-custom-time-range.atui-time-with-unit.entry.cjs.js.map

//# sourceMappingURL=atui-button-group_3.cjs.entry.js.map