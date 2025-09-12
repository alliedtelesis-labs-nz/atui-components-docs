import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$4 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$3 } from './p-C65WlsXe.js';
import { d as defineCustomElement$2 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/30 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
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
};
const AtuiInputComponent = /*@__PURE__*/ proxyCustomElement(class AtuiInputComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        const getClassname = classlist('placeholder-text-light pr -24 relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-md border border-solid overflow-ellipsis transition-colors duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: 'd4db69b2f5139edfc0da828de298245840ca9b37' }, h("div", { key: '02da6046a8f3fa23bc760eae9f55f3b87c277654', class: "flex flex-col" }, h("slot", { key: 'ed25b245741406a2227d0d2c24fb72958c666e37', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '1dde867f2d07eebb5b40885ea263f0d62fd03571', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'c42c467f18b34c71fc9dd7323e4633d15f93e5dc', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'fdab3a7d0c3127ed3237ec9b1bb5d52ad6be4495', class: classname }, h("input", { key: 'c0ecc9c39e79e62bb2c1381b31c4ebce776e9d6f', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: 'f055e7ee528da4aa02b5310ab5845997e27f5980', class: "flex items-center py-4 pr-4" }, h("slot", { key: '27968f9045486da2899fb658a1210725dba6d659', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("atui-button", { key: 'de815a5bb3bd14454e88b0967d80af9998dd65eb', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" })))), this.error_text && this.invalid && (h("span", { key: 'd76325bbf01a31d82254b2dfbc385b33ad33ceb1', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return this; }
}, [260, "atui-input", {
        "label": [1],
        "type": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "placeholder": [8],
        "required": [4],
        "invalid": [4],
        "autocomplete": [1],
        "readonly": [4],
        "disabled": [4],
        "clearable": [4],
        "value": [1025]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-input", "atui-button", "atui-form-label", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiInputComponent);
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

export { AtuiInputComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DuumseKx.js.map

//# sourceMappingURL=p-DuumseKx.js.map