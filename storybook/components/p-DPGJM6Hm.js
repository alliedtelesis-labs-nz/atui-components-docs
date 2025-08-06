import { p as proxyCustomElement, H, d as createEvent, h } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$3 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$2 } from './p-DesEWVbY.js';
import { d as defineCustomElement$1 } from './p-D9Wtum9m.js';

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
        return (h("atui-menu", { key: '291aae2fc383f713313f08daf7599117e723e790', width: 'auto', align: "end" }, h("atui-tooltip", { key: '0a6f7801d607330a524ea5cd7739fb90bc743a8c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'd26a4d615b35db0891f83b5e1b5334870a7804e0', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'a0bfbf8bc1bb8b4bca1254bbadae05ef44a04073', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '77afc4ed027f35ee83cc950831497d1316ed8c7d', slot: "menu-content" }, h("atui-button", { key: '21250255ca5415420a61aa43970b22a4c1242657', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '816b08d86708147ecc1c90c24968ddb390902988', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-DPGJM6Hm.js.map

//# sourceMappingURL=p-DPGJM6Hm.js.map