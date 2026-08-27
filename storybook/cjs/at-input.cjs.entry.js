'use strict';

var index = require('./index-Bo1AxtqW.js');
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
        return (index.h(index.Host, { key: 'f7e2b1789a1debbd4c2377e7a80802a220419f4d' }, index.h("div", { key: 'ed4b02c677b1ac6c9285468781255193879af5f5', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '37d9bb6c36ba7d42ff3fb0f65214fd55404d17f3', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '4c64a8c9f84bc25f045871e207219fd213f4a8a4', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '23ae48425e6c02f582d91326d7bf4ea812d51560', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '99450ef487a0bee8342557cb094ab775597c6475', class: classname }, index.h("input", { key: 'bfcfa3b183377c271b2b0fe38cb5ec5b578e92e9', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '47189ace0568e92be4df4d306803ebefca70a860', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '8cfdf8e80e905acc1c4b0e4731a441ca21aca872', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: '6e342945ae3e4a4ca6bbc0d9b910f2aef10e7536', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: '9d2303700966862c346b849bc0143fb0ec97babd', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: 'f77c27270032ce37b999c4f31368db4ac4963c92', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
