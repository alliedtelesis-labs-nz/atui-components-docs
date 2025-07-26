import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$4 } from './p-DpoOUufO.js';
import { d as defineCustomElement$3 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: '3bf7433dae7cc28896ece58141868af3c60c7fce', class: "w-full" }, h("div", { key: '3a57f1dd7d8e786acf3d381141d8d520090d491c', class: "flex flex-col" }, h("slot", { key: '7c589b962b1747be9fe46b92a2f04c6205e8d2ac', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '2d7a0e3a3074ae0db995d0c254e567f578ca8dc7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e99c8d58e8b02f4f90c4dc13f772661cead01ce2', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '3b72aa08d66e7d6c5af81613ae08f8b712bf2458', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: '5476956a62055d10ae86ffe72c8d7545683e08ea', class: "rounded-l-md rounded-r-none border-r border-solid border-med", type: "secondaryText", icon: "remove", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" })), h("input", { key: 'd1b4ea8d309f0f04a26994e0489d5e23fc513e9a', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: 'f4293fbd5b7db1505aa39b94486dd1770f201eb9', class: "rounded-l-none rounded-r-md border-l border-solid border-med", type: "secondaryText", icon: "add", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }))), this.error_text && this.invalid && (h("span", { key: 'd778b466649ece195fcc681445aa8d23d08944b5', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
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
//# sourceMappingURL=p-DFhkU5Xs.js.map

//# sourceMappingURL=p-DFhkU5Xs.js.map