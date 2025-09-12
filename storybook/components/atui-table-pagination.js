import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$7 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$6 } from './p-C65WlsXe.js';
import { d as defineCustomElement$5 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$4 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$3 } from './p-C3tsbElf.js';
import { d as defineCustomElement$2 } from './p-BtsG-JMI.js';

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
        return (h(Host, { key: '71b73ce7cae55b81329d9012e23ec65a66c6f031', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '4b24cbbc0c5d6ac2bb3b28412723f1a95ff36bff' }, "Page Size: "), h("atui-select", { key: '822069ee6f259dcadefc6b81944b457d0b0c5dc5', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '2d1da5f458b08447d6a513112e7a8ebbb42e82ed', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: 'afad51d77f47c18d356c26a8b904de09ddc5daef', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: '65f1b976c201e992ce8aea6e040a74abbb5c248b' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: '00f6fe1aaebf3af0d8b31b75d8afb69fc1e07b79', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: 'bb052b57d1564dc6f1fcad9b6679b8b1a5b7c3b5', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
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