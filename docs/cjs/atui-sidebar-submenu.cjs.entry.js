'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiSidebarSubmenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'a109a23d13079895044c1199bd283e4a6da96a9c' }, index.h("atui-accordion-item", { key: 'ca11f7e5018211d8335893aa9f29b4235aaf426d', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("atui-sidebar-menuitem", { key: 'c626025dd2745bacc06f255b219bb6f65b7a08f4', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: 'd18d20c79352469747229c0913d147f89d6deded', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '328dbba07b34655d68b4df611b50cbc32eb858bf', slot: "accordion-content" }, index.h("slot", { key: '4f2bba630b2f2f80e0adca65f3e895fd89742c6c', name: "submenu-content" }))), index.h("atui-menu", { key: 'cd9e511650eac2943de50dccae0567251a7d296c', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm bg-red-400', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start" }, index.h("atui-sidebar-menuitem", { key: 'f1b4a4769af170a5f2afe619fccf1e3968537105', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '0e38d866b81aa7f79e22a00f52d36d22114a576f', slot: "menu-content" }, index.h("slot", { key: 'd5909a4848dfe4dbe4a4a0fde3737908a945b28e', name: "submenu-hover-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_sidebar_submenu = AtuiSidebarSubmenuComponent;
//# sourceMappingURL=atui-sidebar-submenu.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-submenu.cjs.entry.js.map