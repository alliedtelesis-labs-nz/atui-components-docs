import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$5 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$4 } from './p-BaOP2SR_.js';
import { d as defineCustomElement$3 } from './p-apNKW7Jz.js';
import { d as defineCustomElement$2 } from './p-pDYyfeah.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtEditTextCell = /*@__PURE__*/ proxyCustomElement(class AtEditTextCell extends H {
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
        return (h(Host, { key: '401dc3423ea37f26619d1143c7eff942d5f98e83', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '2ecc3a6e2794ffb13bb61684077ad8fed0557218', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
//# sourceMappingURL=p-BLv8ANog.js.map

//# sourceMappingURL=p-BLv8ANog.js.map