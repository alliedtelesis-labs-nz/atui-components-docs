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
        return (index.h(index.Host, { key: '8b3fee949d177d9f9153e207f0568ae458e280c4' }, index.h("atui-accordion-item", { key: 'ddf577e7f6019faabd6db6c7c2212cbb9923edaa', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("atui-sidebar-menuitem", { key: '589df1f73eef8dac25259a763e3af56b239077d3', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '91ca797a4433926224c81a733f532f8eeb644dee', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '34275f0f2be45e31235f4f7171b9de29e2a9783e', slot: "accordion-content" }, index.h("slot", { key: 'b162af68dab9f40ed97f9e8b949f053de4905266', name: "submenu-content" }))), index.h("atui-menu", { key: '422c77d89b32df336754c7cd8dad5397f81e4e1f', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", portal: true }, index.h("atui-sidebar-menuitem", { key: '75cb5aec0b05424d63e884a9eb94462c4fba3c59', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '93795d7bbfab6f82f0cf1e7d5e879d0f1112aac7', slot: "menu-content" }, index.h("slot", { key: 'aa3e8951f4fa3e1c594f648fed0d433d53b97a3b', name: "submenu-hover-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_sidebar_submenu = AtuiSidebarSubmenuComponent;
//# sourceMappingURL=atui-sidebar-submenu.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-submenu.cjs.entry.js.map