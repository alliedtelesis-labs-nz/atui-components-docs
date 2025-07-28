import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

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
        return (h(Host, { key: '9f289124a8ed19dc333822bec1bf5faae08d0090' }, h("atui-accordion-item", { key: 'ca0447d34c3f67c21bbfc0f57ec8bbdb0b40fbd7', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: '05f4d4e3611401a3d85ede460bddf63152973d5a', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '71b244d4102cbcf2d706f15a24bc8302c133895f', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '574cac7d50512f5ce7cd6c22c57932c1a04d4639', slot: "accordion-content" }, h("slot", { key: 'da916315ef24233129243d1283056c59d8629a1c', name: "submenu-content" }))), h("atui-menu", { key: '17ee97adbb8ee79e11529b20a8d48e1af5c2210c', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", portal: true }, h("atui-sidebar-menuitem", { key: '48e862d805a42d9dd6409bf2dcd5e981cd006594', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '33902e94b1a1c36cb9300b270c43ad2323fe606a', slot: "menu-content" }, h("slot", { key: '08588e6a72401d82c84979fbd83bfc756a338288', name: "submenu-hover-content" })))));
    }
    get el() { return getElement(this); }
};

export { AtuiSidebarSubmenuComponent as atui_sidebar_submenu };
//# sourceMappingURL=atui-sidebar-submenu.entry.js.map

//# sourceMappingURL=atui-sidebar-submenu.entry.js.map