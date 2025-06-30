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
        return (h(Host, { key: 'b1a5b332ce016bef072e29e0ed6e20c029c99154' }, h("div", { key: '4cf67367291150d29a583b39a3f7a03f8e12e03c', class: "flex flex-col" }, h("slot", { key: '0a8c81d4ff1623235f60a480c3a6e5ed46647555', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'c4af67af5f888a1832490909211ff70d6845a6b3', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '5bb244561844fa6f0318746b698604078d9ee575', class: "inline-block text-xs leading-tight text-light", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: '6a5659202dfde24c44bb3cb72412ece67da3c567', class: "text-xs font-normal text-error", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: '1ad0b55b29b5f01bf3d4ad7166dfab681324d362', class: "text-xs font-normal text-warning-foreground", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: '941264a0bd7410d3dce5d53738d77161d3ae1be2', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: 'e87d898ba96b7b241b7647fd01d2f4211aed1eb5', class: "flex flex-grow flex-col" }, h("div", { key: 'adfadfbe1f7b7962971f81169c5849b05ee50f4c', class: "flex flex-grow" }, h("div", { key: '6fdfe86cb77846f734ed4efad4773816512845db', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: 'ecb1d84a46c586e4f8a2bffc2e01d594d79c230f', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '10bcec68155bbc60fd19e6fae99aecedf6e01262', class: "text-sm" }, this.value)), h("div", { key: 'ca264c60b80b9a78f4c219fe8141c8f43dd590f0', class: "range-slider__progress" })))), this.show_input && (h("div", { key: '193470aecbb6b1b59b9851e4123f81d3d5548b32', class: "relative flex w-80 flex-row items-center gap-8" }, h("atui-input-numeric", { key: '2d0502f7980ed52fbe90f660f309cd7a401f08f4', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: '90fe0f3d7d6260f2dfac3855b79cd79f8368c224', "data-name": "slider-suffix", class: "absolute right-[36px] top-1/2 -translate-y-1/2 text-light" }, this.suffix)))))));
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
