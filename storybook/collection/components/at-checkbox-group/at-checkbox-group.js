import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
/**
 * ### ```interface CheckboxOptions```
 * ```
 *  id: string;
 *  label?: string;
 *  hint_text?: string;
 *  value?: boolean;
 * ```
 *
 * @category Form Controls
 * @description A checkbox group component for selecting multiple options from a predefined list. Provides grouped validation, labeling, and accessibility features for checkbox collections.
 * @slot - Used to place checkboxes manually when 'options' property is not set.
 */
export class AtCheckboxGroup {
    /**
     * Label of the checkbox group.
     */
    label;
    /**
     * Info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text;
    /**
     * Hint to be placed below the label
     */
    hint_text;
    /**
     * Displayed when the input is invalid
     */
    error_text;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Options displayed in the checkbox group.
     */
    options;
    updateSelected() {
        this.options.forEach((option) => {
            if (option.checked === true && !this.value.includes(option.value)) {
                this.value.push(option.value);
            }
            else if (option.checked === false &&
                this.value.includes(option.value)) {
                this.value = this.value.filter((selection) => selection !== option.value);
            }
        });
    }
    /**
     * Sets the layout of the checkbox-group
     */
    layout = 'column';
    /**
     * A list of strings, containing the Id's of the currently selected checkboxes
     */
    value = [];
    el;
    checkboxEls = [];
    onValueChange() {
        if (!this.options) {
            this.el
                .querySelectorAll('at-checkbox')
                .forEach((checkboxEl) => {
                checkboxEl.checked =
                    this.value?.includes(checkboxEl.value) ?? false;
            });
        }
    }
    /**
     * Emits an event containing the 'selected' prop when changed
     */
    atuiChange;
    formControlSelected = null;
    componentDidLoad() {
        if (!this.options) {
            requestAnimationFrame(() => {
                this.setupOptionElements();
            });
        }
    }
    get getCheckBoxes() {
        if (this.options) {
            if (this.formControlSelected !== null) {
                this.value = this.formControlSelected;
                this.formControlSelected = null;
            }
            return this.options.map((option) => (h("at-checkbox", { value: option.value, label: option.label, hint_text: option.hint_text, checked: this.value.includes(option.value), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.value) })));
        }
        return '';
    }
    setupOptionElements() {
        this.el
            .querySelectorAll('at-checkbox')
            .forEach((checkboxEl) => {
            checkboxEl.disabled = this.disabled;
            checkboxEl.checked =
                this.value?.includes(checkboxEl.value) ?? false;
            checkboxEl.addEventListener('atuiChange', (event) => this.handleChange(event, checkboxEl.value));
        });
    }
    handleChange(event, checkboxValue) {
        event.stopPropagation();
        const isChecked = event.detail;
        if (isChecked && !this.value.includes(checkboxValue)) {
            this.value = [...this.value, checkboxValue];
        }
        else if (!isChecked) {
            this.value = this.value.filter((v) => v !== checkboxValue);
        }
        this.atuiChange.emit(this.value);
    }
    render() {
        const getLayoutClassname = classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (h(Host, { key: '63b1fd2152d509400620e77c93a94b8367f09442', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: '6f59cfabf63c186bea8632768ea25ba0a7727989', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '1c8f8c5ccee677b33b66dd3f52b5d768e9295c07', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'ca4068b036c330d79e137d61e8cec8070fe22ab5', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '787b266ed0b7183607aae6d45dee1d409938153e', class: "text-muted inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '4f8e3b4f532b0e6adc3af8d213cba8eb1c7aad2c', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: '09152313301f4a21b1f9595b7f5a2c62f3a52b19' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '602e1f149a1a14a893fc8575dc1897c6fd97d1d5', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    static get is() { return "at-checkbox-group"; }
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
                    "text": "Label of the checkbox group."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                    "text": "Info icon with detailed tooltip description. Displayed at right of label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
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
                    "text": "Hint to be placed below the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
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
                    "text": "Displayed when the input is invalid"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
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
                    "text": "Disables interaction with the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
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
                    "text": "Shows the error text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
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
                    "text": "Adds a required * to the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtICheckboxOption[]",
                    "resolved": "AtICheckboxOption[]",
                    "references": {
                        "AtICheckboxOption": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-checkbox-group/at-checkbox-group.tsx",
                            "id": "src/components/at-checkbox-group/at-checkbox-group.tsx::AtICheckboxOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options displayed in the checkbox group."
                },
                "getter": false,
                "setter": false
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtCheckboxLayout",
                    "resolved": "\"column\" | \"grid\" | \"row\"",
                    "references": {
                        "AtCheckboxLayout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-checkbox-group/at-checkbox-group.tsx",
                            "id": "src/components/at-checkbox-group/at-checkbox-group.tsx::AtCheckboxLayout"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the layout of the checkbox-group"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "layout",
                "defaultValue": "'column'"
            },
            "value": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A list of strings, containing the Id's of the currently selected checkboxes"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
                    "text": "Emits an event containing the 'selected' prop when changed"
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "updateSelected"
            }, {
                "propName": "value",
                "methodName": "onValueChange"
            }];
    }
}
/**
 * @category Form Controls
 * @description A checkbox group component for selecting multiple options from a predefined list. Provides grouped validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Used to place checkboxes manually when 'options' property is not set.
 */
