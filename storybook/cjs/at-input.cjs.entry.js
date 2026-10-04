'use strict';

var index = require('./index-Dzqi4iVM.js');
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
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: 'dd575169ad1b753a3b6e75e276e93b4e9ec693db' }, index.h("div", { key: '8e77c8db168b71e6706ae4f14639de8394a3b9b7', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '347e60461decf54ba5bff9b56a728c705397c73b', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'c5a200dd417f4355ec5b9d177b7bc5a4251bf6be', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '5b129a3612e7bda2c5736336fe16086a21275980', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '71e0bc9ee3d7f9ecfdef7a39148afa64cd265136', class: classname }, index.h("input", { key: '64f26a2e9c092063a4ae0dec2c698d6a8e5a3286', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '4c39c3876cec739b8ee78b1b2eab3970852480b2', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '7d7d797abf72dee9de004529fcc19f27f3887ccd', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: 'e089d3e9fd709ea0a6a1554777ee18f7882379b1', class: `transition-[opacity,transform] duration-150 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: '2472051cd2a0c07eb05efc8b09cca7a2c9638bc2', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: '27315e4ae41298c711d8beeab0b1f5b444052fb3', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
