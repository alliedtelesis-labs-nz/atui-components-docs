import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$6 } from './p-Df2_temq.js';
import { d as defineCustomElement$5 } from './p-CkV0VkTP.js';
import { d as defineCustomElement$4 } from './p-BaOP2SR_.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtTableFilterMenu = /*@__PURE__*/ proxyCustomElement(class AtTableFilterMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atChange = createEvent(this, "atChange", 7);
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
        this.atChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: '740e3b3ddea854f5729d6eb39433b08f6b310ee7' }, h("at-menu", { key: '4e6890727ee7108afe6c8ae6167919c137825bc3', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '236b3ebb6fe3d78b36d461cca79ade4a36304e7e', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'dd6de522a03a6b7e67941826bd81134c4907e028', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '527488b281751faa1d1dbbef48b9749bba12d9da' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '77d59766bb94bde944f5d71e2b8afd0c67b07169', class: "flex flex-col" }, h("at-checkbox-group", { key: '3b01680074d0065f3e43147dee0c18d78db9f220', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-BXc3porp.js.map

//# sourceMappingURL=p-BXc3porp.js.map