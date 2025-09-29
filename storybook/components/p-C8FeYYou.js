import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
import { d as defineCustomElement$5 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$4 } from './p-IkAgp4un.js';
import { d as defineCustomElement$3 } from './p-CUVypgz_.js';
import { d as defineCustomElement$2 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$1 } from './p-BQo85g_v.js';

const AtEditTextCell = /*@__PURE__*/ proxyCustomElement(class AtEditTextCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h(Host, { key: 'd31adbbd13ef19fd58aabaac4bd6b24babd1d108', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '526a6aa2b5c715e0d57cb151145d1bc49810bc57', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return this; }
}, [256, "at-edit-text-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-edit-text-cell", "at-button", "at-form-label", "at-input", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-edit-text-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtEditTextCell);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtEditTextCell as A, defineCustomElement as d };
//# sourceMappingURL=p-C8FeYYou.js.map

//# sourceMappingURL=p-C8FeYYou.js.map