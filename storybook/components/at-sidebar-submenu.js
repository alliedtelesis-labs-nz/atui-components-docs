import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$6 } from './p-2_xEzlfW.js';
import { d as defineCustomElement$5 } from './p-Jpa-oIRC.js';
import { d as defineCustomElement$4 } from './p-DgHX4Tx7.js';
import { d as defineCustomElement$3 } from './p-BvmILoSj.js';
import { d as defineCustomElement$2 } from './p-BV-CRzGp.js';

const AtSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarSubmenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.isSidebarOpen = false;
        this.isAccordionOpen = false;
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
        return (h(Host, { key: 'df338d16a58a6d50c186e1adefc6101f3098ef1c' }, h("at-accordion-item", { key: '861b5be728fc38cdcc382c0f1ff60cea6b4ad7e6', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '95e33f9107c8cc9ae85226f6c0e147f73ea4d627', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '942b6f153b5e16bb169731114093c6c750c703e4', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '62f62d22dc1397f2c61c3179bd87cccdc1cf9481', class: "font-normal" }, h("slot", { key: 'c7902fc59c22f30672fcc939d08673a76ca0a8ee', name: "submenu-content" }))), h("at-menu", { key: '3c3cc9e794259b3cb8bec5b1cf7be0574102dbb7', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, h("at-sidebar-menuitem", { key: '8584e6e96a51a231531adf5d1a4785adb627cea6', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '845501c8980e6003590ab24bc19297f1980914ac', class: "font-normal" }, h("slot", { key: 'aa61cb790452fde4afc34411dace1d7a6dbbcede', name: "submenu-hover-content" })))));
    }
    get el() { return this; }
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