import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CHjIMSAP.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-DuXqj3_2.js';
import { d as defineCustomElement$6 } from './p-BMjzo0vz.js';
import { d as defineCustomElement$5 } from './p-pOBhgqek.js';
import { d as defineCustomElement$4 } from './p-DROFJHTo.js';
import { d as defineCustomElement$3 } from './p-DbhUEjmd.js';
import { d as defineCustomElement$2 } from './p-Yk76b9OE.js';
import { d as defineCustomElement$1 } from './p-Dl92gNAv.js';

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
        return (h(Host, { key: 'e49b326c2f3f4c2581e553dadfe10a21edbbb3d6' }, h("atui-menu", { key: '732c72d2edd59dc638b1bae9af146c46fa0a424e', autoclose: false, width: "fit-content", class: "self-start" }, h("atui-tooltip", { key: '601d33ced3c53c7f184f265e4c6692215a9e6b4c', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '2d82bd643ff3852490681c94eabf3cd115f29583', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '2702177078f6e1ada5a2e54451b7a60800f24797', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '8ae2fd4f6a509634c3236db8de33c393817803ef', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: '43e6a307949049b1cd9249a46e232318b094eba0', slot: "menu-content", class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-ChYf5rgc.js.map

//# sourceMappingURL=p-ChYf5rgc.js.map