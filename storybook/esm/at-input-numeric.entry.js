import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
        const getContainerClassname = classlist('height-[36px] relative flex rounded-md', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons,
        });
        const getClassname = classlist('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '69ab4f37b5350ddb12578a5c7b89ac1c8f9dcecb', class: "w-full" }, h("div", { key: 'b1a1a582a33671b29672e6dc2ac9253a59f66d4d', class: "flex flex-col" }, h("slot", { key: '159a37e41710a56c403185fe2e159c44fcbd7016', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'bde230ac4e54fef59b8d399f2d3f5df51d7f86ae', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '4561601faaa95fd88238ff66d3d2b80e7a59e851', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'dbe16a1814dabb18a24e5d01d5d179a7e654c16e', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '6a67d83b2c103aac5a62fa266d9e273e56816021', class: "border-med rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: '5308ace7a8b3804d07ee292a70f161a7d0b2c91d', slot: "icon", name: "subtract" }))), h("input", { key: 'a6279b72e9396dfd2bdf086ba019dfa558e934cb', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '1ccde86d14f5fb3630d5a53cf4d5b786c23f5b6f', class: "border-med rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: 'c512b954d49c63b1a87a32610ffa2068c0163449', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: '2820cd1f688a636f390d13dc7b881b0a0539a15f', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

export { AtInputNumericComponent as at_input_numeric };
