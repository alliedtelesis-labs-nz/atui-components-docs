import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DdGm_rA6.js';
import { r as roundToDecimalPlaces, e as effectiveDecimalPlaces } from './decimal-places.util-BlwX_BBS.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
    get el() { return getElement(this); }
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
        return roundToDecimalPlaces(Math.min(Math.max(value, this.min), this.max), this.decimalPlaces);
    }
    get decimalPlaces() {
        return effectiveDecimalPlaces(this.decimal_places, this.step);
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
        const getContainerClassname = classlist(`h-input min-h-input relative flex rounded-input`, containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons && !this.readonly && !this.disabled,
            invalid: !!this.invalid,
        });
        const getClassname = classlist(`transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out w-full rounded-input py-input-y px-input-x text-right outline-0 focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '1f9740b0ca1f3bdb8c97c0ef8308e62af117957e', class: "w-full" }, h("div", { key: '2d3666756e4ac57efd0314ee518122f5de960975', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '2532575ac721a9c738453b0e569d26058b917e64', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '1a6265020726731da88b257142d30f7a417f13e6', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'df6d6d1d4f28d9172c90ff4f8c9fcdaef384e3b0', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '21b298698d85360f1ba094574122e0bbac335f6e', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: 'ebbb680155220c4db8d124b316cadbe4124d5817', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: 'd29f79ca9fa2d62c2ec879406a5bd11d91622ddd', slot: "icon", name: "subtract" }))), h("input", { key: '64b99d46f192a469f55f86d31a38b2f47941c262', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onKeyDown: this.handleKeyDown, onPaste: this.handlePaste, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value === null ||
                this.value === undefined ||
                !isFinite(Number(this.value))
                ? ''
                : this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '279f315a260f0a2f1eb3ca174cb6b465aecc5fc2', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: '88efd164ead261ff2521a4d7f42a06cefa91443c', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: '1dd6dfb952e809a03f35875aefec669651fef21e', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

export { AtInputNumericComponent as at_input_numeric };
