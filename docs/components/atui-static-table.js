import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$b } from './p-CGoVUV9r.js';
import { d as defineCustomElement$a } from './p-D2IbPMfh.js';
import { d as defineCustomElement$9 } from './p-DOfwEWFU.js';
import { d as defineCustomElement$8 } from './p-D1NM17iX.js';
import { d as defineCustomElement$7 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$6 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$5 } from './p-D7IRw6kM.js';
import { d as defineCustomElement$4 } from './p-CV3hRnbB.js';
import { d as defineCustomElement$3 } from './p-CXx3UpBF.js';
import { d as defineCustomElement$2 } from './p-BLBTk09G.js';

const AtuiStaticTable$1 = /*@__PURE__*/ proxyCustomElement(class AtuiStaticTable extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Max number of items per page
         */
        this.page_size = 10;
        /**
         * If true, disables pagination on the table and shows all data at once.
         * Useful for server-side pagination where you want to control pagination externally.
         */
        this.use_custom_pagination = false;
        this.tableCreated = false;
    }
    async componentDidLoad() {
        if (this.col_defs && !this.tableCreated) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
        }
    }
    async componentDidUpdate() {
        if (this.col_defs && !this.tableCreated) {
            this.agGrid = await this.tableEl.createGrid();
            this.tableCreated = true;
        }
    }
    render() {
        return (h(Host, { key: 'af64384c8095b4b69e2b10c867669209ef172a55' }, !this.hide_column_manager && (h("atui-table-actions", { key: '54c35a5db977f0d67c94d29c49d73e4bc69de426', ag_grid: this.agGrid }, h("atui-column-manager", { key: 'cf2c8b94d97b517bca5f9a422250c5cc627eac36', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'da2ba2635f488a62d9b66d9288c98fe660c7757c', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
}, [0, "atui-static-table", {
        "table_data": [16],
        "col_defs": [16],
        "page_size": [2],
        "hide_column_manager": [4],
        "use_custom_pagination": [4],
        "agGrid": [32],
        "tableCreated": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-static-table", "atui-button", "atui-checkbox", "atui-checkbox-group", "atui-column-manager", "atui-form-label", "atui-loading", "atui-menu", "atui-table", "atui-table-actions", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-static-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiStaticTable$1);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "atui-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "atui-column-manager":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-table-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiStaticTable = AtuiStaticTable$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiStaticTable, defineCustomElement };
//# sourceMappingURL=atui-static-table.js.map

//# sourceMappingURL=atui-static-table.js.map