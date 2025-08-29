'use strict';

var index = require('./index-43B6Ydvl.js');

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
        return (index.h(index.Host, { key: '8b3fee949d177d9f9153e207f0568ae458e280c4' }, index.h("atui-accordion-item", { key: 'ddf577e7f6019faabd6db6c7c2212cbb9923edaa', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("atui-sidebar-menuitem", { key: '589df1f73eef8dac25259a763e3af56b239077d3', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '91ca797a4433926224c81a733f532f8eeb644dee', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '34275f0f2be45e31235f4f7171b9de29e2a9783e', slot: "accordion-content" }, index.h("slot", { key: 'b162af68dab9f40ed97f9e8b949f053de4905266', name: "submenu-content" }))), index.h("atui-menu", { key: '062454308057dac4ccbec495cb42b5d7e09eff9c', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : '280px' }, index.h("atui-sidebar-menuitem", { key: '1a092c4362608c6d1fdec07bef19dce4950b1bf9', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '887cc0d0b0ed23e02fcf07f85084c6cb21392218', slot: "menu-content" }, index.h("slot", { key: '1485a5ea8993541faee773f40033cc774bc34a57', name: "submenu-hover-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_sidebar_submenu = AtuiSidebarSubmenuComponent;
//# sourceMappingURL=atui-sidebar-submenu.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-submenu.cjs.entry.js.map