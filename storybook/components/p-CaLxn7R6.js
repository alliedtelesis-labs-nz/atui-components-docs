import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$6 } from './p-CS_tFK1i.js';
import { d as defineCustomElement$5 } from './p-BIFgX30f.js';
import { d as defineCustomElement$4 } from './p-CnKCj2oj.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-DEfR-Zk2.js';
import { d as defineCustomElement$1 } from './p-CdUod9Pr.js';

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
        return (h("at-menu", { key: '260a55d693a3f2b273e9d0f854e58e04fff95f9c', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: '17157883d2b1de6f531ebdd565b4bc4db171bb4c', slot: "menu-trigger" }, h("at-tooltip", { key: '0cdcd51597e14a33e53db983e5c339589a280f0a', position: "top" }, h("at-button", { key: '50750aedb5319b89eb5e31e601764a4e411a41f0', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '4cb2adef688ff8ab00dfdd4b4d2f229d05456516' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: '2cefa2674aaef74a7faa108c5d1ecc84f5dbc422', class: "w-fit", options: this.col_defs
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
//# sourceMappingURL=p-CaLxn7R6.js.map

//# sourceMappingURL=p-CaLxn7R6.js.map