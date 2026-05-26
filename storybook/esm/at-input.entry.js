import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
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
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '369154c3548c12dad5acedf51eb2ebed28312370' }, h("div", { key: '3eda861077423222da55ba5116d317112eb9b362', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'a61062204a902361183f211efb2c7b792870746d', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'eae8e4832813dc9e703a0bf5f770fda2322266e3', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'c3816a4dd5319d0d0eb2f6e4bff1de457f645e26', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '4f5f3a793b8fd728133ebb60d04cbdbe45af3e5b', class: classname }, h("input", { key: 'f8c6648237ce67904a50923245d14bc057ee0232', class: "py-input-y pl-input-x flex w-full outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: 'b66f863c691c961b379e824b3229d7d51d2895ca', class: "flex items-center py-4 pr-4" }, h("slot", { key: '1067b6199bcf046d11277a2fff00130085a9118e', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("at-button", { key: '0d25f4de61dfe7e04345d512f1e3d9fad1124f85', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, h("at-icon", { key: '64ee7434c2b9e5dcca84c5d0c70bfde6ff6f15f6', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (h("span", { key: '25624db0fe36b583cd2e6a90290c0b89d339ea6f', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

export { AtInputComponent as at_input };
