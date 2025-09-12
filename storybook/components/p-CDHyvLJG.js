import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$4 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$3 } from './p-C65WlsXe.js';
import { d as defineCustomElement$2 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const atuiInputNumericCss = "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

const containerVariantsConfig = {
    variants: {
        showButtons: {
            true: 'border-med border border-solid',
            false: '',
        },
    },
};
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'bg-white',
            true: 'bg-surface-1 text-dark border-none',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-active-foreground/30 focus:ring-2',
            true: 'border-error-base focus:ring-destructive-foreground/30 focus:ring-2',
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
            invalid: false,
            class: 'border-med text-dark focus:border-active-foreground focus:ring-active-foreground/30 bg-white focus:ring-2',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
};
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
        const getContainerClassname = classlist('height-[36px] relative flex rounded-md', containerVariantsConfig);
        const containerClassname = getContainerClassname({
            showButtons: this.show_buttons,
        });
        const getClassname = classlist('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (h(Host, { key: '8f8b04f0febca49781345309deadaa16a514bf52', class: "w-full" }, h("div", { key: '3a485a21469e12b90ad6e130f0a00ea7ecf3636f', class: "flex flex-col" }, h("slot", { key: '84879db14bfb3330a9b8153156682935857d7ad7', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'ad63a398b2944967d1d2f22c1a0f6af9ab77462e', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b8c5e5475e6100943f0504eabe7beedbab0934a3', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '25f330f051191479864ac06b5302bc5c583cd413', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: 'a297d4f5f2542a7c830996ff3648597b322ed3aa', class: "border-med rounded-l-md rounded-r-none border-r border-solid", type: "secondaryText", icon: "remove", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" })), h("input", { key: '03723b84320b1f1be7d3762b801255867e5eb3bf', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (h("atui-button", { key: '34a7c1757d8b1f3e8dbca409f717446589b25673', class: "border-med rounded-l-none rounded-r-md border-l border-solid", type: "secondaryText", icon: "add", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }))), this.error_text && this.invalid && (h("span", { key: '24151e3ccccb615b4daf46fba90b6f319c731f4d', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
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
//# sourceMappingURL=p-CDHyvLJG.js.map

//# sourceMappingURL=p-CDHyvLJG.js.map