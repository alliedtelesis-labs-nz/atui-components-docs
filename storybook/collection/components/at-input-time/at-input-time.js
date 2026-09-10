import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
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
export class AtInputTime {
    el;
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
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: !!this.invalid,
            disabled: !!this.disabled,
            readonly: !!this.readonly,
        });
        return (h(Host, { key: '6d348bfab84b29a4af78bede5a1f9f69d31e1d89' }, h("style", { key: '1e6b5b9ab69de72408b55607d9ae6ff9d69b309a' }, `
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
                `), h("div", { key: '5351c7f0439ee28a85d2db959479cda4f93e5bcd', class: "flex flex-col" }, h("div", { key: 'b4178b09a7813dda189acbd4a5826001f520a7a3', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '2b4323f9f7da1efbb51064f72a153063efa7f2e0', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '4148d055a373f438c10268482557304d6b6f76c6', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'f77a20e14be9e8b6a7e7442355dec7b6aae5dff1', class: "text-muted inline-block text-xs leading-tight", "data-name": "timepicker-hint" }, this.hint_text))), h("div", { key: 'dafc54c8dee468e1f40dd75c1ea07389dd943f8b', class: classname }, h("input", { key: 'a7a02ffd7c022fc22270280a4ff2fd39a19d5df7', type: "time", id: this.inputId, "aria-label": this.aria_label ?? undefined, name: "timePicker", class: "py-input-y px-input-x flex w-full cursor-pointer outline-0", readOnly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, value: this.value ?? '', min: this.min, max: this.max, step: this.step, "data-name": "timepicker", onInput: this.onInput })), this.error_text && this.invalid && (h("span", { key: '5d026d5df0d7bad60e37e0119ae22312f94d26ba', class: "text-error text-sm", "data-name": "timepicker-error" }, this.error_text)))));
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
                    "text": "Minimum time (e.g., \"08:00\")"
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
                    "text": "Maximum time (e.g., \"18:30\")"
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
                    "text": "Shows the error state styling and error text"
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
