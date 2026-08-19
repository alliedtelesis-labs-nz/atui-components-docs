import { r as registerInstance, c as createEvent, a as getElement, h, H as Host, F as Fragment } from './index-B2z78KBX.js';
import { a as AtTimeDateUtil, D as Duration, d as dayjs, T as TimeExtraOptions } from './at-time-date.util-Bfdzn_RG.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-H5gcGi8Y.js';
import { M as MIN_DATE, T as TimeRangeDisplay } from './date-C3LwY5aR.js';

const AtButtonGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiIndexChange = createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
    /**
     * Defines the emit type defaults to string. Boolean shoudl be used when you are
     */
    type = 'string';
    get el() { return getElement(this); }
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
        this.el.addEventListener('keydown', this.handleKeyDown);
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
            buttonEl.disabled = this.disabled || buttonEl.disabled;
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
            return this.options.map((option, index) => (h("at-button-group-option", { value: option.value, label: option.label
                    ? option.label
                    : option.icon
                        ? ''
                        : option.value, is_active: this.value === option.value, disabled: option.disabled, onAtuiClick: (event) => this.handleChange(event, option.value, index) }, option.icon && (h("at-icon", { slot: "icon", name: option.icon })))));
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
    /**
     * Handles keyboard navigation for all button options.
     */
    handleKeyDown = (evt) => {
        if (evt.key !== 'Enter' && evt.key !== ' ')
            return;
        const target = evt.target;
        if (target.tagName !== 'AT-BUTTON-GROUP-OPTION')
            return;
        const option = target;
        if (!option || option.disabled)
            return;
        evt.preventDefault();
        const index = this.options?.length > 0
            ? this.options.findIndex((opt) => opt.value === option.value)
            : this.buttonEls.indexOf(option);
        if (index >= 0) {
            const customEvent = new CustomEvent('atuiClick', {
                detail: { element: option },
            });
            this.handleChange(customEvent, option.value, index);
        }
    };
    disconnectedCallback() {
        this.el.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return (h(Host, { key: '4e33dd9c797ff159ea1f67f2eff2827fba3d1a81', role: "radiogroup", "aria-labelledby": this.buttonGroupId }, h("div", { key: '73de3b09ca64924cbc13ddfb1e3dc3a8a70af21a', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'd4311171b83b33ac411aef1b2aa917ea9908e764', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '27c7a3d70c5e5e60695a9f2dfd0439e655b9fda7', label: this.label, for: this.buttonGroupId, info_text: this.info_text })), this.hint_text && (h("span", { key: 'd5a97f42a5c4e8d8b621ead9717b995c0478c70b', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: 'c54622bed3376233c9bb06ab8ff1f643f79ba9d1', class: "border-input bg-surface-background rounded-input relative w-fit border inset-shadow-xs" }, h("ul", { key: 'e4a41007d39a628c7cdad52f6c8c6b65f1dd67dd', class: "relative z-20 m-[2px] flex flex-row", "data-name": "button-group-options" }, h("slot", { key: '5c2fdd292fa8bf15cf4b10352241c57a7e37e2f0' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (h("li", { class: "relative z-10 mr-[-1px]" }, button))))), this.error_text && (h("span", { key: 'd8dcef3263ae458f9544808165e66e7380745545', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};

const AtCustomTimeRangeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.max_date = this.floorMinDate(newValue);
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
        this.initialFromDate = this.from_date_value;
    }
    /**
     * Default value for the to date
     */
    default_to_date;
    validateDefaultToDate(newValue, oldValue) {
        if (newValue && oldValue && newValue.getTime() === oldValue.getTime())
            return;
        this.default_to_date = this.floorMinDate(newValue);
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
            this.floorMinDate(newValue).toISOString()) {
            this.to_date_value = newValue && this.floorMinDate(newValue);
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
    get el() { return getElement(this); }
    hasSavedInitial = false;
    initialFromDate;
    initialToDate;
    initialLockEndDateToNow;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
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
    floorMinDate(date) {
        return AtTimeDateUtil.floorDateByTimeUnit(date, Duration.MINUTES);
    }
    getCustomToDateTime() {
        return dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    getCustomFromDateTime() {
        return dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm').toDate();
    }
    updateMinMaxFlags() {
        const to = this.getCustomToDateTime();
        this.isToMinDay = AtTimeDateUtil.isSameDateByUnit(to, this.min_date, Duration.DAYS);
        this.isToMaxDay = AtTimeDateUtil.isSameDateByUnit(to, this.max_date, Duration.DAYS);
        const from = this.getCustomFromDateTime();
        this.isFromMinDay = AtTimeDateUtil.isSameDateByUnit(from, this.min_date, Duration.DAYS);
        this.isFromMaxDay = AtTimeDateUtil.isSameDateByUnit(from, this.max_date, Duration.DAYS);
    }
    setDateNow() {
        const toggleValue = this.setDateNowSwitch.value;
        if (toggleValue) {
            this.lock_end_date_to_now = true;
            const date = this.floorMinDate(new Date(Date.now()));
            this.to_date_value = date;
        }
        else {
            this.lock_end_date_to_now = false;
        }
    }
    setToDateAndTime(toDate) {
        this.toDate = TimeDatePresentationUtil.getFormattedDate(toDate, 'YYYY-MM-DD');
        this.toTime = dayjs(toDate).format('HH:mm');
    }
    setFromDateAndTime(fromDate) {
        this.fromDate = TimeDatePresentationUtil.getFormattedDate(fromDate, 'YYYY-MM-DD');
        this.fromTime = dayjs(fromDate).format('HH:mm');
    }
    get fromTimeMin() {
        this.updateMinMaxFlags();
        return this.isFromMinDay
            ? dayjs(this.min_date).format('HH:mm')
            : undefined;
    }
    get fromTimeMax() {
        this.updateMinMaxFlags();
        return this.isFromMaxDay
            ? dayjs(AtTimeDateUtil.shiftDateByUnit(this.max_date, -1, Duration.HOURS)).format('HH:mm')
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
            ? dayjs(AtTimeDateUtil.shiftDateByUnit(this.min_date, 1, Duration.HOURS)).format('HH:mm')
            : undefined;
    }
    get toTimeMax() {
        this.updateMinMaxFlags();
        return this.isToMaxDay
            ? dayjs(this.max_date).format('HH:mm')
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
            from: dayjs(`${this.fromDate} ${this.fromTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            to: dayjs(`${this.toDate} ${this.toTime}`, 'YYYY-MM-DD HH:mm')
                .toDate()
                .toISOString(),
            lockEndDateToNow: this.lock_end_date_to_now,
        });
        this.savedInitialState();
    }
    render() {
        return (h("div", { key: '6c30892d0be3f016d7a90b5d068daa8dcd064b1c', class: "flex w-fit flex-col gap-8" }, h("h5", { key: '20de15260acdf398358eadfffa45263adbf943c4', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: 'ee30fc636f72c282beecdc640a694f9b8a8e3de9', class: "grid grid-cols-2 gap-16 px-12" }, h("div", { key: '2ea5d975451aa0205ba26a629cdd45cd1452e1b6', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: '020639f8eb5a31d293c74ee3a02ef5011a73a954', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: '929930c9a1e90a506935e37f522740324323dbcf', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), h("div", { key: 'd2adc6565dab7294c35c6e7bc6ce57116d16966c', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: '42a3147746c0d04eafda04cb9c4a301077c2dbde', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: 'af3bd0bc03878f84ab2fb811ff54d1a4e265bac3', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), h("div", { key: 'd563215cf4548470bf94c8bee2e1f2e038d105e0', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, h("div", { key: 'c17c3a3668a866ceb68c09ce0d02ea56c0d0e1f0', class: "flex flex-col" }, h("label", { key: '4741abc4fd2972c8a8849fc7cbfb166a520d3c7b', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '14486fac0a170be39ae1e9969e0542351632991e', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: '6ad823a8334bf21d636b6dca159d616b0e4ece0b', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (h("div", { key: '934085feec055df2cd2e5d0177adfb08cf7a7d69', class: "flex flex-col gap-4 px-12" }, h("span", { key: '965d00b2de47d8e4a2ecf3af21bb717635ec97c2', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), h("div", { key: 'e42629bea7b42e3c05b79b8fdd3eab8e4225ddd2', class: "flex flex-row justify-between p-8" }, h("at-button", { key: '682fd6a2ca3574d192ff7930e913de4c7c3d82f9', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), h("div", { key: 'a9aa79adeed5aeacb5add1e6070a78ac7f7f27b0', class: "flex flex-row gap-8" }, h("at-button", { key: 'd2300ad42a3cc871e30876de6c07a025f45e4873', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: 'b74922be29e40ec3eecc055a90f2f2690d3867f2', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
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

const AtTimeWithUnitComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiCancel = createEvent(this, "atuiCancel", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
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
    get el() { return getElement(this); }
    /**
     * Emitted when the user cancels the time selection
     */
    atuiCancel;
    /**
     * Emitted when the user submits the time selection
     */
    atuiSubmit;
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
        const units = this.getVisibleUnitsWithinRangeLimit();
        this.dropdownOptions = this.show_all_time
            ? [TimeExtraOptions.ALL, ...units]
            : units;
    }
    getVisibleUnitsWithinRangeLimit() {
        if (!this.units) {
            return [];
        }
        if (!this.min_date) {
            return this.units;
        }
        const maxSeconds = AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.units.filter((unit) => AtTimeDateUtil.convertToSeconds({ unit, value: 1 }) <=
            maxSeconds);
    }
    initSelectedTime(initialTimeRange) {
        const unit = typeof initialTimeRange === 'object'
            ? AtTimeDateUtil.getCurrentOrDefaultUnit(initialTimeRange.unit, this.units)
            : TimeExtraOptions.ALL;
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
        if (unit !== TimeExtraOptions.ALL) {
            this.selectedTime = { unit, value };
            this.disabledTimeValue = false;
        }
        else {
            this.selectedTime = TimeRangeDisplay.ALL;
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
    validateInput() {
        if (this.selectedTime !== TimeRangeDisplay.ALL) {
            const maxSeconds = this.min_date
                ? AtTimeDateUtil.getSecondsAgoFromDate(this.min_date)
                : this.max_seconds;
            const maxTimeValue = AtTimeDateUtil.convertSecondsToUnit(maxSeconds, this.timeUnit, 0, true);
            const minTimeValue = AtTimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
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
        return (this.selectedTime !== TimeRangeDisplay.ALL &&
            this.selectedTime?.value === option.value &&
            this.selectedTime?.unit === option.unit);
    }
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return AtTimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
    }
    getVisibleCommonOptionsWithinRangeLimit() {
        if (!this.common_options) {
            return [];
        }
        if (!this.min_date) {
            return this.common_options;
        }
        const maxSeconds = AtTimeDateUtil.getSecondsAgoFromDate(this.min_date);
        return this.common_options.filter((option) => AtTimeDateUtil.convertToSeconds(option) <= maxSeconds);
    }
    clearSelection() {
        if (typeof this.initial_selected_time === 'object') {
            this.timeUnit = this.initial_selected_time.unit;
            this.timeValue = this.initial_selected_time.value;
        }
        else {
            this.timeUnit = TimeExtraOptions.ALL;
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
        return (h("div", { key: '501b6963f0b0722e554f7623bcbd2c381032101f', class: "w-panel-sm flex flex-col gap-16" }, h("div", { key: '7d79baf9f737d52542ddff350e3c67ba69903b41', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'fc9693958e79877fee065759614b59b258ad316b', class: "text-h5 text-foreground font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '0b675c6680f2d5123f50ec83d978ea7ce775d777', class: "grid grid-cols-2 gap-8" }, h("at-input-numeric", { key: '659b6c54649de2deca5e891274ecd863577a243b', value: this.timeValue, min: 1, disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), h("at-select", { key: 'f723f771feb65cb179f8c4f760c157970d17a62b', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI.TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2014", ' ', this.translations?.ATUI?.TIME?.NOW || 'Now'))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (h("div", { key: '14f293e360be38f05c464068410bf5ae9a7ab8ff', class: "flex flex-col gap-8 px-12" }, h("h5", { key: 'aeee147559566c7ed88ecf54d466ea817ecf6ce1', class: "text-h5 text-foreground font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: 'c908439b2d81836390ce19e26e3f4b4e58c19f3e', class: "grid grid-cols-2 content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                event.stopPropagation();
                if (event.key === 'Enter' ||
                    event.key === ' ')
                    this.updateSelectedRange(timerange);
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background' : 'hover:bg-surface-2'}` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), h("footer", { key: 'e21f9fa642a84c948048442e6c91b004c53c3a60', class: "flex justify-between p-8" }, h("at-button", { key: 'a78692eb9f4acfff37e7936e5bd2f69ea419f28c', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: 'c22b908e28006fc2033908533697e1a53a13f04e', class: "flex gap-8" }, h("at-button", { key: 'f5515eaa958a732c7abd9556ab0790c4f2b89ba9', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: 'c70abe7f2a567e22c3332e2eb3019cfc4c4c4f7f', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
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

export { AtButtonGroup as at_button_group, AtCustomTimeRangeComponent as at_custom_time_range, AtTimeWithUnitComponent as at_time_with_unit };
