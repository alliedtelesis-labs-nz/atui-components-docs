import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-BT8_JQR7.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-C1-3O-ig.js';
import { d as defineCustomElement$2 } from './p-BTi5B4eH.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';

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
        return (h("at-menu", { key: 'ba1e9cd425fb6ea88ec41af83868cea7b50812e3', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'f86876852f6f1adbf97e97c073b927569d4e90ec', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'cfcacf884037fcc2d068da9bd91fad6db095e72f', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '07da416d05fb44105b478b5c6284b8d9bef65078' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '10c3182411a53c4da069c10e93b516f801673ce2' }, h("at-menu-item", { key: 'eed5e80065df3f9eac582a8ad229c0b36a7cd5ab', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'aa0fd42a87d38a5c95eb16f52dc6d0307dbda8b1', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
//# sourceMappingURL=p-CdD2UxCZ.js.map

//# sourceMappingURL=p-CdD2UxCZ.js.map