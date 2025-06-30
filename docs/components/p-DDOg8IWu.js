import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-CDu8lP-T.js';
import { d as defineCustomElement$4 } from './p-CNIPth1r.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

const AtuiTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtuiTableExportMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atuiChange.emit(event.target.id);
    }
    render() {
        return (h("atui-menu", { key: 'd661b503ad685a628f808747771971acbbf3fc4b', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'eaca7b1f5c3837892d25cb874c6591e5a3d86696', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '39798e36b89800615332b7d4f25b791b51ad5c1b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b30a788616f8108db4fcad6daa71aca78103c080', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'd7ff9c190c6ddf2381469d7a83cdb82b6dd37456', slot: "menu-content" }, h("atui-button", { key: 'c771a7945ce0f8450f811b0f1959b0519077233a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '51ff3f9dfdd8c35f776534d4500f6bb76ca5cddd', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
}, [0, "atui-table-export-menu", {
        "translations": [32]
    }, [[0, "atuiClick", "clickHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-export-menu", "atui-button", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-export-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableExportMenu);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTableExportMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-DDOg8IWu.js.map

//# sourceMappingURL=p-DDOg8IWu.js.map