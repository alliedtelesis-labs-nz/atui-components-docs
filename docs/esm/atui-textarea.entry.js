import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-HJO1YDmC.js';
import { c as cva } from './index-CVoOBWGd.js';

const inputVariants = cva('align-center transition[background-color,color,box-shadow] relative flex h-full w-full resize-none rounded-md border border-solid px-8 py-[6px] text-body outline-none duration-300 ease-in-out', {
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
        return (h(Host, { key: 'e1bd9c1373c9006a56ca8831107c1f8c2de80fd4' }, h("div", { key: 'a73af5b6dff29c33aa1426e460e469e84a282e96', class: "flex flex-col" }, h("slot", { key: 'b6adc1e63e13694a1ed9d2a72605f4d19dc40671', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '59294421a4c6b67592fee1e0788343fc4e0fd3c0', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '9e12dc7ac46cb97ce4f2d6516e5158ab6c29417b', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: 'd556c85041a40dd72b21654a254f6723cba0e575', class: "grid" }, h("textarea", { key: '89e32b891a02bc0a4ffb434d47d8dc3c7590df25', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: 'cca8973581683b5070ebe37e95833fff7bd7c1be', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "invisible whitespace-pre-wrap rounded-sm border px-8 py-[6px] text-body" }, this.value)), this.error_text && this.invalid && (h("span", { key: '2c6b94120f02ed680612463c677775aeb9a65f61', class: "text-sm text-error", "data-name": "textarea-error" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiTextareaComponent as atui_textarea };
//# sourceMappingURL=atui-textarea.entry.js.map

//# sourceMappingURL=atui-textarea.entry.js.map