'use strict';

var index = require('./index-C0zY2e5N.js');
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
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '0f21f0c38f71e7f49ea2e6e23c487c3c412eb258' }, index.h("div", { key: 'a8dbe1ca7bae8fde84da9db2ce6dc0b64d190ca9', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '4a9e1af32bd8a8c6410e2ad0d62d262dae68b4ca', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '620ab062f221e080e57026a9e90d589e5a6e1362', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '14fd85833b54a3e307b9ad76e1920591bf5b762e', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '0f6ffdebc99bbf67c3f3076dd1a5ba5ea11bcd21', class: classname }, index.h("input", { key: '57113e751db1a259459333ee5ba49f73eee55b2a', class: "py-input-y pl-input-x flex w-full outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: 'b275a686aa749893263b2b6e91b1c68d326bd73f', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: 'c5c9ee7c1837d62a003b201f9c3580cc9fe6adfa', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: 'ca8957c8badf4f91ffe43fbe41906befde95e3d8', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: 'd4b7df20f23276055b600a2cdf2c0e0a4610f789', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: '8fb1a06bfca60a5c42112e52aa2a1aa1ff7e3b0c', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
