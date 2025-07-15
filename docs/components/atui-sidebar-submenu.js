import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$6 } from './p-O88V4QY0.js';
import { d as defineCustomElement$5 } from './p-DMcgrjfY.js';
import { d as defineCustomElement$4 } from './p-DuzY8Lpl.js';
import { d as defineCustomElement$3 } from './p-CDm6COvb.js';
import { d as defineCustomElement$2 } from './p-CmBivjvm.js';

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
        return (h(Host, { key: 'a109a23d13079895044c1199bd283e4a6da96a9c' }, h("atui-accordion-item", { key: 'ca11f7e5018211d8335893aa9f29b4235aaf426d', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: 'c626025dd2745bacc06f255b219bb6f65b7a08f4', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'd18d20c79352469747229c0913d147f89d6deded', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '328dbba07b34655d68b4df611b50cbc32eb858bf', slot: "accordion-content" }, h("slot", { key: '4f2bba630b2f2f80e0adca65f3e895fd89742c6c', name: "submenu-content" }))), h("atui-menu", { key: '19601fc77ef4b0729553d0b9bef0bd975e982b46', class: this.isSidebarOpen ? 'hidden' : '', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start" }, h("atui-sidebar-menuitem", { key: 'b4def404aa75f4698c40dc6e456214e95001470e', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: 'a042383c71be0ef73ad861003175172665586609', slot: "menu-content" }, h("slot", { key: 'e8769d3cb9bac1d75fe317ee3bb28b9cc12cf89d', name: "submenu-hover-content" })))));
    }
    get el() { return this; }
}, [4, "atui-sidebar-submenu", {
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