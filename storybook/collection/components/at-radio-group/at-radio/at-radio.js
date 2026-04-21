import { h, Host, } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        disabled: {
            false: '',
            true: 'bg-disabled-light pointer-events-none opacity-50 grayscale-[1]',
        },
        readonly: {
            false: '',
            true: 'pointer-events-none',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-accent/20 accent-active-accent',
        },
    },
};
const getRadioClasses = classlist('focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring focus-visible:ring-offset-2', variantsConfig);
/**
 * @category Form Controls
 * @description A radio button component for selecting a single option from a predefined list.
 *
 * @slot - Placed below the title/subtitle
 */
export class AtRadio {
    el;
    /**
     * Title of the radio component.
     */
    label;
    /**
     * Subtitle of the radio component.
     */
    hint_text;
    /**
     * Sets the value of the checkbox
     */
    checked;
    /**
     * ID of the radio button element and its option
     */
    value;
    /**
     * Name of radio group.
     * Buttons sharing a name are associated with the same radio group.
     */
    group;
    /**
     * Disables interaction with the radio
     */
    disabled;
    /**
     * Disables the radio option but keeps the text readable. Used for global readonly form state.
     */
    readonly = false;
    radioEl;
    /**
     * Emits the current state of the radio when clicked.
     */
    atuiChange;
    handleChange() {
        if (!this.disabled && !this.readonly && !this.checked) {
            this.checked = true;
            this.atuiChange.emit(this.value);
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleChange();
        }
    }
    render() {
        const classname = getRadioClasses({
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
        });
        return (h(Host, { key: '3c53ecc68423b5f97c1e442ac7f57685314738e0', "aria-checked": this.checked, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '6233afa5ce5b68d0b2e58cf396963573372b6852', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.value, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: '6b9adce51da9d0f13162b2fa76cdc2b249d41695', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'da26301c7912334a67b388abdce7fd27d71f6a9e', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '68dd707c0d6526866607a5bda45c80252990ed5d', class: "text-muted mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '20935a70632ba02e25385f812eeb0ca8a362e160' }))));
    }
    static get is() { return "at-radio"; }
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Title of the radio component."
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
                    "text": "Subtitle of the radio component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "checked": {
                "type": "boolean",
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
                    "text": "Sets the value of the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "checked"
            },
            "value": {
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
                    "text": "ID of the radio button element and its option"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "group": {
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
                    "text": "Name of radio group.\nButtons sharing a name are associated with the same radio group."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group"
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
                    "text": "Disables interaction with the radio"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the radio option but keeps the text readable. Used for global readonly form state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
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
                    "text": "Emits the current state of the radio when clicked."
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
