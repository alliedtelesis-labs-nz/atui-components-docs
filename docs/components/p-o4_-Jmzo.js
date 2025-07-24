import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-VjTTylTi.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-q1ydcm97.js';
import { d as defineCustomElement$1 } from './p-DRSCT2MW.js';

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
        return (h("atui-menu", { key: 'bb147da252a9621d4e9ada81f676da3eae119b1d', width: 'auto', align: "end" }, h("atui-tooltip", { key: '15ea60fc5c3fd4a1482deecc67188350efb9e77e', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '187f59d7eb5ceee45f837314dd3ff2f035c05bca', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '8348d4315c36b63c112a9a6e728dc6c651783812', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7a396f66cf39794ba67f4e9925a55473ac5b950a', slot: "menu-content" }, h("atui-button", { key: 'a6c86a2a19124cd0f29fe8e614d6cc32bfd5f918', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: 'e7082243faaec3a1ca63a3a7671a9c900abfc395', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
}, [256, "atui-table-export-menu", {
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
//# sourceMappingURL=p-o4_-Jmzo.js.map

//# sourceMappingURL=p-o4_-Jmzo.js.map