import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$6 } from './p-DQ7qmjxz.js';
import { d as defineCustomElement$5 } from './p-Bos8rqAS.js';
import { d as defineCustomElement$4 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$3 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$2 } from './p-DAvLkZn6.js';

const atSidebarSubmenuCss = ":host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}";

const AtSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarSubmenuComponent extends H {
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Icon to be displayed with the label
     */
    icon;
    /**
     * Alert badge for the menu item
     */
    badge;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active;
    isSidebarOpen = false;
    isAccordionOpen = false;
    atuiAccordionItem;
    get el() { return this; }
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async componentDidUpdate() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const accordionItem = this.el.querySelector('at-accordion-item');
        if (accordionItem) {
            this.isAccordionOpen = await accordionItem.getIsOpen();
        }
        const parentSidebar = this.el.closest('at-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
        }
    }
    handleAtuiChange(event) {
        const target = event.target;
        const parentSidebar = this.el.closest('at-sidebar');
        if (target === parentSidebar) {
            this.isSidebarOpen = event.detail;
            if (!this.isSidebarOpen && this.atuiAccordionItem) {
                this.atuiAccordionItem.closeAccordion();
            }
        }
    }
    handleAtuiAccordionChange(event) {
        this.isAccordionOpen = event.detail;
    }
    getIsActive() {
        if (this.isSidebarOpen) {
            return !this.isAccordionOpen && this.is_active;
        }
        return this.is_active;
    }
    render() {
        return (h(Host, { key: '9bd07c5de479f674eb772a59de55ea97c8987ab1' }, h("at-accordion-item", { key: '4db06b6b92f77abcda2de7dbdfa3954e617fc8a8', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '6eb35ad2f6433887099a17f38155068b0654e118', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'a2b03b7bdf756164db2e8471e5de42c53186db53', slot: "actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), h("div", { key: '9d717aaf341246a7e5cc8a77f9b01f6978ebeb36', class: "content" }, h("slot", { key: '8cf3283ecb27b46e17e1c4dab655de3e54bf39d1', name: "submenu-content" }))), h("at-menu", { key: 'ead8301d8c872057c162d7015005e61efaad8bf2', "data-open": this.isSidebarOpen, class: "hover-menu", "data-name": "hover-menu", "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-sidebar-menuitem", { key: '33c10436fce31cd4544ee9bf566208f22d1d52df', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '490cc77cd80c6c7a01dd92d65a94f030f3eae373', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, h("slot", { key: '48aa150bba054536512df7f019891ef7a6dc7884', name: "submenu-hover-content" })))));
    }
    static get style() { return atSidebarSubmenuCss; }
}, [260, "at-sidebar-submenu", {
        "label": [1],
        "icon": [1],
        "badge": [1],
        "is_active": [4],
        "isSidebarOpen": [32],
        "isAccordionOpen": [32],
        "atuiAccordionItem": [32]
    }, [[8, "atuiSidebarChange", "handleAtuiChange"], [8, "atuiAccordionChange", "handleAtuiAccordionChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-submenu", "at-accordion-item", "at-accordion-trigger", "at-badge", "at-menu", "at-sidebar-menuitem"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-submenu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarSubmenuComponent);
            }
            break;
        case "at-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtSidebarSubmenu = AtSidebarSubmenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebarSubmenu, defineCustomElement };
//# sourceMappingURL=at-sidebar-submenu.js.map

//# sourceMappingURL=at-sidebar-submenu.js.map