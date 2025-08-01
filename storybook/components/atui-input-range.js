import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$6 } from './p-B1aOcDAw.js';
import { d as defineCustomElement$5 } from './p-DdMgDskk.js';
import { d as defineCustomElement$4 } from './p-ClQ58M2S.js';
import { d as defineCustomElement$3 } from './p-CJ9qvvtn.js';
import { d as defineCustomElement$2 } from './p-b7uiw7OS.js';

const atuiInputRangeCss = ".range-slider{--primary-color:var(--token-state-active-foreground);--value-offset-y:var(--ticks-gap);--value-active-color:var(--token-color-white);--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:700 var(--token-font-size-xs) var(--token-font-family-base);--fill-color:var(--primary-color);--progress-background:#eee;--progress-radius:20px;--progress-shadow:2px 2px 4px rgba(0, 0, 0, 0.1) inset;--track-height:calc(var(--thumb-size) / 2);--min-max-font:var(--token-font-size-xs) var(--token-font-family-base);--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:20px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),\n      0 0 1px rgba(0, 0, 0, 0.5) inset, 0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset\n          var(--thumb-color),\n      0 0 0 99px var(--primary-color) inset, 0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:var(--thumb-shadow);--ticks-thickness:1px;--ticks-height:4px;--ticks-gap:8px;--ticks-color:var(--token-text-disabled);--step:1;--ticks-count:Calc(var(--max) - var(--min)) / var(--step);--maxTicksAllowed:30;--too-many-ticks:Min(\n      1,\n      Max(var(--ticks-count) - var(--maxTicksAllowed), 0)\n  );--x-step:Max(\n      var(--step),\n      var(--too-many-ticks) * (var(--max) - var(--min))\n  );--tickInterval:100/ ((var(--max) - var(--min)) / var(--step)) *\n      var(--tickEvery, 1);--tickIntervalPerc:calc(\n      (100% - var(--thumb-size)) /\n          ((var(--max) - var(--min)) / var(--x-step)) * var(--tickEvery, 1)\n  );--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, \"\");--completed-a:calc(\n      (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100\n  );--completed-b:calc(\n      (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100\n  );--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));width:100%;display:inline-block;height:22px;background:linear-gradient(to right, var(--ticks-color) var(--ticks-thickness), transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size) / 2 - var(--ticks-thickness) / 2);background-position-y:var(--flip-y, bottom);padding-bottom:var(--flip-y, var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.range-slider::before,.range-slider::after{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max, block);font:var(--min-max-font);position:absolute;top:25px;transform:translateX(calc(var(--min-max-x-offset) * var(--before, -1) * -1));pointer-events:none;color:var(--ticks-color)}.range-slider::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.range-slider::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.range-slider__progress{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y, 0) + var(--thumb-size) / 2 - var(--track-height) / 2);height:calc(var(--track-height));background:var(--progress-background, #eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.range-slider__progress::before{content:\"\";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color, black);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.range-slider__progress::after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.range-slider>input{-webkit-appearance:none;width:100%;height:var(--track-height);margin:0;position:absolute;left:0;top:5px;cursor:-webkit-grab;cursor:grab;outline:none;background:none}.range-slider>input:not(:only-of-type){pointer-events:none}.range-slider>input::-webkit-slider-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-moz-range-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-ms-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input:focus::-webkit-slider-thumb{outline:2px solid var(--primary-color);-webkit-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);-moz-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3)}.range-slider>input:focus::-moz-range-thumb{outline:2px solid var(--primary-color)}.range-slider>input:focus::-ms-thumb{outline:2px solid var(--primary-color)}.range-slider>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-5px;opacity:1;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.range-slider>input:active{cursor:grabbing;z-index:2}.range-slider>input:active+output{opacity:1;transition:0s}.range-slider>input:active ::-webkit-slider-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-moz-range-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-ms-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:nth-of-type(1){--is-left-most:Clamp(\n      0,\n      (var(--value-a) - var(--value-b)) * 99999,\n      1\n  )}.range-slider>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.range-slider>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.range-slider>input:nth-of-type(1)+output::after{content:var(--prefix, \"\") var(--text-value-a) var(--suffix, \"\")}.range-slider>input:nth-of-type(2){--is-left-most:Clamp(\n      0,\n      (var(--value-b) - var(--value-a)) * 99999,\n      1\n  )}.range-slider>input:nth-of-type(2)+output{--value:var(--value-b)}.range-slider>input:only-of-type~.range-slider__progress{--clip-start:0}.range-slider>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(\n      ((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%\n  );opacity:0;pointer-events:none;position:absolute;z-index:5;background:var(--value-background);border-radius:10px;padding:2px 4px;left:var(--pos);transform:translate(var(--x-offset), calc(150% * var(--flip) - (var(--y-offset, 0px) + var(--value-offset-y)) * var(--flip)));transition:all 0.12s ease-out, left 0s}.range-slider>input+output::after{content:var(--prefix, \"\") var(--text-value-b) var(--suffix, \"\");font:var(--value-font)}";

const AtuiInputRangeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiInputRangeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h(Host, { key: '1e18d0d20ed73cdae2cfb10e808327f727b0a941' }, h("div", { key: '25288d9bb7b899da451e16767deae88e19e907ce', class: "flex flex-col" }, h("slot", { key: '119e57f711bdd3a726fb9a5697ed04efd35dd4fa', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'bbd6d20e78b6a9530616bbc91437e45988a6c677', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '4c6dd237f2a8921a748e22951e06a71af9d7996a', class: "inline-block text-xs leading-tight text-light", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (h("span", { key: 'd6d9300e7ccb9e88e9fd30646ab5e032433cf445', class: "text-xs font-normal text-error", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (h("span", { key: '8ae7257a3e07df6c0cc703f56fb042ad5863f0c0', class: "text-xs font-normal text-warning-foreground", "data-name": "slider-warning" }, this.warning_text))), h("div", { key: '52c4a98b404c26281968f67db8b5bf62d832dbd0', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, h("div", { key: '3aa10bc3895777dd71ce330d8a802482c4c19c4d', class: "flex flex-grow flex-col" }, h("div", { key: '1dec5112572190f918b280729296ce4a197c055e', class: "flex flex-grow" }, h("div", { key: 'a66a847f0edc6f85578c8e3e8a035836f22ffe24', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, h("input", { key: '6db79b131c036c478856d463462c069a8e38c5ca', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (h("output", { key: '4683d11a1014efb76ccda00eea952842f56b7919', class: "text-sm" }, this.value)), h("div", { key: '292bbc88d42d3d8334312ca360a3d72ebf440362', class: "range-slider__progress" })))), this.show_input && (h("div", { key: 'e3514f37723741a3a559bc6af9725fe49e7a10a2', class: "relative flex w-80 flex-row items-center gap-8" }, h("atui-input-numeric", { key: 'bde7860581db3caf52af1651ad04a0f84b00d2a9', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (h("span", { key: 'f8e715ea5b270f95cfb12fc31a8582e386a68207', "data-name": "slider-suffix", class: "absolute right-[36px] top-1/2 -translate-y-1/2 text-light" }, this.suffix)))))));
    }
    get el() { return this; }
    static get style() { return atuiInputRangeCss; }
}, [260, "atui-input-range", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "suffix": [1],
        "warning_text": [1],
        "error_text": [1],
        "invalid": [4],
        "readonly": [4],
        "disabled": [4],
        "required": [4],
        "value": [7170],
        "min": [2],
        "max": [2],
        "step": [2],
        "show_minmax": [4],
        "show_ticks": [4],
        "show_value": [4],
        "show_input": [4],
        "label_position": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-input-range", "atui-button", "atui-form-label", "atui-input-numeric", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-input-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiInputRangeComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-input-numeric":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiInputRange = AtuiInputRangeComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiInputRange, defineCustomElement };
//# sourceMappingURL=atui-input-range.js.map

//# sourceMappingURL=atui-input-range.js.map