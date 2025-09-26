import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$4 } from './p-anL6prWM.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-D-MOVsDh.js';

const AtTableExportMenu = /*@__PURE__*/ proxyCustomElement(class AtTableExportMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atChange = createEvent(this, "atChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'b60049a2db3d8b1aa8a22b1e4f09882c3246b7f7', width: 'auto', align: "end" }, h("at-tooltip", { key: '9a64174ce015a55d8e6aa601ca6c80013cda02e6', slot: "menu-trigger", position: "top" }, h("at-button", { key: '9cee75e7fe3a082fddf40cdf26779f30515643ba', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd42179f44186c6d25934ca08e1f0646bf20dba92' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'f9ef887b2977d1372fd8aa46a812d98cc5f1adc7' }, h("at-button", { key: '21e970573a25ec9b4c39514ecbae4023a6740308', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '89ddba0f7e3ab6dd133e0548d3bb249228287385', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
//# sourceMappingURL=p-9kDQ_DVx.js.map

//# sourceMappingURL=p-9kDQ_DVx.js.map