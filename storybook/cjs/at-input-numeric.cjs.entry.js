'use strict';

var index = require('./index-DUZVJiVD.js');
var classlist = require('./classlist-BPb95vgj.js');

const atInputNumericCss = () => `input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}`;

const containerVariantsConfig = {
    variants: {
        showButtons: {
            true: 'border border-solid',
            false: '',
        },
        invalid: {
            true: '',
            false: '',
        },
    },
    compoundVariants: [
        { showButtons: true, invalid: false, class: 'border-input' },
        { showButtons: true, invalid: true, class: 'border-error' },
    ],
    defaultVariants: {
        showButtons: true,
        invalid: false,
    },
};
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'bg-input-background',
            true: '!bg-[var(--token-input-readonly-background)] text-foreground border-none',
        },
        invalid: {
            false: 'border-input focus:border-active-accent focus:ring-active-glow focus:ring',
            true: 'border-error focus:ring-error-glow focus:ring',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-foreground',
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
            class: 'bg-surface-1 text-foreground',
        },
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-input text-foreground focus:border-active-accent focus:ring-active-glow bg-input-background focus:ring',
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
     * Min selectable value of the input. Applied when the user changes the value (typing or stepper buttons); programmatic values are displayed as-is.
     */
    min = 0;
    /**
     * Max selectable value of the input. Applied when the user changes the value (typing or stepper buttons); programmatic values are displayed as-is.
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
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    inputEl;
    get el() { return index.getElement(this); }
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        const input = event.target;
        const parsed = Number(input.value);
        this.value = this.clampToRange(isNaN(parsed) ? this.min : parsed);
        input.value = String(this.value);
        this.atuiChange.emit(this.value);
    }
    handleInput(event) {
        const raw = event.target.value;
        const parsed = Number(raw);
        if (String(parsed) === raw) {
            this.value = parsed;
        }
    }
    clampToRange(value) {
        return Math.min(Math.max(value, this.min), this.max);
    }
    handleDecrease = () => {
        if (this.value > this.min) {
            this.value = this.clampToRange(this.value - this.step);
            this.atuiChange.emit(this.value);
        }
    };
    handleIncrease = () => {
        if (this.value < this.max) {
            this.value = this.clampToRange(this.value + this.step);
            this.atuiChange.emit(this.value);
        }
    };
    handleStepKeyDown = (event, step) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            step();
        }
    };
    render() {
        const getContainerClassname = classlist.classlist(`h-input min-h-input relative flex rounded-input`, containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons && !this.readonly && !this.disabled,
            invalid: !!this.invalid,
        });
        const getClassname = classlist.classlist(`transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out w-full rounded-input py-input-y px-input-x text-right outline-0 focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (index.h(index.Host, { key: '0cdf37ae0b122335c499ac626a5f506bf33893c6', class: "w-full" }, index.h("div", { key: '9194d9233c4fe03ff7b1be1bf00e2e4a3570c536', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '13108f310267f6f0516be1cb4f778ec97a744ec9', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '3a91b146703070f04830875ddb9ba4fde2027bc7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '30b4ed6c7759907db884960114603218b705159d', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '764b9f456446adf3302200198191664a7e0c9131', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '4498b952cf369278f968a12186f509475acdac3c', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, index.h("at-icon", { key: 'cc648612f9f336c1642076e5f6f3cc758fd8512c', slot: "icon", name: "subtract" }))), index.h("input", { key: '64df807cbf30c159f74a2c11ac1fe136d82a433a', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '9ba57c026215c293f0d982828432212941ac6693', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, index.h("at-icon", { key: 'f6a3270d7108b9f72cb587e2e9d81cfa14470a01', slot: "icon", name: "add" })))), this.error_text && this.invalid && (index.h("span", { key: '9f9ef682eb447aab7d0860ca928ec773e612f5e2', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

exports.at_input_numeric = AtInputNumericComponent;
