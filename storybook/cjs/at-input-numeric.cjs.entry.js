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
     * Maximum number of decimal places. Applied when the user changes the value (typing or stepper buttons); programmatic values are displayed as-is. Defaults to `0` (whole numbers only).
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
        const point = this.decimal_places > 0 ? '.' : '';
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
        return this.roundToDecimalPlaces(Math.min(Math.max(value, this.min), this.max));
    }
    roundToDecimalPlaces(value) {
        return Number(value.toFixed(Math.max(0, this.decimal_places ?? 0)));
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
        return (index.h(index.Host, { key: '14b929d4740436d43e9d07b4d8eb9270a30e79ae', class: "w-full" }, index.h("div", { key: 'a912998fd0ec4fb843ab5758b2307a697581bc78', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '9e4ad289b88184869b6df4d074101aeb80e7f877', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '65f26f28860318c5506cee41e7bac971a211b6ab', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '2dd90010ed7c27618312c63ded5c4f44c1c5fb01', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '6a1f40cf41542f0b5e9d3e474458b28973ba66d8', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '9460ec96e7276e98f112f5468119b1027cc7ff84', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, index.h("at-icon", { key: '2656154b5d3cac0aae22db8f9bf77be67ca2640b', slot: "icon", name: "subtract" }))), index.h("input", { key: '985d0faaee29efc24948dbd156a5bb62b49963ba', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onKeyDown: this.handleKeyDown, onPaste: this.handlePaste, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value === null ||
                this.value === undefined ||
                !isFinite(Number(this.value))
                ? ''
                : this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (index.h("at-button", { key: '7beb865c40ff70d5f470c97ff0a363ce54ee4438', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, index.h("at-icon", { key: '7dbe8148b4fc35a66db61d0276f8c0ff6560d0f0', slot: "icon", name: "add" })))), this.error_text && this.invalid && (index.h("span", { key: 'e85cc6e034d22e73f4067307efa81fb936633126', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

exports.at_input_numeric = AtInputNumericComponent;
