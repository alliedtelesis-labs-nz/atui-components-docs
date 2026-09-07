import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CGGSFxDu.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
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
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: 'b6f703f5fd2b6653bffb7f7b9f3ea5b04da92fa3' }, h("div", { key: '2e6a29acc6860026bffefef39fdfc7a764311f66', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '767c0dd02fdd477fe6380d939b5a5cd0183d5225', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '251c1284d1d5fa112bc4c94d95a9edee9072aa55', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '8bdaf81bcfb5bc6c113b365b2bf3d95cbef22bd9', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '2b09ee8a6d95997b14b5551c11a3a113295cccf4', class: classname }, h("input", { key: 'c752eef771e92d9756b197012e49193a7fabd6bb', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: '3719d684bd2a563e0af2afe4199b3603829ee6eb', class: "flex items-center py-4 pr-4" }, h("slot", { key: '8c046b2f9e075f56b899ebaba8e97755d8b5f094', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("at-button", { key: '74552a206e82d13dd4918ff8e666f1622cda36a1', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, h("at-icon", { key: 'ddc133ac3ffd3be604e96b504430fa2974d7a08b', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (h("span", { key: '08b4ad223bf56f0a7d9dac866348cc1146429080', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

export { AtInputComponent as at_input };
