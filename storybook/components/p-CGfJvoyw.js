import { p as proxyCustomElement, H, d as createEvent, h } from './p-_-xuBOrs.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-BXHzlZWJ.js';
import { d as defineCustomElement$3 } from './p-DnZAJRYA.js';
import { d as defineCustomElement$2 } from './p-cDxARn9R.js';
import { d as defineCustomElement$1 } from './p-DZJmpk4T.js';

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
        return (h("at-menu", { key: '708c9a46c3474e8459331170cf2a82ebaf2427ff', width: 'auto', align: "end" }, h("at-tooltip", { key: '57b1937be65c34d6337b0922c6b3470a2e1cdd55', slot: "menu-trigger", position: "top" }, h("at-button", { key: '18d2bd50d4cede62555aa02b7f969e00b8ae7616', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '4efe2ff549e3a009c159a97230b6fc11e221437f' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7264ec0c8aa98d10347e8892e3d5cf410c4c9c5d' }, h("at-button", { key: '76714a9779abd29df0a027fc4a872f4c4768fde5', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '9d1c9d20a5d12453d110ca747760c29938558278', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-CGfJvoyw.js.map

//# sourceMappingURL=p-CGfJvoyw.js.map