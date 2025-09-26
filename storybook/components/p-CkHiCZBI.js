import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$4 } from './p-DgHX4Tx7.js';
import { d as defineCustomElement$3 } from './p-anL6prWM.js';
import { d as defineCustomElement$2 } from './p-DL56RkP1.js';
import { d as defineCustomElement$1 } from './p-pDYyfeah.js';

const AtChipListCell = /*@__PURE__*/ proxyCustomElement(class AtChipListCell extends H {
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
        return (h(Host, { key: '066bd84aedbd02d58c687149bb74719943a442ff', class: "flex h-full items-center" }, h("at-chip-list", { key: '88a14e9b7b3fecc707b90fbd9c49532e611e33c5', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-CkHiCZBI.js.map

//# sourceMappingURL=p-CkHiCZBI.js.map