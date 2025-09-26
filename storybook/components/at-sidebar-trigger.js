import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$3 } from './p-anL6prWM.js';
import { d as defineCustomElement$2 } from './p-pDYyfeah.js';

const AtSidebarTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarTriggerComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("at-button", { key: '38b0ab64d1815f3518135df67325ed53aa31bb6a', type: "secondaryText", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
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