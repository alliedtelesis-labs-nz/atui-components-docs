import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
const layoutVariants = cva('gap-4', {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
});
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
export class AtuiCheckboxGroup {
    constructor() {
        /**
         * Sets the layout of the checkbox-group
         */
        this.layout = 'column';
        /**
         * A list of strings, containing the Id's of the currently selected checkboxes
         */
        this.value = [];
        this.checkboxEls = [];
        this.formControlSelected = null;
    }
    updateSelected() {
        this.options.forEach((option) => {
            if (option.value === true &&
                !this.value.includes(option.option_id)) {
                this.value.push(option.option_id);
            }
            else if (option.value === false &&
                this.value.includes(option.option_id)) {
                this.value = this.value.filter((selection) => selection !== option.option_id);
            }
        });
    }
    componentDidLoad() {
        if (!this.getCheckBoxes) {
            this.el
                .querySelectorAll('atui-checkbox')
                .forEach((checkboxEl, index) => {
                checkboxEl.option_id = `${index}`;
                checkboxEl.disabled = this.disabled;
                checkboxEl.value = this.value.includes(`${index}`);
                checkboxEl.addEventListener('atuiChange', (event) => this.handleChange(event, `${index}`));
                this.checkboxEls.push(checkboxEl);
            });
        }
    }
    get getCheckBoxes() {
        if (this.options) {
            if (this.formControlSelected !== null) {
                this.value = this.formControlSelected;
                this.formControlSelected = null;
            }
            return this.options.map((option) => (h("atui-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
        }
        return '';
    }
    handleChange(event, checkboxId) {
        event.stopPropagation();
        this.value = this.value.includes(checkboxId)
            ? this.value.filter((option) => option !== checkboxId)
            : [...this.value, checkboxId];
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = layoutVariants({
            layout: this.layout,
        });
        return (h(Host, { key: '07f8d96227c294015d65a6db34d0e90957528031', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: 'b1adbf469a83c5d6d0a7654c534e507fc19eb4cf', class: "flex flex-col" }, h("slot", { key: 'a57cae426862be46a395679ce19d4248e2a0e7b5', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '8cefd16ad33b773d55a2c3102651ac02adb60764', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '31d55ad3a621aa43318e6884a63f4caf59bbecb6', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '245251ccbc6ae706ba46f7c1f98f8bdde91e500b', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: '8a6560ea1a4199980aa29144704a395a4009edd2' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '9da5208508c660a80000e59ebc9dc2776e508fab', class: "text-sm text-error", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    static get is() { return "atui-checkbox-group"; }
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
                    "text": "Label of the checkbox group."
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
                    "text": "Info icon with detailed tooltip description. Displayed at right of label."
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
                    "text": "Hint to be placed below the label"
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
                    "text": "Displayed when the input is invalid"
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
                    "text": "Disables interaction with the checkbox"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the error text"
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
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxOptions[]",
                    "resolved": "CheckboxOptions[]",
                    "references": {
                        "CheckboxOptions": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-checkbox-group/atui-checkbox-group.tsx",
                            "id": "src/components/atui-checkbox-group/atui-checkbox-group.tsx::CheckboxOptions"
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
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxLayout",
                    "resolved": "\"column\" | \"grid\" | \"row\"",
                    "references": {
                        "CheckboxLayout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-checkbox-group/atui-checkbox-group.tsx",
                            "id": "src/components/atui-checkbox-group/atui-checkbox-group.tsx::CheckboxLayout"
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
                "defaultValue": "'column'"
            },
            "value": {
                "type": "unknown",
                "attribute": "value",
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
            }];
    }
}
/**
 * @category Form Controls
 * @description A checkbox group component for selecting multiple options from a predefined list. Provides grouped validation, labeling, and accessibility features for checkbox collections.
 *
 * @slot - Used to place checkboxes manually when 'options' property is not set.
 */
//# sourceMappingURL=atui-checkbox-group.js.map
