'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const inputVariants = index$1.cva('align-center transition[background-color,color,box-shadow] relative flex h-full w-full resize-none rounded-md border border-solid px-8 py-[6px] text-body outline-none duration-300 ease-in-out', {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'border-none bg-surface-1 text-disabled focus:ring-0',
        },
        readonly: {
            false: 'bg-white',
            true: 'border-none text-dark focus:ring-0',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-2 focus:ring-active-foreground/30',
            true: 'border-error-base focus:ring-2 focus:ring-destructive-foreground/30',
        },
    },
    compoundVariants: [
        {
            readonly: false,
            disabled: false,
            invalid: false,
            class: 'border-med bg-white text-dark focus:border-active-foreground focus:ring-2 focus:ring-active-foreground/30',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
});
const AtuiTextareaComponent = class {
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
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: 'e41d2156bfbb31d129c74e11438392a358c76143' }, index.h("div", { key: '8f150a4c77ac1786f7414af4095d01eb845fb3c5', class: "flex flex-col" }, index.h("slot", { key: '9aef368d6789535831fe4f0c1a46566ab293a0ec', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: 'fa02f4eee4e31fd76a3e6cc38107358d957e3180', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '7915f0b09b47a2eab3fa2883837da6f9623da52b', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "textarea-hint" }, this.hint_text))), index.h("div", { key: '3160f9c885081ffcdc890890567f72b7009d6e6b', class: "grid" }, index.h("textarea", { key: '0d8c72911879e35b0d0285969fb914c2997d71b0', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), index.h("div", { key: '40e8e5bb4eabf6f353ccf4773913a90a6719a881', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "invisible whitespace-pre-wrap rounded-sm border px-8 py-[6px] text-body" }, this.value)), this.error_text && this.invalid && (index.h("span", { key: 'd6422ccda2a8afc01a5cf5e00dd54bb99b19c60c', class: "text-sm text-error", "data-name": "textarea-error" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_textarea = AtuiTextareaComponent;
//# sourceMappingURL=atui-textarea.entry.cjs.js.map

//# sourceMappingURL=atui-textarea.cjs.entry.js.map