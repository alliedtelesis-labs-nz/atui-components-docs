'use strict';

var index = require('./index-BCGHtseN.js');
var classlist = require('./classlist-BPb95vgj.js');

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
const getInputClasses = classlist.classlist('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-input border border-solid px-8 py-[6px] duration-300 ease-in-out outline-0 focus:z-10', inputVariantsConfig);
const AtTextareaComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    textareaEl;
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '32f42f0461958740f1c93575e976be89860d2b1c' }, index.h("div", { key: '1ec87cbb683332a79c837ffc74b7b40decd65629', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'e9d8657849a09fa80d8c70ed9fe35dc03150dcfc', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'c2138e121503e0ad595079715eef3863c508749e', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '77ad1250d41b376d36802f13290185b82627abc1', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), index.h("div", { key: '55b09a2da42b298a8f31a5a68a13d5c8bf028829', class: "grid" }, index.h("textarea", { key: '87992b738fd5b14999ace56949da5b9dfd6e0546', id: this.textareaId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), index.h("div", { key: '78264c1b5a6be13a69ddbb0c283924dc05adab6a', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] break-all whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (index.h("span", { key: '6d1ef8b35618c65eab2e778fb31d5a123c7b0a7b', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
};

exports.at_textarea = AtTextareaComponent;
