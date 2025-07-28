import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$6 } from './p-i_ooLqDN.js';
import { d as defineCustomElement$5 } from './p-D6uAy_4U.js';
import { d as defineCustomElement$4 } from './p-CoOWTCxi.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-BAl9Vi-7.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

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
        return (h(Host, { key: 'a510a028cdbbbbc32bc2307e17cde8a3564f901a' }, h("atui-menu", { key: '503e0fe6c8ff4852d657013c02ad3cdcc64e8ce8', autoclose: false, width: "auto", class: "self-start", portal: true }, h("atui-tooltip", { key: '725ccc04a0988b2e724f2d55b87e0a44f3835af6', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '5a14b1ab041c5a2c41d8815590fa2acc452abce4', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '264129cf21431dd031ac1ac30929b64686737c7b', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '35cdb8cd73d28280957927c1cc1fabf877e8172f', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: '3f2db823923be0c742b33b6c6ef099647ac7638b', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-Cs5eIb3v.js.map

//# sourceMappingURL=p-Cs5eIb3v.js.map