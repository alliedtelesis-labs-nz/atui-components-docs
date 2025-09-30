'use strict';

var index = require('./index-LVEefvKk.js');

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
        return (index.h(index.Host, { key: '24692a40e2afed6e9cc60389428d4b6595e52ca2' }, index.h("at-accordion-item", { key: '7a7b164c3a4058bd669eaf234b596cb0c63f82e9', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '5a263c7abf79f59174c3463e2b3fc09e607e8f2f', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '82e976d363f935af8ab0a875946813dfcc3f348f', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '8aa323c3d8f7e4f6878e6382dd6bbbe5e3c4e38e', class: "font-normal" }, index.h("slot", { key: '13170d00bae39bccfe174dc7b3a52c48c271b89f', name: "submenu-content" }))), index.h("at-menu", { key: '93072d075d8dd18485226be2560c18244984e76b', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, index.h("at-sidebar-menuitem", { key: '68dfef8ce7ca1238d3ed889d7b77621e8ed307cf', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: 'e5ea854a5e2b838f6cbbb4a80d08863aa6bdecaa', class: "font-normal" }, index.h("slot", { key: '99333368eacd17c0781e14c844885b121579f276', name: "submenu-hover-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map
