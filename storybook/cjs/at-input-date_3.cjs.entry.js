'use strict';

var index = require('./index-Bc1nzv_X.js');
var translation = require('./translation-NP6A4XKu.js');
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
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
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
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig$1);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '6f3850a9e284e480377a6acbc304b32369a4e241' }, index.h("style", { key: '31f79cc84a8eaeda4aa0778c76dfd4644775df88' }, `
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
                `), index.h("div", { key: '634666481ce7afa7ce883604548542a249459440', class: "flex w-full flex-col" }, index.h("div", { key: '8f940503a1d0f8149731ba91da880a08e244d811', class: "flex flex-col" }, index.h("div", { key: '1fdb4b9367f5d323d120e6a474c5b82b560ecf6b', class: "mb-4 flex flex-col empty:hidden" }, (this.label ||
            this.required ||
            this.info_text) && (index.h("at-form-label", { key: '1ae92c3e4fb8df1de31f6124cf29d381f08087b9', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '96c0229acb54b38858c12d9fa3524462e0467198', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "datepicker-hint" }, this.hint_text))), index.h("div", { key: 'c187eb4745e11b0fe59444555617896db1eb8cbe', class: classname }, index.h("input", { key: '8dde978a3e71304e4c450f9c0a94ec4a8f8981e7', type: "date", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "datePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.selectedDate, min: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.min_date, 'YYYY-MM-DD'), max: timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(this.max_date, 'YYYY-MM-DD'), "data-name": "datepicker", onChange: (event) => {
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
            } }))), this.error_text && this.invalid && (index.h("span", { key: '2194bffe59235af7f967e24afe7e8737feb0a7f8', class: "text-error text-sm", "data-name": "datepicker-error" }, this.error_text)))));
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
    onInput = (ev) => {
        const input = ev.target;
        const normalized = this.normalizeTimeString(input.value);
        this.value = normalized;
        this.invalid = !input.validity.valid;
        this.atuiChange.emit(normalized);
    };
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (index.h(index.Host, { key: '11643870b955fccb07fb531077d10b2ecf5b4bb7' }, index.h("style", { key: 'e122bde6317376c8bee6becc08f090ed14f9a558' }, `
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
                `), index.h("div", { key: '89852b257cd3c57dbfc4c8f6b1851c53aa5325c8', class: "flex flex-col" }, index.h("div", { key: '45fb0f481b075b1a44e79541b21a3797c80480f4', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '9af2a94f7afd723ac1e0650644bc705bb4478948', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'b07390dc11000fb214a38b000009ce9c414ab593', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'b6d18ac083316d3b5651f9e8c35b5d1a225db189', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), index.h("div", { key: '7f95c8ca49b11655092c75c5d3adb31e9a28de8f', class: classname }, index.h("input", { key: '1bbc3659400071ccbd4af7fe13007e5fe0f50bd5', type: "time", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput })), this.error_text && this.invalid && (index.h("span", { key: '35af4c945cdb1348e5d83df844406ffc46948d09', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text)))));
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
        return (index.h(index.Host, { key: 'fdd1c3836f2d00a0916d26569cb7a81a8ba65776', id: `${this.toggleId}-host`, role: "switch", "aria-checked": this.value ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : undefined, "aria-labelledby": this.label && this.show_label
                ? `${this.toggleId}-label`
                : undefined, "aria-label": this.label && !this.show_label ? this.label : undefined, class: classname, tabIndex: this.disabled ? -1 : 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: 'bfa042aeed41276d547d0aec4a28de1ebdd20a62', class: "flex flex-col empty:hidden" }, index.h("slot", { key: '3a11698fc009d4142b3d94e28144d3e5b99c206f', name: "label" }), !!this.label && this.show_label && (index.h("at-form-label", { key: '54a4d6c08ef991490cf723e139e3ead6868cbee3', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: '6d589f68e60322a33079bf7ebe5b0ef1c166ea1c', class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: '38182cc0dcc141c4489ad1fd296353bed06e9208', class: "relative flex h-20 w-40" }, index.h("input", { key: '496c193ff30ebe30e82682a90b4e302bf44b602d', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: 'c132a22832a3bd23bdc53322e48feba3e31fe25b', class: trackClassname }, index.h("at-icon", { key: 'bc13e0466eb3490d3282ddf865b6759a29ad265a', name: this.value ? 'checkmark' : 'subtract', class: thumbClassname, style: {
                transform: `translateX(${this.value ? '10px' : '-10px'})`,
            } })))));
    }
};

exports.at_input_date = AtInputDate;
exports.at_input_time = AtInputTime;
exports.at_toggle_switch = AtToggleSwitchComponent;
