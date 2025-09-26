import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$7 } from './p-anL6prWM.js';
import { d as defineCustomElement$6 } from './p-CdWdq1MG.js';
import { d as defineCustomElement$5 } from './p-pDYyfeah.js';
import { d as defineCustomElement$4 } from './p-BvmILoSj.js';
import { d as defineCustomElement$3 } from './p-DqhL9GCv.js';
import { d as defineCustomElement$2 } from './p-D-MOVsDh.js';

const AtTablePagination$1 = /*@__PURE__*/ proxyCustomElement(class AtTablePagination extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
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
        return (h(Host, { key: '1a6997cb528a325b5eaaafe38935bd55c6f913ff', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '47332e26b06a97a8f41b2a9e459de8920ca8f1d5' }, "Page Size: "), h("at-select", { key: 'a4fe57aba41a2df7f75a989f3b38d18f087554f3', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'c37d7989bf8b6dcce5a939e0bf7d7afa786b5a89', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '8e0bdbc5e4fb5aa3b63ec5177c03ae355ad60e5f', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '1e5897f75009af31e52d4df647872ea20540309a' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '4fe7122039cb08d50dbaa07881b21591066eb7f7', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '707588cf6d5c95a3a7197de71ed2178ad2f81c1b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
}, [256, "at-table-pagination", {
        "current_page": [2],
        "num_pages": [2],
        "page_size_options": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-pagination", "at-button", "at-form-label", "at-loading", "at-menu", "at-select", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTablePagination$1);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-select":
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

const AtTablePagination = AtTablePagination$1;
const defineCustomElement = defineCustomElement$1;

export { AtTablePagination, defineCustomElement };
//# sourceMappingURL=at-table-pagination.js.map

//# sourceMappingURL=at-table-pagination.js.map