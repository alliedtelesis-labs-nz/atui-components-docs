import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$b } from './p-mCEpxKzE.js';
import { d as defineCustomElement$a } from './p-DF-2ncG7.js';
import { d as defineCustomElement$9 } from './p-6ZhdjdcM.js';
import { d as defineCustomElement$8 } from './p-Bf9FJxO-.js';
import { d as defineCustomElement$7 } from './p-DS8rd89A.js';
import { d as defineCustomElement$6 } from './p-bn76tgB4.js';
import { d as defineCustomElement$5 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$4 } from './p-BpCpg4rY.js';
import { d as defineCustomElement$3 } from './p-BXdubPvN.js';
import { d as defineCustomElement$2 } from './p-CJ4jwrx3.js';

const AtStaticTable$1 = /*@__PURE__*/ proxyCustomElement(class AtStaticTable extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Data to go into the table
     */
    table_data;
    /**
     * Column definitions for the table
     */
    col_defs;
    /**
     * Max number of items per page
     */
    page_size = 10;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination = false;
    agGrid;
    tableEl;
    tableCreated = false;
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
        return (h(Host, { key: 'a11d5863b10dc90b6c5af5b67e4d24ab20651934' }, !this.hide_column_manager && (h("at-table-actions", { key: '36f8e93b46f9879d0f037aff1ddaec6e94ec84d9', ag_grid: this.agGrid }, h("at-column-manager", { key: '7c965974231906a9e9800faaac4bf88e4fad9675', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '25360b7523a2b0998ab2d3d910dd0ed32cca7666', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
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