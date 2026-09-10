'use strict';

var index = require('./index-zRWHCAJe.js');
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
        return (index.h(index.Host, { key: 'c1b2ecc4d6c0d46782027d096a69fa44de14dc8d', role: "radiogroup", "aria-labelledby": this.buttonGroupId }, index.h("div", { key: 'e2a6f0c8a2004469185b95f1bba857882243ebf9', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'c77546c8df1c44e485fbe27f2897ba8093362bda', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: 'b8111da5673b985c2c9ccdaf226d319e765dd62e', label: this.label, for: this.buttonGroupId, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'c0a9a718829bc53e53966d1cf782b13fb5a3f8c8', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: 'f7350291b1257d6be2192e76115ffc42cc46da92', class: "border-input h-input bg-surface-background rounded-input relative w-fit border p-[2px] inset-shadow-xs" }, index.h("ul", { key: 'f6fb2763ff7ed5ee53d9ce6080f003b87205fbac', class: "relative z-20 flex h-full flex-row", "data-name": "button-group-options" }, index.h("slot", { key: '979b81308b745d11b6f872c1e265e5f8afb6770f' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (index.h("li", { class: "relative z-10 mr-[-1px] flex" }, button))))), this.error_text && (index.h("span", { key: 'e7c22896672db8b9f520d4e4337256768477b7ac', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
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
        return (index.h("div", { key: '4b2f9416312591de9a3cc995005c14863120e665', class: "flex w-fit flex-col gap-8" }, index.h("h5", { key: '166898d0713b9d858f2151a52ed605aa4d249464', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: '150b3a3f90546adacd8147302789b74dcd7582f7', class: "grid grid-cols-2 gap-16 px-12" }, index.h("div", { key: 'd9e8c8c44b0f8234f705eefcbc659c4df285a7e4', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: 'c948a0f8fee95aea6b297ed1ed60a6c4f660fabc', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: '92c5d2b62dfdc6501ee10ac7dfab81620bee91f6', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = atTimeDate_util.dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), index.h("div", { key: '314621faadfa4104173956cd09b320edf9f1967b', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: '2a622a9f38a476b33a5aa441e848fc1ed0e267b7', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: '31d60184ba6f271f8c0fca423e3a533c481cf15f', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = atTimeDate_util.dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), index.h("div", { key: '622c2ddb91ba3b2c97b956891adc5b627a385133', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, index.h("div", { key: '435b9fc99e1a50935e374ae6760140b6a035f711', class: "flex flex-col" }, index.h("label", { key: 'f41e85bdeb7204f2816fb86182bb844c03825f49', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: 'dfb191c8e407b342c724acacbe64a48eb1733b35', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("at-toggle-switch", { key: 'ad0a10479bbcd5a3a87db1f8f50c28fe467a2bc1', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (index.h("div", { key: '09544daa8e9467761205cae048b4797394e6b5ec', class: "flex flex-col gap-4 px-12" }, index.h("span", { key: 'e46232559a7d750b497ebef2e8e6a1346316d39f', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), index.h("div", { key: '25cd7f80ed96ec5e5b706825038489739dbf9bd3', class: "flex flex-row justify-between p-8" }, index.h("at-button", { key: '7405fa2569a7bf16428f166a1bd209eed6f35c40', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '65faaf059e729bda306767d6619db69257ca8984', class: "flex flex-row gap-8" }, index.h("at-button", { key: 'f7f9e2a6289583dcd7a2273005f7bb71ad41b145', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: 'b3cd58924a906946b487b15abd7c55f705c24244', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
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
        return (index.h("div", { key: '38a5d62d39dbcf4e8c35bbc284d2b50b29c4d92b', class: "w-panel-sm flex flex-col" }, index.h("div", { key: 'c30bfb7e2e768cffb9f8605726d8ae5069661f45', class: "grid grid-cols-[1fr_1fr] gap-8" }, index.h("div", { key: 'bed0c55c5abfe8be836b1c5f1efde8e10bd69668', class: "border-muted flex flex-col gap-8 border-r p-12" }, index.h("h5", { key: 'd816a9f76b6ce3ddc69cf167082be4825d83543f', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: 'f062e0f528342530f766cbb7c6ab736cc42d2cce', class: "flex flex-col gap-8" }, index.h("at-input-numeric", { key: 'eabf1966fbb45b4568d7585c67171f846bc1d189', value: this.timeValue, min: 1, max: this.getMaxTimeValue(), disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), index.h("at-select", { key: 'a6820e67cf24fdd8ca8760ae46b0986d25e55e50', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI
                        .TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== date.TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2013", ' ', this.translations?.ATUI?.TIME?.NOW ||
            'Now'))) : (this.selectedTime === date.TimeRangeDisplay.ALL && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (index.h("div", { key: '54d323deb4555051f7af3e72f8621ab298851940', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: '82ffe7733cb9b97fb440b6490e216d05069f37ca', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: 'cc4997ffb398d4e147cb33d2b35d6f1443c82698', class: "flex flex-col content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (index.h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                event.stopPropagation();
                if (event.key === 'Enter' ||
                    event.key === ' ')
                    this.updateSelectedRange(timerange);
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background text-foreground' : 'hover:bg-surface-2'}` }, index.h("small", null, timeRangeLabel_util.atGetRelativeRangeLabel(timerange, this.translations))))))))), index.h("footer", { key: '6dd61a9081cd642068641798a96c038f647ad992', class: "border-muted flex justify-between border-t p-8" }, index.h("at-button", { key: '27d53d4abeaaf42fa74ffee30662974c8e846712', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '504daf8183a41b03d8bcab1fe04ffc908a84382c', class: "flex gap-8" }, index.h("at-button", { key: 'ae8c945c403dd95b0096677161210b5a9623444a', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: '712fdd67cd4ca02fc825252247a06330c6e483e7', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
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
