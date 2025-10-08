import { p as proxyCustomElement, H, d as createEvent, h } from './p-B9UDFE-Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-CG2_IoFa.js';
import { d as defineCustomElement$3 } from './p-DORhZCum.js';
import { d as defineCustomElement$2 } from './p-j-J-vMej.js';
import { d as defineCustomElement$1 } from './p-CMEk0jwv.js';

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
        return (h("at-menu", { key: '5ce7545077a936f45aaa1844df66b0e70ae1c2b4', width: 'auto', align: "end" }, h("at-tooltip", { key: '942826b72bcd69cf39dcd21f14438f9c663b3689', slot: "menu-trigger", position: "top" }, h("at-button", { key: '73f0e9f59dfafcd775162a22b746ca0e8c9f5b64', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '362947112cf1b1b195dc97711caa1abe7e6c3f55' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '6cd1a429d9bc6f1c0b371a208785305b5a04930c' }, h("at-button", { key: '376e3ddc749a332889829597222fa52358ca2f9b', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '7e085a3bf3787e2b281871edae4cd1beeab6dd38', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-wyZ0LHOC.js.map

//# sourceMappingURL=p-wyZ0LHOC.js.map