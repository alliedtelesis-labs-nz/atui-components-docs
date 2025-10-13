'use strict';

var index = require('./index-COiLLAKF.js');
var timeDate_util = require('./time-date.util-D_xgQTJS.js');
var translation = require('./translation-HqquF7bU.js');
var timeDatePresentation_util = require('./time-date-presentation.util-B-nAI0C1.js');
var moment = require('./moment-BU5SUH_o.js');
var date = require('./date-2rkBZCUu.js');

const AtButtonGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiIndexChange = index.createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label for button group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Hint for options.
     */
    hint_text;
    /**
     * Error text for invalid choices.
     */
    error_text;
    /**
     * List of options to be displayed on the button group.
     */
    options = [];
    /**
     * Sets the current active button
     */
    value;
    /**
     * Disables the button group and prevents interaction
     */
    disabled;
    get el() { return index.getElement(this); }
    buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange;
    buttonRefs = [];
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
        return (index.h(index.Host, { key: '17b28aa128c82b5e35ce1c923f613b7ce08e1b17', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, index.h("div", { key: '31f94c8c6825ef0b303cda47fd69a0cecf16dd0a', class: "flex flex-col" }, index.h("slot", { key: 'd64ad6f37622deb7ac016260452946092b5186d7', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '19260c04612021bfd271830d4f78ee7243058626', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '8781e317ce36089c2062dc7dd69ea3059e6274f4', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: '07f0e9f0fa567d2f86238685a3705c66641f46ca', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, index.h("ul", { key: 'd8ebaecce0a8a88a9db3bfdaf264a989c1617895', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), index.h("slot", { key: 'ee2bcae1219eeea8e241d4dff112095f736367ae' }))), this.error_text && (index.h("span", { key: 'cc327bdd3f275579e8aec4b9732aab958cef14e2', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index$1) => (index.h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index$1] = el) }, index.h("at-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index$1), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index$1);
                    event.preventDefault();
                }
            } }))));
    }
};

const AtCustomTimeRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiCancel = index.createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
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
    min_date = date.MIN_DATE;
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
    get el() { return index.getElement(this); }
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
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, date.DateFormat.HOURS_ONLY));
        }
        else if (this.isFromMaxDay) {
            const fromMaxTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(timeDate_util.TimeDateUtil.shiftDateByUnit(this.max_date, -1, timeDate_util.Duration.HOURS), date.DateFormat.HOURS_ONLY);
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(undefined, fromMaxTime);
        }
        else {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions();
        }
    }
    get getToTimes() {
        this.updateMinMaxFlags();
        if (this.isToMinDay) {
            const toMaxTime = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(timeDate_util.TimeDateUtil.shiftDateByUnit(this.min_date, 1, timeDate_util.Duration.HOURS), date.DateFormat.HOURS_ONLY);
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(toMaxTime);
        }
        else if (this.isToMaxDay) {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions(undefined, timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, date.DateFormat.HOURS_ONLY));
        }
        else {
            return timeDatePresentation_util.TimeDatePresentationUtil.getTimeOptions();
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
        if (moment.hooks(this.from_date_value).isBefore(moment.hooks(this.to_date_value))) {
            this.atuiSubmit.emit({
                from: timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, this.fromTime).toISOString(),
                to: timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, this.toTime).toISOString(),
                lockEndDateToNow: this.lock_end_date_to_now,
            });
        }
    }
    render() {
        return (index.h("div", { key: '667e9b2ff6d1a6068d23fa5f2e7fe14f7d8bf81c', class: "flex w-fit flex-col gap-8 border border-gray-300" }, index.h("h5", { key: '01c52ef06cf6592772a8b2755551fa2e050f15ff', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: '55c093ebe4b7232e52a1e225b16dbff031235c5d', class: "flex flex-row gap-16 px-12" }, index.h("div", { key: 'e5c90c05d8b660a8a6d8918eb3ce227012372c03', class: "flex-fill flex flex-col gap-8" }, index.h("div", { key: '25c054ea665fefce016d520f9b99bf9c636e2220' }, index.h("label", { key: 'ecde9f638953a9dcdd3c5bde1abeef8e79973403' }, this.translations.ATUI.TIME.FROM_DATE), index.h("div", { key: '0185d373ccbd4bd3dff603413933d5a263b4f23b' }, index.h("input", { key: 'ed40143649595177371f9b7a1bd99ecea7e632e1', type: "date", name: "fromDp", class: "cursor-pointer", min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.fromDate, onChange: (event) => {
                this.from_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.fromTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (index.h("div", { key: 'f96e6251e732ce7095407f2bb1ce50761a2f7949' }, index.h("label", { key: '6a0c7bdd51066d71a1e9d2fd02bff30c0c25aa07' }, this.translations.ATUI.TIME.FROM_TIME), index.h("div", { key: '4cf20797570b57f59a0e338850a492ada989fd1b' }, index.h("at-select", { key: 'da9cced39f7a0f17435b1627e546e09bd526e5fc', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), index.h("div", { key: '4ebae73e2cca6688c59de6b2d498a6a51f58c0e3', class: "flex-fill flex flex-col gap-8" }, index.h("div", { key: '5c1d3ae1d64c95529152e66a327d5abeb836fbf6' }, index.h("label", { key: 'b3d65e6ca7094c7c27c9e5b672af9a5350aeffe8' }, this.translations.ATUI.TIME.TO_DATE), index.h("div", { key: 'bc6d9088853219f7b068e9d62800e922a2a5ce3e' }, index.h("input", { key: '9236ac75013b5b2265afcd1fb2703416346803b1', type: "date", name: "toDp", class: "cursor-pointer", disabled: this.lock_end_date_to_now, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), value: this.toDate, ref: (el) => (this.toDatePickerEl = el), onChange: (event) => {
                this.to_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(event.target.value, this.toTime);
                this.setToDateAndTime(this.to_date_value);
            } }))), this.can_set_time && (index.h("div", { key: 'c905a21e108e278bfcd788631b818321f3dcf942' }, index.h("label", { key: '87fb1ef887c8b31517d0fef4ac4b6700b75556d4' }, this.translations.ATUI.TIME.TO_TIME), index.h("div", { key: '6eea60a90c77dcd725dd10982f915a6de88f9a95' }, index.h("at-select", { key: '22163e5891aaefc43c14a599ef1d0fc1a006a841', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), index.h("div", { key: '36a10e319eb59565906804d256b9fb80379a91ab', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, index.h("div", { key: 'a4b95fa97114cba1707b6443f89da38ddd76157a', class: "flex flex-col" }, index.h("label", { key: '8049bfb62e841d964fb0b0992ff0235d4785a048', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: 'ceabf440d26a654cd9a119a2191aa7874d65e028', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("at-toggle-switch", { key: 'bfa92836c47decf9e732a719a6cc336c6f6ffb9c', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), index.h("div", { key: 'd453719328948798a3ccbfa828a7a8bffa818919', class: "flex flex-row justify-between p-8" }, index.h("at-button", { key: '155b8245b34a135bff3e0785b1cfd53a020b7ea4', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), index.h("div", { key: '0933ebf1a37d857d32b9a92dfef5044638587db2', class: "flex flex-row gap-8" }, index.h("at-button", { key: 'b1cf35aed1d42a68780c93f02b0bb0bd59718ea6', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), index.h("at-button", { key: '40b2192bc034ddca6446cdf7584b062e9fa3d59b', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "min_date": ["validateMinDate"],
        "max_date": ["validateMaxDate"],
        "default_from_date": ["validateDefaultFromDate"],
        "default_to_date": ["validateDefaultToDate"],
        "from_date_value": ["validateFromDateValue"],
        "to_date_value": ["validateToDateValue"]
    }; }
};

const AtTimeWithUnitComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiCancel = index.createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
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
    get el() { return index.getElement(this); }
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
        const unit = typeof initialTimeRange === 'object'
            ? timeDate_util.TimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : timeDate_util.TimeExtraOptions.ALL;
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
        if (unit !== timeDate_util.TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
        }
        else {
            this.selectedTime = date.TimeRangeDisplay.ALL;
            if (this.timeValue) {
                this.timeValue = null;
            }
        }
        this.validateInput();
        this.startDate = this.getRelativeDate()?.startDate;
    }
    validateInput() {
        if (this.selectedTime !== date.TimeRangeDisplay.ALL) {
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
        return (index.h("div", { key: 'c39144a58e5fc13dfdf52d384a0defee93154204', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, index.h("div", { key: 'ca761d69068f4ce9a7e6f40ab9d3fda65482e3be', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: 'a06b1f4eca47f9c5e884658724c0d8be677d360d', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: '8eb803f7a0dcc3cf35f47be408f495cae5cf0f1e', class: "flex flex-col gap-8" }, index.h("at-input-numeric", { key: '900517ab5af470643b078b2472bdd48e8bd256b1', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), index.h("at-select", { key: '79e18aed56ae6d3ebc0072e0f55cbfbe62091c4d', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== date.TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (index.h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === date.TimeRangeDisplay.ALL && (index.h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (index.h("div", { key: 'e60ee62c09602089eb73122d0a51519118860c05', class: "flex flex-col gap-8 px-12" }, index.h("h5", { key: '165b603b43e31cb947375f2a6c87e8ed14fce76d', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: 'bac68525eda5d741982b850c14727c524aff2a6b', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (index.h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `${this.selectedTime !== date.TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, index.h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), index.h("footer", { key: '7b7f37453c97b3d6e36122341dbf53c26b6fd3e7', class: "flex justify-between p-8" }, index.h("at-button", { key: 'b9b420a9f9fc02a59d7f974f9d8df3e22d318537', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '70d6d7e2e599335a670661f0d68e3eae196dfc27', class: "flex gap-8" }, index.h("at-button", { key: '522d38cbe023332db73132bf4dec73c21e7fb3e4', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: '988e37059fea0989adde06486a1e4415fac4064c', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "timeValue": ["watchTimeValue"],
        "timeUnit": ["watchTimeUnit"]
    }; }
};

exports.at_button_group = AtButtonGroup;
exports.at_custom_time_range = AtCustomTimeRangeComponent;
exports.at_time_with_unit = AtTimeWithUnitComponent;
//# sourceMappingURL=at-button-group.at-custom-time-range.at-time-with-unit.entry.cjs.js.map
