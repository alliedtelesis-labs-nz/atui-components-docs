import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-CDu8lP-T.js';
import { d as defineCustomElement$7 } from './p-CNIPth1r.js';
import { d as defineCustomElement$6 } from './p-BlymWuVg.js';
import { d as defineCustomElement$5 } from './p-CJRdicyN.js';
import { d as defineCustomElement$4 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: '38ec8d74c53a0eed7d555531a5d2e30fea05266e' }, h("atui-menu", { key: 'b29301ea4395c1afc66675d65bd1f7c49487956d', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '8c46d2bdb7c0f226b3a7da860d74aa7608da5753', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '741486073e07aee31cbb8c54df9429ddbf7046c6', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'a6ab27c113ed85f51f9cd5c67eb59f3a352dea29', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("atui-checkbox-group", { key: '03b136ceeb899bed13dadda0946e9281367e8609', slot: "menu-content", options: this.filteredColumns, value: this.selected, onChange: (event) => this.handleColumnSelect(event) }))));
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
//# sourceMappingURL=p-D4mxcQcL.js.map

//# sourceMappingURL=p-D4mxcQcL.js.map