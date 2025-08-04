import { p as proxyCustomElement, H, d as createEvent, h } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$3 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$2 } from './p-s0ZGYtrg.js';
import { d as defineCustomElement$1 } from './p-CpnV9PUz.js';

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
        return (h("atui-menu", { key: 'eb019fa58204238f6f841749b9f7ff3c9752d922', width: 'auto', align: "end" }, h("atui-tooltip", { key: '53d7ded95b74a451fc9e7b20a65c2b90b6ead7f6', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'b184478053164be85b5d4d73f7ee71380e0a0a8b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '55711746f7eaf1b437321107d5dc834c046c89d3', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '92e546300bb153789cd0eb3c2ad0070163d4a06b', slot: "menu-content" }, h("atui-button", { key: '268df22be715b76a459db57df510ee096c1cf919', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '6cb9ee6092ecd27df6a5b3268ccffcbb4d50f3b8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-D3pHNIi3.js.map

//# sourceMappingURL=p-D3pHNIi3.js.map