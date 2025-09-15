import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$6 } from './p-Df2_temq.js';
import { d as defineCustomElement$5 } from './p-CkV0VkTP.js';
import { d as defineCustomElement$4 } from './p-BaOP2SR_.js';
import { d as defineCustomElement$3 } from './p-pDYyfeah.js';
import { d as defineCustomElement$2 } from './p-BvmILoSj.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtColumnManagerComponent = /*@__PURE__*/ proxyCustomElement(class AtColumnManagerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atChange = createEvent(this, "atChange", 7);
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
        return (h("at-menu", { key: '1acd56886dfbd738d8581741369e21b29be892a4', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: 'c8e87d8e39c32b43830b0c71934abc7b089710e9', slot: "menu-trigger" }, h("at-tooltip", { key: '65689e48ca0e7616c23343e69f17ea7d65c06df7', position: "top" }, h("at-button", { key: 'f0d225ef32c872f8d573925b2774f1ff8944c5d0', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '4167bf77459a1a314ffd197a221d13033a5a8758' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'c9a59fff706754d26d713bb56e32f7c4c3a8721f', class: "w-fit", options: this.col_defs
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
//# sourceMappingURL=p-DClFLQ22.js.map

//# sourceMappingURL=p-DClFLQ22.js.map