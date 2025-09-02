import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BkB7yMfB.js';
import { d as defineCustomElement$6 } from './p-BjeWQPdc.js';
import { d as defineCustomElement$5 } from './p-ByKYx6Hh.js';
import { d as defineCustomElement$4 } from './p-cJhPHVMD.js';
import { d as defineCustomElement$3 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$2 } from './p-C6qlH9rK.js';
import { d as defineCustomElement$1 } from './p-CSWbCoPk.js';

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
        return (h(Host, { key: 'af85093d06745ef3a292e35800c6be9188cc24ec' }, h("atui-menu", { key: 'cc5df41a04472c07e7773e1dbace21c91cd2710f', autoclose: false, width: "fit-content", class: "self-start" }, h("atui-tooltip", { key: 'a290556f2ffb18c340d5091a46d3fc3fb9157e76', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '45cb5de34757464b99f365b477728a7ed69ff941', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '9ed3c9f66365be2d20cd912b753fa5749905b3e6' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'baf74a350f61fc62083424a024ad304c7aaf4347', class: "flex flex-col" }, h("atui-checkbox-group", { key: 'b624a05940a6fecc2ce1b4ff14c538e477c7d6d0', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-D7K5Evug.js.map

//# sourceMappingURL=p-D7K5Evug.js.map