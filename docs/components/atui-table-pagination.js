import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$7 } from './p-DpoOUufO.js';
import { d as defineCustomElement$6 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$5 } from './p-CHkT-iof.js';
import { d as defineCustomElement$4 } from './p-FL7N6jaz.js';
import { d as defineCustomElement$3 } from './p-CgNORBK-.js';
import { d as defineCustomElement$2 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: '24a1bcf5855df9dec693530ece48f35791cfb5e9', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '2b29cb0354b6921503d7b9979ff7f3fa397553a3' }, "Page Size: "), h("atui-select", { key: '70b0e78836eb38968a45db4e5a393e7e5d0e5034', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '76a91cd0cf3c3c3627b0fa1dfe67b71d8f8869ca', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: '2b17157ff6d8efba87a22e61e1a87cbdc2fad7f8', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: 'c2224e748dbf3e652ebd8a9a09c27c85df11130a' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: 'afbb6ff8690f09880848dff0e6ab6a2deb59c01b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: '79a2d5dd731c1d71a4bda617883a122b24578d7c', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
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