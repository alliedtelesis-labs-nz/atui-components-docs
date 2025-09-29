import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$b } from './p-DCrgmCxL.js';
import { d as defineCustomElement$a } from './p-Df2_temq.js';
import { d as defineCustomElement$9 } from './p-Cj1J0V_y.js';
import { d as defineCustomElement$8 } from './p-BtmfB7Vj.js';
import { d as defineCustomElement$7 } from './p-DUaiIRm3.js';
import { d as defineCustomElement$6 } from './p-pDYyfeah.js';
import { d as defineCustomElement$5 } from './p-BvmILoSj.js';
import { d as defineCustomElement$4 } from './p-fCBJHWXE.js';
import { d as defineCustomElement$3 } from './p-CyYS0Qbs.js';
import { d as defineCustomElement$2 } from './p-BNT2yQBz.js';

const AtStaticTable$1 = /*@__PURE__*/ proxyCustomElement(class AtStaticTable extends H {
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
        return (h(Host, { key: 'c34a529a085887b5533136f81c1264c1f69cb0a6' }, !this.hide_column_manager && (h("at-table-actions", { key: 'dddc141f23a54657babb08d26848fc6ad3e7c6c4', ag_grid: this.agGrid }, h("at-column-manager", { key: '8e0f3382b25e980514057e4f819f304c48688250', slot: "column-manager", col_defs: this.col_defs }))), h("at-table", { key: '10391cf5f342637866e776d7b773541abd6bc617', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
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