import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
import { d as defineCustomElement$b } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$a } from './p-eHfVgeIr.js';
import { d as defineCustomElement$9 } from './p-ipjS0q1A.js';
import { d as defineCustomElement$8 } from './p-I5My18rm.js';
import { d as defineCustomElement$7 } from './p-C5bGvK_v.js';
import { d as defineCustomElement$6 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$5 } from './p-DmKmq4RT.js';
import { d as defineCustomElement$4 } from './p-DmpvPRTU.js';
import { d as defineCustomElement$3 } from './p-O62CIuYM.js';
import { d as defineCustomElement$2 } from './p-CDDohbWp.js';

const AtStaticTable$1 = /*@__PURE__*/ proxyCustomElement(class AtStaticTable extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h(Host, { key: '412a72aa498965389a93bc488a9573167666175a' }, !this.hide_column_manager && (h("at-table-actions", { key: '8ed16f410a804563b419d164e9c156048c6482d8', ag_grid: this.agGrid }, h("at-column-manager", { key: '8328041133feffa2970dfd53358be4d43643aaa3', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: 'ec24c543943c24f9b42ecead68ae9a7d9752c1d7', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
}, [256, "at-static-table", {
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
    const components = ["at-static-table", "at-button", "at-checkbox", "at-checkbox-group", "at-column-manager", "at-form-label", "at-loading", "at-menu", "at-table", "at-table-actions", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-static-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtStaticTable$1);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "at-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "at-column-manager":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-table-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtStaticTable = AtStaticTable$1;
const defineCustomElement = defineCustomElement$1;

export { AtStaticTable, defineCustomElement };
//# sourceMappingURL=at-static-table.js.map

//# sourceMappingURL=at-static-table.js.map