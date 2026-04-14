import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'bg-surface-1 text-disabled border-none focus:ring-0',
        },
        readonly: {
            false: 'bg-white',
            true: 'text-dark border-none focus:ring-0',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-active-foreground/30 focus:ring-2',
            true: 'border-error-base focus:ring-destructive-foreground/30 focus:ring-2',
        },
    },
    compoundVariants: [
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-med text-dark focus:border-active-foreground focus:ring-active-foreground/30 bg-white focus:ring-2',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const getInputClasses = classlist('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-md border border-solid px-8 py-[6px] duration-300 ease-in-out outline-none', inputVariantsConfig);
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
        return (h(Host, { key: 'fe8e672ebafed95370d9af185f8b25afb84a717f' }, h("div", { key: '0b4aa07f7a2d9b41b9cc69d2f9ab8d7656fa9108', class: "flex flex-col" }, h("slot", { key: 'f0c386370d01b83e8be5c2becbdf971d33ec5fb9', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '8f7b3aa6a57c8b494ece721d947e2faac3073071', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'a0ec1a88599a34dc1e6fa9640b8b1ff785556bcc', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: 'a51b35384d8c9a79f8efc046800d2857bc0e9268', class: "grid" }, h("textarea", { key: 'f99e3ee19ab7048f68f32c6eccdc5a4224a8b9ea', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '357f6323daa8fa01a37239f30c9ea69becfff619', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: 'b0225cd38c12df8249f367204e313a901b30070d', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
};

export { AtTextareaComponent as at_textarea };
