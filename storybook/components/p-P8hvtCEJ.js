import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-BAl9Vi-7.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

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
        return (h("atui-menu", { key: 'e2b74f5723726012ed929c068c58da2e34719f2a', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'da2ce5940c24fec0dc5c99772277a35e90c80d8f', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '91e8ed1a6ab29e8e5b1645a9ff652b236a455815', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd587c3ce40750d4b5ed6ccc2a6a7d0e2fc59c124', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '81ec14e73ce5ca7b1793ab17d94f12a04d724552', slot: "menu-content" }, h("atui-button", { key: 'a6565c3dbf5c5bc770b9c4767991d2ffa102ef50', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '166c40156c567efe4dcbe88aef6d2b5d8efc88d3', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-P8hvtCEJ.js.map

//# sourceMappingURL=p-P8hvtCEJ.js.map