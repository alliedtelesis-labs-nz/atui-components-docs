import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$3 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$2 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h("atui-menu", { key: '291aae2fc383f713313f08daf7599117e723e790', width: 'auto', align: "end" }, h("atui-tooltip", { key: '0a6f7801d607330a524ea5cd7739fb90bc743a8c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'd26a4d615b35db0891f83b5e1b5334870a7804e0', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'c42b0e056fc0a294858f7bbd946cef4ed817b22f' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '75bcf0818047bea9b154b1ca8736a7abc3a4fea2' }, h("atui-button", { key: '1440c97af8e474749968c12ec958f1fdf13f0c74', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '508f106c47ed156728a875e5f2e58f72400c34fe', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-CFmUDRmA.js.map

//# sourceMappingURL=p-CFmUDRmA.js.map