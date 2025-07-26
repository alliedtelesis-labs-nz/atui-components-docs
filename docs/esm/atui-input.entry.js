import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';
import { c as cva } from './index-CVoOBWGd.js';

const inputVariants = cva('min-h-36 placeholder-text-light pr -24 relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden overflow-ellipsis rounded-md border border-solid outline-none transition-colors duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
    variants: {
        disabled: {
            false: 'bg-white focus-within:ring-active-foreground/30',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: 'cursor-text border-none !bg-surface-1 !text-dark',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
});
const AtuiInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Type of the input
         */
        this.type = 'text';
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = '';
        /**
         * Sets the 'autocomplete' attribute on the input element
         */
        this.autocomplete = 'on';
        /**
         * Disables interaction with the input
         */
        this.disabled = false;
        this.inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    }
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
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '5079cca66dcd22ecbfb4736ae071a00a3d45cf42' }, h("div", { key: '450b39e12b13ed4de005877118a71ebfcb5991f7', class: "flex flex-col" }, h("slot", { key: '5baaf7e724b398e1da89cd95f838baef9f4bf09f', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '331da60ad34aa0c2ddb6e95488e20ec736b0516c', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e4b0b00b897bb0bff5de00e584f3b496bef26222', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'a9e43baff375673ee05964c54f230fc6d820351c', class: classname }, h("input", { key: '39e32a9a565edbd5c49f4ef885802414c865bf0e', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: 'd079aaa57216966da324f72f6a0f8b8216b878c6', class: "flex items-center py-4 pr-4" }, h("slot", { key: '833e63a4781295bdda14ecd6d1fed7d97226c980', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("atui-button", { key: '19d6b52547ac6320c7bedfb3803307c93a9118d9', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" })))), this.error_text && this.invalid && (h("span", { key: 'f98a5d11c084ae8f9ce9f97827abd8084a3e0c90', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiInputComponent as atui_input };
//# sourceMappingURL=atui-input.entry.js.map

//# sourceMappingURL=atui-input.entry.js.map