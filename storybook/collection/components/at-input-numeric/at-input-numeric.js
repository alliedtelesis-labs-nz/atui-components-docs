import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const containerVariantsConfig = {
    variants: {
        showButtons: {
            true: 'border-input border border-solid',
            false: '',
        },
    },
};
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'bg-input-background',
            true: 'bg-surface-1 text-foreground border-none',
        },
        invalid: {
            false: 'border-input focus:border-active-accent focus:ring-active-glow focus:ring',
            true: 'border-error-base focus:ring-error-glow focus:ring',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-foreground',
        },
        showButtons: {
            true: '',
            false: 'border border-solid',
        },
    },
    compoundVariants: [
        {
            readonly: true,
            disabled: true,
            class: 'bg-surface-1 text-foreground',
        },
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-input text-foreground focus:border-active-accent focus:ring-active-glow bg-input-background focus:ring',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
};
/**
 * @category Form Controls
 * @description A numeric input component for entering numerical values.
 * @slot label -  place before "form label" to add custom label content.
 */
export class AtInputNumericComponent {
    /**
     * Label above the input container
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
     * Placeholder text to be shown when no input is passed
     */
    placeholder = '';
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
     * Min selectable value of the input.
     */
    min = 0;
    /**
     * Max selectable value of the input.
     */
    max = 100;
    /**
     * Interval between selections.
     */
    step = 1;
    /**
     * Show buttons inside input or outside
     */
    show_buttons = true;
    /**
     * The value of the input
     */
    value = 0;
    inputEl;
    el;
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        this.value = Number(event.target.value);
        this.atuiChange.emit(this.value);
    }
    handleDecrease = () => {
        if (this.value > this.min) {
            this.value = Math.max(this.value - this.step, this.min);
            this.atuiChange.emit(this.value);
        }
    };
    handleIncrease = () => {
        if (this.value < this.max) {
            this.value = Math.min(this.value + this.step, this.max);
            this.atuiChange.emit(this.value);
        }
    };
    render() {
        const getContainerClassname = classlist(`h-input min-h-input relative flex rounded-input`, containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons,
        });
        const getClassname = classlist(`transition[background-color,color,box-shadow] w-full rounded-input py-input-y px-input-x text-right outline-0 duration-300 ease-in-out focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '56bb064749466a6a6284e8838b30eb4a5b93aa72', class: "w-full" }, h("div", { key: '6c189a211e420647e91da682625b85616a19f7fe', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '0ee41ddbb8464436c01722752a53096d945c3c5c', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'f743d5bdab379fd9224ea1005180ac898c15be04', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '2c3cb1ba438f37da3611e0dd9c38d282389a9b91', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'cf28af96aad2be00acbbf3228c01f798a878608f', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: 'd55e60f26af83fcb0f9fb889eb329256504b4878', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: 'e66e196330ec57482330de63729a8cce9c4c6de5', slot: "icon", name: "subtract" }))), h("input", { key: '8f57705304ac978c8fcc4419607336246def3221', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '07e4cf863c87d514db789b3bc1fafadd6ca7c4b2', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: '5919f278a318fb23fc07263f6c92c31dc3a098ec', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: '6063134d6783f8113307123fc09ba2bef8d2e814', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
    static get is() { return "at-input-numeric"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-input-numeric.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-input-numeric.css"]
        };
    }
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
                    "text": "Label above the input container"
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
                    "text": "Error text displayed when invalid is set"
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
                    "text": "Placeholder text to be shown when no input is passed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
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
                    "text": "Adds a required * to the element"
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
                    "text": "Shows the error text"
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
                    "text": "Makes the input read only"
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
                    "text": "Disables interaction with the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "min": {
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
                    "text": "Min selectable value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min",
                "defaultValue": "0"
            },
            "max": {
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
                    "text": "Max selectable value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max",
                "defaultValue": "100"
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
                    "text": "Interval between selections."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "step",
                "defaultValue": "1"
            },
            "show_buttons": {
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
                    "text": "Show buttons inside input or outside"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_buttons",
                "defaultValue": "true"
            },
            "value": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "0"
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
                    "text": "Emits an event containing the text string or number when the input's content is changed"
                },
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
