'use strict';

var index = require('./index-DK-3iCCu.js');
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
        return (index.h(index.Host, { key: 'a26c67a255047246ca3c8a74cca0985b1383225d' }, index.h("style", { key: '2919027a2def8293e9948824d5db984e15fe3926' }, `
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
                `), index.h("div", { key: '015081e4f6e0372ff3b64e04aef95163b24aa267', class: "flex w-full flex-col" }, index.h("div", { key: '644354ffad0d038866aaf0d12d474deb4e6d20d2', class: "flex flex-col" }, index.h("div", { key: '1464218fab672105b22851342fe7cc86ab45e5fe', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (index.h("at-form-label", { key: '985547dc13d02f9dedba73e998e3966f86cc3e0f', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'e2bc3c4f221ba01cc8045e0107dc356ac181509c', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), index.h("div", { key: '3f7619fc68615f9c8b4d76d41ec6b30c7f26380e', class: classname }, index.h("input", { key: '8225f1a3c35aa2ea01ba12f22cabce7912e28b17', type: "date", id: this.inputId, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
            } }))), this.error_text && this.invalid && (index.h("span", { key: '57009d9bfd74e0ba757d9ccf89a66c8e6f175bb3', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
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
        return (index.h(index.Host, { key: 'ed100d27a3ccb03e7ff3e5385112915b70c0383d' }, index.h("style", { key: '7e0147de8e96a4e59580b5875e1ca234a7b9811f' }, `
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
                `), index.h("div", { key: 'd74d93f7cebc09611ba2eb9005eb9d52c643a490', class: "flex flex-col" }, index.h("div", { key: '960317fc6775f65c4debd8683a92f3f15269950b', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'a3b70d8e8779d159c47cd0a13d2ccb6b0ae0b71c', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'f53750fa8288fae7d4f8fd9baeb093e50e8f8d54', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'cac70fa3123bea0b43981041904d13a2c89fc46c', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), index.h("div", { key: '2523771a940aef575eef83d6cef4f44b1c3e5554', class: classname }, index.h("input", { key: '834978bc4801c553d64e3ffa8440a7fdf0b6211e', type: "time", id: this.inputId, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput })), this.error_text && this.invalid && (index.h("span", { key: '22d968db97de26c5fd0f41ad18075b7b413f3aee', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text)))));
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
        return (index.h(index.Host, { key: 'f3177ecf8e96ac44ce6994d1d845da236e28cb53', id: `${this.toggleId}-host`, role: "switch", "aria-checked": this.value ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : undefined, "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: this.disabled ? -1 : 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: '53ede3a8d4b0d5db451230a39b4855ae80a19a89', class: "flex flex-col empty:hidden" }, index.h("slot", { key: '7a13bf3e300e8f99bbd5fe53f85d89839b2a0257', name: "label" }), !!this.label && this.show_label && (index.h("at-form-label", { key: '0f7c4bb0198974ed90d5a2b0f310588dc8557b76', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: 'ae89ec42b6fb2bc4051e97e94fed78f3b4e695d6', class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: 'fce33bc0c8d180d24abf0fb73dfc0e503c16c099', class: "relative flex h-20 w-40" }, index.h("input", { key: 'ee8eff4d5cb168e24a25ee8d67736232b9646f20', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: 'e32fdc4847f124d30bdc4cad277acca33590788f', class: trackClassname }, index.h("at-icon", { key: '77aa2a6c2ec7906204e8af3f868d3238b2dbc989', name: this.value ? 'checkmark' : 'subtract', class: thumbClassname, style: {
                transform: `translateX(${this.value ? '10px' : '-10px'})`,
            } })))));
    }
};

exports.at_input_date = AtInputDate;
exports.at_input_time = AtInputTime;
exports.at_toggle_switch = AtToggleSwitchComponent;
