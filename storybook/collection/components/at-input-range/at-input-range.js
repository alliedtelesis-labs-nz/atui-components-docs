import { h, Host, } from "@stencil/core";
/**
 * @category Form Controls
 * @description A range input component for selecting a value within a specified range.
 * @slot label - Use this slot to provide a custom label for the input range component.
 */
export class AtInputRangeComponent {
    /**
     * Label of the input.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Info icon with detailed tooltip description if required. Content is available via info icon tooltip.
     */
    info_text;
    /**
     * suffix message for the input.
     */
    suffix;
    /**
     * Warning message for the input.
     */
    warning_text;
    /**
     *
     * Error message visible when input is invalid.
     */
    error_text;
    /**
     * Set the input to an invalid state.
     */
    invalid;
    /**
     * Set the input to a readonly state.
     */
    readonly;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled;
    /**
     * Indicated form field is required.
     */
    required;
    /**
     * Numeric value of the slider component.
     */
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = Math.max(this.min, Math.min(this.max, val));
    }
    _value;
    /**
     * Min selectable value of the slider.
     */
    min = 0;
    /**
     * Max selectable value of the slider.
     */
    max = 100;
    /**
     * Interval between selections.
     */
    step = 1;
    /**
     * Display min and max text values.
     */
    show_minmax = true;
    /**
     * Display step indicators.
     */
    show_ticks = true;
    /**
     * Display order of input and slider.
     */
    show_value = true;
    /**
     * Display numeric input with slider.
     */
    show_input = true;
    /**
     * Position of the numeric input, left or right of the slider.
     */
    label_position = 'after';
    /**
     * Emits an event containing the current value when the text input or slider input's content is changed
     */
    atuiChange;
    el;
    sliderContainerRef;
    sliderId = `slider-${Math.random().toString(36).substring(2, 11)}`;
    onChange(inputVal) {
        const newValue = Math.max(this.min, Math.min(this.max, inputVal)); // Clamp value
        this.value = newValue;
        this.atuiChange.emit(this.value);
    }
    render() {
        return (h(Host, { key: '57cb21bc713e60de64f2a0d6c2ae44285ac24bf8' }, h("div", { key: 'da79e27eda9f2c02ad95c8874e625a976312a78f', class: "flex flex-col" }, h("slot", { key: '8185e778aae8f5cd3fc5a337bf017be9aa74709f', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '048defe1bb04904aef94fd23f6a50731e53616f4', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '609548e856de6dbd37b9ca0e969693376adbd349', class: "text-light inline-block text-xs leading-tight", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: 'a232cea2955c5db6209631280422415f25eb3248', class: "text-error text-xs font-normal", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: '0f3cfb6559ea7d283dd17cc7caf73c9388284932', class: "text-warning-foreground text-xs font-normal", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: '276c39b402deaca1895512d42f80cbb38eba89e1', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: '873f4d0571e0e4fbcf50c5a0c9d95f060ddfe690', class: "flex flex-grow flex-col" }, h("div", { key: '3563af4d7eb15196a225bdd1dc1027b7f60f0b20', class: "flex flex-grow" }, h("div", { key: '6b0f782d201637f4554c0f30e41cdf0e2097549c', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: 'a650e2ed7f3924fe46e2181eed2b586573218ec8', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '3910fc498a79bad5310bf76fca235bb9f5d24dd4', class: "text-sm" }, this.value)), h("div", { key: '638a35912c9948139e72d6031d20f0a2fb1a1fe7', class: "range-slider__progress" })))), this.show_input && (h("div", { key: '88b9954a624e909e8f6735681ce8bf1889d1addf', class: "relative flex w-80 flex-row items-center gap-8" }, h("at-input-numeric", { key: '92bac40d0a6cb58a8674e5a6453a6d3bfb19b7a1', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: 'af0418aedfe19159720b34c32367ea3f34b75543', "data-name": "slider-suffix", class: "text-light absolute top-1/2 right-[36px] -translate-y-1/2" }, this.suffix)))))));
    }
    static get is() { return "at-input-range"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-input-range.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-input-range.css"]
        };
    }
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
                    "text": "Label of the input."
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
                    "text": "Short description or validation hint if required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
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
                    "text": "Info icon with detailed tooltip description if required. Content is available via info icon tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "suffix": {
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
                    "text": "suffix message for the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "suffix"
            },
            "warning_text": {
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
                    "text": "Warning message for the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "warning_text"
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
                    "text": "\nError message visible when input is invalid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
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
                    "text": "Set the input to an invalid state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the input to a readonly state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
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
                    "text": "Disable user interaction. Disabled state should be applied via form control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
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
                    "text": "Indicated form field is required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "value": {
                "type": "number",
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
                    "text": "Numeric value of the slider component."
                },
                "getter": true,
                "setter": true,
                "reflect": false,
                "attribute": "value"
            },
            "min": {
                "type": "number",
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
                    "text": "Min selectable value of the slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min",
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
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
                    "text": "Max selectable value of the slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max",
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
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
                "attribute": "step",
                "defaultValue": "1"
            },
            "show_minmax": {
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
                    "text": "Display min and max text values."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_minmax",
                "defaultValue": "true"
            },
            "show_ticks": {
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
                    "text": "Display step indicators."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_ticks",
                "defaultValue": "true"
            },
            "show_value": {
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
                    "text": "Display order of input and slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_value",
                "defaultValue": "true"
            },
            "show_input": {
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
                    "text": "Display numeric input with slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_input",
                "defaultValue": "true"
            },
            "label_position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputPosition",
                    "resolved": "\"after\" | \"before\"",
                    "references": {
                        "InputPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-input-range/at-input-range.tsx",
                            "id": "src/components/at-input-range/at-input-range.tsx::InputPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the numeric input, left or right of the slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label_position",
                "defaultValue": "'after'"
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
                    "text": "Emits an event containing the current value when the text input or slider input's content is changed"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
