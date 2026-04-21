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
        return (h(Host, { key: 'dc9f06168bd157c52a2185bfc8a82e4579f3b209' }, h("div", { key: 'aa5f9dac067b5231a2fad70b8c916be4ab271432', class: "flex flex-col" }, h("slot", { key: '36039445d7c6f2e211d7e05bc1491c93d982be24', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '0a472c2600997e654488fffb1bc05d2ee2bf4aad', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'f6dbadc5f11689ec4ef339dcf4913c7f92b49361', class: "text-muted inline-block text-xs leading-tight", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: '53cdb87adcfdec92988be52ddc0378822f6f1261', class: "text-error text-xs font-normal", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: '3f90e11c0f008503ca5c9487f7fb565b5b5e79ae', class: "text-warning-foreground text-xs font-normal", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: '145cf5561b5688674596cdee5ef0747f97e2fcce', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: 'c87b792c23868e01831de26c1d4e9a4efad55890', class: "flex flex-grow flex-col" }, h("div", { key: 'c5913c7706496717fd1caf8e87510f2829532796', class: "flex flex-grow" }, h("div", { key: 'dd14e607dd426433cfeb7c420723eb15cab8aa4e', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: '0097d0d51fe0a5499c1584eaeac01a1fa63a5094', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '0b04d58daa38570f877c33c097bbb4d84625989a', class: "text-sm" }, this.value)), h("div", { key: '417841f233b193a95bec84482a759035cdf34f10', class: "range-slider__progress" })))), this.show_input && (h("div", { key: '8de2659af4f6b2a84e5e1bf06bc67ffe83706863', class: "relative flex w-80 flex-row items-center gap-8" }, h("at-input-numeric", { key: 'd49f7981ecf725280d1223f7d1b565d812c76314', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: 'efcb52cd91b7acd71c10a68fc81a65daf345207f', "data-name": "slider-suffix", class: "text-muted absolute top-1/2 right-[36px] -translate-y-1/2" }, this.suffix)))))));
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
