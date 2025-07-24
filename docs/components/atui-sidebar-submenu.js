import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$6 } from './p-3_c1iLDm.js';
import { d as defineCustomElement$5 } from './p-D2aySMT2.js';
import { d as defineCustomElement$4 } from './p-BNyf5aaw.js';
import { d as defineCustomElement$3 } from './p-q1ydcm97.js';
import { d as defineCustomElement$2 } from './p-C9jJSBR0.js';

const AtuiSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarSubmenuComponent extends H {
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
        const accordionItem = this.el.querySelector('atui-accordion-item');
        if (accordionItem) {
            this.isAccordionOpen = await accordionItem.getIsOpen();
        }
        const parentSidebar = this.el.closest('atui-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
        }
    }
    handleAtuiChange(event) {
        const target = event.target;
        const parentSidebar = this.el.closest('atui-sidebar');
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
        return (h(Host, { key: 'a109a23d13079895044c1199bd283e4a6da96a9c' }, h("atui-accordion-item", { key: 'ca11f7e5018211d8335893aa9f29b4235aaf426d', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: 'c626025dd2745bacc06f255b219bb6f65b7a08f4', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'd18d20c79352469747229c0913d147f89d6deded', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '328dbba07b34655d68b4df611b50cbc32eb858bf', slot: "accordion-content" }, h("slot", { key: '4f2bba630b2f2f80e0adca65f3e895fd89742c6c', name: "submenu-content" }))), h("atui-menu", { key: 'cd9e511650eac2943de50dccae0567251a7d296c', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm bg-red-400', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start" }, h("atui-sidebar-menuitem", { key: 'f1b4a4769af170a5f2afe619fccf1e3968537105', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '0e38d866b81aa7f79e22a00f52d36d22114a576f', slot: "menu-content" }, h("slot", { key: 'd5909a4848dfe4dbe4a4a0fde3737908a945b28e', name: "submenu-hover-content" })))));
    }
    get el() { return this; }
}, [260, "atui-sidebar-submenu", {
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
    const components = ["atui-sidebar-submenu", "atui-accordion-item", "atui-accordion-trigger", "atui-badge", "atui-menu", "atui-sidebar-menuitem"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-submenu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarSubmenuComponent);
            }
            break;
        case "atui-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSidebarSubmenu = AtuiSidebarSubmenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebarSubmenu, defineCustomElement };
//# sourceMappingURL=atui-sidebar-submenu.js.map

//# sourceMappingURL=atui-sidebar-submenu.js.map