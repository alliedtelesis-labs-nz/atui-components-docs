import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
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
        return (h(Host, { key: 'ec19ac4a2312238cdd12c9af57e7c763fed7cd45', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '089a3ae0e0f888f01673c25d91635491a0368e96', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: '5e9c3469b40d5ce642cf8dc7e1e049f7ee800aab', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'ed108e4edf31d7e0b5217a56ac787dda53a8b18f', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '85f2a17bd438e0a5e65221f80cd81e8927273e1d', class: "mt-0 pl-4 text-xs text-light", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '676f1ac1b13b4d694a16ce5459ec24db60fc67bc' }))));
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
//# sourceMappingURL=p-OlaTsMW0.js.map

//# sourceMappingURL=p-OlaTsMW0.js.map