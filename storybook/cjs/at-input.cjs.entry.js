'use strict';

var index = require('./index--r5sCsiV.js');
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
        const getClassname = classlist.classlist('placeholder-text-muted pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: 'a5969260bf69122fda3e999c124f1b4a27814003' }, index.h("div", { key: '22a313dbe6274fbdc4d9bce523845c1dcbc46f63', class: "flex flex-col" }, index.h("slot", { key: '912902ba80ea949ded0b7b20a766a8439f67d774', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '205a775c96795e8aa7ba1b4e8a439ac0de7bb8c8', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '9a072f3d04b2c3ce60c159db88668a90b95efcb0', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: 'e9188c5e0419c13661eacaafe69d957a4ebcbbab', class: classname }, index.h("input", { key: '3c1182454aefed9aa15dc5a9f681ab2063615205', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '0fa23814d4ec0ff52ceece48ec89f4cdc12029e5', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '3ac58fba8ef50ab14f39920af86aa39928137d07', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: 'b7bd5802ebf0a5c6b0ec96d9c426020d6fb1c31b', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: '1f30dfa8387d5d657348757e4a46093b70f06812', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: '5d724c35c2dfec1c7b261d2266a8bfa58ee18f19', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
