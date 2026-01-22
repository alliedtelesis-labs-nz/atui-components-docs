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
        return (h("at-menu", { key: '8490920126b4cd072caefdff44383b086053324d', width: "fit-content", align: "end" }, h("at-tooltip", { key: '8fb15031eaad8f3f775f429aa51ce3dcab9a4ac2', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'd1f215af133aa66ca014568048e34fb4908a65e1', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd8333da53acacec25517853140132d8d47af32eb' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '61d33ccff8abbd8b14161428b0707982d538672f' }, h("at-menu-item", { key: '02c5c080740563906fe98608389755df2c8ab655', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'd5b69a745c9011f5f888d8cf930af0f0c595930b', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-Cz35rHOX.js.map

//# sourceMappingURL=p-Cz35rHOX.js.map