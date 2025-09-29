import { p as proxyCustomElement, H, h } from './p-Bx9nFool.js';
import { d as defineCustomElement$3 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$2 } from './p-Cf5bpagt.js';

const AtSidebarTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarTriggerComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Theme of the button. Default secondary
         */
        this.type = 'secondary';
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
        this.provider = this.el.closest('at-sidebar');
        await this.updateIsOpen();
    }
    render() {
        return (h("at-button", { key: 'bb0f5a2001355e3fad0fdbed2a6a5630255f5d85', type: this.type, size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return this; }
}, [256, "at-sidebar-trigger", {
        "size": [1],
        "type": [1],
        "isOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-trigger", "at-button", "at-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarTriggerComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtSidebarTrigger = AtSidebarTriggerComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebarTrigger, defineCustomElement };
//# sourceMappingURL=at-sidebar-trigger.js.map

//# sourceMappingURL=at-sidebar-trigger.js.map