import { p as proxyCustomElement, H, d as createEvent, h } from './p-BRRmBK9P.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-nHcnaAyy.js';
import { d as defineCustomElement$3 } from './p-CIqSXlz0.js';
import { d as defineCustomElement$2 } from './p-Bra11bSv.js';
import { d as defineCustomElement$1 } from './p-CB1W_yTO.js';

const AtTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtTableExportMenu extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'b7ca749f0da767dedd8c40c415ff06345db93ca4', width: 'auto', align: "end" }, h("at-tooltip", { key: '01d43e72f58aab6eec98c33d3714f4cde93a6625', slot: "menu-trigger", position: "top" }, h("at-button", { key: '2376f8accd88d361943b403f7132c15c47f4bfba', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad1101b918860e6d24853c48e55db89f4caed4ce' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '1bf7b05a2a3438e07d5979d98ba30cc593a6f542' }, h("at-button", { key: '56c37fb1bc0ef2fb14cd2c3216ff1b17df9b328f', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '9a6e9f6192819d54b3cb61adc50b950e15e1811c', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-ChTf2WB9.js.map

//# sourceMappingURL=p-ChTf2WB9.js.map