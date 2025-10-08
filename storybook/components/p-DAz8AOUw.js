import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-B9UDFE-Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CG2_IoFa.js';
import { d as defineCustomElement$6 } from './p-D4F-cOxq.js';
import { d as defineCustomElement$5 } from './p-ot4rA912.js';
import { d as defineCustomElement$4 } from './p-DQErC-P7.js';
import { d as defineCustomElement$3 } from './p-DORhZCum.js';
import { d as defineCustomElement$2 } from './p-DHd1yjL8.js';
import { d as defineCustomElement$1 } from './p-AQC7HRk_.js';

const AtTableFilterMenu = /*@__PURE__*/ proxyCustomElement(class AtTableFilterMenu extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected filter columns
     */
    selected = [];
    translations;
    get el() { return this; }
    /**
     * Emits selected columns when checkbox selection changes
     */
    atChange;
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
        this.atChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: 'e3dbb195c2e1e29477035d17579324f4cb4ba9f4' }, h("at-menu", { key: 'c8d7c86228c9ca50172eefa638015db02c31c4f4', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '4ce7a30efb439da5b9664e6a6a54f7d3d57fcad7', slot: "menu-trigger", position: "top" }, h("at-button", { key: '9f1d9de5d0d9ad4f37a1f7af976de8ad41303755', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'b2b1e74a05715a296838a96265e0db79e7406bd7' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'e430df408ad7c938e49dd60b0ac63f74118be2c2', class: "flex flex-col" }, h("at-checkbox-group", { key: 'f0151a26e76bd9b489a9cbaa96ec41b52e61f68b', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
}, [256, "at-table-filter-menu", {
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
    const components = ["at-table-filter-menu", "at-button", "at-checkbox", "at-checkbox-group", "at-form-label", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-filter-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableFilterMenu);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-form-label":
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

export { AtTableFilterMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-DAz8AOUw.js.map

//# sourceMappingURL=p-DAz8AOUw.js.map