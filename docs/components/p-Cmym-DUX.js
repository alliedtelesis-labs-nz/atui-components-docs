import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { f as fetchTranslations } from './p-CDu8lP-T.js';
import { d as defineCustomElement$7 } from './p-CNIPth1r.js';
import { d as defineCustomElement$6 } from './p-BlymWuVg.js';
import { d as defineCustomElement$5 } from './p-CJRdicyN.js';
import { d as defineCustomElement$4 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        const checkboxEl = event.target;
        const columnId = checkboxEl.id;
        const isChecked = checkboxEl.checked;
        if (isChecked) {
            this.checkedColumns = [...this.checkedColumns, columnId];
        }
        else {
            this.checkedColumns = this.checkedColumns.filter((id) => id !== columnId);
        }
        this.atuiChange.emit({
            id: columnId,
            checked: isChecked,
        });
    }
    render() {
        return (h("atui-menu", { key: '16f8826dd61ffcf2b47ed0223158f3f9554b1d7e', autoclose: false, width: "auto", align: "end" }, h("atui-tooltip", { key: '708b517923e3d2d3e4bdedf47cf9209d517521fd', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '0cdd8c0b4fd7ee730b7a94a121c56b1670474e65', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'fbd03641b7bd36bd01b73434e787bdfc3a47c07e', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS)), h("atui-checkbox-group", { key: 'caac1ae8d3dde16db17b762a0281062030cb4b8a', slot: "menu-content", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onChange: (event) => this.changeHandler(event) })));
    }
    get el() { return this; }
    static get watchers() { return {
        "col_defs": ["colDefsChanged"]
    }; }
}, [0, "atui-column-manager", {
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
//# sourceMappingURL=p-Cmym-DUX.js.map

//# sourceMappingURL=p-Cmym-DUX.js.map