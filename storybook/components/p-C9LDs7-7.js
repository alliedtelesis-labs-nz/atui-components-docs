import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-CneQ50Br.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$2 } from './p-BunMLKfG.js';
import { d as defineCustomElement$1 } from './p-GavH1i81.js';

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
        return (h("at-menu", { key: '5ae0c76cef5d82753f2bf734560d3c2455b606f3', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'dd2b680840d98d13f186cc2fd39f292f3c2cc009', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'cfd5074843dc1b59fe47f0c74f36b14983f0a96a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '7d960ac012774fb70b381a94db93ac4690b18757' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'c219dcb353417eeaec9df007838acff1f8e64a5b' }, h("at-menu-item", { key: 'b5e559b8146087eeda69af84215ee7ef0ddd94f2', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'fdfa72bf3049087fc80476fa012f243524dee14e', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-C9LDs7-7.js.map

//# sourceMappingURL=p-C9LDs7-7.js.map