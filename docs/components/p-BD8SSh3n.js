import { p as proxyCustomElement, H, d as createEvent, h } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-BOygyBmB.js';
import { d as defineCustomElement$3 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$2 } from './p-CDm6COvb.js';
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
        return (h("atui-menu", { key: '759c53fbe29895ebaa4b3f498bd284bc43621442', width: 'auto', align: "end" }, h("atui-tooltip", { key: '474c55b800909d844553f3b1bac2ebe040095e74', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'b00a2478991c3493e3c34934abf2a45ae21615c8', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '2985c9e0a7921a9cd2c262a32e4a9822936e2c6a', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'd90554b4b26ddab18581fd36b81457c5dda64307', slot: "menu-content" }, h("atui-button", { key: '7a177056498a73aa9d4ebdbea82786363c132710', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: 'dc1b5e4bdae345fc18cee6d78f97c6974a11eda8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-BD8SSh3n.js.map

//# sourceMappingURL=p-BD8SSh3n.js.map