import { Host, h, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist('gap-4', layoutVariantsConfig);
/**
 * @category Form Controls
 * @description A radio button group component for selecting a single option from a predefined list. Provides grouped validation, labeling, and accessibility features for radio button collections.
 *
 * @slot - Used to place atui-radio elements when 'options' is not set
 */
export class AtuiRadioGroup {
    constructor() {
        /**
         * Direction that the radio elements are placed
         */
        this.layout = 'column';
        this.radioEls = [];
        this.radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    }
    handleChange(optionId) {
        if (this.value !== optionId) {
            this.value = optionId;
            this.atuiChange.emit(optionId);
        }
    }
    focusAndClickRelativeRadio(relativePosition) {
        const indexOfActiveRadio = this.radioEls.indexOf(this.el.ownerDocument.activeElement);
        const nextRadioEl = this.radioEls[(indexOfActiveRadio + relativePosition + this.radioEls.length) %
            this.radioEls.length];
        nextRadioEl.click();
        nextRadioEl.focus();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.focusAndClickRelativeRadio(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusAndClickRelativeRadio(-1);
                break;
        }
    }
    get getRadios() {
        if (this.options && this.options.length > 0) {
            return this.options.map((option) => (h("atui-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.option_id);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        return (h(Host, { key: '92870c9fb516f5753ca3664b00a41bbf2a831c14', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '7815a822c78aa2d75c0dd44313163ec015bd1adb', class: "flex flex-col" }, h("slot", { key: 'c463e97e13a867accaeba13e7db2a94ceeef6355', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '3114c5802e66c9c32930bd74eb2b24d2465ce0b4', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '5aaae0df1ebabb07320cbcc1524b8dbdb345f897', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '3b84689d0900112c783de3c1bf637b890c609ab8', class: classname, "data-name": "radio-group-options" }, h("slot", { key: 'b845a953a0acc46355c9d820b3b845c52f8ebe85' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: 'b8c67eab2b406fe27da0f090a166607225e6a68c', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    static get is() { return "atui-radio-group"; }
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label of the radio group."
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon with detailed tooltip description.\nDisplayed at right of label."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "RadioLayout",
                    "resolved": "\"column\" | \"grid\" | \"row\"",
                    "references": {
                        "RadioLayout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-radio-group/atui-radio-group.tsx",
                            "id": "src/components/atui-radio-group/atui-radio-group.tsx::RadioLayout"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Direction that the radio elements are placed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'column'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disables the radio options but keeps the text readable. Use for global readonly form state."
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disables interaction with atui-radio elements when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds a required * to the label"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shown when 'invalid' prop is set"
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
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "RadioOption[]",
                    "resolved": "RadioOption[]",
                    "references": {
                        "RadioOption": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-radio-group/atui-radio-group.tsx",
                            "id": "src/components/atui-radio-group/atui-radio-group.tsx::RadioOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options displayed in the radio group."
                },
                "getter": false,
                "setter": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "A string containing the Id of the currently selected radio"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Emits an event when active radio element changes. `event.detail` is the ID of the active radio"
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
//# sourceMappingURL=atui-radio-group.js.map
