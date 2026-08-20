'use strict';

var index = require('./index-B7bW4GPk.js');
var translation = require('./translation-D3uILiF8.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var classlist = require('./classlist-BPb95vgj.js');
var date = require('./date-DDRmOnS1.js');
require('./at-time-date.util-6Fmc04Ie.js');

const inputVariantsConfig$1 = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-error-glow',
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
     * Minimum selectable date
     */
    min_date = date.MIN_DATE;
    /**
     * Maximum selectable date
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
     * Shows the error text
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
    selectedDate;
    translations;
    get el() { return index.getElement(this); }
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes
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
        if (newValue) {
            this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD');
        }
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig$1);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '445ad057a3315b4e351b24f06f902226709d1493' }, index.h("style", { key: '6b61015a3447f8da5b69929974d0de05699a2aa1' }, `
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
                `), index.h("div", { key: 'c4caa1d760d7d8f0933d71786205a9a8369d8d84', class: "flex w-full flex-col" }, index.h("div", { key: 'f8389ba1c8b0ab3f915bb248a514fb6d434caba4', class: "flex flex-col" }, index.h("div", { key: 'e3036792a3e0a084ee9f02e90f8ea1dbf2c579f2', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (index.h("at-form-label", { key: '6c538c6b161a8c62fb3e828629c54ca1e35cdb54', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'b9651d66d535e8f08fa8fc80541bb172f29b1561', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), index.h("div", { key: 'bb0d786c9b1d0b01f4f41e971a3ce1dcfc3f2f25', class: classname }, index.h("input", { key: 'ac6054595fb9cd8f329cc61566d36b71382f0379', type: "date", id: this.inputId, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
                const dateString = event.target.value;
                const input = event.target;
                // Validate year is 4 digits (between 0000-9999)
                const yearMatch = dateString.match(/^(\d{4})-/);
                if (!yearMatch ||
                    yearMatch[1].length !== 4) {
                    // Reset to previous valid date if year is invalid
                    event.target.value = this.selectedDate;
                    return;
                }
                this.selectedDate = dateString;
                this.invalid = !input.validity.valid;
                // Parse as a local date: new Date('YYYY-MM-DD')
                // parses as UTC midnight, which shifts the
                // displayed day in negative-UTC-offset zones.
                const [year, month, day] = dateString
                    .split('-')
                    .map(Number);
                this.value = new Date(year, month - 1, day);
                this.atuiChange.emit(this.value);
            } }))), this.error_text && this.invalid && (index.h("span", { key: 'e984d40d00def33583dc2b6fdb249417dc15381d', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
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
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-error-glow',
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
    /** Minimum time (e.g., "08:00") */
    min;
    /** Maximum time (e.g., "18:30") */
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
    /** Shows the error state styling and error text */
    invalid;
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
    onInput = (ev) => {
        const input = ev.target;
        const normalized = this.normalizeTimeString(input.value);
        this.value = normalized;
        this.invalid = !input.validity.valid;
        this.atuiChange.emit(normalized);
    };
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (index.h(index.Host, { key: '44026475395dd45cf7808648bd87bc68dad4a1d4' }, index.h("style", { key: '85e2d9beaee6ad84f26a7487e53e83772602bca0' }, `
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
                `), index.h("div", { key: '85aa950a976096584701273cb586c0efa9c78497', class: "flex flex-col" }, index.h("div", { key: 'da9cfb05c33036630868c669b2e9099c5be19a4f', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '5d92fe7a14eb3c3c0e3c4e259089f431f806a087', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'cf472d6e923e9f84741fdfb51a112559da6c9f52', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '27112830f455e2c7bdb23b9b3f136b53c7243de1', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), index.h("div", { key: '10b3ce040b3ac2a6a2b220ef26b0ae228ab61918', class: classname }, index.h("input", { key: 'ea56387f474592283627a0c63c0282a4304d7ff8', type: "time", id: this.inputId, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput })), this.error_text && this.invalid && (index.h("span", { key: '8d00f605e323a9eb49d803bcdb17070c51a90fec', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text)))));
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
            false: 'bg-disabled-foreground/40 !fill-button-foreground',
            true: 'bg-active-foreground !fill-button-foreground-inv group-focus-within/switch:ring-active-glow group-focus-within/switch:ring-4',
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
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const getClassname = classlist.classlist('group/switch transition transition[background-color,border] ease-in-out duration-fast outline-active flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-input p-8 outline-0 outline-none', variantsConfig);
        const classname = getClassname({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const getThumbClassname = classlist.classlist('text-icon-md absolute m-2 flex h-[16px] w-[16px] items-center justify-center rounded-full text-center select-none transition-all duration-300 ease-in-out', thumbVariantsConfig);
        const thumbClassname = getThumbClassname({
            active: this.value,
            disabled: this.disabled,
        });
        const getTrackClassname = classlist.classlist('absolute border border-solid border-input top-0 right-0 bottom-0 left-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle transition-all duration-300 ease-in-out', trackVariantsConfig);
        const trackClassname = getTrackClassname({
            disabled: this.disabled,
            active: this.value,
        });
        return (index.h(index.Host, { key: '72b4dc2699d0bf3843a45ab187c7faf9d1a68383', id: `${this.toggleId}-host`, role: "switch", "aria-checked": this.value ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : undefined, "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: this.disabled ? -1 : 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: '831d104f5053ee3b854560409b992f6692929e00', class: "flex flex-col empty:hidden" }, index.h("slot", { key: '2565e42baa1e3624479625c8fd2b4deaeba0eeea', name: "label" }), !!this.label && this.show_label && (index.h("at-form-label", { key: '542ab68e05fd096d92af739600ba6125939a8acb', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: '146cd0122576187442bc9da44127235a33a98684', class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: '4d05020753984a8b030f7967d9091f8fb88cc5b9', class: "relative flex h-20 w-40" }, index.h("input", { key: 'b6d2020acdecd45b0e3ff5f551acf2cd6510fd2b', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: 'd2aef7c89b5998970d24b29878c11eeab45880ad', class: trackClassname }, index.h("at-icon", { key: 'afaf718f3ddf30a9bc693ba3f2d5013ff1f14e6d', name: this.value ? 'checkmark' : 'subtract', class: thumbClassname, style: {
                transform: `translateX(${this.value ? '10px' : '-10px'})`,
            } })))));
    }
};

exports.at_input_date = AtInputDate;
exports.at_input_time = AtInputTime;
exports.at_toggle_switch = AtToggleSwitchComponent;
