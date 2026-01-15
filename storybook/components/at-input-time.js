import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$3 } from './p-0L3Bm0n5.js';
import { d as defineCustomElement$2 } from './p-BlmpD1px.js';

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
const AtInputTime$1 = /*@__PURE__*/ proxyCustomElement(class AtInputTime extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return this; }
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
        return (h(Host, { key: 'efc3c57c898df6d217949ad7c0d369b53775d839' }, h("style", { key: '263ab2ba13e521096922aeddc70239f267c46d8e' }, `
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
                `), h("div", { key: 'dbde74520135405482088346335b5f830046ba5e', class: "flex flex-row" }, h("div", { key: '0a5d0bfcec6081598deb2853cc7f492d65936c7a', class: "flex-fill flex flex-col" }, h("div", { key: '55d95d0069c55fd89fbbe3ea98309189d3ee184c', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: '698118d182b10be6b707f0c05d282fb887ba5505', label: this.label, for: this.inputId, required: !!this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'd322fabb2c343d48e00ff5e878c2bac429850ff0', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text)), h("div", { key: 'dc804bc91c109f65837ca3008c740bc3397f74c1', class: classname }, h("input", { key: 'aec7a66531a7df7346f563fa1c986322a4723723', type: "time", id: this.inputId, name: "timePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput }))), this.error_text && this.invalid && (h("span", { key: '0ff2072f183d3f48744752a4e80ece216af7e306', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text))))));
    }
}, [256, "at-input-time", {
        "value": [1537],
        "min": [1],
        "max": [1],
        "required": [4],
        "step": [2],
        "disabled": [4],
        "readonly": [4],
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "invalid": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-input-time", "at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-input-time":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtInputTime$1);
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtInputTime = AtInputTime$1;
const defineCustomElement = defineCustomElement$1;

export { AtInputTime, defineCustomElement };
//# sourceMappingURL=at-input-time.js.map

//# sourceMappingURL=at-input-time.js.map