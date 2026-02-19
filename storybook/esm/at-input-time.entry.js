import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
        return (h(Host, { key: '67e9609cd4fa4be4ccbdc1132aa2812f89e06415' }, h("style", { key: '238d302e4bef8921d4789b38074b56a00e14686a' }, `
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
                `), h("div", { key: '0918cfd1135de5f834c61727116953ec0408b263', class: "flex flex-row" }, h("div", { key: '8155c038404bcccb444393e36a4afb3580b30142', class: "flex-fill flex flex-col" }, h("div", { key: '8b3e1518979bdc4fcd72aa8eaac74dd3b899ec44', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: '8a336f7b6748a4150d9d60052199dc966dfa62a5', label: this.label, for: this.inputId, required: !!this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '477c5c8d96e6c6023f96f60cbc28905a01ad900c', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text)), h("div", { key: '200c84f5d2c32968e0eabe0db1c2f9af4a43bbfe', class: classname }, h("input", { key: '779db43d092b80f1189f89a5e00668662d12a188', type: "time", id: this.inputId, name: "timePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput }))), this.error_text && this.invalid && (h("span", { key: 'be802acc3def8e5c4b8e4708cb71ebd705b4f08d', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text))))));
    }
};

export { AtInputTime as at_input_time };
