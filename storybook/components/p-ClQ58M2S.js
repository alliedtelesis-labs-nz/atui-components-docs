import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CIJrXZgf.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$4 } from './p-B1aOcDAw.js';
import { d as defineCustomElement$3 } from './p-DdMgDskk.js';
import { d as defineCustomElement$2 } from './p-CJ9qvvtn.js';
import { d as defineCustomElement$1 } from './p-b7uiw7OS.js';

const atuiInputNumericCss = "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

const containerVariants = cva('height-[36px] relative flex rounded-md', {
    variants: {
        showButtons: {
            true: 'border border-solid border-med',
            false: '',
        },
    },
});
const inputVariants = cva('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'bg-white',
            true: 'border-none bg-surface-1 text-dark',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-2 focus:ring-active-foreground/30',
            true: 'border-error-base focus:ring-2 focus:ring-destructive-foreground/30',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-dark',
        },
        showButtons: {
            true: '',
            false: 'border border-solid',
        },
    },
    compoundVariants: [
        {
            readonly: true,
            disabled: true,
            class: 'bg-surface-1 text-dark',
        },
        {
            readonly: false,
            disabled: false,
            class: 'bg-surface-base text-dark',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
});
const AtuiInputNumericComponent = /*@__PURE__*/ proxyCustomElement(class AtuiInputNumericComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = '';
        /**
         * Disables interaction with the input
         */
        this.disabled = false;
        /**
         * Min selectable value of the input.
         */
        this.min = 0;
        /**
         * Max selectable value of the input.
         */
        this.max = 100;
        /**
         * Interval between selections.
         */
        this.step = 1;
        /**
         * Show buttons inside input or outside
         */
        this.show_buttons = true;
        /**
         * The value of the input
         */
        this.value = 0;
        this.inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
        this.handleDecrease = () => {
            if (this.value > this.min) {
                this.value = Math.max(this.value - this.step, this.min);
                this.atuiChange.emit(this.value);
            }
        };
        this.handleIncrease = () => {
            if (this.value < this.max) {
                this.value = Math.min(this.value + this.step, this.max);
                this.atuiChange.emit(this.value);
            }
        };
    }
    handleChange(event) {
        event.stopPropagation();
        this.value = Number(event.target.value);
        this.atuiChange.emit(this.value);
    }
    render() {
        const containerClassname = containerVariants({
            showButtons: this.show_buttons,
        });
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: 'c8c32a1e517cee8336fecaaa090cb90818b4583c', class: "w-full" }, h("div", { key: 'fb7981f3a3bfd3f000ca0a7d1605dea9c09ebb89', class: "flex flex-col" }, h("slot", { key: 'df61cd7e3a48062a20b363a572c8d4bab741bcbc', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'd4a48a2000bfb209ce7d230b44a23266dbb873e7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '0ac6780a89101d060cf03da9a39bd2559acdbdd6', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '1d52711e9e2489a7c32ec020296a5b88bfebccf7', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: 'e38a916120ce0bb93716e8625709702f2f90c810', class: "rounded-l-md rounded-r-none border-r border-solid border-med", type: "secondaryText", icon: "remove", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" })), h("input", { key: '9bed6e0398a525dbda502080c9919449457dc3c8', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: '144d0631a57485bf80c431a5244d8ca51f048917', class: "rounded-l-none rounded-r-md border-l border-solid border-med", type: "secondaryText", icon: "add", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }))), this.error_text && this.invalid && (h("span", { key: '214dfdc87cb1e9e56f4df385bf1a63ef54781694', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return this; }
    static get style() { return atuiInputNumericCss; }
}, [260, "atui-input-numeric", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "placeholder": [1],
        "required": [4],
        "invalid": [4],
        "readonly": [4],
        "disabled": [4],
        "min": [2],
        "max": [2],
        "step": [2],
        "show_buttons": [4],
        "value": [1026]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-input-numeric", "atui-button", "atui-form-label", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-input-numeric":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiInputNumericComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiInputNumericComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-ClQ58M2S.js.map

//# sourceMappingURL=p-ClQ58M2S.js.map