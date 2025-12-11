import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CneQ50Br.js';
import { d as defineCustomElement$6 } from './p-DF-2ncG7.js';
import { d as defineCustomElement$5 } from './p-CWPWF70m.js';
import { d as defineCustomElement$4 } from './p-CGXPhA5w.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$1 } from './p-GavH1i81.js';

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
        return (h(Host, { key: 'c6c8e76de40879b50d4e02e0ea9c136d168eda63' }, h("at-menu", { key: '388f869f0c3c8a79f813bc5112aae14c085cbbef', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '79664e2e4a16c4e6a75a340427dd9ce646414780', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'd7ef043423ff497bc719c8b77fc62579d65c67a9', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'c9398890b1936d5d014bc4ed732223fb22648f07' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '584f1d954a5490d72a2d99ddc8d23e108466bb21', class: "flex flex-col" }, h("at-checkbox-group", { key: '523d6c2a2aaabd022a83596b8cf4ce805fe3b094', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-a5xil2Ot.js.map

//# sourceMappingURL=p-a5xil2Ot.js.map