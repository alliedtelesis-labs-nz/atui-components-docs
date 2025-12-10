import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-CKz8F0U4.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$2 } from './p-DKr4t2CX.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

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
        return (h("at-menu", { key: '1334afc74573706f7beb23b48f4b34dd7e2e3e08', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'c6c7af0d33aea3ab4003afa7906c9c361234d26a', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'bd1cec0e0ea5efd3703f1850753618051fad93e2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '5a56258406c1a664026a6ef40044efc2cc6e0ad0' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'a616d3c9f56d00dc71517eda40e8632ceb8032c0' }, h("at-menu-item", { key: '9712e46905e3931bafd80280622c358783b11a9d', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '9fb8ee47838fc9e48a4941cf2700fc7ed1676419', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-CQ6iy0Y_.js.map

//# sourceMappingURL=p-CQ6iy0Y_.js.map