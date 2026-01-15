import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-CSzxFmVR.js';
import { d as defineCustomElement$2 } from './p-DPKxJNLQ.js';
import { d as defineCustomElement$1 } from './p-BlmpD1px.js';

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
        return (h("at-menu", { key: '74709471b0f1aad97ab1d5a41269cbc495a0b5e4', width: "fit-content", align: "end" }, h("at-tooltip", { key: '89e532dcee45a8f911f246dc594afc967f9fa655', slot: "menu-trigger", position: "top" }, h("at-button", { key: '86e6b2cb254138970ec0d9bda4d810696514cb7a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad8a57280b1e6a3cad0203ef604166f3cc558ab2' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'a1e9b5359b10fe75a97286d2f0ec3b5c384a488f' }, h("at-menu-item", { key: '8f5b8b72ed79203e44c2b26ecdd5c06795b0d188', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'a365569174bd10af1a0696e472c361660588d4eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-Dh5iHdr_.js.map

//# sourceMappingURL=p-Dh5iHdr_.js.map