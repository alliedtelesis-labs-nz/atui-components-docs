import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CGoVUV9r.js';
import { d as defineCustomElement$6 } from './p-D2IbPMfh.js';
import { d as defineCustomElement$5 } from './p-DOfwEWFU.js';
import { d as defineCustomElement$4 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-D7IRw6kM.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

const AtuiTableFilterMenu = /*@__PURE__*/ proxyCustomElement(class AtuiTableFilterMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Currently selected filter columns
         */
        this.selected = [];
    }
    get filteredColumns() {
        return this.col_defs
            .filter((colDef) => colDef.field !== 'Checkbox')
            .map((colDef) => ({
            option_id: colDef.field,
            label: colDef.field,
        }));
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleSelectedChange(newValue) {
        this.selected = newValue || [];
    }
    handleColumnSelect(event) {
        const newValue = event.detail || [];
        this.selected = newValue;
        this.atuiChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: '027dec2a9a487337afffd0ef058d3bdc3f54318b' }, h("atui-menu", { key: 'd3f986b5c2345f1fee4f908b87ad80068d2c6172', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '764547c881af95a53b8bdd1bfa97556ed0a82b52', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '024448a35dfbcb1e5c8369a76487d7e50dfa0be5', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '201ba1aafde5d3e982a6c290c946d87f6d7f1594', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("atui-checkbox-group", { key: 'dcc357252a35a96c71f18b1fe4281ac239305593', slot: "menu-content", options: this.filteredColumns, value: this.selected, onChange: (event) => this.handleColumnSelect(event) }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
}, [0, "atui-table-filter-menu", {
        "col_defs": [16],
        "selected": [1040],
        "translations": [32]
    }, undefined, {
        "selected": ["handleSelectedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-filter-menu", "atui-button", "atui-checkbox", "atui-checkbox-group", "atui-form-label", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-filter-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableFilterMenu);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-form-label":
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

export { AtuiTableFilterMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-xv7209D0.js.map

//# sourceMappingURL=p-xv7209D0.js.map