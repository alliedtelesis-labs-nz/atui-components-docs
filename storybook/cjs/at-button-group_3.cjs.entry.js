'use strict';

var index = require('./index-Bc1nzv_X.js');
var atTimeDate_util = require('./at-time-date.util-6Fmc04Ie.js');
var translation = require('./translation-NP6A4XKu.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var date = require('./date-DDRmOnS1.js');
var timeRangeLabel_util = require('./time-range-label.util-BR6KvMfz.js');
require('./at-time-range.models-BPZ2R6EI.js');

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
    /**
     * What each slotted option asked for on its own, so the group's `disabled`
     * can be lifted again without re-enabling an option that was never meant to
     * be interactive.
     */
    optionOwnDisabled = new WeakMap();
    handleDisabledChange() {
        this.applyDisabledToButtons();
    }
    handleValueChange(newValue) {
        if (!this.options || this.options.length === 0) {
            this.buttonEls.forEach((child) => {
                child.is_active = child.value === newValue;
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
    }
    getButtonElements() {
        return Array.from(this.el.querySelectorAll('at-button-group-option:not([data-ignore-selection])'));
    }
    initializeButtons() {
        this.buttonEls.forEach((buttonEl) => {
            const hasIcon = !!buttonEl.querySelector('[slot="icon"]');
            buttonEl.label = buttonEl.label
                ? buttonEl.label
                : hasIcon
                    ? ''
                    : typeof buttonEl.value === 'string'
                        ? buttonEl.value
                        : undefined;
            if (this.value !== undefined && this.value !== null) {
                buttonEl.is_active = this.value === buttonEl.value;
            }
            if (!this.optionOwnDisabled.has(buttonEl)) {
                this.optionOwnDisabled.set(buttonEl, !!buttonEl.disabled);
            }
        });
        this.applyDisabledToButtons();
    }
    applyDisabledToButtons() {
        this.buttonEls.forEach((buttonEl) => {
            buttonEl.disabled =
                this.disabled || this.optionOwnDisabled.get(buttonEl) === true;
        });
    }
    attachEventListenersToButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.addEventListener('atuiClick', (event) => this.handleChange(event, buttonEl.value, index));
        });
    }
    activateOptionButton() {
        const activeChild = this.buttonEls.find((child) => child.is_active && !child.disabled);
        const initialButton = activeChild || this.buttonEls.find((child) => !child.disabled);
        if (initialButton) {
            initialButton.is_active = true;
            this.value = initialButton.value;
        }
    }
    get getButtonGroupOptions() {
        if (this.options) {
            return this.options.map((option, index$1) => (index.h("at-button-group-option", { value: option.value, label: option.label
                    ? option.label
                    : option.icon
                        ? ''
                        : option.value, is_active: this.value === option.value, disabled: option.disabled || this.disabled, onAtuiClick: (event) => this.handleChange(event, option.value, index$1) }, option.icon && (index.h("at-icon", { slot: "icon", name: option.icon })))));
        }
        return null;
    }
    handleChange(event, optionValue, index) {
        event.stopPropagation();
        this.value = optionValue;
        this.atuiChange.emit(this.value);
        this.atuiIndexChange.emit(index);
        this.buttonEls.forEach((child) => {
            child.is_active = child.value === optionValue;
        });
    }
    render() {
        return (index.h(index.Host, { key: 'e330486c609fa5b648efaf8c32b6aac8f76814f9', role: "radiogroup", "aria-labelledby": this.buttonGroupId }, index.h("div", { key: 'd6e0de4497275e16070a225a440d18cd13ea5bb2', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'cdbc9625d615dac3e549b48d3e43fd6512b92f45', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: 'fdbbf90f8ff3b48f60fbe0b162adbd10b87c7824', label: this.label, for: this.buttonGroupId, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '6f45bf6049cc7a56ad4ff76c8f3eac856699b353', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: '47e6e0252d59caa0bcb7053ee4786f5ed67c99df', class: "border-input h-input bg-surface-background rounded-input relative w-fit border p-[2px] inset-shadow-xs" }, index.h("ul", { key: 'e5b6ee49b05b0f3b8dd541a9301bc352eb798a6c', class: "relative z-20 flex h-full flex-row", "data-name": "button-group-options" }, index.h("slot", { key: '7b1c03e14ce35498e68c817847ce4ba8062546a5' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (index.h("li", { class: "relative z-10 mr-[-1px] flex" }, button))))), this.error_text && (index.h("span", { key: '62996846327d10e22ea458ec3b3b7e2adb9813bd', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
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
        this.min_date = this.floorToMinute(newValue);
    }
    /**
     * Maximum selectable date
     */
    max_date = new Date(Date.now());
    validateMaxDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.max_date = this.floorToMinute(newValue);
    }
    /**
     * Default value for the from date
     */
    default_from_date;
    validateDefaultFromDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_from_date = this.floorToMinute(newValue);
        this.from_date_value = this.default_from_date;
        this.initialFromDate = this.from_date_value;
    }
    /**
     * Default value for the to date
     */
    default_to_date;
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.floorToMinute(newValue);
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
        this.initialToDate = this.to_date_value;
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
            this.floorToMinute(newValue).toISOString()) {
            this.from_date_value = newValue && this.floorToMinute(newValue);
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
            this.floorToMinute(newValue).toISOString()) {
            this.to_date_value = newValue && this.floorToMinute(newValue);
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
    get el() { return index.getElement(this); }
    hasSavedInitial = false;
    initialFromDate;
    initialToDate;
    initialLockEndDateToNow;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    componentWillRender() {
        if (!this.fromDate && !this.fromTime) {
            this.from_date_value = this.default_from_date
                ? this.default_from_date
                : this.min_date;
            this.setFromDateAndTime(this.from_date_value);
        }
        if (!this.toDate && !this.toTime) {
            this.to_date_value = this.default_to_date
                ? this.default_to_date
                : this.max_date;
            this.setToDateAndTime(this.to_date_value);
        }
        if (!this.hasSavedInitial) {
            this.savedInitialState();
        }
    }
    savedInitialState() {
        this.initialFromDate = this.from_date_value;
        this.initialToDate = this.to_date_value;
        this.initialLockEndDateToNow = this.lock_end_date_to_now;
        this.hasSavedInitial = true;
    }
    clearSelection() {
        this.from_date_value = this.default_from_date
            ? this.default_from_date
            : this.min_date;
        this.to_date_value = this.default_to_date
            ? this.default_to_date
            : this.max_date;
    }
    floorToMinute(date) {
        return atTimeDate_util.AtTimeDateUtil.floorDateByTimeUnit(date, atTimeDate_util.Duration.MINUTES);
    }
    getCustomToDateTime() {
        return atTimeDate_util.dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    getCustomFromDateTime() {
        return atTimeDate_util.dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = atTimeDate_util.AtTimeDateUtil.isSameDateByUnit(to, this.min_date, atTimeDate_util.Duration.DAYS);
        this.isToMaxDay = atTimeDate_util.AtTimeDateUtil.isSameDateByUnit(to, this.max_date, atTimeDate_util.Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = atTimeDate_util.AtTimeDateUtil.isSameDateByUnit(from, this.min_date, atTimeDate_util.Duration.DAYS);
        this.isFromMaxDay = atTimeDate_util.AtTimeDateUtil.isSameDateByUnit(from, this.max_date, atTimeDate_util.Duration.DAYS);
    }
    setDateNow() {
        const toggleValue = this.setDateNowSwitch.value;
        if (toggleValue) {
            this.lock_end_date_to_now = true;
            const date = this.floorToMinute(new Date(Date.now()));
            this.to_date_value = date;
        }
        else {
            this.lock_end_date_to_now = false;
        }
    }
    setToDateAndTime(toDate) {
        this.toDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = atTimeDate_util.dayjs(toDate).format('HH:mm');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = atTimeDate_util.dayjs(fromDate).format('HH:mm');
    }
    get fromTimeMin() {
        this.updateMinMaxFlags();
        return this.isFromMinDay
            ? atTimeDate_util.dayjs(this.min_date).format('HH:mm')
            : undefined;
    }
    get fromTimeMax() {
        this.updateMinMaxFlags();
        return this.isFromMaxDay
            ? atTimeDate_util.dayjs(atTimeDate_util.AtTimeDateUtil.shiftDateByUnit(this.max_date, -1, atTimeDate_util.Duration.HOURS)).format('HH:mm')
            : undefined;
    }
    get isFromDateAfterToDate() {
        const from = this.getCustomFromDateTime();
        const to = this.getCustomToDateTime();
        if (!from || !to || isNaN(from.getTime()) || isNaN(to.getTime()))
            return false;
        return from >= to;
    }
    get isRangeInvalid() {
        return this.isFromDateAfterToDate;
    }
    get toTimeMin() {
        this.updateMinMaxFlags();
        return this.isToMinDay
            ? atTimeDate_util.dayjs(atTimeDate_util.AtTimeDateUtil.shiftDateByUnit(this.min_date, 1, atTimeDate_util.Duration.HOURS)).format('HH:mm')
            : undefined;
    }
    get toTimeMax() {
        this.updateMinMaxFlags();
        return this.isToMaxDay
            ? atTimeDate_util.dayjs(this.max_date).format('HH:mm')
            : undefined;
    }
    /**
     * Emitted when the user cancels the time range selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time range selection
     */
    atuiSubmit;
    /**
     * Restores the from/to/lock_end_date_to_now fields to the last applied values,
     * or the initial defaults if no changes have been applied.
     */
    async resetForm() {
        this.from_date_value = this.initialFromDate;
        this.to_date_value = this.initialToDate;
        this.lock_end_date_to_now = this.initialLockEndDateToNow;
    }
    handleCancel() {
        this.resetForm();
        this.atuiCancel.emit();
    }
    handleSubmit() {
        this.atuiSubmit.emit({
            from: atTimeDate_util.dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            to: atTimeDate_util.dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            lockEndDateToNow: this.lock_end_date_to_now,
        });
        this.savedInitialState();
    }
    render() {
        return (index.h("div", { key: 'ce0870ad9cde42c7162429c07853c07f922a1413', class: "flex w-fit flex-col gap-8" }, index.h("h5", { key: 'e447516fe5486667c3bb9592738fcf4338f15f73', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: '0cea10ae23b0509f65787ef1ddda9562de37379b', class: "grid grid-cols-2 gap-16 px-12" }, index.h("div", { key: '7d6071e062599e7858ff2add5f8d2a14d59270fc', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: '574a35cd34babed4e8767087275a609dde8c6a77', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: 'bf56c0761694550a5c35472f242d37b57d5dd524', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = atTimeDate_util.dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), index.h("div", { key: 'd5d7d2e7b072c55e283f407e75ec9efbc8729f83', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: '73d46c2d4dbdd1e5b13071f7be058605572712d8', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: '0aaa3362abe78047a1c38c1f7529cd49d9a42ae9', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = atTimeDate_util.dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), index.h("div", { key: '1891302948f526c8eaaf70c6ad3fd870293a97bc', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, index.h("div", { key: '4f85403dcbe521d728d903792a1d1984d52ae418', class: "flex flex-col" }, index.h("label", { key: '839890355393d4ae11ddcd9a3c3abe8e7ab533e4', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: '96b7bb598ab821f7cbbb87329cf6b38e2336d780', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("at-toggle-switch", { key: '3cb1877a611b659a5595289c7c744af301159c14', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (index.h("div", { key: '8515affc9a86441f93123ad87cd945b1d1c9aef8', class: "flex flex-col gap-4 px-12" }, index.h("span", { key: '56bdd08fe2d5adb373f0a62a3c978237ade80d91', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), index.h("div", { key: '37ca05370de6efb99689f375298df5f44d0905c3', class: "flex flex-row justify-between p-8" }, index.h("at-button", { key: '7e2f662d870d8dc2ea0e58a6de07396991a0185c', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '9fa5e5674fee1ba2eacb67304c7b3d75740afef6', class: "flex flex-row gap-8" }, index.h("at-button", { key: 'cd20bcfd7804201c9975631619875973f6e94940', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: 'eb5f0d61d32f16d60d6a093efe5b9a2221e9c85f', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "min_date": [{
                "validateMinDate": 0
            }],
        "max_date": [{
                "validateMaxDate": 0
            }],
        "default_from_date": [{
                "validateDefaultFromDate": 0
            }],
        "default_to_date": [{
                "validateDefaultToDate": 0
            }],
        "from_date_value": [{
                "validateFromDateValue": 0
            }],
        "to_date_value": [{
                "validateToDateValue": 0
            }]
    }; }
};

const LIMIT_DRIFT_TOLERANCE_SECONDS = 60;
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
        this.updateSelectedTime();
    }
    timeUnit;
    watchAtTimeUnit() {
        this.updateSelectedTime();
    }
    selectedTime;
    startDate;
    disabledTimeValue = false;
    get el() { return index.getElement(this); }
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit;
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
        const units = this.getVisibleUnitsWithinRangeLimit();
        this.dropdownOptions = this.show_all_time
            ? [atTimeDate_util.TimeExtraOptions.ALL, ...units]
            : units;
    }
    getVisibleUnitsWithinRangeLimit() {
        if (!this.units) {
            return [];
        }
        if (!this.min_date) {
            return this.units;
        }
        const maxSeconds = atTimeDate_util.AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.units.filter((unit) => atTimeDate_util.AtTimeDateUtil.convertToSeconds({ unit, value: 1 }) <=
            maxSeconds);
    }
    initSelectedTime(initialTimeRange) {
        const unit = typeof initialTimeRange === 'object'
            ? atTimeDate_util.AtTimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : atTimeDate_util.TimeExtraOptions.ALL;
        const value = typeof initialTimeRange === 'object'
            ? initialTimeRange.value
            : null;
        this.timeUnit = unit;
        this.timeValue = value;
        this.selectedTime = initialTimeRange;
        this.startDate = this.getRelativeDate()?.startDate;
    }
    updateSelectedTime() {
        const unit = this.timeUnit;
        const value = this.timeValue;
        if (unit !== atTimeDate_util.TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
            this.disabledTimeValue = false;
        }
        else {
            this.selectedTime = date.TimeRangeDisplay.ALL;
            this.timeValue = null;
            this.disabledTimeValue = true;
        }
        this.validateInput();
        this.startDate = this.getRelativeDate()?.startDate;
    }
    formatDuration(seconds) {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        if (days > 0)
            return hours > 0 ? `${days}d ${hours}hr` : `${days}d`;
        if (hours > 0)
            return mins > 0 ? `${hours}hr ${mins}min` : `${hours}hr`;
        return `${mins}min`;
    }
    getMaxSeconds() {
        return this.min_date
            ? atTimeDate_util.AtTimeDateUtil.getSecondsAgoFromDate(this.min_date)
            : this.max_seconds;
    }
    getMaxTimeValue() {
        const secondsPerUnit = this.timeUnit === atTimeDate_util.TimeExtraOptions.ALL
            ? 1
            : atTimeDate_util.AtTimeDateUtil.convertToSeconds({
                unit: this.timeUnit,
                value: 1,
            });
        // The limit is re-derived from Date.now() on every render, so an exact
        // bound (a 7-day range_limit) arrives a few seconds short; flooring it
        // without the tolerance would drop a whole unit and clamp 7 days to 6.
        return Math.floor((this.getMaxSeconds() + LIMIT_DRIFT_TOLERANCE_SECONDS) /
            secondsPerUnit);
    }
    getMinTimeValue() {
        return atTimeDate_util.AtTimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
    }
    validateInput() {
        if (this.selectedTime !== date.TimeRangeDisplay.ALL) {
            const maxSeconds = this.getMaxSeconds();
            const maxTimeValue = this.getMaxTimeValue();
            const minTimeValue = this.getMinTimeValue();
            if (this.timeValue > maxTimeValue) {
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MAX_NUMBER.replace('{lowerThanValue}', this.formatDuration(maxSeconds))
                    : `Please enter a value lower than ${this.formatDuration(maxSeconds)}`;
            }
            else if (this.timeValue < minTimeValue) {
                this.errorText = this.translations
                    ? this.translations.ATUI.TIME.VALIDATION.MIN_NUMBER.replace('{min}', this.formatDuration(this.min_seconds))
                    : `Please enter a value larger than ${this.formatDuration(this.min_seconds)}`;
            }
            else {
                this.errorText = '';
            }
            if (this.errorText && this.custom_error_message) {
                this.secondaryErrorText = this.custom_error_message;
            }
        }
        else {
            this.errorText = '';
        }
    }
    updateSelectedRange(value) {
        this.timeUnit = value.unit;
        this.timeValue = value.value;
        this.selectedTime = value;
    }
    isSelectedOption(option) {
        return (this.selectedTime !== date.TimeRangeDisplay.ALL &&
            this.selectedTime?.value === option.value &&
            this.selectedTime?.unit === option.unit);
    }
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return atTimeDate_util.AtTimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
    }
    getVisibleCommonOptionsWithinRangeLimit() {
        if (!this.common_options) {
            return [];
        }
        if (!this.min_date) {
            return this.common_options;
        }
        const maxSeconds = atTimeDate_util.AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.common_options.filter((option) => atTimeDate_util.AtTimeDateUtil.convertToSeconds(option) <= maxSeconds);
    }
    clearSelection() {
        if (typeof this.initial_selected_time === 'object') {
            this.timeUnit = this.initial_selected_time.unit;
            this.timeValue = this.initial_selected_time.value;
        }
        else {
            this.timeUnit = atTimeDate_util.TimeExtraOptions.ALL;
            this.timeValue = null;
        }
    }
    handleCancel() {
        this.clearSelection();
        this.atuiCancel.emit();
    }
    handleSubmit() {
        if (this.errorText === '') {
            this.atuiSubmit.emit(this.selectedTime);
        }
    }
    handleSelectChange(event) {
        this.timeUnit = event.detail;
    }
    render() {
        const visibleCommonOptions = this.getVisibleCommonOptionsWithinRangeLimit();
        return (index.h("div", { key: '683652374a49aecff299f5b7d9fb5cd838411e5c', class: "w-panel-sm flex flex-col" }, index.h("div", { key: 'b93a4b9315a25327daf892438a4eca22b47c094c', class: "grid grid-cols-[1fr_1fr] gap-8" }, index.h("div", { key: '30ee49438803b924ff570f78e1ef3a6f7e151a07', class: "border-muted flex flex-col gap-8 border-r p-12" }, index.h("h5", { key: '6abcfcb986f6dc228d350e2fba08b4a3cf394685', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: '5dd497c83a4ae2450c80057e9c75e588a51f7105', class: "flex flex-col gap-8" }, index.h("at-input-numeric", { key: 'a84123d2f6d04e73da16db0a669d9a037dec667d', value: this.timeValue, min: 1, max: this.getMaxTimeValue(), disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), index.h("at-select", { key: '9059e119bad7ce1916988047a90422193825a18c', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI
                        .TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== date.TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2013", ' ', this.translations?.ATUI?.TIME?.NOW ||
            'Now'))) : (this.selectedTime === date.TimeRangeDisplay.ALL && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (index.h("div", { key: '1cffaed460881c1387b3a44303ff97de8e8119ff', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: 'a36125698521309a61b674f3afe4f7ddf179bead', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: 'b2df0e131bf16f29ebafbb253902ad940e3dbd6f', class: "flex flex-col content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (index.h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                event.stopPropagation();
                if (event.key === 'Enter' ||
                    event.key === ' ')
                    this.updateSelectedRange(timerange);
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background text-foreground' : 'hover:bg-surface-2'}` }, index.h("small", null, timeRangeLabel_util.atGetRelativeRangeLabel(timerange, this.translations))))))))), index.h("footer", { key: 'fe08b6488f83fbb7cd1419f042d215e71ebb77f6', class: "border-muted flex justify-between border-t p-8" }, index.h("at-button", { key: '8a141511e165fd188e2f3575ae0a54922c3031da', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '2e4b147f6b96732996650bca7aa8d88837bd0972', class: "flex gap-8" }, index.h("at-button", { key: 'baec3efe36493a045a8549c4e35a2ae1a1c0dcc8', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: '1b1910373ea47ef94f41a2c1e7afe6a4ea8ee71e', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "timeValue": [{
                "watchTimeValue": 0
            }],
        "timeUnit": [{
                "watchAtTimeUnit": 0
            }]
    }; }
};

exports.at_button_group = AtButtonGroup;
exports.at_custom_time_range = AtCustomTimeRangeComponent;
exports.at_time_with_unit = AtTimeWithUnitComponent;
