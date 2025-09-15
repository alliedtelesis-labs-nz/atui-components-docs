'use strict';

var index = require('./index-i7hIKTeN.js');

const AtSidebarSubmenuComponent = class {
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
        return (index.h(index.Host, { key: '24692a40e2afed6e9cc60389428d4b6595e52ca2' }, index.h("at-accordion-item", { key: '7a7b164c3a4058bd669eaf234b596cb0c63f82e9', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '5a263c7abf79f59174c3463e2b3fc09e607e8f2f', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '82e976d363f935af8ab0a875946813dfcc3f348f', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '2c04cb903a1105c08f61ce4317293688fa8bf02b' }, index.h("slot", { key: 'ba0e9f539e9fd25fc6d9f9248e6e6d85f03b7e29', name: "submenu-content" }))), index.h("at-menu", { key: '85134a3c298880011594c62353d71f58e0b1a7cf', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, index.h("at-sidebar-menuitem", { key: '56fadb7df3fcd32fc96d1adfb54aeb14f9e633fc', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("slot", { key: '358a0ce91ac6c958b78af757a48aaaf67200eb2e', name: "submenu-hover-content" }))));
    }
    get el() { return index.getElement(this); }
};

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map

//# sourceMappingURL=at-sidebar-submenu.cjs.entry.js.map