'use strict';

var index = require('./index-BRms7T38.js');
var classlist = require('./classlist-BPb95vgj.js');

const atInputNumericCss = () => `input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}`;

const containerVariantsConfig = {
    variants: {
        showButtons: {
            true: 'border-med border border-solid',
            false: '',
        },
    },
};
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'bg-white',
            true: 'bg-surface-1 text-dark border-none',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-active-foreground/40 focus:ring-2',
            true: 'border-error-base focus:ring-destructive-foreground/30 focus:ring-2',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-dark',
        },
        showButtons: {
            true: '',
            false: 'border border-solid',
        },
    },
    compoundVariants: [
        {
            readonly: true,
            disabled: true,
            class: 'bg-surface-1 text-dark',
        },
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-med text-dark focus:border-active-foreground focus:ring-active-foreground/40 bg-white focus:ring-2',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
};
const AtInputNumericComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label above the input container
     */
    label;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set
     */
    error_text;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder = '';
    /**
     * Adds a required * to the element
     */
    required;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Makes the input read only
     */
    readonly;
    /**
     * Disables interaction with the input
     */
    disabled = false;
    /**
     * Min selectable value of the input.
     */
    min = 0;
    /**
     * Max selectable value of the input.
     */
    max = 100;
    /**
     * Interval between selections.
     */
    step = 1;
    /**
     * Show buttons inside input or outside
     */
    show_buttons = true;
    /**
     * The value of the input
     */
    value = 0;
    inputEl;
    get el() { return index.getElement(this); }
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        this.value = Number(event.target.value);
        this.atuiChange.emit(this.value);
    }
    handleDecrease = () => {
        if (this.value > this.min) {
            this.value = Math.max(this.value - this.step, this.min);
            this.atuiChange.emit(this.value);
        }
    };
    handleIncrease = () => {
        if (this.value < this.max) {
            this.value = Math.min(this.value + this.step, this.max);
            this.atuiChange.emit(this.value);
        }
    };
    render() {
        const getContainerClassname = classlist.classlist('height-[36px] relative flex rounded-md', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons,
        });
        const getClassname = classlist.classlist('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (index.h(index.Host, { key: '2dfc66a85138da77d109e132d1b38ce2cf4dcdcf', class: "w-full" }, index.h("div", { key: 'f0f7ec2e1c38660863b165b0fc6b686f1ed2d6a1', class: "flex flex-col" }, index.h("slot", { key: '4ec703c6ce01f9aa83a25844d751439181e65649', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '0fe38176b90208af163c06da109ff75a49d40d58', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'd1f10536fcb61e54f9eba83993cc73f5cdfdd080', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '3b3d6ed4d73591f74a7af82390e53141bf32f44c', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: 'd5860ca2f697b38aa7501c85ad99e7444761143a', class: "border-med rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, index.h("at-icon", { key: '558a641e0d7279362c0bfac164a4263ae83d289a', slot: "icon", name: "subtract" }))), index.h("input", { key: '7e88bbf7c9f1e033f9d1d0b4a456e6cec8037309', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '62e277e22f8644d0b37d6ea0f213e9db956fd76b', class: "border-med rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, index.h("at-icon", { key: '104d1d0ce49c238bf58e0ea0b78103e6699b29ff', slot: "icon", name: "add" })))), this.error_text && this.invalid && (index.h("span", { key: '0870e37b85cb3f897233fc75b91e5acbdf6a50f0', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

exports.at_input_numeric = AtInputNumericComponent;
