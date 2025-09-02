import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { c as cva } from './index-CVoOBWGd.js';

const inputVariants = cva('align-center transition[background-color,color,box-shadow] text-body relative flex h-full w-full resize-none rounded-md border border-solid px-8 py-[6px] duration-300 ease-in-out outline-none', {
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
});
const AtuiTextareaComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h(Host, { key: '848b2f0bfe5a475133411312bbcfc9afeae59eb1' }, h("div", { key: '05936d831e43c21bb44435609935eb02f6f5c5da', class: "flex flex-col" }, h("slot", { key: 'c446ff7428ef5ae7922048dc07ea1205e20d1d91', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'fde57591d3e75658caadf8b0a903d01d31d8b88a', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '459c47a0924c05ba866ac8d1f068d96bf74557c9', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: '2ca304209c57ff934c574384d91af37e118c0916', class: "grid" }, h("textarea", { key: '73ea87068c5aa9714bac24d54a1e7686529e0a18', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: 'c283e9a516117a9fcf80c21327ead2ced4ef5976', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: '35f778ba838a1a91a1e696fd3fc92deca4203098', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextareaComponent as atui_textarea };
//# sourceMappingURL=atui-textarea.entry.js.map

//# sourceMappingURL=atui-textarea.entry.js.map