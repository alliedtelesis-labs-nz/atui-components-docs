import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$7 } from './p-BkB7yMfB.js';
import { d as defineCustomElement$6 } from './p-cJhPHVMD.js';
import { d as defineCustomElement$5 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$4 } from './p-C6qlH9rK.js';
import { d as defineCustomElement$3 } from './p-Afm8k1Ve.js';
import { d as defineCustomElement$2 } from './p-CSWbCoPk.js';

const AtuiTablePagination$1 = /*@__PURE__*/ proxyCustomElement(class AtuiTablePagination extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiPageSizeChange = createEvent(this, "atuiPageSizeChange", 7);
        /**
         * Current page number
         */
        this.current_page = 1;
        /**
         * Total number of pages
         */
        this.num_pages = 1;
        /**
         * Options provided in dropdown for page sizes.
         */
        this.page_size_options = [
            { value: '5' },
            { value: '10' },
            { value: '20' },
            { value: '50' },
            { value: '100' },
        ];
    }
    render() {
        return (h(Host, { key: '54a7ee81a50f3aeda36fff297feaa06b0a7a8745', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '3f8403473a7f1b7ad0e9ca577224c14573c7c4a2' }, "Page Size: "), h("atui-select", { key: '321a8cb8e933374328ec699eec585d6ddede6613', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '6b6d322784809269dc779b05b86a3a5a5f5b78ad', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: 'f6bc452a6e18a2e9ff7346be0621277af387e702', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: '97a3e60b3e7f9d89f90df0b1e0242ccdeac00e54' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: 'ac2ef9e2327746f23ec37a86d3d50b007fceea8e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: '39c965362de829b63d601953f80bfc6c8027209b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
}, [256, "atui-table-pagination", {
        "current_page": [2],
        "num_pages": [2],
        "page_size_options": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-pagination", "atui-button", "atui-form-label", "atui-loading", "atui-menu", "atui-select", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTablePagination$1);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-select":
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

const AtuiTablePagination = AtuiTablePagination$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiTablePagination, defineCustomElement };
//# sourceMappingURL=atui-table-pagination.js.map

//# sourceMappingURL=atui-table-pagination.js.map