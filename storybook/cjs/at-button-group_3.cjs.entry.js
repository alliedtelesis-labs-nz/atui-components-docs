'use strict';

var index = require('./index-GH7gxrjy.js');
var slottedLabelId = require('./slotted-label-id-D9J5SVli.js');
var atTimeDate_util = require('./at-time-date.util-6Fmc04Ie.js');
var translation = require('./translation-Cv_xtyw_.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var date = require('./date-DDRmOnS1.js');
var timeRangeLabel_util = require('./time-range-label.util-BR6KvMfz.js');
require('./at-time-range.models-BPZ2R6EI.js');

const AtButtonGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiIndexChange = index.createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiValuesChange = index.createEvent(this, "atuiValuesChange", 7);
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
     * Lets each option toggle on and off independently. The selection is held in `values` and
     * reported by `atuiValuesChange`, and the group is announced as a group of checkboxes.
     */
    multiple = false;
    /**
     * The selected option values when `multiple` is set.
     */
    values = [];
    get el() { return index.getElement(this); }
    buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.buttonGroupId}-label`;
    slottedLabelId;
    componentWillRender() {
        this.slottedLabelId = slottedLabelId.slottedLabelId(this.el, `${this.buttonGroupId}-slotted-label`);
    }
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange;
    /**
     * When `multiple` is set and an option is toggled, this will emit the selected values in option order
     */
    atuiValuesChange;
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
        if (this.multiple)
            return;
        if (!this.options || this.options.length === 0) {
            this.buttonEls.forEach((child) => {
                child.is_active = child.value === newValue;
            });
        }
    }
    handleValuesChange() {
        if (!this.multiple)
            return;
        if (!this.options || this.options.length === 0) {
            this.syncMultipleSelection();
        }
    }
    handleMultipleChange() {
        this.buttonEls?.forEach((child) => index.forceUpdate(child));
        if (this.multiple)
            this.syncMultipleSelection();
    }
    isSelected(optionValue) {
        return (this.values ?? []).includes(optionValue);
    }
    syncMultipleSelection() {
        this.buttonEls?.forEach((child) => {
            child.is_active = this.isSelected(child.value);
        });
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
            if (this.multiple) {
                buttonEl.is_active = this.isSelected(buttonEl.value);
            }
            else if (this.value !== undefined && this.value !== null) {
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
        if (this.multiple)
            return;
        const enabledButtons = this.buttonEls.filter((child) => !child.disabled);
        const initialButton = enabledButtons.find((child) => this.isBoundValue(child.value)) ||
            enabledButtons.find((child) => child.is_active) ||
            enabledButtons[0];
        if (initialButton) {
            this.value = initialButton.value;
            this.handleValueChange(this.value);
        }
    }
    isBoundValue(optionValue) {
        return (this.value !== undefined &&
            this.value !== null &&
            optionValue === this.value);
    }
    get getButtonGroupOptions() {
        if (this.options) {
            return this.options.map((option, index$1) => (index.h("at-button-group-option", { value: option.value, label: option.label
                    ? option.label
                    : option.icon
                        ? ''
                        : option.value, is_active: this.multiple
                    ? this.isSelected(option.value)
                    : this.value === option.value, disabled: option.disabled || this.disabled, onAtuiClick: (event) => this.handleChange(event, option.value, index$1) }, option.icon && (index.h("at-icon", { slot: "icon", name: option.icon })))));
        }
        return null;
    }
    handleChange(event, optionValue, index) {
        event.stopPropagation();
        if (this.multiple) {
            this.toggleValue(optionValue, index);
            return;
        }
        this.value = optionValue;
        this.atuiChange.emit(this.value);
        this.atuiIndexChange.emit(index);
        this.buttonEls.forEach((child) => {
            child.is_active = child.value === optionValue;
        });
    }
    optionOrder() {
        return this.options && this.options.length > 0
            ? this.options.map((option) => option.value)
            : this.buttonEls.map((child) => child.value);
    }
    toggleValue(optionValue, index) {
        const next = this.isSelected(optionValue)
            ? this.values.filter((value) => value !== optionValue)
            : [...(this.values ?? []), optionValue];
        this.values = this.optionOrder().filter((value) => next.includes(value));
        this.syncMultipleSelection();
        this.atuiValuesChange.emit(this.values);
        this.atuiIndexChange.emit(index);
    }
    render() {
        return (index.h(index.Host, { key: 'deab0d26f37dab675f2742b33115b383884141eb', role: this.multiple ? 'group' : 'radiogroup', "aria-labelledby": this.label ? this.labelId : this.slottedLabelId }, index.h("div", { key: '78be26c0e389270f68f6d63d0f9be312df617855', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'b026a32c293bc3e475565e3041e1265b0ec8d76c', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: 'c90d148054da94791362949574a723e2a79a93e1', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '6d202c0962fe0b331455837f50a0698751fd2a6b', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), index.h("div", { key: 'f50f60ff1b8350bf36c2afa8238f2cad47f309f7', class: "border-input h-input bg-surface-background rounded-input relative w-fit border p-[2px] inset-shadow-xs" }, index.h("ul", { key: 'f5f6cdf847cc8649b2f1e1fc74d27056ad56ec83', class: "relative z-20 flex h-full flex-row", "data-name": "button-group-options" }, index.h("slot", { key: '530dd5fcecbc996e4cf877dd6d6925b42d93cd4f' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (index.h("li", { class: "relative z-10 mr-[-1px] flex" }, button))))), this.error_text && (index.h("span", { key: 'c3aa6b81230e72926cb5e79d51278d3efd397ead', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 1
            }],
        "value": [{
                "handleValueChange": 1
            }],
        "values": [{
                "handleValuesChange": 1
            }],
        "multiple": [{
                "handleMultipleChange": 1
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
        return (index.h("div", { key: 'e15f4b2f1765445f74fb536cf1bc78518b50bcab', class: "flex w-fit flex-col gap-8" }, index.h("h5", { key: 'c443bf729769c01d241253d59e3e6bd4e035b089', class: "text-h5 text-foreground p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), index.h("div", { key: '240b7bd93eeb43228eb2904d1a94c455d3f10fb7', class: "grid grid-cols-2 gap-16 px-12" }, index.h("div", { key: '61ac4cd74eafe396a97a823e450838da23bd6df8', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: 'e175315bdb8c9b292a0fe714b5cbcba06d9c6a1e', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: '4899d8068d064ffc4b4ca75a09f82deb07ad483e', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = atTimeDate_util.dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), index.h("div", { key: '8383afc76be94fa71d32ce7908751c84fe727a40', class: "flex-fill flex flex-col gap-8" }, index.h("at-input-date", { key: 'aaff654f2c47cde784ea13a0686e1666c2ded699', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (index.h("at-input-time", { key: '76eb1d4b4d964fb64cf43807f3e59010b657afcb', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = atTimeDate_util.dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), index.h("div", { key: '9da8e0c3306dfcee526b1f33fc939a6f0da93a8a', class: "align-center rounded-input my-8 flex flex-row justify-between gap-8 px-12" }, index.h("div", { key: 'ef96c91c2c4298465e0e7ee8835c6cd5822237a7', class: "flex flex-col" }, index.h("label", { key: 'bc1a8e214eb3e9df8035b5ec23e1daa2fab04241', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), index.h("span", { key: '4524a08a81dce8a692ed539db94b5c050f632143', class: "text-secondary text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), index.h("at-toggle-switch", { key: 'a09bbbbc5918cec6a14cdb73da4fa2cbe35d6c90', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (index.h("div", { key: 'd9d5253abb8b68422f6b3f093fc61ac06c77d224', class: "flex flex-col gap-4 px-12" }, index.h("span", { key: 'f69da86d6f74d498d7711606d1385cd52f3f7b0b', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), index.h("div", { key: '1791a9bff98f6ad7978f6a7378d58e30d1c3987c', class: "flex flex-row justify-between p-8" }, index.h("at-button", { key: '2d266e31c2acb171f2e05a6ef98ffd27a3528847', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: '7118fa444a9f9bcff7f8805752b65e9de5bc979d', class: "flex flex-row gap-8" }, index.h("at-button", { key: 'a19cf26e4d0b68e160e31c56570b1f0cd43d620d', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: 'a0ef94bb49625c4cc616fb510d9bc9a6dbcd8b6e', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
    }
    static get watchers() { return {
        "min_date": [{
                "validateMinDate": 1
            }],
        "max_date": [{
                "validateMaxDate": 1
            }],
        "default_from_date": [{
                "validateDefaultFromDate": 1
            }],
        "default_to_date": [{
                "validateDefaultToDate": 1
            }],
        "from_date_value": [{
                "validateFromDateValue": 1
            }],
        "to_date_value": [{
                "validateToDateValue": 1
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
     * Initial time selection value. It sets the selection on the first render.
     * Changing it later does not move the current selection, but Reset and
     * Cancel restore its latest value.
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
        return (index.h("div", { key: '94393cfff73cde31be514c55d9a1515c655a614a', class: "w-panel-sm flex flex-col" }, index.h("div", { key: 'c1252f32e82114ea50dbe2caf2ee4f4b56270d6f', class: "grid grid-cols-[1fr_1fr] gap-8" }, index.h("div", { key: '39879f813410bb5f4ff330116f903e4de5e42084', class: "border-muted flex flex-col gap-8 border-r p-12" }, index.h("h5", { key: '367a7b54ae6c82f2309498bcdb589382f91af9f3', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), index.h("div", { key: '674774071333fc9ddb86d6edb40e000d3ceb65d6', class: "flex flex-col gap-8" }, index.h("at-input-numeric", { key: 'a0cbef7663162506001d0b90beb57f89c140c63f', value: this.timeValue, min: 1, max: this.getMaxTimeValue(), disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), index.h("at-select", { key: '4dbf2be22641ca338bdaa34ce7553b9599a426db', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI
                        .TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (index.h(index.Fragment, null, index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (index.h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== date.TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.startDate.toLocaleString(), " \u2013", ' ', this.translations?.ATUI?.TIME?.NOW ||
            'Now'))) : (this.selectedTime === date.TimeRangeDisplay.ALL && (index.h("span", { class: "text-secondary text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), visibleCommonOptions.length > 0 && (index.h("div", { key: 'f98e1eac9c790b8217c58e046a115a2cd8b5f6d5', class: "flex flex-col gap-8 p-12" }, index.h("h5", { key: '0085bc0ceb29975c463c1068656489a8a8f27a6c', class: "text-h5 text-foreground mb-8 font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), index.h("div", { key: 'edde6ec705acd69383ee8b4e31cddb71e7e7bba2', class: "flex flex-col content-stretch", "data-name": "time-with-unit-common-options" }, visibleCommonOptions.map((timerange) => (index.h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                // Native buttons already fire click on
                // Enter/Space; only stop the key from
                // reaching ancestor handlers.
                event.stopPropagation();
            }, tabindex: 0, class: `focus-visible:ring-active-glow cursor-pointer rounded-sm px-[6px] py-2 text-left focus-visible:ring ${this.isSelectedOption(timerange) ? 'bg-active-background text-foreground' : 'hover:bg-surface-2'}` }, index.h("small", null, timeRangeLabel_util.atGetRelativeRangeLabel(timerange, this.translations))))))))), index.h("footer", { key: 'e908451850b888a303fc276c9ae0a2046525a4c3', class: "border-muted flex justify-between border-t p-8" }, index.h("at-button", { key: '5ae9d865ee5a6473e10dd6d55c2e64f68d4e728a', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), index.h("div", { key: 'cc3e2b6ce5266249a90abed1a200ae9764ccac8a', class: "flex gap-8" }, index.h("at-button", { key: '84dd8bc2bc5f0c5024544e08ee25093495c80d11', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), index.h("at-button", { key: 'd08c2fd54d350f5a28c5282578b5e255bb36164b', "data-name": "apply", label: this.translations.ATUI.APPLY, disabled: !!this.errorText, onAtuiClick: () => this.handleSubmit() })))));
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
