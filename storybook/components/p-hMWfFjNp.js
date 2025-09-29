import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-DCrgmCxL.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-BNT2yQBz.js';

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
        return (h("at-menu", { key: 'f8c06150b731d42b23cb32dd52172c0142bdb0b3', width: 'auto', align: "end" }, h("at-tooltip", { key: '601aef369ae3eef9740fc8a235bf1fac1bc3efee', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'ddfedd17a136f218cc498c43609c3c17a962a508', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'c7e31df6b47b070a515aa125985f9bf9f35ec9b9' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '0c506d591d53198b9f9bf7d557c32c4cfbd54c68' }, h("at-button", { key: '7f336b3b5bace246b9a288edf4e1ce7fc5ecbd05', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: 'f52ad211a9eaa8f1046d6637397fb173a6d87bb9', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-hMWfFjNp.js.map

//# sourceMappingURL=p-hMWfFjNp.js.map