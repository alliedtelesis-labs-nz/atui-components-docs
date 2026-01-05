import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-DHT6iuTT.js';
import { d as defineCustomElement$2 } from './p-Bze1hNPA.js';
import { d as defineCustomElement$1 } from './p-DOs9EXMS.js';

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
        return (h("at-menu", { key: 'ab456eaef718474084bce8cc04090093f05169aa', width: "fit-content", align: "end" }, h("at-tooltip", { key: '542c8d1b2d35ed844100f67a718c91552a25ee13', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'c276fb65c6418fe1d3cc212d321b7f502a534564', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '6c8febc1bef3d449992a7f5b9b18e76f8f1a8c6d' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'e1c7c5ba6c216c4d7d4550880116c8352de3f082' }, h("at-menu-item", { key: 'ab304e9ab70f97dfc913677b2553a2904962382b', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '61084621cc09e7aa504d470c5234532925bb3aee', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-ClXhKI0W.js.map

//# sourceMappingURL=p-ClXhKI0W.js.map