import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DCAHuMKA.js';
import { d as defineCustomElement$7 } from './p-DdgKKrXv.js';
import { d as defineCustomElement$6 } from './p-Cie1yJIR.js';
import { d as defineCustomElement$5 } from './p-Dq-NrSDT.js';
import { d as defineCustomElement$4 } from './p-BGPE4IyY.js';
import { d as defineCustomElement$3 } from './p-CVcepHD6.js';
import { d as defineCustomElement$2 } from './p-BaggHTGc.js';

const AtTablePagination$1 = /*@__PURE__*/ proxyCustomElement(class AtTablePagination extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
    }
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '7493b744af3bae2557cd8b239c1103efa5a85de6', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'e5cacc7e033142710b4002ea6428de756a764286' }, "Page Size: "), h("at-select", { key: '83b835cc0958daf728ec6b15fa4297ace41d0b2c', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '41c7f4456f12c147285291f918b1f96d113b6d94', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: 'd78f89c7f2013fbb0af63a6cf89f13447f2bdaa8', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'c30eaefd23094b430567ff5a5753a5a2f7a64f2a' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '2968df6ccd4bee0d71707128c41f0733030e71f0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: 'c479c9869c803acf792433ea54d52306920f5782', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
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