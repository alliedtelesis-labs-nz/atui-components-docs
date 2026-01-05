import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-DEfR-Zk2.js';
import { d as defineCustomElement$2 } from './p--m8JsGR8.js';
import { d as defineCustomElement$1 } from './p-CdUod9Pr.js';

const AtTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtTableExportMenu extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
    }
    get el() { return this; }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        return (h("at-menu", { key: 'c5da9b62c5eb6d8ac0fbecefed0d4ff8b82d2443', width: "fit-content", align: "end" }, h("at-tooltip", { key: '62b7791b951d9065037cd58a7ed4b763e0283a49', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4cb4ff8b5ad043677bde872283c40d2f5c0cfe41', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '362d733d211d6221334340beb20d32fe41f198fc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '92f20d8eeb7518a7fd1c59ced65905395f6e3f5e' }, h("at-menu-item", { key: 'e45501e95ae9324602cd31d2d7ee6452c0e23fe4', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '46f113ee37881a1a54b3ecc1950e7d756d5185eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
    }
}, [256, "at-table-export-menu", {
        "translations": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-export-menu", "at-button", "at-loading", "at-menu", "at-menu-item", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-export-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableExportMenu);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-menu-item":
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
//# sourceMappingURL=p-CKKLwvPU.js.map

//# sourceMappingURL=p-CKKLwvPU.js.map