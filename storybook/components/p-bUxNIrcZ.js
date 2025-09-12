import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$6 } from './p-CullAxsK.js';
import { d as defineCustomElement$5 } from './p-BIyyzulI.js';
import { d as defineCustomElement$4 } from './p-C65WlsXe.js';
import { d as defineCustomElement$3 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$2 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h("atui-menu", { key: 'c432120517ce3ab159f5715664bbc41ca6f65d33', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: 'a415e742cfaa7c01d2ff2e758f6ce1f70c8e7a57', slot: "menu-trigger" }, h("atui-tooltip", { key: 'ee91fbad801563e8c5ab1c785cad0923173e7d53', position: "top" }, h("atui-button", { key: 'd3a13c74e7dbd24d3c1c60d9be916bf6959d659c', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '1a7f68b0a22c6212a1349a39f58beb22742a6de3' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("atui-checkbox-group", { key: '977f19ffd9b37f38318e22a434234c260420bc08', class: "w-fit", options: this.col_defs
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
//# sourceMappingURL=p-bUxNIrcZ.js.map

//# sourceMappingURL=p-bUxNIrcZ.js.map