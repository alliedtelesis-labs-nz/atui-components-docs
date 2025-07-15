import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$7 } from './p-BOygyBmB.js';
import { d as defineCustomElement$6 } from './p-Desv48Pq.js';
import { d as defineCustomElement$5 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$4 } from './p-CDm6COvb.js';
import { d as defineCustomElement$3 } from './p-fWvS3j9-.js';
import { d as defineCustomElement$2 } from './p-IMVeGR0G.js';

const AtuiTablePagination$1 = /*@__PURE__*/ proxyCustomElement(class AtuiTablePagination extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiChangeSize = createEvent(this, "atuiChangeSize", 7);
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
        return (h(Host, { key: '37d5c32aee4a239c57ef382800bc29014fdd4627', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'ef78bf41292095331d926c262d9c5e3d5fa283c4' }, "Page Size: "), h("atui-select", { key: '7facd6ff1fcba24699ad3ef15c232d670ea12b1b', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiChangeSize.emit(parseInt(event.detail)) }), h("atui-button", { key: '040f8aefa371b87c6b225a9026ec6aef2564fb40', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: 'e53bbacc85ff701b8b8e888132d91a5640ef47b2', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: '1b77859daa2b8eac1477f0ee86ffb15b91744f27' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: 'c869f8d097f5752a5df134c8db7fbc00c4fd46f6', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: 'c379a823d2ff7c064bb4f85d6e3a916b34a828f8', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
}, [0, "atui-table-pagination", {
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