import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/40 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/40',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/40',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const AtInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label above the input container
     */
    label;
    /**
     * Type of the input
     */
    type = 'text';
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
     * Sets the 'autocomplete' attribute on the input element
     */
    autocomplete = 'on';
    /**
     * Makes the input read only
     */
    readonly;
    /**
     * Disables interaction with the input
     */
    disabled = false;
    /**
     * Allows the input to be cleared with a 'x' at the end of the input element
     */
    clearable;
    /**
     * The value of the input
     */
    value;
    inputEl;
    get el() { return getElement(this); }
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        this.value = event.target.value;
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.inputEl.value = '';
        this.value = '';
        this.atuiChange.emit('');
    }
    render() {
        const getClassname = classlist('placeholder-text-light pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: 'c9c45e96cea1d872dee16dc5f5777016d495a764' }, h("div", { key: 'b5bd3f0255574cf921c350fe65b35cebceecf60a', class: "flex flex-col" }, h("slot", { key: 'bf7581a82c2bae4d43d1e69b34d85c7f077b0e67', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '441a0a71299884eb37c08c44ed91ecbf638c8fab', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '6aba455d507cb1931ea274d0db7897b1ac0c1c92', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'fa2b0a39f171b42d908b5729ab22cf8997fcc951', class: classname }, h("input", { key: '5e608d735f9e49214326bd5795988ab0bce65d7d', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: '58a9d7e248fa0ff85eb863ebdda1c7994e3097f9', class: "flex items-center py-4 pr-4" }, h("slot", { key: '4059dcfee5436663e3a6af58897210229aabddcd', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("at-button", { key: '5fdd16f80373531e0c33aa95794b7793caa9215d', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, h("at-icon", { key: '2055f1af623870c0a9c920e35346fc70feea5ae1', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (h("span", { key: 'ee143860cb99ee43bfdd769eadee84c17c8c6ca3', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

export { AtInputComponent as at_input };
