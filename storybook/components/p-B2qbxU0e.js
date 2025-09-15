import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtTableExportMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atChange = createEvent(this, "atChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'a4fe3f274fadc4cffddeb873314cc0c1b13856ce', width: 'auto', align: "end" }, h("at-tooltip", { key: 'd6c3c6473f455258f275c3242ff53c7baba65b55', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4ce03be5d5a7284d3482ccbe098d1dd75a7ec403', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '18ef67c15b8e1cbac775375771b3d7d65f5d2c88' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '91a82a7758d1dc439e9f481179190905551dd2ba' }, h("at-button", { key: '5b262b59ba52b49b1f03757b84690cf64a0ce374', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '847a6d67f1521b4726ae0d8a6c2c1dad3c22db31', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
}, [256, "at-table-export-menu", {
        "translations": [32]
    }, [[0, "atuiClick", "clickHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-export-menu", "at-button", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-export-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableExportMenu);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTableExportMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-B2qbxU0e.js.map

//# sourceMappingURL=p-B2qbxU0e.js.map