import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-BwGJVBaO.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-B81B5usX.js';
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
     * Emits id of the clicked button, either 'CSV' or 'PDF'.
     */
    atChange;
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'a41b85dd4f6eb8ef8bebf166f143a70aa842ce51', width: '200px', align: "end" }, h("at-tooltip", { key: '192f633f5b0a60418b242f3229317959591d842f', slot: "menu-trigger", position: "top" }, h("at-button", { key: '83ff5e02abb4508cb13bb9ba1870b537d71bdc81', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '7ebf0723c588312269eab8f14719324ca4edcee1' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'bd1f95a828cc454d12695e30ff61139704ced1da' }, h("at-button", { key: 'a23082ee616cc1771831bec0507404bc7a6eecef', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '8066809ff9cabb481c521503cf01df6a38c6ad88', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
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
//# sourceMappingURL=p-DZLA7vK4.js.map

//# sourceMappingURL=p-DZLA7vK4.js.map