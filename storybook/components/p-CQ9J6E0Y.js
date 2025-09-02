import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$5 } from './p-BkB7yMfB.js';
import { d as defineCustomElement$4 } from './p-cJhPHVMD.js';
import { d as defineCustomElement$3 } from './p-BgNpHlsG.js';
import { d as defineCustomElement$2 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$1 } from './p-CSWbCoPk.js';

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
        return (h(Host, { key: '9bbfbfa36d5fb30a395d7384cf85c82d77916a83', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: '9d63231351a6f517a905d5887b6ae93db6b4b3e4', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
//# sourceMappingURL=p-CQ9J6E0Y.js.map

//# sourceMappingURL=p-CQ9J6E0Y.js.map