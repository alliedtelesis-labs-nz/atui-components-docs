import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$5 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$4 } from './p-D9T3c7Wy.js';
import { d as defineCustomElement$3 } from './p-CV-zf8Ue.js';
import { d as defineCustomElement$2 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$1 } from './p-CpnV9PUz.js';

const AtuiEditTextCell = /*@__PURE__*/ proxyCustomElement(class AtuiEditTextCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        if (this.params.onValueChange) {
            this.params.onValueChange(this.params);
        }
    }
    render() {
        return (h(Host, { key: '0f856845b0103ec2440aab2e9afcba0c73f8f0b7', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'f859491dd6e8297a4330c5fd5ed07547fd23915a', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return this; }
}, [256, "atui-edit-text-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-edit-text-cell", "atui-button", "atui-form-label", "atui-input", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-edit-text-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiEditTextCell);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-input":
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

export { AtuiEditTextCell as A, defineCustomElement as d };
//# sourceMappingURL=p-C-i0wnR1.js.map

//# sourceMappingURL=p-C-i0wnR1.js.map