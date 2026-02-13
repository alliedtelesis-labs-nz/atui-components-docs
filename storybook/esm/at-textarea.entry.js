import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
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
        return (h(Host, { key: '09a3185933de8ad1e89e11b417af4b77b09b84c7' }, h("div", { key: '32f5e2ee183869c0ad8003aac940eb78d4678dd3', class: "flex flex-col" }, h("slot", { key: 'db4671dd6967030ed9cf2a97ecbb456b98df44d1', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'f2f50b85ce5c24763c3d5f0c702a897688f8a158', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e7ad4a4ac83a59bce996dbdec52bc97d434a0c9c', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: '7cda8f80393abcf2b3272e1f661b2c1483e17e96', class: "grid" }, h("textarea", { key: 'ec06a6b04b1e11e3e2ab276befff6ae82c86a345', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '88a1de6001c06e59c64fb11171d1b8a5eaebe542', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: '1dd1d4bbc0c4077d536898b2f11029581928c672', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
};

export { AtTextareaComponent as at_textarea };
