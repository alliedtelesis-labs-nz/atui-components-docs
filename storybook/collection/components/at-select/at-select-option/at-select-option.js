import { h } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
        group_option: {
            true: 'px-16 ',
            false: null,
        },
    },
};
/**
 * @category Form Controls
 * @description A select option component used within the AtSelect component.
 *
 * @Slot - Places content before the label.
 * @After - Places content after the label.
 */
export class AtSelectOptionComponent {
    /**
     * Value of the select option
     */
    value;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label;
    /**
     * Indicates if the option is part of an option group
     */
    option_group = false;
    /**
     * Will apply the active styling to the select option
     */
    is_active = false;
    /**
     *  Will disable interaction if set
     */
    disabled = false;
    /**
     * Emitted when the select option is clicked
     */
    atuiClick;
    handleClick() {
        this.atuiClick.emit(this.value);
    }
    render() {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset gap-4', optionVariantsConfig);
        const disabledClass = this.disabled
            ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400'
            : 'cursor-pointer';
        const classname = `${getOptionClassname({
            active: this.is_active,
            group_option: this.option_group,
        })} ${disabledClass}`;
        return (h("li", { key: '71129005359a635371626e439197c0923f9d0e7f', role: "option", value: this.value, "data-name": "select-option", "aria-selected": this.is_active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, class: classname, onClick: this.disabled ? undefined : () => this.handleClick() }, h("slot", { key: '44c36d025bd3ce72b35771bdd15712a4adb70256' }), this.label || this.value, h("slot", { key: '7e0c589bde6c2731f3db70037e39f74993fb04f8', name: "after" })));
    }
    static get is() { return "at-select-option"; }
    static get properties() {
        return {
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the select option"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
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
                    "text": "Displayed text value (optional) if not provided the value will be used as a fallback"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "option_group": {
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
                    "text": "Indicates if the option is part of an option group"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "option_group",
                "defaultValue": "false"
            },
            "is_active": {
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
                    "text": "Will apply the active styling to the select option"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_active",
                "defaultValue": "false"
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
                    "text": "Will disable interaction if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiClick",
                "name": "atuiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select option is clicked"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
