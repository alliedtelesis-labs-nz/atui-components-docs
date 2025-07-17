import { p as proxyCustomElement, H, d as createEvent, h } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-BkUGamka.js';
import { d as defineCustomElement$3 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$2 } from './p-DrInZzUc.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtuiTableExportMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atuiChange.emit(event.target.id);
    }
    render() {
        return (h("atui-menu", { key: 'f48579b701c1f0edbff730af90a0a23ea02ca4de', width: 'auto', align: "end" }, h("atui-tooltip", { key: '5782ab6770f7130d50f68974a129791221edcb61', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'a78a2ba87f082124aeb0bad8b5988bb44764edfa', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '985170b1d73728c97d38ed1dd403ad8f2fcc3ef3', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '99c4e39c4f9ab6f41f3a3de3a69aaa5777b0c9a3', slot: "menu-content" }, h("atui-button", { key: '0fe522b2ea7768990efa155a4bb56d3d2dbb4a03', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '88b206aa2c838749f548db5c117713a5ce6bf006', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
}, [0, "atui-table-export-menu", {
        "translations": [32]
    }, [[0, "atuiClick", "clickHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-export-menu", "atui-button", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-export-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableExportMenu);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-menu":
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

export { AtuiTableExportMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-Dlg0fYrx.js.map

//# sourceMappingURL=p-Dlg0fYrx.js.map