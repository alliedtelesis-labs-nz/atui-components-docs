import { h, Host, } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variants = classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-background accent-active-foreground',
        },
    },
});
const checkboxVariants = classlist('shadow-inset-xs accent-active-foreground pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-accent-active group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
            true: 'accent-active-foreground group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-active-glow group-focus-visible/checkbox:ring',
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
export class AtCheckbox {
    el;
    /**
     * Title of the checkbox component.
     */
    label;
    /**
     * Subtitle of the checkbox component.
     */
    hint_text;
    /**
     * Id of the checkbox.
     */
    value;
    /**
     * State of the checkbox
     */
    checked;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    /**
     * Shows the mixed state, for a checkbox standing for a set that is only partly
     * selected. Takes precedence over `checked` in what is displayed.
     */
    indeterminate;
    checkboxEl;
    /**
     * Not derived from `value`: two groups can carry the same values, so a
     * value-derived id collides, and the label id doubles as the
     * aria-labelledby target.
     */
    inputId = `at-checkbox-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.inputId}-label`;
    /**
     * When the checkbox is toggled, this will emit true if the current value is checked, vice versa.
     */
    atuiChange;
    handleChange(value) {
        this.checked = value.target.checked;
        this.atuiChange.emit(this.checked);
    }
    /**
     * `indeterminate` is a property with no attribute, so JSX cannot set it.
     */
    componentDidRender() {
        if (this.checkboxEl) {
            this.checkboxEl.indeterminate = !!this.indeterminate;
        }
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.checked,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.checked,
            disabled: this.disabled,
        });
        return (h(Host, { key: '8069ef6bc5c8a75b48ce3f2ab11e9afda1853b28', role: "checkbox", "aria-checked": this.indeterminate
                ? 'mixed'
                : this.checked
                    ? 'true'
                    : 'false', "aria-labelledby": this.label ? this.labelId : undefined, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: 'eab40d55ef0008be63ba2db7f99284a9d9e6bf75', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.inputId, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: 'b0dec1956028ff1359f2918c7eca3c25d7c4b206', class: "pointer-events-none flex flex-col" }, h("slot", { key: 'f6bf2f1120a4a861155cfb1d9b4b984c7fb52a49', name: "label" }), this.label && (h("label", { key: 'ed01f684578a6de6f437af130e8d73a2078bf0f6', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: 'f35ee288e30f66ba61c7c20502e2d459bb51236f', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: '53c0ae28ab8e590847bfd62d8b928d97d903a224' })));
    }
    static get is() { return "at-checkbox"; }
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
                    "text": "Title of the checkbox component."
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
                    "text": "Subtitle of the checkbox component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
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
                    "text": "Id of the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
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
                    "text": "State of the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "checked"
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
                    "text": "Disables interaction with the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "indeterminate": {
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
                    "text": "Shows the mixed state, for a checkbox standing for a set that is only partly\nselected. Takes precedence over `checked` in what is displayed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "indeterminate"
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
