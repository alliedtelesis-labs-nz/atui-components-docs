import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$3 } from './p-C65WlsXe.js';
import { d as defineCustomElement$2 } from './p-BtsG-JMI.js';

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
        const classname = getInputClasses({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '631ba73c854757dbf4ebd4b69dec394feecf6256' }, h("div", { key: '16065882e0bb51b03bce4aa01ffefb6f4fa830b0', class: "flex flex-col" }, h("slot", { key: 'b36142af10a1e81da48a0b5ed0662ce277e703c0', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'f40a98389f14cda5fdeeb853476a78a9e9d6585f', label: this.label, for: this.textareaId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '6669fea086df0e6c234e9ed078cec60ab6f9dbb1', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "textarea-hint" }, this.hint_text))), h("div", { key: '50d313737eebd716113b5310c1539c531bc58c89', class: "grid" }, h("textarea", { key: 'c06431b55e260c7127bd0423710330498db98c91', id: this.textareaId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, placeholder: this.placeholder, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => {
                this.value = event.target.value;
            }, onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.textareaEl = el), style: { gridArea: '1 / 1 / 2 / 2' }, class: classname, "data-name": "textarea-input" }), h("div", { key: '1536d21fb11b3a4f013c63a15a37d70bb15c9abd', "data-name": "textarea-resize-container", style: {
                gridArea: '1 / 1 / 2 / 2',
                minHeight: `${this.min_rows * 1.5 + 1}rem`,
                maxHeight: `${this.max_rows * 1.5 + 1}rem`,
            }, class: "text-body invisible rounded-sm border px-8 py-[6px] whitespace-pre-wrap" }, this.value)), this.error_text && this.invalid && (h("span", { key: 'b57fefffdd388a32e71f64848671248e236c5389', class: "text-error text-sm", "data-name": "textarea-error" }, this.error_text))));
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