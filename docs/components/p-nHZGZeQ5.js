import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-DpoOUufO.js';
import { d as defineCustomElement$6 } from './p-BwhlSt5K.js';
import { d as defineCustomElement$5 } from './p-Dmdyugc1.js';
import { d as defineCustomElement$4 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-FL7N6jaz.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: 'bb481946394e723d7c4466ba8346c3bc36ddd86f' }, h("atui-menu", { key: 'af3c16995b3b63c98fe363cbceec53bc8b18e099', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '9f357747c3efa4da3fd79e88d7c6a923865196aa', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '702f28a5da199d15cdfec51f3f8eb328cc4598ed', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '31a4cc7d08d6e8b9395b01be29f48acdb760bfef', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'a2fd296eaccc8de1b2de0f1b6bfa9e29c33afb60', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: 'e2690f3f808e74779102785b968c525c692af44c', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-nHZGZeQ5.js.map

//# sourceMappingURL=p-nHZGZeQ5.js.map