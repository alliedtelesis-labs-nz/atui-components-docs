import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-DpoOUufO.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-FL7N6jaz.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h("atui-menu", { key: 'ce73f9d409bbab38ffe391467088f907016cbcd5', width: 'auto', align: "end" }, h("atui-tooltip", { key: '64ab1841d484c28483d723c8031f2234c837e016', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '6708b7747c84ac1d4e8d08abe7033ee8b809a6e7', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '381e2a1944325adb8d249fdbcceef36cbdd8caca', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'f5e9d74db805c230fe3e2804a11a75ef2959c6c4', slot: "menu-content" }, h("atui-button", { key: '949f8d030bd563a53fb4ff0045011b0ac987ba4e', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '3cde9999b2346d381a7090c7b25d6d808183989a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
}, [256, "atui-table-export-menu", {
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
//# sourceMappingURL=p-D2NBH946.js.map

//# sourceMappingURL=p-D2NBH946.js.map