import { r as registerInstance, c as createEvent, a as getElement, h, H as Host, F as Fragment } from './index-Cwortk4y.js';
import { a as AtTimeDateUtil, D as Duration, d as dayjs, T as TimeExtraOptions } from './at-time-date.util-Bfdzn_RG.js';
import { f as fetchTranslations } from './translation-TgeIMQBw.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-H5gcGi8Y.js';
import { M as MIN_DATE, T as TimeRangeDisplay } from './date-C3LwY5aR.js';
import { c as atGetRelativeRangeLabel } from './time-range-label.util-CpeObe-s.js';
import './at-time-range.models-yUuqzo3S.js';

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
            return this.options.map((option, index) => (h("at-button-group-option", { value: option.value, label: option.label
                    ? option.label
                    : option.icon
                        ? ''
                        : option.value, is_active: this.value === option.value, disabled: option.disabled || this.disabled, onAtuiClick: (event) => this.handleChange(event, option.value, index) }, option.icon && (h("at-icon", { slot: "icon", name: option.icon })))));
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
        return (h(Host, { key: '2ee562f3b36aea764e936cdfc4d260b000300586', role: "radiogroup", "aria-labelledby": this.buttonGroupId }, h("div", { key: '5856ee3faeefe534a942bdd84c0dd1dc5e212406', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'a17ed766b2a8db852388242bc186d68e05c94464', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '145b3e4cbe8ed6d99201663bfb58336675a21144', label: this.label, for: this.buttonGroupId, info_text: this.info_text })), this.hint_text && (h("span", { key: '72a626e5e9eaafa2aa9edc8185cd4b4874714176', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '901aa72ed45aae93939a9aff8a87af104c896b32', class: "border-input h-input bg-surface-background rounded-input relative w-fit border p-[2px] inset-shadow-xs" }, h("ul", { key: '44575996aa7fa6cd6a03f60ad989dd3ca783f5cd', class: "relative z-20 flex h-full flex-row", "data-name": "button-group-options" }, h("slot", { key: '3ba32fc1edecf72367554609efb70a00fc76e3f6' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (h("li", { class: "relative z-10 mr-[-1px] flex" }, button))))), this.error_text && (h("span", { key: '7407abb1d25e95054f6797f26b5e2b9ebed0d2d9', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
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
    floorToMinute(date) {
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
            const date = this.floorToMinute(new Date(Date.now()));
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
        return (h("div", { key: '3eb4a27a471d7fe3c4ff4bb0c4699a0c5a429c7d', class: "flex w-fit flex-col gap-8" }, h("h5", { key: '2a088fc74cf05cc2d682b9694ba7b53815faa4a2', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: 'c96cfe4e28482355ffa30485aba62357f7c24c2e', class: "grid grid-cols-2 gap-16 px-12" }, h("div", { key: '349d3ffcd811b3af6d4470bcc53134a0f2f69b0a', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: 'a99af46bf48fb18a2e989a57f09f5069da914693', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: '5f13ac86173828540dd7df486913f29a3350148f', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), h("div", { key: '4d1a9999ac8a8ff30ff35932ed9ed80d2d2cfe71', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: 'b4fec1ebc747c3ee540f6e0c09136e518c6bf7ad', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: 'c7e9a036d02de40fe6bada4c0ca33dbd1b1365ee', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), h("div", { key: 'b3a66bcd26ed950e55c28ee4b930078605f6da43', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, h("div", { key: '6e2d71e8d7ec32cb7f3ac2940ff12334a874f258', class: "flex flex-col" }, h("label", { key: '98ceadda1ec667e851b1351990d0c5b8e519eba8', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '751d87bcab1002385c81e82c6c3d933b8d1e5925', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: 'cf102e0551661c2716a8514a72311547df277589', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (h("div", { key: '956b695302c36a0ac384bde18b64a578a6c62333', class: "flex flex-col gap-4 px-12" }, h("span", { key: '87b53b050eab475f7924ad54a3e69be1e3e3fa00', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), h("div", { key: '8dc033b87ecefe14676fb4bdb32037d3539f0f68', class: "flex flex-row justify-between p-8" }, h("at-button", { key: '98717a0965522fddb790b1c832f58462ba3ad845', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), h("div", { key: '3b7d6431c5717031e09b3d96838c99f06b14dc22', class: "flex flex-row gap-8" }, h("at-button", { key: '7307879d2f1b5fe7fdef690e78ef732a17eef01e', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '17b276acbd085b9ea727aa675793ac6f0602dcc5', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
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
    getMaxSeconds() {
        return this.min_date
            ? AtTimeDateUtil.getSecondsAgoFromDate(this.min_date)
            : this.max_seconds;
    }
    getMaxTimeValue() {
        const secondsPerUnit = this.timeUnit === TimeExtraOptions.ALL
            ? 1
            : AtTimeDateUtil.convertToSeconds({
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
        return AtTimeDateUtil.convertSecondsToUnit(this.min_seconds, this.timeUnit, 0, false);
    }
    validateInput() {
        if (this.selectedTime !== TimeRangeDisplay.ALL) {
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
        return (h("div", { key: 'fe399abc735aa4eb774b796350ee6c5008f5acbc', class: "w-panel-sm flex flex-col" }, h("div", { key: 'c235a53f3292ef446358d6bc6b7927a8df20f28e', class: "grid grid-cols-[1fr_1fr] gap-8" }, h("div", { key: '23f1dbc066b1ba05ee8f1759e8cd11921b5db061', class: "border-muted flex flex-col gap-8 border-r p-12" }, h("h5", { key: 'cce3fb3cfa0c4c2db05459efa06a9dab8347181b', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '40238c0f571105308273484c746db7fd296c9027', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: 'e7508a127d48e105dff66f7ba97684868224a54a', value: this.timeValue, min: 1, max: this.getMaxTimeValue(), disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), h("at-select", { key: '92c107938027269eed9e29ad8e0623f6d38a18f8', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI
                        .TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2013", ' ', this.translations?.ATUI?.TIME?.NOW ||
            'Now'))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (h("div", { key: '6665b31a323cb140aea54b28854155e023a6f9f3', class: "flex flex-col gap-8 p-12" }, h("h5", { key: '15701094e294c7b851ad0fddefe1834155d7b08d', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '8c8d0a55ea41a30fef3a93724b88ce2ab7d29e3d', class: "flex flex-col content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                event.stopPropagation();
                if (event.key === 'Enter' ||
                    event.key === ' ')
                    this.updateSelectedRange(timerange);
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background text-foreground' : 'hover:bg-surface-2'}` }, h("small", null, atGetRelativeRangeLabel(timerange, this.translations))))))))), h("footer", { key: '42751506620df7506a21dd0dd36d9100861cbf85', class: "border-muted flex justify-between border-t p-8" }, h("at-button", { key: '2c00a2930f1454db465b32dbee0a952892b34111', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '6c614fe16bd2316d986f3df73a8b85524a66c4d0', class: "flex gap-8" }, h("at-button", { key: 'db8e20ce284eceedf2e970d9108dfd256a21c0f6', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '3592b5a6539e9398f383f8e5a71343adef81c883', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
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
