import { h, Host, forceUpdate, } from "@stencil/core";
/**
 * @category Form Controls
 * @description A button group component that allows single or multiple selection from a set of toggle options. Single selection uses `value` and `atuiChange`. Set `multiple` for multiple selection, which uses `values` and `atuiValuesChange`.
 *
 * @slot - used to place your own at-button-group-options if 'options' prop isn't set. Parent will manage button selection and emit change events.
 */
export class AtButtonGroup {
    /**
     * Label for button group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Hint for options.
     */
    hint_text;
    /**
     * Error text for invalid choices.
     */
    error_text;
    /**
     * List of options to be displayed on the button group.
     */
    options = [];
    /**
     * Sets the current active button
     */
    value;
    /**
     * Disables the button group and prevents interaction
     */
    disabled;
    /**
     * Lets each option toggle on and off independently. The selection is held in `values` and
     * reported by `atuiValuesChange`, and the group is announced as a group of checkboxes.
     */
    multiple = false;
    /**
     * The selected option values when `multiple` is set.
     */
    values = [];
    el;
    buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.buttonGroupId}-label`;
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange;
    /**
     * When `multiple` is set and an option is toggled, this will emit the selected values in option order
     */
    atuiValuesChange;
    buttonEls = [];
    /**
     * What each slotted option asked for on its own, so the group's `disabled`
     * can be lifted again without re-enabling an option that was never meant to
     * be interactive.
     */
    optionOwnDisabled = new WeakMap();
    handleDisabledChange() {
        this.applyDisabledToButtons();
    }
    handleValueChange(newValue) {
        if (this.multiple)
            return;
        if (!this.options || this.options.length === 0) {
            this.buttonEls.forEach((child) => {
                child.is_active = child.value === newValue;
            });
        }
    }
    handleValuesChange() {
        if (!this.multiple)
            return;
        if (!this.options || this.options.length === 0) {
            this.syncMultipleSelection();
        }
    }
    handleMultipleChange() {
        this.buttonEls?.forEach((child) => forceUpdate(child));
        if (this.multiple)
            this.syncMultipleSelection();
    }
    isSelected(optionValue) {
        return (this.values ?? []).includes(optionValue);
    }
    syncMultipleSelection() {
        this.buttonEls?.forEach((child) => {
            child.is_active = this.isSelected(child.value);
        });
    }
    componentDidLoad() {
        if (!this.options || this.options.length === 0) {
            this.buttonEls = this.getButtonElements();
            this.initializeButtons();
            this.attachEventListenersToButtons();
            setTimeout(() => this.activateOptionButton());
        }
    }
    getButtonElements() {
        return Array.from(this.el.querySelectorAll('at-button-group-option:not([data-ignore-selection])'));
    }
    initializeButtons() {
        this.buttonEls.forEach((buttonEl) => {
            const hasIcon = !!buttonEl.querySelector('[slot="icon"]');
            buttonEl.label = buttonEl.label
                ? buttonEl.label
                : hasIcon
                    ? ''
                    : typeof buttonEl.value === 'string'
                        ? buttonEl.value
                        : undefined;
            if (this.multiple) {
                buttonEl.is_active = this.isSelected(buttonEl.value);
            }
            else if (this.value !== undefined && this.value !== null) {
                buttonEl.is_active = this.value === buttonEl.value;
            }
            if (!this.optionOwnDisabled.has(buttonEl)) {
                this.optionOwnDisabled.set(buttonEl, !!buttonEl.disabled);
            }
        });
        this.applyDisabledToButtons();
    }
    applyDisabledToButtons() {
        this.buttonEls.forEach((buttonEl) => {
            buttonEl.disabled =
                this.disabled || this.optionOwnDisabled.get(buttonEl) === true;
        });
    }
    attachEventListenersToButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.addEventListener('atuiClick', (event) => this.handleChange(event, buttonEl.value, index));
        });
    }
    activateOptionButton() {
        if (this.multiple)
            return;
        const enabledButtons = this.buttonEls.filter((child) => !child.disabled);
        const initialButton = enabledButtons.find((child) => this.isBoundValue(child.value)) ||
            enabledButtons.find((child) => child.is_active) ||
            enabledButtons[0];
        if (initialButton) {
            this.value = initialButton.value;
            this.handleValueChange(this.value);
        }
    }
    isBoundValue(optionValue) {
        return (this.value !== undefined &&
            this.value !== null &&
            optionValue === this.value);
    }
    get getButtonGroupOptions() {
        if (this.options) {
            return this.options.map((option, index) => (h("at-button-group-option", { value: option.value, label: option.label
                    ? option.label
                    : option.icon
                        ? ''
                        : option.value, is_active: this.multiple
                    ? this.isSelected(option.value)
                    : this.value === option.value, disabled: option.disabled || this.disabled, onAtuiClick: (event) => this.handleChange(event, option.value, index) }, option.icon && (h("at-icon", { slot: "icon", name: option.icon })))));
        }
        return null;
    }
    handleChange(event, optionValue, index) {
        event.stopPropagation();
        if (this.multiple) {
            this.toggleValue(optionValue, index);
            return;
        }
        this.value = optionValue;
        this.atuiChange.emit(this.value);
        this.atuiIndexChange.emit(index);
        this.buttonEls.forEach((child) => {
            child.is_active = child.value === optionValue;
        });
    }
    optionOrder() {
        return this.options && this.options.length > 0
            ? this.options.map((option) => option.value)
            : this.buttonEls.map((child) => child.value);
    }
    toggleValue(optionValue, index) {
        const next = this.isSelected(optionValue)
            ? this.values.filter((value) => value !== optionValue)
            : [...(this.values ?? []), optionValue];
        this.values = this.optionOrder().filter((value) => next.includes(value));
        this.syncMultipleSelection();
        this.atuiValuesChange.emit(this.values);
        this.atuiIndexChange.emit(index);
    }
    render() {
        return (h(Host, { key: 'b8872e3057c7ce2c2aefccb55889bc21439bc5e3', role: this.multiple ? 'group' : 'radiogroup', "aria-labelledby": this.label ? this.labelId : undefined }, h("div", { key: 'e4f47f48429789294135382c7c3bf789e334c128', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'd401e7775b6a51985514efd5a7f7eb96c964ccd3', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: 'fe0bca600b980fab580e5936f159e31f16608670', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b6eac802fc890fd4c83fc49e37459c59d4063e51', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '7f738488dcf9db147d6b9f1cecc3f3ed40296e6b', class: "border-input h-input bg-surface-background rounded-input relative w-fit border p-[2px] inset-shadow-xs" }, h("ul", { key: '144bbdfefcf3e6af298ccc021da9f35828aa1409', class: "relative z-20 flex h-full flex-row", "data-name": "button-group-options" }, h("slot", { key: '72b3fb86d0c377c9df51f066eccd0553c43c0564' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (h("li", { class: "relative z-10 mr-[-1px] flex" }, button))))), this.error_text && (h("span", { key: 'c3d0c37afc4f83d5bd38d7038a0c3901e2fffdbf', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get is() { return "at-button-group"; }
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
                    "text": "Label for button group."
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
                    "text": "Optional info icon with detailed tooltip description.\n\nDisplayed at right of label."
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
                    "text": "Hint for options."
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
                    "text": "Error text for invalid choices."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIButtonGroupOption[]",
                    "resolved": "AtIButtonGroupOption[]",
                    "references": {
                        "AtIButtonGroupOption": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-button-group/at-button-group.tsx",
                            "id": "src/components/at-button-group/at-button-group.tsx::AtIButtonGroupOption"
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
                "reflect": false,
                "attribute": "value"
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
                    "text": "Disables the button group and prevents interaction"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "multiple": {
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
                    "text": "Lets each option toggle on and off independently. The selection is held in `values` and\nreported by `atuiValuesChange`, and the group is announced as a group of checkboxes."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multiple",
                "defaultValue": "false"
            },
            "values": {
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
                    "text": "The selected option values when `multiple` is set."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
            }, {
                "method": "atuiValuesChange",
                "name": "atuiValuesChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When `multiple` is set and an option is toggled, this will emit the selected values in option order"
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
                "propName": "disabled",
                "methodName": "handleDisabledChange",
                "handlerOptions": {
                    "immediate": true
                }
            }, {
                "propName": "value",
                "methodName": "handleValueChange",
                "handlerOptions": {
                    "immediate": true
                }
            }, {
                "propName": "values",
                "methodName": "handleValuesChange",
                "handlerOptions": {
                    "immediate": true
                }
            }, {
                "propName": "multiple",
                "methodName": "handleMultipleChange",
                "handlerOptions": {
                    "immediate": true
                }
            }];
    }
}
