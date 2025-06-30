import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30 focus-visible:ring-offset-2', {
    variants: {
        disabled: {
            false: '',
            true: 'pointer-events-none bg-disabled-light opacity-50 grayscale-[1]',
        },
        readonly: {
            false: '',
            true: 'pointer-events-none',
        },
        checked: {
            false: 'bg-white hover:bg-surface-1',
            true: 'bg-active-foreground/15',
        },
    },
});
const AtuiRadio = /*@__PURE__*/ proxyCustomElement(class AtuiRadio extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Disables the radio option but keeps the text readable. Used for global readonly form state.
         */
        this.readonly = false;
    }
    handleChange() {
        if (!this.disabled && !this.readonly && !this.value) {
            this.value = true;
            this.atuiChange.emit(this.value);
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleChange();
        }
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
            readonly: this.readonly,
        });
        return (h(Host, { key: 'a583616e6517021d055420e572c3a289250d62aa', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: 'e6fcac02782f8103d12ff248736cd3661bbc13fb', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: 'c5260fe330fedf4738c6fa21d614b35ca09d45be', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'dbe8a672b2f343a4f699367b5cf0d1bf61d402de', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '55071ad5887e5321082933a1bdbf92ffc1118fe8', class: "mt-0 pl-4 text-xs text-light", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '3efa25f4bfcab8403319e6d849e17a3812051c40' }))));
    }
    get el() { return this; }
}, [4, "atui-radio", {
        "label": [1],
        "hint_text": [1],
        "value": [1028],
        "option_id": [1],
        "group": [1],
        "disabled": [4],
        "readonly": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiRadio);
            }
            break;
    } });
}

export { AtuiRadio as A, defineCustomElement as d };
//# sourceMappingURL=p-Hb5mLmEc.js.map

//# sourceMappingURL=p-Hb5mLmEc.js.map