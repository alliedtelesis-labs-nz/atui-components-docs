'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

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
const getInputClasses = classlist.classlist('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-md border border-solid px-8 py-[6px] duration-300 ease-in-out outline-none', inputVariantsConfig);
const AtTextareaComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Minimum number of rows to display
         */
        this.min_rows = 1;
        /**
         * Maximum number of rows to expand to
         */
        this.max_rows = 10;
        /**
         * Sets the 'autocomplete' attribute on the textarea
         */
        this.autocomplete = 'on';
        this.textareaId = `textarea-${Math.random().toString(36).substring(2, 11)}`;
    }
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
        return (index.h(index.Host, { key: 'fd33c23d44bc2b0cf66fc3404259adea51664e7c' }, index.h("div", { key: '28ada079c75083f74a62759e85e049e201234ca5', class: "flex flex-col" }, index.h("slot", { key: '1d812a8530af7a8953ed71dfaab5b43f33155bb5', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '3be0ad4c5d55c335e3bb14b167a8f4d8b6430776', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'e41bfc7132f1a167724fc2ec00661353648e6858', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), index.h("div", { key: '2de6021b3f1ea06d89ad5563d8eaf5d23b65ec60', class: "grid" }, index.h("textarea", { key: 'f324eba3205f8ef2b94cfbbebe2e99002146147a', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), index.h("div", { key: 'fbfca3f1783ae098baaee5bf7f4c998f043f14aa', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (index.h("span", { key: 'de992545c3334026c21304ab67b62b069a1fe9a3', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
};

exports.at_textarea = AtTextareaComponent;
//# sourceMappingURL=at-textarea.entry.cjs.js.map

//# sourceMappingURL=at-textarea.cjs.entry.js.map