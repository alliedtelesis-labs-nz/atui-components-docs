import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$7 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$6 } from './p-BaOP2SR_.js';
import { d as defineCustomElement$5 } from './p-pDYyfeah.js';
import { d as defineCustomElement$4 } from './p-BvmILoSj.js';
import { d as defineCustomElement$3 } from './p-DeNcrAqW.js';
import { d as defineCustomElement$2 } from './p-BUjvE2eq.js';

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
        return (h(Host, { key: '4e942eaa9c40db76a68040218794eba5b292ca78', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '2b00ba9e8943e79753ba5fe5dc9fcde1003a7c06' }, "Page Size: "), h("at-select", { key: '3ec98c5f757492256b551f04c1f77312bd9820ed', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '43fa742a879adcf9c33cb44e32a91f84d69964ec', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: 'b787d8f98cd40618a3473b9c8b3cdfa853b423c9', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '7074b656788dd0fe1736d6aba3598c372fe90558' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'cad8c13a30dec564ef905b78792f49f9964226fd', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '82d07bb30333966b1a6fea5fd1f3f7d8bf5ce623', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
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