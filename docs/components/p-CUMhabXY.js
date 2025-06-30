import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$4 } from './p-DIGwH9iS.js';
import { d as defineCustomElement$3 } from './p-CNIPth1r.js';
import { d as defineCustomElement$2 } from './p-DjSPSIsG.js';
import { d as defineCustomElement$1 } from './p-ByK4-pDJ.js';

const AtuiChipListCell = /*@__PURE__*/ proxyCustomElement(class AtuiChipListCell extends H {
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
    }
    render() {
        return (h(Host, { key: '8d96c01476e82e82e778eda696c6ed8a6b0183cf', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'e90360c1621de2ba4e4ee603b54aad81c662c7a0', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return this; }
}, [0, "atui-chip-list-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-chip-list-cell", "atui-badge", "atui-button", "atui-chip-list", "atui-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-chip-list-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiChipListCell);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-chip-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiChipListCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CUMhabXY.js.map

//# sourceMappingURL=p-CUMhabXY.js.map