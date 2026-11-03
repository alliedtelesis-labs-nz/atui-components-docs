'use strict';

var index = require('./index-DUZVJiVD.js');
var decimalPlaces_util = require('./decimal-places.util-C7a0coy_.js');
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
     * Maximum number of decimal places. Applied when the user changes the value (typing or stepper buttons); programmatic values are displayed as-is. Defaults to `0` (whole numbers only). A fractional `step` raises it to the step's own decimal places, so `step="0.5"` always allows one.
     */
    decimal_places = 0;
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
    get allowedCharacters() {
        const sign = this.min < 0 ? '-' : '';
        const point = this.decimalPlaces > 0 ? '.' : '';
        return new RegExp(`^[0-9${sign}${point}]$`);
    }
    handleKeyDown = (event) => {
        const isTextCharacter = event.key.length === 1;
        const isShortcut = event.ctrlKey || event.metaKey || event.altKey;
        if (isTextCharacter &&
            !isShortcut &&
            !this.allowedCharacters.test(event.key)) {
            event.preventDefault();
        }
    };
    handlePaste = (event) => {
        const pasted = event.clipboardData?.getData('text') ?? '';
        const isNumeric = [...pasted.trim()].every((character) => this.allowedCharacters.test(character));
        if (!isNumeric) {
            event.preventDefault();
        }
    };
    clampToRange(value) {
        return decimalPlaces_util.roundToDecimalPlaces(Math.min(Math.max(value, this.min), this.max), this.decimalPlaces);
    }
    get decimalPlaces() {
        return decimalPlaces_util.effectiveDecimalPlaces(this.decimal_places, this.step);
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
        return (index.h(index.Host, { key: 'a5baa4b46ce01dff006cee4026d4bc8e5605cab5', class: "w-full" }, index.h("div", { key: 'db7c8975b13addb2f5348a16b4161f8db7ad6c19', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '72394b95a7d914099eaa68a093c67aa079420135', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '2af1a73d98243ef446ead22e09cee349637e8baf', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'dbf9b3660eb1bb7fa1c89d26b83538b3f7afe89b', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '750abf41a2d6ec463f14ca7a3170348340aadd99', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '8d30c7faed36cbf1d7d6f0767c4574c448945ff9', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, index.h("at-icon", { key: '61e1f52acf0591ff6063b4e167298c56ceb7ceea', slot: "icon", name: "subtract" }))), index.h("input", { key: '2887b22808bb84be0ee37d1df6cd7eb4bf2ea158', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onKeyDown: this.handleKeyDown, onPaste: this.handlePaste, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value === null ||
                this.value === undefined ||
                !isFinite(Number(this.value))
                ? ''
                : this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '33f0c8dce40800d6357c75faf961574d1b3a417d', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, index.h("at-icon", { key: '0ab48cf79a51869396990d53684919d1c4189937', slot: "icon", name: "add" })))), this.error_text && this.invalid && (index.h("span", { key: 'b8b4f795d9765665719cb143494951d720290d1a', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

exports.at_input_numeric = AtInputNumericComponent;
