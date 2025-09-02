import { p as proxyCustomElement, H, d as createEvent, h } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BkB7yMfB.js';
import { d as defineCustomElement$6 } from './p-BjeWQPdc.js';
import { d as defineCustomElement$5 } from './p-ByKYx6Hh.js';
import { d as defineCustomElement$4 } from './p-cJhPHVMD.js';
import { d as defineCustomElement$3 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$2 } from './p-C6qlH9rK.js';
import { d as defineCustomElement$1 } from './p-CSWbCoPk.js';

const AtuiColumnManagerComponent = /*@__PURE__*/ proxyCustomElement(class AtuiColumnManagerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.checkedColumns = [];
    }
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
    changeHandler(event) {
        const selectedColumns = event.detail || [];
        const previousColumns = new Set(this.checkedColumns);
        const currentColumns = new Set(selectedColumns);
        selectedColumns.forEach((columnId) => {
            if (!previousColumns.has(columnId)) {
                this.atuiChange.emit({
                    id: columnId,
                    checked: true,
                });
            }
        });
        Array.from(previousColumns).forEach((columnId) => {
            if (!currentColumns.has(columnId)) {
                this.atuiChange.emit({
                    id: columnId,
                    checked: false,
                });
            }
        });
        this.checkedColumns = selectedColumns;
    }
    render() {
        return (h("atui-menu", { key: 'dde2170e89d20cc77be3efebdc33357c7d2bb9bc', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: '4eb63c40fda354a4631630672f153324dc5dbacc', slot: "menu-trigger" }, h("atui-tooltip", { key: 'c80a18df2f94131c4ac7868a188e88946aba8666', position: "top" }, h("atui-button", { key: '41a0387f395063f7bdf06da162c2f7ac83478223', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '25f1eaebe181f2c90371d03262eb4179d11b6ff2' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("atui-checkbox-group", { key: '7d899a1640f04641bb824e89b1a6787d3ad8f823', class: "w-fit", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onAtuiChange: (event) => this.changeHandler(event) })));
    }
    get el() { return this; }
    static get watchers() { return {
        "col_defs": ["colDefsChanged"]
    }; }
}, [256, "atui-column-manager", {
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
    const components = ["atui-column-manager", "atui-button", "atui-checkbox", "atui-checkbox-group", "atui-form-label", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-column-manager":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiColumnManagerComponent);
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

export { AtuiColumnManagerComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CJjhP-rH.js.map

//# sourceMappingURL=p-CJjhP-rH.js.map