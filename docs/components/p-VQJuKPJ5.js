import { p as proxyCustomElement, H, d as createEvent, h } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-BkUGamka.js';
import { d as defineCustomElement$6 } from './p-DQB8otHh.js';
import { d as defineCustomElement$5 } from './p-hkaXAVmf.js';
import { d as defineCustomElement$4 } from './p-Desv48Pq.js';
import { d as defineCustomElement$3 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$2 } from './p-DrInZzUc.js';
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
        return (h("atui-menu", { key: '2b06358f15b93053f7d71dc2419e6888c1d6a259', autoclose: false, width: "auto", align: "end" }, h("atui-tooltip", { key: '909127fd069abbab0e5f761f244d48e61ca7e96d', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '33a85b7299051b095c3430c101a1ce67c78127e6', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'd26940e8aacf55953ebacc3777240c6952877e54', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS)), h("atui-checkbox-group", { key: 'f181d4f4db7b6088edb6ca138080d496fee88192', slot: "menu-content", options: this.col_defs
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
//# sourceMappingURL=p-VQJuKPJ5.js.map

//# sourceMappingURL=p-VQJuKPJ5.js.map