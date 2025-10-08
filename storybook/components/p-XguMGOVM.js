import { p as proxyCustomElement, H, d as createEvent, h } from './p-B9UDFE-Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CG2_IoFa.js';
import { d as defineCustomElement$6 } from './p-D4F-cOxq.js';
import { d as defineCustomElement$5 } from './p-ot4rA912.js';
import { d as defineCustomElement$4 } from './p-DQErC-P7.js';
import { d as defineCustomElement$3 } from './p-DORhZCum.js';
import { d as defineCustomElement$2 } from './p-DHd1yjL8.js';
import { d as defineCustomElement$1 } from './p-AQC7HRk_.js';

const AtColumnManagerComponent = /*@__PURE__*/ proxyCustomElement(class AtColumnManagerComponent extends H {
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
    get el() { return this; }
    translations;
    checkedColumns = [];
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.initializeCheckedColumns();
    }
    colDefsChanged() {
        this.initializeCheckedColumns();
    }
    initializeCheckedColumns() {
        if (this.col_defs) {
            this.checkedColumns = this.col_defs
                .filter((colDef) => colDef.hide !== true)
                .map((colDef) => colDef.field);
        }
    }
    /**
     * Custom event used by at-table-actions to perform ag-grid logic
     *
     * Emitted when checkbox is clicked
     */
    atChange;
    changeHandler(event) {
        const selectedColumns = event.detail || [];
        const previousColumns = new Set(this.checkedColumns);
        const currentColumns = new Set(selectedColumns);
        selectedColumns.forEach((columnId) => {
            if (!previousColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: true,
                });
            }
        });
        Array.from(previousColumns).forEach((columnId) => {
            if (!currentColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: false,
                });
            }
        });
        this.checkedColumns = selectedColumns;
    }
    render() {
        return (h("at-menu", { key: 'dbc91b2bccf02fadf513dbe3ac8d6fc6686d39cd', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: '933a17db215c3231f0695bf775cfedf6bb029133', slot: "menu-trigger" }, h("at-tooltip", { key: 'e3a5e09955228d4e18c2515030b017c0d9d816c4', position: "top" }, h("at-button", { key: '2668d047d685f15d535bae0ca1e0787ff398b6b0', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '81bec4ecdf18385647eedf8935697362725731b2' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'd2adbc44ff550d811980d5099308922547bab4aa', class: "w-fit", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onAtuiChange: (event) => this.changeHandler(event) })));
    }
    static get watchers() { return {
        "col_defs": ["colDefsChanged"]
    }; }
}, [256, "at-column-manager", {
        "col_defs": [16],
        "translations": [32],
        "checkedColumns": [32]
    }, undefined, {
        "col_defs": ["colDefsChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-column-manager", "at-button", "at-checkbox", "at-checkbox-group", "at-form-label", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-column-manager":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtColumnManagerComponent);
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

export { AtColumnManagerComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-XguMGOVM.js.map

//# sourceMappingURL=p-XguMGOVM.js.map