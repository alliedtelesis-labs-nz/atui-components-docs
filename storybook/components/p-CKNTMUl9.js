import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-DCrgmCxL.js';
import { d as defineCustomElement$6 } from './p-Df2_temq.js';
import { d as defineCustomElement$5 } from './p-Cj1J0V_y.js';
import { d as defineCustomElement$4 } from './p-DUaiIRm3.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-BNT2yQBz.js';

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
        return (h(Host, { key: 'a678f082bc2202bb1e2a54b7ccfd56ae37dc277c' }, h("at-menu", { key: 'a4fdf6dbcee2bb7a25642bee0c66dca9565abfb2', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '4608e1fd279b48869526d9fdc583e653759acc6d', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'ed233296d88d13af64c24875a1a384047f6aa392', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '9d5a07a54145737ba42e53d86c9c6a2ea4566cf9' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '044e12a69c6d33420369d48e5ed8f59a2d9eca03', class: "flex flex-col" }, h("at-checkbox-group", { key: '58e2ff9467d7dbead21864dfbfec038b142e4f40', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-CKNTMUl9.js.map

//# sourceMappingURL=p-CKNTMUl9.js.map