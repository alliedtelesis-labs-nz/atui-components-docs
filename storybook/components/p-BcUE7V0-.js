import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$5 } from './p-CGoVUV9r.js';
import { d as defineCustomElement$4 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$3 } from './p-DqLTsro1.js';
import { d as defineCustomElement$2 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        return (h(Host, { key: 'e43d8f1823896f13a0df6285d53bfc5dd3753db0', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'dc0fa5277473dbcdc1f60fc570343c2e24301f9f', readonly: !this.params.writePermission, clearable: true, value: this.params.value, onInput: (event) => this.updateCell(event.target.value), onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return this; }
}, [0, "atui-edit-text-cell", {
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
//# sourceMappingURL=p-BcUE7V0-.js.map

//# sourceMappingURL=p-BcUE7V0-.js.map