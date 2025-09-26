import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$5 } from './p-anL6prWM.js';
import { d as defineCustomElement$4 } from './p-CdWdq1MG.js';
import { d as defineCustomElement$3 } from './p-TpI9gSdV.js';
import { d as defineCustomElement$2 } from './p-pDYyfeah.js';
import { d as defineCustomElement$1 } from './p-D-MOVsDh.js';

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
        return (h(Host, { key: 'bead92efb565bab7f0f3fe9fa532acb49090400d', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '7f794195b5e5af690678c753d96767f358b1ab0c', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
//# sourceMappingURL=p-B3ym02UL.js.map

//# sourceMappingURL=p-B3ym02UL.js.map