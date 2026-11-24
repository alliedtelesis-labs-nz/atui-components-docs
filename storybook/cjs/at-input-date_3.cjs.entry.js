'use strict';

var index = require('./index-7uIEF_8T.js');
var translation = require('./translation-Cr-s1VAe.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var classlist = require('./classlist-BPb95vgj.js');
var date = require('./date-DDRmOnS1.js');
var slottedLabelId = require('./slotted-label-id-D9J5SVli.js');
require('./at-time-date.util-6Fmc04Ie.js');

const inputVariantsConfig$1 = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-[var(--token-input-readonly-background)] !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error focus-within:border-error focus-within:ring-error-glow',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const AtInputDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Earliest selectable date. The calendar disables earlier days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
     */
    min_date = date.MIN_DATE;
    /**
     * Latest selectable date. The calendar disables later days, and a typed
     * date outside `min_date` and `max_date` shows a range error once the field
     * loses focus.
     */
    max_date = date.MAX_DATE;
    /**
     * Label text displayed above the date picker
     */
    label;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set
     */
    error_text;
    /**
     * Current value of the selected date
     */
    value;
    /**
     * Adds a required * to the element
     */
    required;
    /**
     * Shows the error state styling and `error_text`. The host owns this: the
     * component never sets it. The component shows its own range error for a
     * date outside `min_date` and `max_date`, and leaves `required` to the
     * host. A partly typed date counts as empty and emits `atuiChange` with
     * null.
     */
    invalid;
    /**
     * Makes the input read only
     */
    readonly;
    /**
     * Disables interaction with the input
     */
    disabled = false;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    selectedDate;
    translations;
    hasLeftField = false;
    get el() { return index.getElement(this); }
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes. Emits `null` when the date is cleared.
     */
    atuiChange;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
        if (!this.value) {
            this.value = new Date();
        }
        this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
    }
    watchValue(newValue) {
        this.selectedDate = newValue
            ? timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD')
            : '';
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    formatBound(date) {
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(date, 'YYYY-MM-DD');
    }
    get hasMinBound() {
        return (!!this.min_date && this.min_date.getTime() !== date.MIN_DATE.getTime());
    }
    get hasMaxBound() {
        return (!!this.max_date && this.max_date.getTime() !== date.MAX_DATE.getTime());
    }
    get isOutOfRange() {
        if (!this.value || !this.selectedDate)
            return false;
        return ((this.hasMinBound &&
            this.selectedDate < this.formatBound(this.min_date)) ||
            (this.hasMaxBound &&
                this.selectedDate > this.formatBound(this.max_date)));
    }
    displayBound(date) {
        const lang = this.el.closest('[lang]')?.lang || 'en';
        return date.toLocaleDateString(lang, { dateStyle: 'medium' });
    }
    get rangeErrorText() {
        const messages = this.translations?.ATUI?.TIME?.VALIDATION;
        if (!messages || !this.hasLeftField || !this.isOutOfRange)
            return;
        const bounds = {
            min: this.hasMinBound ? this.displayBound(this.min_date) : '',
            max: this.hasMaxBound ? this.displayBound(this.max_date) : '',
        };
        if (this.hasMinBound && this.hasMaxBound) {
            return translation.interpolate(messages.DATE_RANGE, bounds);
        }
        return this.hasMinBound
            ? translation.interpolate(messages.DATE_ON_OR_AFTER, bounds)
            : translation.interpolate(messages.DATE_ON_OR_BEFORE, bounds);
    }
    get errorText() {
        if (this.invalid && this.error_text)
            return this.error_text;
        return this.rangeErrorText;
    }
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig$1);
        const classname = getClassname({
            invalid: !!this.invalid || !!this.rangeErrorText,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '582f2d7efd339af30f4838e51c2b8c3584fec86c' }, index.h("style", { key: 'cf32b1eceb9d3fc5b79fd83a2f25e119c3296ed6' }, `
                input[data-name="datepicker"]::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                input[data-name="datepicker"] {
                    padding-right: 22px;
                    position: relative;
                }
                `), index.h("div", { key: '28068d1549b06979e718f9deca724ca04f99d0c6', class: "flex w-full flex-col" }, index.h("div", { key: 'fda82f3a69061ed0f66846d0cfc920eb608c1cab', class: "flex flex-col" }, index.h("div", { key: '4db45716c55035be9de3e063ba50c5cfd6b7d74b', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (index.h("at-form-label", { key: 'fca1c95d9a20dfaa58307a3526742e9262c56c82', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '147118628a20efc0828bc15d49e6cbbeff154d88', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), index.h("div", { key: '1ed7e1feebdaa255fd89d80b13a4e9da4e0996d9', class: classname }, index.h("input", { key: '79d0a0beadd53b61144a11ec08169aa1fd94c2f2', type: "date", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", "aria-invalid": this.invalid || this.rangeErrorText
                ? 'true'
                : undefined, onBlur: () => {
                this.hasLeftField = true;
            }, onChange: (event) => {
                const dateString = event.target.value;
                if (dateString === '') {
                    this.value = null;
                    this.atuiChange.emit(null);
                    return;
                }
                // Validate year is 4 digits (between 0000-9999)
                const yearMatch = dateString.match(/^(\d{4})-/);
                if (!yearMatch ||
                    yearMatch[1].length !== 4) {
                    // Reset to previous valid date if year is invalid
                    event.target.value = this.selectedDate;
                    return;
                }
                this.selectedDate = dateString;
                // Parse as a local date: new Date('YYYY-MM-DD')
                // parses as UTC midnight, which shifts the
                // displayed day in negative-UTC-offset zones.
                const [year, month, day] = dateString
                    .split('-')
                    .map(Number);
                this.value = new Date(year, month - 1, day);
                this.atuiChange.emit(this.value);
            } }))), this.errorText && (index.h("span", { key: 'dc2281825864ce872d3ba5edea488bcfd559976c', class: "text-error text-sm", "data-name": "datepicker-error" }, this.errorText)))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 1
            }]
    }; }
};

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-[var(--token-input-readonly-background)] !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error focus-within:border-error focus-within:ring-error-glow',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const AtInputTime = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    get el() { return index.getElement(this); }
    /** Current value in "HH:MM" or "HH:MM:SS" */
    value;
    /**
     * Earliest time the user can enter (e.g., "08:00"). A typed time outside
     * `min` and `max` shows a range error once the field loses focus.
     */
    min;
    /**
     * Latest time the user can enter (e.g., "18:30"). A typed time outside
     * `min` and `max` shows a range error once the field loses focus.
     */
    max;
    /** Required flag */
    required;
    /** Step in seconds (e.g., 60 for minute granularity, 1 to allow seconds) */
    step = 60;
    /** Disabled flag */
    disabled;
    /** Readonly flag */
    readonly;
    /** Label text displayed above the input */
    label;
    /** Short description or validation hint displayed under the label */
    hint_text;
    /** Optional info icon tooltip text (used by at-form-label) */
    info_text;
    /** Error text displayed when invalid is set */
    error_text;
    /**
     * Shows the error state styling and `error_text`. The host owns this: the
     * component never sets it. The component shows its own range error for a
     * time outside `min` and `max`, and leaves `required` to the host. A partly
     * typed time counts as empty and emits `atuiChange` with no value.
     */
    invalid;
    hasLeftField = false;
    translations;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    /** Emits when value changes (normalized string or null) */
    atuiChange;
    inputId = `timepicker-${Math.random().toString(36).slice(2, 11)}`;
    normalizeTimeString(raw) {
        if (!raw)
            return;
        const s = raw.trim();
        // Accept "HH:MM" or "HH:MM:SS" (24-hour)
        const m = /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/.exec(s);
        if (!m)
            return;
        const hh = m[1];
        const mm = m[2];
        const ss = m[3];
        return ss ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    get isOutOfRange() {
        if (!this.value)
            return false;
        return ((!!this.min && this.value < this.min) ||
            (!!this.max && this.value > this.max));
    }
    get rangeErrorText() {
        const messages = this.translations?.ATUI?.TIME?.VALIDATION;
        if (!messages || !this.hasLeftField || !this.isOutOfRange)
            return;
        const bounds = { min: this.min ?? '', max: this.max ?? '' };
        if (this.min && this.max) {
            return translation.interpolate(messages.TIME_RANGE, bounds);
        }
        return this.min
            ? translation.interpolate(messages.TIME_AT_OR_AFTER, bounds)
            : translation.interpolate(messages.TIME_AT_OR_BEFORE, bounds);
    }
    get errorText() {
        if (this.invalid && this.error_text)
            return this.error_text;
        return this.rangeErrorText;
    }
    onBlur = () => {
        this.hasLeftField = true;
    };
    onInput = (ev) => {
        const input = ev.target;
        const normalized = this.normalizeTimeString(input.value);
        this.value = normalized;
        this.atuiChange.emit(normalized);
    };
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid || !!this.rangeErrorText,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (index.h(index.Host, { key: '41b3164db6bd3b84a935785e71702eb9390880fc' }, index.h("style", { key: '0b87496f940cccbfd062e4b16c354fe9f3b60436' }, `
                input[data-name="timepicker"]::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                input[data-name="timepicker"] {
                    padding-right: 32px;
                    position: relative;
                }
                `), index.h("div", { key: '416e137dfc8ca03c853141c9b0b9a7b4c1fc33e6', class: "flex flex-col" }, index.h("div", { key: '196641459de6afc32b3fbde813f7bade7057eecf', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '3b371be4c9a24e64df02aca69350cd7e7439b2cc', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'd50069fae665ba70fd89ec50c66714260162ee54', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'd4f83d8bd3c9d482a3519bc7871661fc525e551c', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), index.h("div", { key: '1a139213dff84c1fe127502ec28bc13c674a9858', class: classname }, index.h("input", { key: '896d0f32ebdce477f7a0de08881911f66f4b8ffb', type: "time", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", "aria-invalid": this.invalid || this.rangeErrorText
                ? 'true'
                : undefined, onInput: this.onInput, onBlur: this.onBlur })), this.errorText && (index.h("span", { key: '7bbe40615a72c1513854c3fed97a1bed166ca931', class: "text-error text-sm", "data-name": "timepicker-error" }, this.errorText)))));
    }
};

const variantsConfig = {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-50 grayscale-[1]',
        },
        labelPosition: {
            before: 'flex-row',
            after: 'flex-row-reverse',
        },
    },
};
const trackVariantsConfig = {
    variants: {
        disabled: {
            false: 'shadow-inset-xs cursor-pointer',
            true: 'shadow-inset-xs cursor-default',
        },
        active: {
            false: 'bg-surface-foreground',
            true: 'bg-active-background',
        },
    },
};
const thumbVariantsConfig = {
    variants: {
        active: {
            false: 'bg-disabled-foreground/40 !fill-foreground',
            true: 'bg-active-foreground !fill-button-foreground-inv',
        },
        disabled: {
            false: 'cursor-pointer',
            true: null,
        },
    },
};
const AtToggleSwitchComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Position of the label, left or right of the toggle.
     */
    label_position = 'before';
    /**
     * Show the toggle label.
     */
    show_label = true;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    inputEl;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    get el() { return index.getElement(this); }
    slottedLabelId;
    componentWillRender() {
        this.slottedLabelId = slottedLabelId.slottedLabelId(this.el, `${this.toggleId}-slotted-label`);
    }
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const getClassname = classlist.classlist('group/switch focus-visible:ring-active-glow transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-input p-8 outline-0 outline-none focus-visible:ring', variantsConfig);
        const classname = getClassname({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const getThumbClassname = classlist.classlist('text-icon-md absolute m-2 flex h-[16px] w-[16px] items-center justify-center rounded-full text-center select-none transition-[transform,background-color,fill] duration-150 ease-in-out', thumbVariantsConfig);
        const thumbClassname = getThumbClassname({
            active: this.value,
            disabled: this.disabled,
        });
        const getTrackClassname = classlist.classlist('absolute border border-solid border-input top-0 right-0 bottom-0 left-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out', trackVariantsConfig);
        const trackClassname = getTrackClassname({
            disabled: this.disabled,
            active: this.value,
        });
        const labelledBy = this.label && this.show_label
            ? `${this.toggleId}-label`
            : this.slottedLabelId;
        return (index.h(index.Host, { key: '172162b23ee516f06ede99c3a20e21860dd2e571', id: `${this.toggleId}-host`, role: "switch", "aria-checked": this.value ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : undefined, "aria-labelledby": labelledBy, "aria-describedby": this.hint_text ? `${this.toggleId}-hint` : undefined, "aria-label": this.label && !this.show_label ? this.label : undefined, class: classname, tabIndex: this.disabled ? -1 : 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: '5920d58055e0062e34f6c607b663d0c7f8b064d5', class: "flex flex-col empty:hidden" }, index.h("slot", { key: 'd23676b99cfbf784b654248b8f4f0d6e174068c0', name: "label" }), !!this.label && this.show_label && (index.h("at-form-label", { key: '83eb67b812011c1e7bb3bad6fcc73321afcade66', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: 'c59b5ccfecf2643d0744bf8c059c82484e3e1373', id: `${this.toggleId}-hint`, class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: 'c608c9c9cc2194e20d64610c87bbcbef6ad1d564', class: "relative flex h-20 w-40" }, index.h("input", { key: '887b17a27c04ce7fc92d2a2d7fcdddfa1fa0dae4', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, "aria-hidden": "true", onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: '768244b8ded1e073589b2547f645b242040fdc45', class: trackClassname }, index.h("at-icon", { key: '53f8c96eaf6d33f18341fa15fbd2c9bbe9e2afb1', name: this.value ? 'checkmark' : 'subtract', class: thumbClassname, style: {
                transform: `translateX(${this.value ? '10px' : '-10px'})`,
            } })))));
    }
};

exports.at_input_date = AtInputDate;
exports.at_input_time = AtInputTime;
exports.at_toggle_switch = AtToggleSwitchComponent;
