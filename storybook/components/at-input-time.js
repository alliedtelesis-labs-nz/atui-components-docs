import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$3 } from './p-C267TtKm.js';
import { d as defineCustomElement$2 } from './p-DOs9EXMS.js';

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
        return (h(Host, { key: 'bfd69f0cf64e159f74d81548b1017f97fe5bc5d4' }, h("style", { key: '29a5b4192803ad60a4e610a3fb687e4e5731c7ff' }, `
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
                `), h("div", { key: '761730fedfbb882821cc1cb4218c23b70567071c', class: "flex flex-row" }, h("div", { key: '0ef508948be15840087ed04222ab9c17ec9b1f38', class: "flex-fill flex flex-col" }, h("div", { key: 'f0c468dc37a163493f52457176742b40e77c73d5', class: "flex flex-col" }, (this.label ||
            this.required ||
            this.info_text) && (h("at-form-label", { key: '8483d63b7d9bd9db14f79a75716f2129549dbf1b', label: this.label, for: this.inputId, required: !!this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '366297340cbb997d7eefbdc0544e5387a12ea7f9', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text)), h("div", { key: '1d91e49c892b10944198556a45c0f31ed7264d5c', class: classname }, h("input", { key: 'bd66c1a60bc3c20123d4c5bf947f67e8fbb38c9c', type: "time", id: this.inputId, name: "timePicker", class: "flex w-full cursor-pointer px-8 py-8 outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput }))), this.error_text && this.invalid && (h("span", { key: 'd9e735b9c6c348f9500af5c079c9a9b43568b6b2', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text))))));
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