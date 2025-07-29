import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$4 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$3 } from './p-CoOWTCxi.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

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
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '275a04fca921759c5476b414e0fcb457fd72f53b' }, h("div", { key: '79f751989d18cd76dd0b147ee14793f48f058114', class: "flex flex-col" }, h("slot", { key: 'c97f707facff378e0b0d6435e0f8f1f2a2825678', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '92c517f2a20309f4edc5f5fdd17af71b03406808', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: '05075144833a46df4ad920675621f2387b5f99c9', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: 'ce168fe24bd105987cf4365a9de554a6f02605f9', class: classname }, h("input", { key: '1b90f2acbd029031eefab560ff4438b9a75b5787', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: '59fa955808dc3713c5bba029ba52e553f46c34e1', class: "flex items-center py-4 pr-4" }, h("slot", { key: '69a05f62d0a75b92b41be1f54cb5a8b10b4f1702', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("atui-button", { key: '046870fa914a4292d24f1b4fa1334713496d5baf', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" })))), this.error_text && this.invalid && (h("span", { key: '8f4b67b847cab15ae82b39edf666ba2e2c0b3d5b', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
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
//# sourceMappingURL=p-BSfjNoXC.js.map

//# sourceMappingURL=p-BSfjNoXC.js.map