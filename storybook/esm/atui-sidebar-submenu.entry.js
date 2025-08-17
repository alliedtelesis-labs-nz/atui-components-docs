import { r as registerInstance, h, H as Host, g as getElement } from './index-D3rwhcmG.js';

const AtuiSidebarSubmenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '8b3fee949d177d9f9153e207f0568ae458e280c4' }, h("atui-accordion-item", { key: 'ddf577e7f6019faabd6db6c7c2212cbb9923edaa', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: '589df1f73eef8dac25259a763e3af56b239077d3', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '91ca797a4433926224c81a733f532f8eeb644dee', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '34275f0f2be45e31235f4f7171b9de29e2a9783e', slot: "accordion-content" }, h("slot", { key: 'b162af68dab9f40ed97f9e8b949f053de4905266', name: "submenu-content" }))), h("atui-menu", { key: '111c5d693b8a7aed18ba963fba8d11d5bb70b3c3', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : '280px' }, h("atui-sidebar-menuitem", { key: '86e97f19b2f4f940eba5e60439390d67673a396a', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: 'cfc94f6b6d5cb5ea8fbe5b6efe880dd2ca5b1cc4', slot: "menu-content" }, h("slot", { key: 'e036a1adeaeef0ca4f35839dcc3cfaf78d69ed17', name: "submenu-hover-content" })))));
    }
    get el() { return getElement(this); }
};

export { AtuiSidebarSubmenuComponent as atui_sidebar_submenu };
//# sourceMappingURL=atui-sidebar-submenu.entry.js.map

//# sourceMappingURL=atui-sidebar-submenu.entry.js.map