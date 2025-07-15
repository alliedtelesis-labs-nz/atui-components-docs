import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BOygyBmB.js';
import { d as defineCustomElement$6 } from './p-DQB8otHh.js';
import { d as defineCustomElement$5 } from './p-hkaXAVmf.js';
import { d as defineCustomElement$4 } from './p-Desv48Pq.js';
import { d as defineCustomElement$3 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$2 } from './p-CDm6COvb.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

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
        return (h(Host, { key: '50170c4379c16843edb4c1b83bb365f29d897c47' }, h("atui-menu", { key: 'c80285a33cecc5a020ad9a153ebf7ba9457feaac', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '591d6b0e1d0e04b7d951d9ab687dd4f965946826', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'd7b458482c23e8e2294c203d893e8a984f9cb19d', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '9d9371f08a0941d5807b2ccf144791d6b4e7a54e', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("atui-checkbox-group", { key: '5c25453cd10b5f4bbcd50a898b58437cdd79ed42', slot: "menu-content", options: this.filteredColumns, value: this.selected, onChange: (event) => this.handleColumnSelect(event) }))));
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
//# sourceMappingURL=p-ByMesEsF.js.map

//# sourceMappingURL=p-ByMesEsF.js.map