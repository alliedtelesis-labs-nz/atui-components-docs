import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, F as Fragment } from './index-Dm8LkzEZ.js';
import { A as AtTimeDateUtil, D as Duration, d as dayjs, T as TimeExtraOptions } from './at-time-date.util-DLDlk6Fx.js';
import { f as fetchTranslations } from './translation-C11vpe5m.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-CZMVvhsm.js';
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
            buttonEl.label = buttonEl.label
                ? buttonEl.label
                : buttonEl.icon
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
                        : option.value, is_active: this.value === option.value, disabled: option.disabled, icon: option.icon, onAtuiClick: (event) => this.handleChange(event, option.value, index) })));
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
        if (target.tagName !== 'BUTTON')
            return;
        const option = target.closest('at-button-group-option');
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
        return (h(Host, { key: 'f7878e557c8eecb7b791939f4b7f2d5835eb66d6', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '0dfed468b863e8c3dfee735029902f5f49e15469', class: "mb-4 flex flex-col" }, h("slot", { key: '03087beb7b62ba1f714e7e7096d5833c884112d4', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '4257ef11df71fe7889a5c06a4049b8d3b953b00f', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'ba08c45e9eba4228d2438fce4e660a89aa94632f', class: "text-light inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '5dd5420c5dd1c2d784c7f80f03a5194456e95d8b', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, h("ul", { key: '0e0c9488ce7532842dfab33173bdc85fc1088960', class: "relative z-20 m-[2px] flex flex-row", "data-name": "button-group-options" }, h("slot", { key: 'f423482ef43a65e77f3f255569f6dead25323049' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (h("li", { class: "relative z-10 mr-[-1px]" }, button))))), this.error_text && (h("span", { key: 'b2b2e0c865c4279eaf94d26dba1c7dc3d3548c52', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
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
    get el() { return getElement(this); }
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
        return AtTimeDateUtil.ceilingDateByTimeUnit(date, Duration.MINUTES);
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
            const date = this.ceilingMaxDate(new Date(Date.now()));
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
    handleCancel() {
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
    }
    render() {
        return (h("div", { key: '60c618d0204eb3dcb755b959af3101d33490fb0d', class: "flex w-fit flex-col gap-8" }, h("h5", { key: 'c30d924a04c9671ed3654a9468159751202904e2', class: "text-h5 text-dark p-12 font-medium" }, this.translations.ATUI.TIME.SELECT_ABSOLUTE_TIME), h("div", { key: '4abbc38c1ad17c286233941a7ecacc5cafa9353d', class: "grid grid-cols-2 gap-16 px-12" }, h("div", { key: '1417a043c9f69befac3044a9bac41d470141c84a', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: 'f5c2cf7e9077bcff820faacb74962b39a16b728d', class: "w-full", label: this.translations.ATUI.TIME.FROM_DATE, value: this.from_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, onAtuiChange: (event) => {
                this.from_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: '1fb843e532d9c71a534d4a91b7b419e93d91093d', class: "w-full", label: this.translations.ATUI.TIME.FROM_TIME, value: this.fromTime, min: this.fromTimeMin, max: this.fromTimeMax, onAtuiChange: (event) => {
                if (event.detail) {
                    this.from_date_value = dayjs(`${this.fromDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } }))), h("div", { key: 'cb0c5d28715fe1c3c36cfe3fea45288fe99234cb', class: "flex-fill flex flex-col gap-8" }, h("at-input-date", { key: 'b532a4d7f5d972851d29435e61af452a066b2c11', class: "w-full", label: this.translations.ATUI.TIME.TO_DATE, value: this.to_date_value, min_date: this.min_date, max_date: this.max_date, invalid: this.isFromDateAfterToDate, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                this.to_date_value = event.detail;
            } }), this.can_set_time && (h("at-input-time", { key: 'fc7de9e17823702c5108b2a9736a0040431ba7e3', class: "w-full", label: this.translations.ATUI.TIME.TO_TIME, value: this.toTime, min: this.toTimeMin, max: this.toTimeMax, disabled: this.lock_end_date_to_now, onAtuiChange: (event) => {
                if (event.detail) {
                    this.to_date_value = dayjs(`${this.toDate} ${event.detail}`, 'YYYY-MM-DD HH:mm').toDate();
                }
            } })))), h("div", { key: '525283d1810cc2c554b4a65a424330c535a40744', class: "align-center my-8 flex flex-row justify-between gap-8 rounded-md px-12" }, h("div", { key: '63fe6ab30c26f93527d13b70da39b8a699b2a359', class: "flex flex-col" }, h("label", { key: 'afc789a24b63ff6e1a62ca365969f627fae3b8fe', class: "c-form__label" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW), h("span", { key: '6995bfc16c6b80eb3dcd732a1b157937494ebf76', class: "text-med text-xs" }, this.translations.ATUI.TIME
            .SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION)), h("at-toggle-switch", { key: 'ff944ad0fda9a59c8ab555091b2684550022489f', value: this.lock_end_date_to_now, onChange: () => this.setDateNow(), ref: (el) => (this.setDateNowSwitch = el) })), this.isFromDateAfterToDate && (h("div", { key: 'edf02968d3149e952018b102b2832fbcdd247259', class: "flex flex-col gap-4 px-12" }, h("span", { key: '8527ab6d2b85edf244d7983ffbe78090ed3a3539', class: "text-error text-sm", "data-name": "custom-time-range-error-from" }, this.translations.ATUI.TIME.VALIDATION
            .FROM_MUST_BE_BEFORE_TO))), h("div", { key: 'f68d623b74fd3eeda8d451226d09ef0c5d7a89bc', class: "flex flex-row justify-between p-8" }, h("at-button", { key: '53cf48ff2fb21631483d967dd425888a3ee46b53', type: "secondaryOutline", "data-name": "custom-time-range-clear", label: this.translations.ATUI.CLEAR_SELECTION, onAtuiClick: () => this.clearSelection() }), h("div", { key: 'e799fdfd6bb44dffe8873d90e369bb2d82713caa', class: "flex flex-row gap-8" }, h("at-button", { key: 'f928f6c42abb5c4dc8a1beae44a7597606f7e272', type: "secondaryOutline", "data-name": "custom-time-range-cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: 'bd6cd0503ac7c6caea1c1978bf6f7e2f0e9eaba6', "data-name": "custom-time-range-apply", label: this.translations.ATUI.APPLY, disabled: this.isRangeInvalid, onAtuiClick: () => this.handleSubmit() })))));
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
        this.dropdownOptions = this.show_all_time
            ? [TimeExtraOptions.ALL, ...this.units]
            : this.units;
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
    getRelativeDate() {
        if (typeof this.selectedTime === 'object') {
            return AtTimeDateUtil.getRelativeDateRange(this.selectedTime);
        }
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
        return (h("div", { key: '436731b14f351fe82a23350b0f54176e1aadb404', class: "w-panel-sm flex flex-col gap-16", onKeyUp: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.handleSubmit(), tabindex: 0 }, h("div", { key: '1a5a109bd36ae0e6c3541df6303560e94f362420', class: "flex flex-col gap-8 p-12" }, h("h5", { key: 'a38c828ef332751984f7bcdf0102c23608259fe8', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.SELECT_RELATIVE_TIME), h("div", { key: '7e787e63213b3335bad293f94ec4deed0c19a301', class: "flex flex-col gap-8" }, h("at-input-numeric", { key: 'b5c4b4834a17efff523b3ec15baee1edbb51754c', value: this.timeValue, disabled: this.disabledTimeValue, onAtuiChange: (event) => {
                this.timeValue = event.detail;
            } }), h("at-select", { key: '6229df7b2b243a9a408dd79fac74598b56c9ab0d', class: "flex-fill", value: this.timeUnit, options: this.dropdownOptions
                ? this.dropdownOptions.map((option) => ({
                    value: option,
                    label: this.translations.ATUI.TIME[option],
                }))
                : null, onAtuiChange: (event) => this.handleSelectChange(event) })), this.errorText ? (h(Fragment, null, h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error" }, this.errorText), this.secondaryErrorText && (h("span", { class: "text-error text-sm", "data-name": "time-with-unit-error-secondary" }, this.secondaryErrorText)))) : this.selectedTime !== TimeRangeDisplay.ALL ? (this.timeValue &&
            this.selectedTime?.unit && (h("span", { class: "text-med text-sm font-normal" }, this.startDate.toLocaleString(), " \u2060\u2014 NOW"))) : (this.selectedTime === TimeRangeDisplay.ALL && (h("span", { class: "text-med text-sm font-normal" }, this.translations.ATUI.TIME.ALL_TIME_LABEL)))), this.common_options && (h("div", { key: 'bf9715ee1dc5d87fb3f41e8ca29c80bbe6496ce3', class: "flex flex-col gap-8 px-12" }, h("h5", { key: 'c5055ac97622f12d0ef5f808e829c98ab188b586', class: "text-h5 text-dark font-medium" }, this.translations.ATUI.TIME.COMMONLY_USED), h("div", { key: '2be7ce155cad344e42b1081d6cf89cb92d847e5d', class: "grid grid-cols-2 content-stretch", "data-name": "time-with-unit-common-options" }, this.common_options &&
            this.common_options.map((timerange) => (h("button", { onClick: () => this.updateSelectedRange(timerange), onKeyDown: (event) => {
                    event.stopPropagation();
                    if (event.key === 'Enter' ||
                        event.key === ' ')
                        this.updateSelectedRange(timerange);
                }, tabindex: 0, class: `hover:bg-surface-1 rounded-sm px-[6px] py-2 text-left ${this.selectedTime !== TimeRangeDisplay.ALL && this.selectedTime?.value === timerange.value && this.selectedTime?.unit === timerange.unit ? 'bg-active-light hover:bg-active-light' : ''} cursor-pointer` }, h("small", null, this.translations.ATUI.TIME.LAST, ' ', timerange.value, ' ', this.translations.ATUI.TIME[timerange.unit]))))))), h("footer", { key: '160ec3c30b6a3d259476adb7fb6ad2bf9b04be10', class: "flex justify-between p-8" }, h("at-button", { key: '739b0c5ceaee8a49b7cfa8cb7ba2b76cf267f2fc', type: "secondaryOutline", "data-name": "clear", label: this.translations.ATUI.RESET, onAtuiClick: () => this.clearSelection() }), h("div", { key: '50dce8c1928886e4b780f98c976462c707c95887', class: "flex gap-8" }, h("at-button", { key: 'a1d3918e6a979325cf905e0d774901ff8237684a', type: "secondaryOutline", "data-name": "cancel", label: this.translations.ATUI.CANCEL, onAtuiClick: () => this.handleCancel() }), h("at-button", { key: '4f781a5f766f2f1dea5790c42852be7b11549786', "data-name": "apply", label: this.translations.ATUI.APPLY, onAtuiClick: () => this.handleSubmit() })))));
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
