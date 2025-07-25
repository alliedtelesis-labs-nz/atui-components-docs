import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$3 } from './p-DpoOUufO.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';

const AtuiSidebarTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarTriggerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'md';
    }
    async updateIsOpen() {
        if (this.provider && typeof this.provider.getIsOpen === 'function') {
            this.isOpen = await this.provider.getIsOpen();
        }
    }
    async toggleSidebar() {
        if (this.provider &&
            typeof this.provider.toggleSidebar === 'function') {
            await this.provider.toggleSidebar();
            await this.updateIsOpen();
        }
    }
    async componentDidLoad() {
        this.provider = this.el.closest('atui-sidebar');
        await this.updateIsOpen();
    }
    render() {
        return (h("atui-button", { key: '3aed72a8137c647e422e5290b0dcc3347569687f', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return this; }
}, [256, "atui-sidebar-trigger", {
        "size": [1],
        "isOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-sidebar-trigger", "atui-button", "atui-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarTriggerComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSidebarTrigger = AtuiSidebarTriggerComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebarTrigger, defineCustomElement };
//# sourceMappingURL=atui-sidebar-trigger.js.map

//# sourceMappingURL=atui-sidebar-trigger.js.map