import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
const containerVariants = cva('height-[36px] relative flex rounded-md', {
    variants: {
        showButtons: {
            true: 'border border-solid border-med',
            false: '',
        },
    },
});
const inputVariants = cva('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'bg-white',
            true: 'border-none bg-surface-1 text-dark',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-2 focus:ring-active-foreground/30',
            true: 'border-error-base focus:ring-2 focus:ring-destructive-foreground/30',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-dark',
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
            class: 'bg-surface-1 text-dark',
        },
        {
            readonly: false,
            disabled: false,
            class: 'bg-surface-base text-dark',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
});
/**
 * @category Form Controls
 * @description A numeric input component for entering numerical values.
 */
export class AtuiInputNumericComponent {
    constructor() {
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = '';
        /**
         * Disables interaction with the input
         */
        this.disabled = false;
        /**
         * Min selectable value of the input.
         */
        this.min = 0;
        /**
         * Max selectable value of the input.
         */
        this.max = 100;
        /**
         * Interval between selections.
         */
        this.step = 1;
        /**
         * Show buttons inside input or outside
         */
        this.show_buttons = true;
        /**
         * The value of the input
         */
        this.value = 0;
        this.inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
        this.handleDecrease = () => {
            if (this.value > this.min) {
                this.value = Math.max(this.value - this.step, this.min);
                this.atuiChange.emit(this.value);
            }
        };
        this.handleIncrease = () => {
            if (this.value < this.max) {
                this.value = Math.min(this.value + this.step, this.max);
                this.atuiChange.emit(this.value);
            }
        };
    }
    handleChange(event) {
        event.stopPropagation();
        this.value = Number(event.target.value);
        this.atuiChange.emit(this.value);
    }
    render() {
        const containerClassname = containerVariants({
            showButtons: this.show_buttons,
        });
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '3bf7433dae7cc28896ece58141868af3c60c7fce', class: "w-full" }, h("div", { key: '3a57f1dd7d8e786acf3d381141d8d520090d491c', class: "flex flex-col" }, h("slot", { key: '7c589b962b1747be9fe46b92a2f04c6205e8d2ac', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '2d7a0e3a3074ae0db995d0c254e567f578ca8dc7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e99c8d58e8b02f4f90c4dc13f772661cead01ce2', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '3b72aa08d66e7d6c5af81613ae08f8b712bf2458', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: '5476956a62055d10ae86ffe72c8d7545683e08ea', class: "rounded-l-md rounded-r-none border-r border-solid border-med", type: "secondaryText", icon: "remove", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" })), h("input", { key: 'd1b4ea8d309f0f04a26994e0489d5e23fc513e9a', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: 'f4293fbd5b7db1505aa39b94486dd1770f201eb9', class: "rounded-l-none rounded-r-md border-l border-solid border-med", type: "secondaryText", icon: "add", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }))), this.error_text && this.invalid && (h("span", { key: 'd778b466649ece195fcc681445aa8d23d08944b5', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    static get is() { return "atui-input-numeric"; }
    static get originalStyleUrls() {
        return {
            "$": ["atui-input-numeric.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atui-input-numeric.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                "reflect": false
            },
            "hint_text": {
                "type": "string",
                "attribute": "hint_text",
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
                "reflect": false
            },
            "info_text": {
                "type": "string",
                "attribute": "info_text",
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
                "reflect": false
            },
            "error_text": {
                "type": "string",
                "attribute": "error_text",
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
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                "defaultValue": "''"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                "reflect": false
            },
            "invalid": {
                "type": "boolean",
                "attribute": "invalid",
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
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "defaultValue": "false"
            },
            "min": {
                "type": "number",
                "attribute": "min",
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
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "attribute": "step",
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
                "defaultValue": "1"
            },
            "show_buttons": {
                "type": "boolean",
                "attribute": "show_buttons",
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
                "defaultValue": "true"
            },
            "value": {
                "type": "number",
                "attribute": "value",
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
//# sourceMappingURL=atui-input-numeric.js.map
