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
        return (h(Host, { key: '13690590ea56be5c87f00df6a6a00cd2dbee835a' }, h("div", { key: '55d594d299ceeac1850a1bee6a09dd35a7bc1641', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'ab557558c906c2db62fa2ca7deff1b9f47e33ac4', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '5597e56c243438887b121284d657e2b863947c4a', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'eab2ab7ce0da2e06f6589d6876710a2506a113bd', class: "text-muted inline-block text-xs leading-tight", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: 'c73b2f18c00c036429c0154fe08c78dd539fce37', class: "text-error text-xs font-normal", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: 'eaff55cdc344632741b74afed159c93024ecdf49', class: "text-warning-foreground text-xs font-normal", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: 'b3eba799c24a7148097dd6fc884dfae640156d9a', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: '1295a474e15a2eb2f0b17561eb37a1d906230e63', class: "flex flex-grow flex-col" }, h("div", { key: '42383295e37f1db804997f27eec3455f1095b157', class: "flex flex-grow" }, h("div", { key: 'f00da214f16e2b4cfa7c7352056ace6e07621bb5', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: '0c506dc4021976da9624b89c97b11f3f9f735c84', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '46ef22c4c64a4273b97421a26bd48b6fbd1a663e', class: "text-sm" }, this.value)), h("div", { key: '8b1b582c170a9edd83ef83abe3ff69565a8e0109', class: "range-slider__progress" })))), this.show_input && (h("div", { key: '329c66c4c0b4046bd0ca71885de558396369c878', class: "relative flex w-80 flex-row items-center gap-8" }, h("at-input-numeric", { key: '52a19c1f07ef8ccad83d992f43b9e616083a1885', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: '355bdda1da86cc110d66227367c6c96d6d5243fc', "data-name": "slider-suffix", class: "text-muted absolute top-1/2 right-[36px] -translate-y-1/2" }, this.suffix)))))));
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
