import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-CGoVUV9r.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-D7IRw6kM.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        return (h("atui-menu", { key: '3570eecf25bfb32aebc5f363ce8061aabd0a85b9', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'b80d1f34613f22091620a48160e807a98d6aa938', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '1214629da55ea198dca629c85024b2a2ec27346e', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b48aa5e79f9571eb9a4c0d38566c3190ed2e4af2', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7feba72303759c4eb6898cd0ca96badd34d896a3', slot: "menu-content" }, h("atui-button", { key: 'ca289f86b8fb593883018922cb9ffd24be681e46', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '7d231ac46882352c2e44960605757c0dd72bb326', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-dhtDopcJ.js.map

//# sourceMappingURL=p-dhtDopcJ.js.map