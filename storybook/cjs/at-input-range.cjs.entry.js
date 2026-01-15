'use strict';

var index = require('./index-ChzPazsa.js');

const atInputRangeCss = () => `.range-slider{--primary-color:var(--token-state-active-foreground);--value-offset-y:var(--ticks-gap);--value-active-color:var(--token-color-white);--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:700 var(--token-font-size-xs) var(--token-font-family-base);--fill-color:var(--primary-color);--progress-background:#eee;--progress-radius:20px;--progress-shadow:2px 2px 4px rgba(0, 0, 0, 0.1) inset;--track-height:calc(var(--thumb-size) / 2);--min-max-font:var(--token-font-size-xs) var(--token-font-family-base);--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:20px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),       0 0 1px rgba(0, 0, 0, 0.5) inset, 0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset           var(--thumb-color),       0 0 0 99px var(--primary-color) inset, 0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:var(--thumb-shadow);--ticks-thickness:1px;--ticks-height:4px;--ticks-gap:8px;--ticks-color:var(--token-text-disabled);--step:1;--ticks-count:Calc(var(--max) - var(--min)) / var(--step);--maxTicksAllowed:30;--too-many-ticks:Min(       1,       Max(var(--ticks-count) - var(--maxTicksAllowed), 0)   );--x-step:Max(       var(--step),       var(--too-many-ticks) * (var(--max) - var(--min))   );--tickInterval:100/ ((var(--max) - var(--min)) / var(--step)) *       var(--tickEvery, 1);--tickIntervalPerc:calc(       (100% - var(--thumb-size)) /           ((var(--max) - var(--min)) / var(--x-step)) * var(--tickEvery, 1)   );--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, '');--completed-a:calc(       (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100   );--completed-b:calc(       (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100   );--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));width:100%;display:inline-block;height:22px;background:linear-gradient(to right, var(--ticks-color) var(--ticks-thickness), transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size) / 2 - var(--ticks-thickness) / 2);background-position-y:var(--flip-y, bottom);padding-bottom:var(--flip-y, var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.range-slider::before,.range-slider::after{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max, block);font:var(--min-max-font);position:absolute;top:25px;transform:translateX(calc(var(--min-max-x-offset) * var(--before, -1) * -1));pointer-events:none;color:var(--ticks-color)}.range-slider::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.range-slider::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.range-slider__progress{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y, 0) + var(--thumb-size) / 2 - var(--track-height) / 2);height:calc(var(--track-height));background:var(--progress-background, #eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.range-slider__progress::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color, black);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.range-slider__progress::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.range-slider>input{-webkit-appearance:none;width:100%;height:var(--track-height);margin:0;position:absolute;left:0;top:5px;cursor:-webkit-grab;cursor:grab;outline:none;background:none}.range-slider>input:not(:only-of-type){pointer-events:none}.range-slider>input::-webkit-slider-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-moz-range-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input::-ms-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);border:1px solid var(--token-border-med);border:none;pointer-events:auto;transition:0.2s}.range-slider>input:focus::-webkit-slider-thumb{outline:2px solid var(--primary-color);-webkit-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);-moz-box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3);box-shadow:0px 0px 0px 5px rgba(var(--primary-color), 0.3)}.range-slider>input:focus::-moz-range-thumb{outline:2px solid var(--primary-color)}.range-slider>input:focus::-ms-thumb{outline:2px solid var(--primary-color)}.range-slider>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-5px;opacity:1;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.range-slider>input:active{cursor:grabbing;z-index:2}.range-slider>input:active+output{opacity:1;transition:0s}.range-slider>input:active ::-webkit-slider-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-moz-range-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:active ::-ms-thumb{border:1px solid var(--primay-color);box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3);-moz-box-shadow:0px 0px 0px 4px rgba(var(--primay-color), 0.3)}.range-slider>input:nth-of-type(1){--is-left-most:Clamp(       0,       (var(--value-a) - var(--value-b)) * 99999,       1   )}.range-slider>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.range-slider>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.range-slider>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}.range-slider>input:nth-of-type(2){--is-left-most:Clamp(       0,       (var(--value-b) - var(--value-a)) * 99999,       1   )}.range-slider>input:nth-of-type(2)+output{--value:var(--value-b)}.range-slider>input:only-of-type~.range-slider__progress{--clip-start:0}.range-slider>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(       ((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%   );opacity:0;pointer-events:none;position:absolute;z-index:5;background:var(--value-background);border-radius:10px;padding:2px 4px;left:var(--pos);transform:translate(var(--x-offset), calc(150% * var(--flip) - (var(--y-offset, 0px) + var(--value-offset-y)) * var(--flip)));transition:all 0.12s ease-out, left 0s}.range-slider>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`;

const AtInputRangeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
    get el() { return index.getElement(this); }
    sliderContainerRef;
    sliderId = `slider-${Math.random().toString(36).substring(2, 11)}`;
    onChange(inputVal) {
        const newValue = Math.max(this.min, Math.min(this.max, inputVal)); // Clamp value
        this.value = newValue;
        this.atuiChange.emit(this.value);
    }
    render() {
        return (index.h(index.Host, { key: '1d225eccca288ce5aecc1df09d2f342b92788d2f' }, index.h("div", { key: '939f93bf32bd3a68fd0beacbfa17e9fe6dfebf4d', class: "flex flex-col" }, index.h("slot", { key: '29322d5fc72eb877c78e4d252cdf9fc01820a12b', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '68eb146bc67fd6632edcc9196d0a3838ad4848b4', label: this.label, for: this.sliderId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '20745ce32e0e5355a3e48176acc59e49dc8e230f', class: "text-light inline-block text-xs leading-tight", "data-name": "slider-hint" }, this.hint_text)), this.error_text && this.invalid && (index.h("span", { key: '67c5fed0d4af2705759caadc46d12d6211f351e6', class: "text-error text-xs font-normal", "data-name": "slider-error" }, this.error_text)), this.warning_text && !this.invalid && (index.h("span", { key: '0dc9a6fe26727f8fca38c2c817dd8386e23b5ef7', class: "text-warning-foreground text-xs font-normal", "data-name": "slider-warning" }, this.warning_text))), index.h("div", { key: '30452bda6b94be76688edef23ebdffef25da9263', class: `mt-4 flex items-start gap-8 ${this.label_position == 'before' ? 'flex-row-reverse' : 'flex-row'}` }, index.h("div", { key: '45c73c4b193174db431d0296f3dc87759919d7e4', class: "flex flex-grow flex-col" }, index.h("div", { key: '7ee5d3caf29081942dc7485d0dd1cfa41cb1dfc7', class: "flex flex-grow" }, index.h("div", { key: '51d2ab07e37e82bac55a0a41364b0ccf4bd69f16', class: "range-slider", style: {
                '--min': `${this.min}`,
                '--max': `${this.max}`,
                '--step': `${this.step}`,
                '--value': `${this.value}`,
                '--text-value': `${this.value}`,
                '--show-min-max': `${this.show_minmax ? 'block' : 'none'}`,
            }, ref: (el) => (this.sliderContainerRef = el) }, index.h("input", { key: 'e0f4844294bfaf10dcdcc605a1f72db479cccc7d', list: "markers", type: "range", min: this.min, max: this.max, step: this.step, "aria-controls": this.sliderId, disabled: this.disabled || this.readonly
                ? true
                : undefined, id: this.sliderId, value: this.value, class: "custom-slider", "data-name": "slider-range-input", onInput: (event) => {
                const newValue = parseInt(event.target
                    .value);
                this.value = newValue;
                this.onChange(newValue);
                this.sliderContainerRef.style.setProperty('--value', String(this.value));
                this.sliderContainerRef.style.setProperty('--text-value', JSON.stringify(this.value));
            } }), this.show_value && (index.h("output", { key: '4827f116d64f43aa3c407bfbeb9c1e8f09e70864', class: "text-sm" }, this.value)), index.h("div", { key: '2ab585e8b88d41401f00b58184a4345b4b693076', class: "range-slider__progress" })))), this.show_input && (index.h("div", { key: '24f13a4aaa65c5ba97968281c00209d19e1d28d6', class: "relative flex w-80 flex-row items-center gap-8" }, index.h("at-input-numeric", { key: 'dbde64dcd6ebc8601949ab0ef65481a2333e4586', readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, show_buttons: false, "data-name": "slider-text-input", onAtuiChange: (event) => this.onChange(event.detail) }), this.suffix && (index.h("span", { key: '9c34bb6ac22b3d574067be8497e3bae283a4dd86', "data-name": "slider-suffix", class: "text-light absolute top-1/2 right-[36px] -translate-y-1/2" }, this.suffix)))))));
    }
};
AtInputRangeComponent.style = atInputRangeCss();

exports.at_input_range = AtInputRangeComponent;
