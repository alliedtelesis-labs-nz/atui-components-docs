import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-_QbJz5mf.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-input-background',
            true: 'bg-surface-1 text-disabled border-none focus:ring-0',
        },
        readonly: {
            false: 'bg-input-background',
            true: 'text-foreground border-none focus:ring-0',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus:ring-active-glow focus:ring',
            true: 'border-error-base focus:ring-error-glow focus:ring',
        },
    },
    compoundVariants: [
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-input text-foreground focus-within:border-active-accent focus:ring-active-glow bg-input-background focus:ring',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const getInputClasses = classlist('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-input border border-solid px-8 py-[6px] duration-300 ease-in-out outline-0 focus:z-10', inputVariantsConfig);
const AtTextareaComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label to be displayed for the textarea
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
     * Displayed when invalid is set
     */
    error_text;
    /**
     * Placeholder in the textarea when no text is placed
     */
    placeholder;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Displays then error text when set
     */
    invalid;
    /**
     * Makes the textarea read only
     */
    readonly;
    /**
     * Disables interaction with the textarea
     */
    disabled;
    /**
     * Minimum number of rows to display
     */
    min_rows = 1;
    /**
     * Maximum number of rows to expand to
     */
    max_rows = 10;
    /**
     * Sets the 'autocomplete' attribute on the textarea
     */
    autocomplete = 'on';
    /**
     * Sets the value of the textarea
     */
    value;
    textareaEl;
    get el() { return getElement(this); }
    /**
     * Emits an event containing the text string when the textarea's content is changed
     */
    atuiChange;
    textareaId = `textarea-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        this.value = event.target.value;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = getInputClasses({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '68712baf94cce8d2f5cbb7bd3bff02bffd9c28ca' }, h("div", { key: '78c87a9c1ed243d3d194b0cff0a5a8c219f527c8', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '6334620f07222e6ecf656c04d9beafe5ba7f3198', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '9e4b5f17a72f660f6ad60b798a681cae4853e6c5', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '46b1bd4d30f59751760051313e9c1bd0c6517a51', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: 'e97ff2dc2bf7299610168ff974e507d6c0b4d7bb', class: "grid" }, h("textarea", { key: '627cbd48027b0f080a7a18b96e50f38fe0c7a2bb', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '2ab47c76280b139c721df98c49c8719825a82732', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] break-all whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: 'b4be91f5c306860f3064fd773948dc42668e0bce', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
};

export { AtTextareaComponent as at_textarea };
