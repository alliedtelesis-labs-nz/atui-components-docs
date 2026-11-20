import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
import { fetchTranslations, interpolate } from "../../utils/translation";
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
export class AtInputTime {
    el;
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
        this.translations = await fetchTranslations(this.el);
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
            return interpolate(messages.TIME_RANGE, bounds);
        }
        return this.min
            ? interpolate(messages.TIME_AT_OR_AFTER, bounds)
            : interpolate(messages.TIME_AT_OR_BEFORE, bounds);
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
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid || !!this.rangeErrorText,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (h(Host, { key: '8040862d17eb0494a2cc058bea085b431b8c323c' }, h("style", { key: 'db54b2c712994962d2be8f21b58a32aceeacfb48' }, `
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
                `), h("div", { key: '6b0439d8c3775304480d5145deb9890b47a4597a', class: "flex flex-col" }, h("div", { key: '392f54494db6417b5e60b623c23cf72f421c0b8e', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'd4c5dcefc06fd7a18d9fca01aa2659f04cf83737', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '07a8bb542ced3e4f7edd970ff3df84115effcb54', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '71e5aa3172d1b561d164b47873c0e7ead22d5ae5', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), h("div", { key: '2d8500117ecdc43f98a00d6407cda3ca1ad1632d', class: classname }, h("input", { key: '0daa22c35a2f67145a0282d3aaa6f4b15717eff2', type: "time", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", "aria-invalid": this.invalid || this.rangeErrorText
                ? 'true'
                : undefined, onInput: this.onInput, onBlur: this.onBlur })), this.errorText && (h("span", { key: 'ace4f7edfa08b5686e8a7b899684be734e1629ed', class: "text-error text-sm", "data-name": "timepicker-error" }, this.errorText)))));
    }
    static get is() { return "at-input-time"; }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Current value in \"HH:MM\" or \"HH:MM:SS\""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value"
            },
            "min": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Earliest time the user can enter (e.g., \"08:00\"). A typed time outside\n`min` and `max` shows a range error once the field loses focus."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min"
            },
            "max": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Latest time the user can enter (e.g., \"18:30\"). A typed time outside\n`min` and `max` shows a range error once the field loses focus."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Required flag"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Step in seconds (e.g., 60 for minute granularity, 1 to allow seconds)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "step",
                "defaultValue": "60"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disabled flag"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Readonly flag"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label text displayed above the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "hint_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint displayed under the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "info_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon tooltip text (used by at-form-label)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "error_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error text displayed when invalid is set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "invalid": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the error state styling and `error_text`. The host owns this: the\ncomponent never sets it. The component shows its own range error for a\ntime outside `min` and `max`, and leaves `required` to the host. A partly\ntyped time counts as empty and emits `atuiChange` with no value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
            },
            "aria_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name for the input. Use when a shared column header supplies the\nvisible label and `label` is therefore left unset."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria_label"
            }
        };
    }
    static get states() {
        return {
            "hasLeftField": {},
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when value changes (normalized string or null)"
                },
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
