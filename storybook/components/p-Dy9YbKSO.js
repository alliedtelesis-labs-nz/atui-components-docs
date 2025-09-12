import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$6 } from './p-CullAxsK.js';
import { d as defineCustomElement$5 } from './p-BIyyzulI.js';
import { d as defineCustomElement$4 } from './p-C65WlsXe.js';
import { d as defineCustomElement$3 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$2 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h(Host, { key: 'e49b326c2f3f4c2581e553dadfe10a21edbbb3d6' }, h("atui-menu", { key: '732c72d2edd59dc638b1bae9af146c46fa0a424e', autoclose: false, width: "fit-content", class: "self-start" }, h("atui-tooltip", { key: '601d33ced3c53c7f184f265e4c6692215a9e6b4c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '2d82bd643ff3852490681c94eabf3cd115f29583', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'a57024cbacab313aa7d706bdf8f77b0e5c97d248' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '08825d5b2f602e9127f218628fd2581ba1604189', class: "flex flex-col" }, h("atui-checkbox-group", { key: '94589ab2d1637d331c080faf4bad7262948db959', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
}, [256, "atui-table-filter-menu", {
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
//# sourceMappingURL=p-Dy9YbKSO.js.map

//# sourceMappingURL=p-Dy9YbKSO.js.map