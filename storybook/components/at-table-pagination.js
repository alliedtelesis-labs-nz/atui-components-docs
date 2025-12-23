import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$8 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$7 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$6 } from './p-bn76tgB4.js';
import { d as defineCustomElement$5 } from './p-C1-3O-ig.js';
import { d as defineCustomElement$4 } from './p-CaMeultz.js';
import { d as defineCustomElement$3 } from './p-yH1iu8rH.js';
import { d as defineCustomElement$2 } from './p-B8lZLFeC.js';

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
        return (h(Host, { key: '9acafab5661a980e2a91fdf02cd297b8fbc47e4c', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '5f79338b8b8012aa38d92440d965ee3ca21603c2' }, "Page Size: "), h("at-select", { key: '7f7249ba4d6bbc12069e1bcd331073265c061485', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'b18ff009adff82bc6105fc00b8d9a13047b1a547', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '7f1fa8d1c1a67e9547fd0ebe728ca478fafb3401', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'c06ce8b3322db7f460554fc24e819e34f82f247c' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'adb580b6d25df095a93828eca7610d5914de66b0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: 'f344590fe1657e38946177a3b8e420982479cc90', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
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
    const components = ["at-table-pagination", "at-button", "at-form-label", "at-loading", "at-menu", "at-select", "at-select-option", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTablePagination$1);
            }
            break;
        case "at-button":
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
        case "at-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-select-option":
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