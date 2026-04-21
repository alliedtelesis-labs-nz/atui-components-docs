import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-input-background',
            true: 'bg-surface-1 text-disabled border-none focus:ring-0',
        },
        readonly: {
            false: 'bg-input-background',
            true: 'text-foreground border-none focus:ring-0',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus:ring-active-glow focus:ring',
            true: 'border-error-base focus:ring-error-glow focus:ring',
        },
    },
    compoundVariants: [
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-input text-foreground focus-within:border-active-accent focus:ring-active-glow bg-input-background focus:ring',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const getInputClasses = classlist('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-input border border-solid px-8 py-[6px] duration-300 ease-in-out outline-none', inputVariantsConfig);
/**
 * @category Form Controls
 * @description A multi-line text input component for longer text content with auto-resize and validation features. Includes label, hint text, character counting, and accessibility support.
 * @slot label -  place before "form label" to add custom label content.
 */
export class AtTextareaComponent {
    /**
     * Label to be displayed for the textarea
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
     * Displayed when invalid is set
     */
    error_text;
    /**
     * Placeholder in the textarea when no text is placed
     */
    placeholder;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Displays then error text when set
     */
    invalid;
    /**
     * Makes the textarea read only
     */
    readonly;
    /**
     * Disables interaction with the textarea
     */
    disabled;
    /**
     * Minimum number of rows to display
     */
    min_rows = 1;
    /**
     * Maximum number of rows to expand to
     */
    max_rows = 10;
    /**
     * Sets the 'autocomplete' attribute on the textarea
     */
    autocomplete = 'on';
    /**
     * Sets the value of the textarea
     */
    value;
    textareaEl;
    el;
    /**
     * Emits an event containing the text string when the textarea's content is changed
     */
    atuiChange;
    textareaId = `textarea-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        this.value = event.target.value;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = getInputClasses({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '93d06f37a6b2aa582a87a758936b081bf8d178c6' }, h("div", { key: 'ecbc8b53e921edc8bc4bd446aeae2eeb75bf3a75', class: "flex flex-col" }, h("slot", { key: 'e31557c0f9a6727870f4d805df006d56ae3750e5', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '3e2b160409c5c399281b4399f49d6b27653150f7', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'df1d333c8876db2e042558aff12f82cc9731ae58', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: '9dc95bf39d01de97f7feb0dbc2a30040df89e1fc', class: "grid" }, h("textarea", { key: 'ab5d2f319506dbacaa2fd025cea0c31852a5af28', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '2ba332a94d1e99a209d01ea583c922690db2de6c', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: 'bf46fca75f8f305256bd552fea2738013f56bd9a', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
    static get is() { return "at-textarea"; }
    static get properties() {
        return {
            "label": {
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
                    "text": "Label to be displayed for the textarea"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon with detailed tooltip description"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displayed when invalid is set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "placeholder": {
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
                    "text": "Placeholder in the textarea when no text is placed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Adds a required * to the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displays then error text when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Makes the textarea read only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables interaction with the textarea"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "min_rows": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum number of rows to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min_rows",
                "defaultValue": "1"
            },
            "max_rows": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of rows to expand to"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_rows",
                "defaultValue": "10"
            },
            "autocomplete": {
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
                    "text": "Sets the 'autocomplete' attribute on the textarea"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "autocomplete",
                "defaultValue": "'on'"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the value of the textarea"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            }
        };
    }
    static get states() {
        return {
            "textareaEl": {}
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
                    "text": "Emits an event containing the text string when the textarea's content is changed"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
