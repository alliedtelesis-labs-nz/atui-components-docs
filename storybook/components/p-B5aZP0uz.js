import { p as proxyCustomElement, H, h, c as Host } from './p-CHjIMSAP.js';
import { d as defineCustomElement$4 } from './p-Bq2RTHNk.js';
import { d as defineCustomElement$3 } from './p-DuXqj3_2.js';
import { d as defineCustomElement$2 } from './p-BrAtVhxe.js';
import { d as defineCustomElement$1 } from './p-DbhUEjmd.js';

const AtuiChipListCell = /*@__PURE__*/ proxyCustomElement(class AtuiChipListCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.chips = [];
    }
    init(params) {
        this.params = params;
        this.chips = params.chips(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (h(Host, { key: '60945cecec4fb2fdc798608c84f2a8de5d1f43e6', class: "flex h-full items-center" }, h("atui-chip-list", { key: 'df8e8f3f0a55c1a9fb1d354d03e464f9535f026b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    get el() { return this; }
}, [256, "atui-chip-list-cell", {
        "params": [32],
        "chips": [32]
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
//# sourceMappingURL=p-B5aZP0uz.js.map

//# sourceMappingURL=p-B5aZP0uz.js.map