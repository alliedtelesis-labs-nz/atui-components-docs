import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-CkS36Ijo.js';
import { f as fetchTranslations } from './translation-C11vpe5m.js';
import { T as TimeDatePresentationUtil } from './time-date-presentation.util-CZMVvhsm.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { M as MIN_DATE, a as MAX_DATE } from './date-C3LwY5aR.js';
import './at-time-date.util-DLDlk6Fx.js';

const inputVariantsConfig$1 = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/30 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Minimum selectable date
     */
    min_date = MIN_DATE;
    /**
     * Maximum selectable date
     */
    max_date = MAX_DATE;
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
    get el() { return getElement(this); }
    inputId = `datepicker-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emitted when the date selection changes
     */
    atuiChange;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        if (!this.value) {
            this.value = new Date();
        }
        this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
    }
    watchValue(newValue) {
        if (newValue) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(newValue, 'YYYY-MM-DD');
        }
    }
    componentWillRender() {
        if (!this.selectedDate && this.value) {
            this.selectedDate = TimeDatePresentationUtil.getFormattedDate(this.value, 'YYYY-MM-DD');
        }
    }
    render() {
        const getClassname = classlist('placeholder-text-light pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig$1);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '489ca46541eddc952569515547e56a3acc673416' }, h("style", { key: 'fc8535d4e9a42e94a28054d2d64405db6c4c854d' }, `
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
                `), h("div", { key: 'd17fe355c347a2ffde30833c66210546589542e9', class: "flex w-full flex-col" }, h("div", { key: '6133d84cb17c3360c15dc7db45a5901c8cba0be3', class: "flex flex-col" }, (this.label || this.required || this.info_text) && (h("at-form-label", { key: '09ad46f28c113a45cf072690e8cc4861e964aeb6', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b401c5643ec2fc40925240aef80f77d0d9fd8513', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text)), h("div", { key: 'bcc53e3a1413ec23368d3b141a049f37696c38a2', class: classname }, h("input", { key: 'bfc084cdf2732e39c60989435a1a4a2f5cb247a0', type: "date", id: this.inputId, name: "datePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
                this.value = new Date(dateString);
                this.atuiChange.emit(this.value);
            } }))), this.error_text && this.invalid && (h("span", { key: '8af549e506f6542b1857a6139699e33f050f7c67', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
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
            false: 'focus-within:ring-active-foreground/30 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return getElement(this); }
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
        const getClassname = classlist('placeholder-text-light relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (h(Host, { key: '3fefe5b66829f753531916f581fcf49443f78701' }, h("style", { key: 'dc908cdaa78d0857fa54412ca81da26798133772' }, `
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
                `), h("div", { key: 'ce4aa5e7ff169bb3415d3acf441693991d9c48d9', class: "flex flex-row" }, h("div", { key: '200ca87138fdffef90fc4bbce70760785bf8d98b', class: "flex-fill flex flex-col" }, h("div", { key: 'efd20dccf0e30a6d7612052b4dca36156b8794c7', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: 'a350271d3434713d039f2b7094d24c24da8dc1e8', label: this.label, for: this.inputId, required: !!this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'bc4a40aaef9d83c26a5da944c5233928a16124bc', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text)), h("div", { key: '4cea869a6a6051381830dc007718a411bbac1756', class: classname }, h("input", { key: 'ce70018ccae6b0c74354e85b1a2a62ca50435567', type: "time", id: this.inputId, name: "timePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput }))), this.error_text && this.invalid && (h("span", { key: '9bed0452fe8d67f4780b1bdaf9526f8b773eb34e', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text))))));
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
            false: 'border-med bg-surface-2 border border-solid',
            true: 'bg-active-foreground/30 group-focus-within/switch:ring-active-foreground group-focus-within/switch:ring-1',
        },
    },
};
const thumbVariantsConfig = {
    variants: {
        active: {
            false: 'bg-disabled-dark translate-x-[-10px]',
            true: 'bg-active-foreground group-focus-within/switch:ring-active-foreground/30 translate-x-[10px] group-focus-within/switch:ring-[6px]',
        },
        disabled: {
            false: 'cursor-pointer',
            true: null,
        },
    },
};
const AtToggleSwitchComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        const getClassname = classlist('group/switch outline-active hover:bg-surface-1 focus:bg-surface-1 flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-md p-8 outline-0 outline-none', variantsConfig);
        const classname = getClassname({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const getThumbClassname = classlist('material-icons text-icon-md absolute relative m-2 flex h-[16px] w-[16px] scale-1 items-center justify-center rounded-full text-center text-white select-none transition-all duration-300 ease-in-out', thumbVariantsConfig);
        const thumbClassname = getThumbClassname({
            active: this.value,
            disabled: this.disabled,
        });
        const getTrackClassname = classlist('absolute top-0 right-0 bottom-0 left-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle [transition:0.2s]', trackVariantsConfig);
        const trackClassname = getTrackClassname({
            disabled: this.disabled,
            active: this.value,
        });
        return (h(Host, { key: '685c95f5eb8d66cbf424fbc728f8b8d3f0faa170', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: 'cbd82a2132638f18b14a90d689f56b7314045a0e', class: "flex flex-col" }, h("slot", { key: '333ddd1b2bd95a4efb232448bfdf396d1a22c1f5', name: "label" }), !!this.label && this.show_label && (h("at-form-label", { key: '64b86940b9169273a717b728796d498ee2b1098e', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: '69d8525e05be1cabe44ab6f85edba174b2b9eb79', class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), h("div", { key: 'fc460c1ae714e9632024e825d3cdb69a4210e36e', class: "relative flex h-20 w-40" }, h("input", { key: '192b80cc948f10d7b94a36389538331113443a7b', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: 'dda1a80193ee4388bfd73dea84e46fbfad1d026b', class: trackClassname }, h("span", { key: '15c891b40a482ed1545aa0ee7940843838904fea', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
};

export { AtInputDate as at_input_date, AtInputTime as at_input_time, AtToggleSwitchComponent as at_toggle_switch };
