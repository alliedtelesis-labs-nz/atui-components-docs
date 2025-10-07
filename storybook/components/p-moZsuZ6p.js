import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-BcFc6fJK.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-Dq-LpriF.js';
import { d as defineCustomElement$6 } from './p-CJtzjE0u.js';
import { d as defineCustomElement$5 } from './p-CFV6PbiL.js';
import { d as defineCustomElement$4 } from './p-COHhZpy_.js';
import { d as defineCustomElement$3 } from './p-CBwqQuQ7.js';
import { d as defineCustomElement$2 } from './p-Lg8p3TGm.js';
import { d as defineCustomElement$1 } from './p-BE5ysd7K.js';

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
        return (h(Host, { key: '7633c9d7e00b401dbbe0a65c882db9ec0653ba69' }, h("at-menu", { key: 'd6cb04b7ad4aa97a60089a6f611eddb83ad54a2b', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: 'fc17ee2d4cb5b15879666a4b083b4b32335a0e72', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'f6feaae96d2de0d2c4fa9b2a8603c3df5136f566', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'e3464ae959d2796b9704cf56f564141b95c2674d' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '638e68349da73bad3dd0d7eea971e9d710fd9fbe', class: "flex flex-col" }, h("at-checkbox-group", { key: '9f313b4b875e3d861a06f78b640cb2341170f813', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
//# sourceMappingURL=p-moZsuZ6p.js.map

//# sourceMappingURL=p-moZsuZ6p.js.map