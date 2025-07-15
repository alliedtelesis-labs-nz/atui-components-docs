import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$4 } from './p-DuzY8Lpl.js';
import { d as defineCustomElement$3 } from './p-BOygyBmB.js';
import { d as defineCustomElement$2 } from './p-CM_cAdTk.js';
import { d as defineCustomElement$1 } from './p-Bxc6CMPN.js';

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
        return (h(Host, { key: '1288df72f2210935688c5ce296fbe561a9059160', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'f6961ae1f7281c7e0448d7284e14c6e305730dd4', chips: this.params.value, show_clear_all: false, disabled: true })));
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
//# sourceMappingURL=p-DUBjOKw_.js.map

//# sourceMappingURL=p-DUBjOKw_.js.map