import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$b } from './p-C9eqBXeS.js';
import { d as defineCustomElement$a } from './p-Bgl_Yiy5.js';
import { d as defineCustomElement$9 } from './p-Bwlxm6B0.js';
import { d as defineCustomElement$8 } from './p-CXBBKKuC.js';
import { d as defineCustomElement$7 } from './p-D9T3c7Wy.js';
import { d as defineCustomElement$6 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$5 } from './p-s0ZGYtrg.js';
import { d as defineCustomElement$4 } from './p-iXeiKC5a.js';
import { d as defineCustomElement$3 } from './p-nyxK7Sii.js';
import { d as defineCustomElement$2 } from './p-CpnV9PUz.js';

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
        return (h(Host, { key: '13357efc03e27252114972f3829e43d9c3da96ca' }, !this.hide_column_manager && (h("atui-table-actions", { key: '6812586e35b8908db4be020efc24e78bbd4deba9', ag_grid: this.agGrid }, h("atui-column-manager", { key: '572ba9f1ed9782a47ba1f029ef9f9db4b0d74990', slot: "column-manager", col_defs: this.col_defs }))), h("atui-table", { key: 'cece09dfda38fd0fbb4e3cae0beabf694899b7bc', ref: (el) => (this.tableEl = el), ag_grid: this.agGrid, table_data: this.table_data, col_defs: this.col_defs, page_size: this.page_size, use_custom_pagination: this.use_custom_pagination, disable_auto_init: true })));
    }
}, [256, "atui-static-table", {
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