import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Baj27LS8.js';
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
        const getClassname = classlist(`transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out w-full rounded-input py-input-y px-input-x text-right outline-0 focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: 'aaa7c62402c8ff5d3aecce25ed6eecc17455444d', class: "w-full" }, h("div", { key: '86de10ae5f552b184a2b457d988ed1cc44b2fab9', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '16ec46f1d08c63ab9b6b5db46a1541000cb15446', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '40b083a3d8d9e76f318f4effb1b86c462a5b17b1', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '47a08e6ff99715882822c5a7cf5f4fb8134b4c66', class: "text-muted inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '584860f1a3e2e1df8cad2fe9df70d1a7af1fc617', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '3f678b6816d23ef0bb72a57fd82c583ed56b1fe5', class: "border-input rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", onClick: this.handleDecrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleDecrease), disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" }, h("at-icon", { key: 'aa29f4dabb5f9ab610f791eacb51ecc71b18d93a', slot: "icon", name: "subtract" }))), h("input", { key: '14ab7822384984a968dea8977bf3267853db97ae', id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", min: this.min, max: this.max, step: this.step, placeholder: `${this.placeholder}`, onInput: (event) => this.handleInput(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("at-button", { key: '44215d5ca88d192af17ff9fd22eb5a185ba7689b', class: "border-input rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", onClick: this.handleIncrease, onKeyDown: (event) => this.handleStepKeyDown(event, this.handleIncrease), disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }, h("at-icon", { key: 'f5d733dc5ab0a43f3f1656326032095d8698cad9', slot: "icon", name: "add" })))), this.error_text && this.invalid && (h("span", { key: '431fd11a8057db6922d8a397e01dda4ec150292f', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};
AtInputNumericComponent.style = atInputNumericCss();

export { AtInputNumericComponent as at_input_numeric };
