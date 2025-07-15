import { p as proxyCustomElement, H, d as createEvent, h } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BOygyBmB.js';
import { d as defineCustomElement$6 } from './p-DQB8otHh.js';
import { d as defineCustomElement$5 } from './p-hkaXAVmf.js';
import { d as defineCustomElement$4 } from './p-Desv48Pq.js';
import { d as defineCustomElement$3 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$2 } from './p-CDm6COvb.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

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
        return (h("atui-menu", { key: 'f9b9c7a1f85d841edf91941690a3b1e59bfea201', autoclose: false, width: "auto", align: "end" }, h("atui-tooltip", { key: '7b2d464e2dbd783693efb83a73cee7751c92c90b', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '807eab7b998870483994d1db11580ca17bb82c8d', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'ea490a1055ce9f0fb87458086de0b66bb5794a6a', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS)), h("atui-checkbox-group", { key: '3365433f7f8c8e8a2cbb3352b41e4e08b86a6d0b', slot: "menu-content", options: this.col_defs
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
//# sourceMappingURL=p-C8F79u5r.js.map

//# sourceMappingURL=p-C8F79u5r.js.map