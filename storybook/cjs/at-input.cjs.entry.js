'use strict';

var index = require('./index-DYE55yNY.js');
var classlist = require('./classlist-BPb95vgj.js');

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background border-input',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error focus-within:border-error focus-within:ring-error-glow',
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
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    /**
     * The value of the input
     */
    value;
    inputEl;
    get el() { return index.getElement(this); }
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
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '7e2a4b8228f134cafd8d12ada87420bc2c09975e' }, index.h("div", { key: '3dd3049abdeddbf891eaf177fe8d5bcf707af2ae', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'f8395ace7b8c4a0a36d28457cbbb5b621293c445', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'e1255d482309a7b7c8dfd97dd3ca190c0d9dea93', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '0e177fe5e8768be5bab3d35e4c9f1ea77eb80257', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: 'd1f6b8d8bbccab5917fa20b05e8bcd498fe63c8e', class: classname }, index.h("input", { key: 'c23a7e0092276e709800afcb63d45aff7914399e', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '4add22b4bee46a63eb65eb067f3062d8cbca82b2', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '48600dc7347f044bd843f417b273cc4ba318e338', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: '10edccb6814866538b8ee6e9fefe8e2575ac1127', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: 'b802d58562345518ad260dcdb52612e185b48e69', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: '3434f86e2450bd41d62745b2b5caff3c7a224d41', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
