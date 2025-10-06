import { p as proxyCustomElement, H, d as createEvent, h } from './p-_-xuBOrs.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BXHzlZWJ.js';
import { d as defineCustomElement$6 } from './p-VhBaVrJ8.js';
import { d as defineCustomElement$5 } from './p-ChJiJnwI.js';
import { d as defineCustomElement$4 } from './p-KBQbLxfU.js';
import { d as defineCustomElement$3 } from './p-DnZAJRYA.js';
import { d as defineCustomElement$2 } from './p-cDxARn9R.js';
import { d as defineCustomElement$1 } from './p-DZJmpk4T.js';

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
        return (h("at-menu", { key: '395ee3b441d3e6215fb7087e6af80255460c7ad6', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: '742c68ab5dda4000429f0316a3cd594571999a7a', slot: "menu-trigger" }, h("at-tooltip", { key: 'a6b691407ccb5d91a94ddd680b6a7d1305150b41', position: "top" }, h("at-button", { key: 'd2f128467e0414cdd8d23542729c19df9bcdcf5f', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '047faa0258cf815fba480a5afccafac75fcd575c' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: '8dbf6c79ab520c25652bd2592a2fade5b24fe31d', class: "w-fit", options: this.col_defs
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
//# sourceMappingURL=p-BnAwn1Ah.js.map

//# sourceMappingURL=p-BnAwn1Ah.js.map