import { h, Host, } from "@stencil/core";
/**
 * @category Form Controls
 * @description A range input component for selecting a value within a specified range.
 */
export class AtuiInputRangeComponent {
    constructor() {
        /**
         * Min selectable value of the slider.
         */
        this.min = 0;
        /**
         * Max selectable value of the slider.
         */
        this.max = 100;
        /**
         * Interval between selections.
         */
        this.step = 1;
        /**
         * Display min and max text values.
         */
        this.show_minmax = true;
        /**
         * Display step indicators.
         */
        this.show_ticks = true;
        /**
         * Display order of input and slider.
         */
        this.show_value = true;
        /**
         * Display numeric input with slider.
         */
        this.show_input = true;
        /**
         * Position of the numeric input, left or right of the slider.
         */
        this.label_position = 'after';
        this.sliderId = `slider-${Math.random().toString(36).substring(2, 11)}`;
    }
    /**
     * Numeric value of the slider component.
     */
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = Math.max(this.min, Math.min(this.max, val));
    }
    onChange(inputVal) {
        const newValue = Math.max(this.min, Math.min(this.max, inputVal)); // Clamp value
        this.value = newValue;
        this.atuiChange.emit(this.value);
    }
    render() {
        return (h(Host, { key: '237950d70a3617cdcf602abbd79876f75a0863b7' }, h("div", { key: 'f8d2fec0d9511d8e59a84f1cdf984f5f9a2a52b2', class: "flex flex-col" }, h("slot", { key: '07c6e4eebe1fd4793084cc1f1b0bd1f0644c1234', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '5666f5443354a461e9ea8a47c7494c7f6f2c6b86', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b1cdbad1e3deff9c38e90034ca2ccc4f01670828', class: "inline-block text-xs leading-tight text-light", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: 'b68b73e27aceabbfbaf767ff9d39df9f1fac19b3', class: "text-xs font-normal text-error", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: 'e6896b6ce70e0ef950e95deaaf742a7a7d176e99', class: "text-xs font-normal text-warning-foreground", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: 'cd021516ab83130a09fae8e0fec3b3c3de0cb0c7', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: 'ce816824f043a2e1b32e80077c4e8ef4921efecc', class: "flex flex-grow flex-col" }, h("div", { key: 'f20ee6dd8630dcd876310bd042c32c86df6b763b', class: "flex flex-grow" }, h("div", { key: '8a69f00978aad4eb2b1899085ca27d4b83833cfe', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: '2051a425edb496e875c93f749aa3a5d3a0c860e8', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '56831bc2cbc397605555cbeff2418a5802010645', class: "text-sm" }, this.value)), h("div", { key: '102260887a6d789ede76cf6871b6125dd76c032a', class: "range-slider__progress" })))), this.show_input && (h("div", { key: 'f7005ca72b9858d3a3585dcd2ae678fd449d9d81', class: "relative flex w-80 flex-row items-center gap-8" }, h("atui-input-numeric", { key: 'bde9dbfaeacfc95db62f9410519677b6cca58d93', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: '6bdfe91c8bb9dc4bad6ea4589872fe8616b5a0d3', "data-name": "slider-suffix", class: "absolute right-[36px] top-1/2 -translate-y-1/2 text-light" }, this.suffix)))))));
    }
    static get is() { return "atui-input-range"; }
    static get originalStyleUrls() {
        return {
            "$": ["atui-input-range.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atui-input-range.css"]
        };
    }
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
                    "text": "Label of the input."
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
                    "text": "Short description or validation hint if required."
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
                    "text": "Info icon with detailed tooltip description if required. Content is available via info icon tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "suffix": {
                "type": "string",
                "attribute": "suffix",
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
                "reflect": false
            },
            "warning_text": {
                "type": "string",
                "attribute": "warning_text",
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
                    "text": "\nError message visible when input is invalid."
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
                    "text": "Set the input to an invalid state."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                    "text": "Disable user interaction. Disabled state should be applied via form control."
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
                    "text": "Indicated form field is required."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "number",
                "attribute": "value",
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
                "reflect": false
            },
            "min": {
                "type": "number",
                "attribute": "min",
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
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "attribute": "step",
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
                "defaultValue": "1"
            },
            "show_minmax": {
                "type": "boolean",
                "attribute": "show_minmax",
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
                "defaultValue": "true"
            },
            "show_ticks": {
                "type": "boolean",
                "attribute": "show_ticks",
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
                "defaultValue": "true"
            },
            "show_value": {
                "type": "boolean",
                "attribute": "show_value",
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
                "defaultValue": "true"
            },
            "show_input": {
                "type": "boolean",
                "attribute": "show_input",
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
                "defaultValue": "true"
            },
            "label_position": {
                "type": "string",
                "attribute": "label_position",
                "mutable": false,
                "complexType": {
                    "original": "InputPosition",
                    "resolved": "\"after\" | \"before\"",
                    "references": {
                        "InputPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-input-range/atui-input-range.tsx",
                            "id": "src/components/atui-input-range/atui-input-range.tsx::InputPosition"
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
//# sourceMappingURL=atui-input-range.js.map
