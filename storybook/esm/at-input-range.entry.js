import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

const atInputRangeCss = () => `.range-slider{--primary-color:var(--token-state-active-foreground);--value-offset-y:var(--ticks-gap);--value-active-color:var(--token-color-white);--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:700 var(--token-font-size-xs) var(--token-font-family-base);--fill-color:var(--primary-color);--progress-background:#eee;--progress-radius:20px;--progress-shadow:2px 2px 4px rgba(0, 0, 0, 0.1) inset;--track-height:calc(var(--thumb-size) / 2);--min-max-font:var(--token-font-size-xs) var(--token-font-family-base);--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:20px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),       0 0 1px rgba(0, 0, 0, 0.5) inset, 0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset           var(--thumb-color),       0 0 0 99px var(--primary-color) inset, 0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:var(--thumb-shadow);--ticks-thickness:1px;--ticks-height:4px;--ticks-gap:8px;--ticks-color:var(--token-text-disabled);--step:1;--ticks-count:Calc(var(--max) - var(--min)) / var(--step);--maxTicksAllowed:30;--too-many-ticks:Min(       1,       Max(var(--ticks-count) - var(--maxTicksAllowed), 0)   );--x-step:Max(       var(--step),       var(--too-many-ticks) * (var(--max) - var(--min))   );--tickInterval:100/ ((var(--max) - var(--min)) / var(--step)) *       var(--tickEvery, 1);--tickIntervalPerc:calc(       (100% - var(--thumb-size)) /           ((var(--max) - var(--min)) / var(--x-step)) * var(--tickEvery, 1)   );--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, '');--completed-a:calc(       (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100   );--completed-b:calc(       (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100   );--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));width:100%;display:inline-block;height:22px;background:linear-gradient(to right, var(--ticks-color) var(--ticks-thickness), transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size) / 2 - var(--ticks-thickness) / 2);background-position-y:var(--flip-y, bottom);padding-bottom:var(--flip-y, var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.range-slider::before,.range-slider::after{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max, block);font:var(--min-max-font);position:absolute;top:25px;transform:translateX(calc(var(--min-max-x-offset) * var(--before, -1) * -1));pointer-events:none;color:var(--ticks-color)}.range-slider::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.range-slider::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.range-slider__progress{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y, 0) + var(--thumb-size) / 2 - var(--track-height) / 2);height:calc(var(--track-height));background:var(--progress-background, #eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.range-slider__progress::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color, black);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.range-slider__progress::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.range-slider>input{-webkit-appearance:none;width:100%;height:var(--track-height);margin:0;position:absolute;left:0;top:5px;cursor:-webkit-grab;cursor:grab;outline:none;background:none}.range-slider>input:not(:only-of-type){pointer-events:none}.range-slider>input::-webkit-slider-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-moz-range-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-ms-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input:focus::-webkit-slider-thumb{outline:2px solid var(--primary-color);-webkit-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);-moz-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3)}.range-slider>input:focus::-moz-range-thumb{outline:2px solid var(--primary-color)}.range-slider>input:focus::-ms-thumb{outline:2px solid var(--primary-color)}.range-slider>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-5px;opacity:1;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.range-slider>input:active{cursor:grabbing;z-index:2}.range-slider>input:active+output{opacity:1;transition:0s}.range-slider>input:active ::-webkit-slider-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-moz-range-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-ms-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:nth-of-type(1){--is-left-most:Clamp(       0,       (var(--value-a) - var(--value-b)) * 99999,       1   )}.range-slider>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.range-slider>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.range-slider>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}.range-slider>input:nth-of-type(2){--is-left-most:Clamp(       0,       (var(--value-b) - var(--value-a)) * 99999,       1   )}.range-slider>input:nth-of-type(2)+output{--value:var(--value-b)}.range-slider>input:only-of-type~.range-slider__progress{--clip-start:0}.range-slider>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(       ((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%   );opacity:0;pointer-events:none;position:absolute;z-index:5;background:var(--value-background);border-radius:10px;padding:2px 4px;left:var(--pos);transform:translate(var(--x-offset), calc(150% * var(--flip) - (var(--y-offset, 0px) + var(--value-offset-y)) * var(--flip)));transition:all 0.12s ease-out, left 0s}.range-slider>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`;

const AtInputRangeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
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
    get el() { return getElement(this); }
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
};
AtInputRangeComponent.style = atInputRangeCss();

export { AtInputRangeComponent as at_input_range };
