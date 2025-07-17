import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$b } from './p-BkUGamka.js';
import { d as defineCustomElement$a } from './p-DQB8otHh.js';
import { d as defineCustomElement$9 } from './p-hkaXAVmf.js';
import { d as defineCustomElement$8 } from './p-VQJuKPJ5.js';
import { d as defineCustomElement$7 } from './p-Desv48Pq.js';
import { d as defineCustomElement$6 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$5 } from './p-DrInZzUc.js';
import { d as defineCustomElement$4 } from './p-BxFu4ytg.js';
import { d as defineCustomElement$3 } from './p-Bozx4pkF.js';
import { d as defineCustomElement$2 } from './p-IMVeGR0G.js';

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
        return (h(Host, { key: '70d1be68fc1df9d6a5f02159cca7f0be2be8af20' }, !this.hide_column_manager && (h("atui-table-actions", { key: '19a448ebc3f8b2974c4ccfa1cedabd90e2936a73', ag_grid: this.agGrid }, h("atui-column-manager", { key: '65712ad5b0861c30b53e24bd7c0c3db41d0e42b2', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: '0a95cd4aa19998bc44ed06aaaad0b1c659188e9b', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
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