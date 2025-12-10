import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CneQ50Br.js';
import { d as defineCustomElement$6 } from './p-DF-2ncG7.js';
import { d as defineCustomElement$5 } from './p-6ZhdjdcM.js';
import { d as defineCustomElement$4 } from './p-DS8rd89A.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

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
        return (h(Host, { key: '9488b5e1339cb1e20913ac7a2a6f9e94954298fb' }, h("at-menu", { key: 'ba7c307184f74729a763a47efed601b2afa0601e', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '01da92a337f95a7259f5a957659f34aca84f09fb', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'bd0724e70754a570fa6116436dfed9414f7e70b1', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '584b95a9db331d4d6220f87f52a2e632be049f2b' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'b74f7dce6d190bddb4a380e11c1f1e5b8ab6743d', class: "flex flex-col" }, h("at-checkbox-group", { key: '394e3468cbf660359bc952b7d18bdc1807ef4c4e', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-C9tYSJd4.js.map

//# sourceMappingURL=p-C9tYSJd4.js.map