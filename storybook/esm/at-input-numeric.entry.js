import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
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
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'cd45a041f50264ba0ba1c1dbcc650f695583814b', class: "w-full" }, h("div", { key: 'f090cf6ac6ac396f073a2de25322d18963202388', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'd979db6af572b3e21f242008f7fa7985e632add6', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'f69ddfc8eea0960bdfb7fcd31d6cd320720c1eab', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '1b4712e58d79a4ef66b3b135ce72f85abfcc2191', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '7fbc3c23b0f181f7aa69f55de059d448c416b484', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: 'd221d62b36d6cdcab809660367ccc4575e939616', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: 'bc1e7d50c72a163fae1a4e4284d2976a960f6c49', slot: "icon", name: "subtract" }))), h("input", { key: '9a7f2ae4c7b66c61086ee062c6242789938395fb', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: 'd50c304e0e9b1c951db7c38349f742e956baeabd', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: '33a4183738c8545eced6f5b975d8728650d5fd1e', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: 'b2702f9d50435513916b85ebc0c21a89be0b3d07', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

export { AtInputNumericComponent as at_input_numeric };
