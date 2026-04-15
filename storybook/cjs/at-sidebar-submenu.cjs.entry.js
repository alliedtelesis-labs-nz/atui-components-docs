'use strict';

var index = require('./index-BRms7T38.js');

const atSidebarSubmenuCss = () => `:host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}`;

const AtSidebarSubmenuComponent = class {
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Icon to be displayed with the label
     */
    icon;
    /**
     * Alert badge for the menu item
     */
    badge;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active;
    isSidebarOpen = false;
    isAccordionOpen = false;
    atuiAccordionItem;
    get el() { return index.getElement(this); }
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'dc1a99461dcbfd6b5b99a1d0d86dace683735568' }, index.h("at-accordion-item", { key: 'fd74a85a1f5d5190e8a1290a79db7f2f541b832e', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '1a338f28ed6526dfd43971015a13fcb891b5b312', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("at-icon", { key: '39a652e778a3b7fc946984140427bea59d725510', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down" })))), index.h("div", { key: '91cee71cec83f3eb9e13ed81b03e05c7743af5f7', class: "content" }, index.h("slot", { key: '6a2adabd0c2760aaef10453fa019f2a0a4a7414d', name: "submenu-content" }))), index.h("at-menu", { key: '81236d4b024d7a1cc309779e1b058e11ddd25bef', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, index.h("at-sidebar-menuitem", { key: '33836d6533ed7c0ca3e95bb04cefe58c3a1d743d', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: 'c3591f58ad485484558a92e0c8db150bf15f4ec0', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '42a5954e9cad6498de84a05b3e8ba4b62906527e', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
