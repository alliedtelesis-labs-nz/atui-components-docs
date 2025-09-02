import { h, Host, } from "@stencil/core";
/**
 * @category Form Controls
 * @description A button group component that allows single or multiple selection from a set of toggle options. Provides a cohesive way to group related action buttons with shared styling and behavior.
 *
 * @slot - used to place your own atui-button-group-options if 'options' prop isn't set. Button changing logic will not apply.
 */
export class AtuiButtonGroup {
    constructor() {
        /**
         * List of options to be displayed on the button group.
         */
        this.options = [];
        this.buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
        this.buttonRefs = [];
    }
    componentDidLoad() {
        this.setInitialActiveButton();
    }
    handleChange(value, index) {
        this.value = value;
        this.atuiChange.emit(value);
        this.atuiIndexChange.emit(index);
    }
    setInitialActiveButton() {
        const activeOption = this.options.find((option) => option.option_id === this.value);
        if (activeOption) {
            this.value = activeOption.option_id;
        }
        else if (this.options.length > 0) {
            this.value = this.options[0].option_id;
        }
    }
    render() {
        return (h(Host, { key: '017ab3c0fcb9bf738366e26f22dade344ff536be', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: 'e468ad47749d3b7a9699c5dfcd49ae7093da4c59', class: "flex flex-col" }, h("slot", { key: '410523a6dd09c6e7af6fad3a83976603dff83437', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'f04500fe369ac046c94336268151a6350147e2c7', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'df4bf6d4429662db3baf188693ee13c6b352abd9', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '96d9d39cf7943d2ad49c479afdbe9517d4898041', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, h("ul", { key: '7fbff7280ec0f1d6488c429f61fbf9631d50e5f7', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: '2ec43c4f287eed77f4c9ee892dc5b1b0b589c85b' }))), this.error_text && (h("span", { key: 'f7dcaef11ab2a3efa7992ece36c4fcb10fbcb700', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index) => (h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index] = el) }, h("atui-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index);
                    event.preventDefault();
                }
            } }))));
    }
    static get is() { return "atui-button-group"; }
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
                    "text": "Label for button group."
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
                    "text": "Optional info icon with detailed tooltip description.\n\nDisplayed at right of label."
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
                    "text": "Hint for options."
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
                    "text": "Error text for invalid choices."
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
                    "original": "ButtonGroupOption[]",
                    "resolved": "ButtonGroupOption[]",
                    "references": {
                        "ButtonGroupOption": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-button-group/atui-button-group.tsx",
                            "id": "src/components/atui-button-group/atui-button-group.tsx::ButtonGroupOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of options to be displayed on the button group."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "Sets the current active button"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disables the button group and prevents interaction"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiIndexChange",
                "name": "atuiIndexChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When the active button is changed, this will emit the 0-based index of the active button"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When the active button is changed, this will emit the text value of the active button"
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
//# sourceMappingURL=atui-button-group.js.map
