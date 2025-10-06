import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-_-xuBOrs.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BXHzlZWJ.js';
import { d as defineCustomElement$6 } from './p-VhBaVrJ8.js';
import { d as defineCustomElement$5 } from './p-ChJiJnwI.js';
import { d as defineCustomElement$4 } from './p-KBQbLxfU.js';
import { d as defineCustomElement$3 } from './p-DnZAJRYA.js';
import { d as defineCustomElement$2 } from './p-cDxARn9R.js';
import { d as defineCustomElement$1 } from './p-DZJmpk4T.js';

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
        return (h(Host, { key: 'fa4d52dddfd70c189e40219bbc5561916ca509d1' }, h("at-menu", { key: '221845576124e28f5d681e45d1feb64dbfec3de2', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '5dae003e89486fe8487710d177a738fb730f02fd', slot: "menu-trigger", position: "top" }, h("at-button", { key: '4e991ad5b2370f0f865a7fd042f8bc15337f4c19', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '7d8c4c2ebc8616cd8f4f86437e2e32b551074798' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'fdd56ffbf31d934a9edfde9db41a3bd294c8e6db', class: "flex flex-col" }, h("at-checkbox-group", { key: 'ab0c0a78241c1e2eff0f88a2ee794372dd14f688', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-B1vX6Bet.js.map

//# sourceMappingURL=p-B1vX6Bet.js.map