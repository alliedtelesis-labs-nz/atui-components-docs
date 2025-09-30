import { p as proxyCustomElement, H, d as createEvent, h } from './p-Bx9nFool.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$3 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$2 } from './p-DmKmq4RT.js';
import { d as defineCustomElement$1 } from './p-CDDohbWp.js';

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
        return (h("at-menu", { key: '6e873ab59cf2f7c95717d744e83676b4803713c0', width: 'auto', align: "end" }, h("at-tooltip", { key: '64a660a2d3fcc6878799041c243c18884d280fc2', slot: "menu-trigger", position: "top" }, h("at-button", { key: '29f4e9f57e92395542e5287cbb0a694e66c644d2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '33eb172cad9d3fb1ca90c1d0e93538efe939ddbc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'aeff5dac94979ea05430e06433c98a5b5863133f' }, h("at-button", { key: '965b82ffbcd25e64f00db2624521512d0601271d', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: 'fed3f7d4e78bc73cb922aa683682c7bdd33a4d40', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-B2RGfBWq.js.map

//# sourceMappingURL=p-B2RGfBWq.js.map