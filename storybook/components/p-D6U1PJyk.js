import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$6 } from './p-CS_tFK1i.js';
import { d as defineCustomElement$5 } from './p-BIFgX30f.js';
import { d as defineCustomElement$4 } from './p-CnKCj2oj.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-DEfR-Zk2.js';
import { d as defineCustomElement$1 } from './p-CdUod9Pr.js';

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
        return (h(Host, { key: 'b0ddd071f90f02f302ab4ab561ce707f911002c0' }, h("at-menu", { key: '8a319a63b74242215254b8a8a9b604c2db2ecdbf', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: 'b6b7ec02bfe63478e90156b32d480696661db144', slot: "menu-trigger", position: "top" }, h("at-button", { key: '78417818748ac2c3e4f5df2267cd02df1226b6c6', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '321436de5e0095ce56ffe638b8c566aa8db0232b' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'e5ee73fceecee50e7dc4a8d0c0b83998ebfadfa3', class: "flex flex-col" }, h("at-checkbox-group", { key: '7929ca66048d884796a850c3b47f458a14100926', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-D6U1PJyk.js.map

//# sourceMappingURL=p-D6U1PJyk.js.map