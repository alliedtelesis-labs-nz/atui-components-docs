import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$4 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$3 } from './p-nrKuTvHP.js';
import { d as defineCustomElement$2 } from './p-CYjfaOKk.js';

const layoutVariants = cva('gap-4', {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
});
const AtuiRadioGroup$1 = /*@__PURE__*/ proxyCustomElement(class AtuiRadioGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Direction that the radio elements are placed
         */
        this.layout = 'column';
        this.radioEls = [];
        this.radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    }
    handleChange(optionId) {
        if (this.value !== optionId) {
            this.value = optionId;
            this.atuiChange.emit(optionId);
        }
    }
    focusAndClickRelativeRadio(relativePosition) {
        const indexOfActiveRadio = this.radioEls.indexOf(this.el.ownerDocument.activeElement);
        const nextRadioEl = this.radioEls[(indexOfActiveRadio + relativePosition + this.radioEls.length) %
            this.radioEls.length];
        nextRadioEl.click();
        nextRadioEl.focus();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.focusAndClickRelativeRadio(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusAndClickRelativeRadio(-1);
                break;
        }
    }
    get getRadios() {
        if (this.options && this.options.length > 0) {
            return this.options.map((option) => (h("atui-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.option_id);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    render() {
        const classname = layoutVariants({
            layout: this.layout,
        });
        return (h(Host, { key: '77d4bf2e6fed5459de2391277394a3b6786d55e4', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '49d3f2863768293fb56bb35fbe7862bd3c1205bc', class: "flex flex-col" }, h("slot", { key: '14433916df6ba5b3cc5bcfa30fcd63c3454303c8', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '1ce056667a5588c1848965af05484a1d272cd3ea', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e0ee0ece141994f9e4590df3067f3b5261583b61', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '39def310e520d212564f08bfbe3963641e25e06f', class: classname, "data-name": "radio-group-options" }, h("slot", { key: '4b307399862f59bddfbba52d89354f6e33cd2ebe' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: 'bc19bcef3040cb65a397e9b50501dc59bda3ea31', class: "text-sm text-error", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    get el() { return this; }
}, [260, "atui-radio-group", {
        "label": [1],
        "info_text": [1],
        "layout": [1],
        "disabled": [4],
        "readonly": [4],
        "required": [4],
        "hint_text": [1],
        "error_text": [1],
        "invalid": [4],
        "options": [16],
        "value": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-radio-group", "atui-form-label", "atui-radio", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiRadioGroup$1);
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-radio":
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

const AtuiRadioGroup = AtuiRadioGroup$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiRadioGroup, defineCustomElement };
//# sourceMappingURL=atui-radio-group.js.map

//# sourceMappingURL=atui-radio-group.js.map