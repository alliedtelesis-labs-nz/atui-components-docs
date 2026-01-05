'use strict';

var index = require('./index-COiLLAKF.js');
var timeDate_util = require('./time-date.util-D_xgQTJS.js');
var translation = require('./translation-HqquF7bU.js');
var timeDatePresentation_util = require('./time-date-presentation.util-4vEUjJhF.js');
var moment = require('./moment-BU5SUH_o.js');
var date = require('./date-DDRmOnS1.js');

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
    buttonEls = [];
    handleValueChange(newValue) {
        if (!this.options || this.options.length === 0) {
            this.buttonEls.forEach((child) => {
                child.is_active = child.option_id === newValue;
            });
        }
    }
    componentDidLoad() {
        if (!this.options || this.options.length === 0) {
            this.buttonEls = this.getButtonElements();
            this.initializeButtons();
            this.attachEventListenersToButtons();
            setTimeout(() => this.activateOptionButton());
        }
        this.el.addEventListener('keydown', this.handleKeyDown);
    }
    getButtonElements() {
        return Array.from(this.el.querySelectorAll('at-button-group-option'));
    }
    initializeButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.option_id = buttonEl.option_id || `${index}`;
            if (this.value !== undefined && this.value !== null) {
                buttonEl.is_active = this.value === buttonEl.option_id;
            }
            buttonEl.disabled = this.disabled || buttonEl.disabled;
        });
    }
    attachEventListenersToButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.addEventListener('atuiClick', (event) => this.handleChange(event, buttonEl.option_id, index));
        });
    }
    activateOptionButton() {
        const activeChild = this.buttonEls.find((child) => child.is_active && !child.disabled);
        const initialButton = activeChild || this.buttonEls.find((child) => !child.disabled);
        if (initialButton) {
            initialButton.is_active = true;
            this.value = initialButton.option_id;
        }
    }
    get getButtonGroupOptions() {
        if (this.options) {
            return this.options.map((option, index$1) => (index.h("at-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, icon: option.icon, onAtuiClick: (event) => this.handleChange(event, option.option_id, index$1) })));
        }
        return null;
    }
    handleChange(event, optionId, index) {
        event.stopPropagation();
        this.value = optionId;
        this.atuiChange.emit(this.value);
        this.atuiIndexChange.emit(index);
        this.buttonEls.forEach((child) => {
            child.is_active = child.option_id === optionId;
        });
    }
    /**
     * Handles keyboard navigation for all button options.
     */
    handleKeyDown = (evt) => {
        if (evt.key !== 'Enter' && evt.key !== ' ')
            return;
        const target = evt.target;
        if (target.tagName !== 'BUTTON')
            return;
        const option = target.closest('at-button-group-option');
        if (!option || option.disabled)
            return;
        evt.preventDefault();
        const index = this.options?.length > 0
            ? this.options.findIndex((opt) => opt.option_id === option.option_id)
            : this.buttonEls.indexOf(option);
        if (index >= 0) {
            const customEvent = new CustomEvent('atuiClick', {
                detail: { element: option },
            });
            this.handleChange(customEvent, option.option_id, index);
        }
    };
    disconnectedCallback() {
        this.el.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return (index.h(index.Host, { key: '51fa784b699db525255c34ac93615650732eb0cb', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, index.h("div", { key: '3accfdaf2d1b8e0bf61b32890ac5fab61851ed90', class: "flex flex-col" }, index.h("slot", { key: '7135fcbc0d853a9385da60c7827f9787b03b2703', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '4269bb20e1c00dbc578df7f236f54f1455f9ff84', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'a2d2eb2276c2a6925c5277227ee01444d9a6bb95', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: '830f331d4db615a7314d192a956dca9f60d400ea', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, index.h("ul", { key: 'bf709d82367f4d86f05a4a8ed4d86c8146983ff2', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, index.h("slot", { key: 'cb0c5db96a787bb4ad8a5d36f17870076ffffffa' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (index.h("li", { class: "relative z-10 mr-[-1px]" }, button))))), this.error_text && (index.h("span", { key: 'efeb2acbdb4a46e832b19d69ae122594d826ce8d', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
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
        return (index.h("div", { key: '750f091789145dc080b83f03aa49d13eb2e30a80', class: "flex w-fit flex-col gap-8 border border-gray-300" }, index.h("h5", { key: '7432fe7f523d223771f820fdad96b6cc67d890fe', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: 'bf2bb880d2e765ebf994287a5574125e63331d2b', class: "flex flex-row gap-16 px-12" }, index.h("div", { key: '7999e7f223073bc956a898b050106f1a9848e843', class: "flex-fill flex flex-col gap-8" }, index.h("at-datepicker", { key: '459012cf19dcee46ef9cc97c55df3f056b2f1966', label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (index.h("div", { key: '186da1208231e58c3369e0b67bf91e8b593ade9d' }, index.h("label", { key: '02ae89261c26fcf7f36ed4b215873b983cb2f05a' }, this.translations.ATUI.TIME.FROM_TIME), index.h("div", { key: '66166c5661e925d0cb76653ecdc41d5f6756664d' }, index.h("at-select", { key: '4b1ec550676e784684bd7a5b23087856ffe7672e', options: this.getFromTimes, value: this.fromTime, onAtuiChange: (event) => {
                this.from_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.fromDate, event.detail);
            } }))))), index.h("div", { key: '3a4169cb181f47268b788cda36cded3ed9209e5c', class: "flex-fill flex flex-col gap-8" }, index.h("at-datepicker", { key: 'b7ad1f7c40d8eaee916e1614bfdae361bad3333e', label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (index.h("div", { key: '8b12fa07142e6f2b551d1c3fac3d1de8703b38a9' }, index.h("label", { key: 'a9832d584df0e397ef3184bec4dd3326ae1e07dc' }, this.translations.ATUI.TIME.TO_TIME), index.h("div", { key: '50454ff8a2a77b8feaec65fbc6c84091ca0dc593' }, index.h("at-select", { key: '8b8561aaff28cffb9b1c4813b51aaa201113884c', options: this.getToTimes, value: this.toTime, disabled: this.lock_end_date_to_now, ref: (el) => (this.toTimePickerEl = el), onAtuiChange: (event) => {
                this.to_date_value =
                    timeDatePresentation_util.TimeDatePresentationUtil.buildDateFromStrings(this.toDate, event.detail);
            } })))))), index.h("div", { key: '5c0e1f1ddcb6b7495ceded1fda083753581f2715', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, index.h("div", { key: '1f4edf2c15376d6b938c4962925cd85887a3396c', class: "flex flex-col" }, index.h("label", { key: 'c2d872bcef43b4f13609ccc332ffb9c4d8d81750', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: '5f94618cd6f857730a614bfe6e1f0b10e354c23c', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("at-toggle-switch", { key: '48830d8657c51e26cde703a7efba1f320653fa3f', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), index.h("div", { key: '44d28522384a7fc76071b7628a5950dd3e135bbf', class: "flex flex-row justify-between p-8" }, index.h("at-button", { key: '427ae36897496e8d248705cdc90b16ce4909260c', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onClick: () => this.clearSelection() }), index.h("div", { key: '90daa856a855262060142bc9df9da7a91b845ff2', class: "flex flex-row gap-8" }, index.h("at-button", { key: '560603c72dd31767a795aaae85b44ed368f110d6', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onClick: () => this.handleCancel() }), index.h("at-button", { key: '4b9cc83fc285b18b5fd8580132e213ddcc562f7f', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, onClick: () => this.handleSubmit() })))));
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
        return (index.h("div", { key: '48d85f565bc358d29037e2b2110488d5ca2968cf', class: "w-panel-sm flex flex-col gap-16 border border-gray-300", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, index.h("div", { key: 'e29c572426891c1147bfab48638aa3abca707104', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: 'd17aed7e8a93b36f2579932f7cd2b15dfaf92cc1', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: '5d56950e715490420a6c881c3fb897c436741909', class: "flex flex-col gap-8" }, index.h("at-input-numeric", { key: '6a95deeb253b42402b95ea67e87b04e798f18910', value: this.timeValue, onAtuiChange: (event) => (this.timeValue = event.detail) }), index.h("at-select", { key: '00150b8dd2847d3a9c10945453215878c4fde4a8', class: "flex-fill", value: this.translations.ATUI.TIME[this.timeUnit], options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => this.translations.ATUI.TIME[option])
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== date.TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (index.h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === date.TimeRangeDisplay.ALL && (index.h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (index.h("div", { key: 'd91ed72d4e26dc74ed0f7de093c089d9627bc60d', class: "flex flex-col gap-8 px-12" }, index.h("h5", { key: '17902dac593b5d399a422c1b620a7567707ba331', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: '6c062546e21c374003f63f64782b165ec27a1640', class: "columns-2", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (index.h("div", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `${this.selectedTime !== date.TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light px-4' : ''} cursor-pointer` }, index.h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), index.h("footer", { key: '9f58f361ecd94d972d791ac677a3799b1ada4851', class: "flex justify-between p-8" }, index.h("at-button", { key: '3246bdb0f29019968df7d90f9dccf24a89c39f07', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '53b963d3a87be6a9e5b017761769983bb4b8c823', class: "flex gap-8" }, index.h("at-button", { key: 'e81f456f293bff36cc0987bebc0d90d83683671c', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: '1a97695dbe61129af82105d5a60c4e786836ae9b', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
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
