import { h, Host, } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variants = classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-1 bg-white',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = classlist('material-icons shadow-inset-xs accent-active-foreground pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-active-foreground/30 group-focus-visible/checkbox:ring-2',
            true: null,
        },
    },
});
/**
 * @category Form Controls
 * @description A checkbox component for selecting a single option from a predefined list. Provides validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Placed after the title & subtitle elements.
 */
export class AtuiCheckbox {
    handleChange(value) {
        this.value = value.target.checked;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.value,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'defa382907ef13cb0d26872bac2266376f11861f', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: '7ee8cc62c8ec8396fc4f85931bc45eadade2afd8', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '2838c9dd17dc6a03448c56e232c8ad1a48274958', class: "pointer-events-none flex flex-col" }, h("slot", { key: '959357fb64e6bc4342b8df0fc914c3f41344eaa4', name: "label" }), this.label && (h("label", { key: '18c953e7d63a5e68a1f3b3ee5285d22c8320dc7f', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: 'fff91e9df9ed0945f179aa963360f96542fad07f', class: "text-light mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: '565d07cea66b7e04d603b4762d77ef67cd3a5d3c' })));
    }
    static get is() { return "atui-checkbox"; }
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
                    "text": "Title of the checkbox component."
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
                    "text": "Subtitle of the checkbox component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "option_id": {
                "type": "string",
                "attribute": "option_id",
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
                    "text": "Id of the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "boolean",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "State of the checkbox"
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
                    "text": "Disables interaction with the checkbox"
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
                    "text": "When the checkbox is toggled, this will emit true if the current value is checked, vice versa."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-checkbox.js.map
