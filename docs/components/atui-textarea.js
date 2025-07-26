import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$3 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$2 } from './p-CYjfaOKk.js';

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
const AtuiTextareaComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTextareaComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '470761f35227b68442370de418ecc1dd1c3704d7' }, h("div", { key: 'd47979e4690793b74eefd4ea35118506cb9c8278', class: "flex flex-col" }, h("slot", { key: '9009679bbe4086ad81f1d1a06a0c41f49a9a6ae4', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'b4ed8e4219e0074873e1a632a5beb6277ca5a2a0', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'fb55e05e76ad16ebe82aaeebdcc1dd867a1a99ff', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: '756983aff85deb971c2985ea443e13c2e293bbb4', class: "grid" }, h("textarea", { key: '632da53b54634d9cf34d37ca6ce2626803e0e7df', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '6449ff9c652a8f814bd114fb009829e3fd314697', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "invisible whitespace-pre-wrap rounded-sm border px-8 py-[6px] text-body" }, this.value)), this.error_text && this.invalid && (h("span", { key: '25f9b5f2790b9e254522e023add10b1ed2996708', class: "text-sm text-error", "data-name": "textarea-error" }, this.error_text))));
    }
    get el() { return this; }
}, [260, "atui-textarea", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "placeholder": [1],
        "required": [4],
        "invalid": [4],
        "readonly": [4],
        "disabled": [4],
        "min_rows": [2],
        "max_rows": [2],
        "autocomplete": [1],
        "value": [1025],
        "textareaEl": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-textarea", "atui-form-label", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextareaComponent);
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiTextarea = AtuiTextareaComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiTextarea, defineCustomElement };
//# sourceMappingURL=atui-textarea.js.map

//# sourceMappingURL=atui-textarea.js.map