'use strict';

var index = require('./index-DK-3iCCu.js');
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
        return (index.h(index.Host, { key: 'c4020c55fade993b47abac3522cd1ab50ec57e3d' }, index.h("div", { key: '13c02e85f6ab3c7c9e48b69472ac981fd81d354c', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '566f0298af009c93ceb5cdc99b6493d44cd5d2dc', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '36d3a5c131d300de156324b7bbf20860975eb3d1', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '3e3c7c752a48720861a56b54ea70b162ac55b3ff', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), index.h("div", { key: 'affe4d4bbcec28f4143d2d9d7ec020f5540f4ab1', class: "grid" }, index.h("textarea", { key: 'f6b6a5acc29d29ed40240602bfd54fa45034a321', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), index.h("div", { key: 'aae2d2e0fc3a8d0825fa13f3a39220dd0457bd48', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] break-all whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (index.h("span", { key: '146ecc46f0cb79c5861fd63820bd93dd57a82c72', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
};

exports.at_textarea = AtTextareaComponent;
