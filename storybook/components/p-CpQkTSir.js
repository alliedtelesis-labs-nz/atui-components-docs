import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-BGpJJIcC.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-CSzxFmVR.js';
import { d as defineCustomElement$2 } from './p-DPKxJNLQ.js';
import { d as defineCustomElement$1 } from './p-DLJt5gbB.js';

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
        return (h("at-menu", { key: '24e16ab32e7f58d1222f0f3aa41663fe08da1e8d', width: "fit-content", align: "end" }, h("at-tooltip", { key: '3f3ef8c0c76a2425fa8ede6a288927afcda8963a', slot: "menu-trigger", position: "top" }, h("at-button", { key: '87d5c9d0503303df3be2f7e73929fc4aff4cb4df', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '14763b02959cb43c94381a04746c1a9ba0af8e51' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '8bb03302a4e06ac77d08ddd8a6f9184880694387' }, h("at-menu-item", { key: '638f9c081b7bfe4fb1e6e1e904c0d46da0424c9e', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'fa936e5a682b14e13e09a368354cd593b89b9e69', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-CpQkTSir.js.map

//# sourceMappingURL=p-CpQkTSir.js.map