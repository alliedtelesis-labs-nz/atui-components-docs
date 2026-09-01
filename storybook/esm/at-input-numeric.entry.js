import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-m_dTEvgo.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const atInputNumericCss = () => `input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}`;

const containerVariantsConfig = {
    variants: {
        showButtons: {
            true: 'border-input border border-solid',
            false: '',
        },
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
            true: 'bg-surface-1 text-foreground border-none',
        },
        invalid: {
            false: 'border-input focus:border-active-accent focus:ring-active-glow focus:ring',
            true: 'border-error-base focus:ring-error-glow focus:ring',
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
        const getContainerClassname = classlist(`h-input min-h-input relative flex rounded-input`, containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons,
        });
        const getClassname = classlist(`transition[background-color,color,box-shadow] w-full rounded-input py-input-y px-input-x text-right outline-0 duration-300 ease-in-out focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '5a99883b44d7867d8ac81de83351d5bb0d0ba675', class: "w-full" }, h("div", { key: '1eaf53f56d701a8fee64dd2b19bd7f43176903fe', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'ad3fd8f19ea8091afb756ae91fdc119495b7a96d', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'f4455e5332e57fcbe7445ef9839239f1bf7c19c4', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'bde6049dddcaab174d834c99deb8ee3c6a264371', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '13e46d1f1d72f96bc3d311cdf8bf7f53064606da', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '717b627dc1e718b7ac21511af8c3916dbe9c2996', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: '556b90bd7d4c42e9d47c664a44becaf1499628f7', slot: "icon", name: "subtract" }))), h("input", { key: '17207c98646819e576025942e70a6294bc84b5fc', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '99e8af67a730d47e5bc189be9437f9b166070185', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: 'c5586b8abef2168cb893f2ffdb189393aef954ac', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: '1f7e803831a09d40327b16b06a7b0a839a157da7', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

export { AtInputNumericComponent as at_input_numeric };
