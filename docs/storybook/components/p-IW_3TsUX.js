import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$6 } from './p-i_ooLqDN.js';
import { d as defineCustomElement$5 } from './p-D6uAy_4U.js';
import { d as defineCustomElement$4 } from './p-CoOWTCxi.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-BAl9Vi-7.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

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
        return (h("atui-menu", { key: '1cc4b01768880c44e7ff7bf2e806888a26b0f467', autoclose: false, width: "auto", align: "end", portal: true }, h("div", { key: 'fdf98ca5a339290dbbe997ec51cb4f3114217e7f', slot: "menu-trigger" }, h("atui-tooltip", { key: 'e7ae56d9f995fd7f7983482e015f2ebaff3d4784', position: "top" }, h("atui-button", { key: '88143489762dbc936b4f600a853e413274d72a04', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: 'beb1888f76f29698310720a6a7d851b2bc1b5b96', slot: "tooltip-content" }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("atui-checkbox-group", { key: '6b9672a847786558d868ebfcc114748078315929', slot: "menu-content", options: this.col_defs
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
//# sourceMappingURL=p-IW_3TsUX.js.map

//# sourceMappingURL=p-IW_3TsUX.js.map