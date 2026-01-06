import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$4 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$3 } from './p-BGpJJIcC.js';
import { d as defineCustomElement$2 } from './p-Dxjg9i_G.js';
import { d as defineCustomElement$1 } from './p-bn76tgB4.js';

const AtChipListCell = /*@__PURE__*/ proxyCustomElement(class AtChipListCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    params;
    chips = [];
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
        return (h(Host, { key: '1a9819e12605b66c8415d9b8c01cb2f8fe02abe6', class: "flex h-full items-center" }, h("at-chip-list", { key: '43242eb869f25b32f00f31f09750e1832a913eeb', chips: this.chips, show_clear_all: false, readonly: true })));
    }
}, [256, "at-chip-list-cell", {
        "params": [32],
        "chips": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-chip-list-cell", "at-badge", "at-button", "at-chip-list", "at-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "at-chip-list-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtChipListCell);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-chip-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtChipListCell as A, defineCustomElement as d };
//# sourceMappingURL=p-nJ6f8Bk1.js.map

//# sourceMappingURL=p-nJ6f8Bk1.js.map