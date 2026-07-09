'use strict';

var index = require('./index-DRsFs1GW.js');

const atSidebarSubmenuCss = () => `:host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}at-sidebar-submenu at-accordion-item summary{box-shadow:none !important}at-sidebar-submenu at-accordion-item summary:focus-visible at-sidebar-menuitem{box-shadow:inset 0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 30%, transparent)}`;

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
    get el() { return index.getElement(this); }
    atuiAccordionItem;
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const parentSidebar = this.el.closest('at-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
            this.isAccordionOpen = this.isSidebarOpen;
        }
    }
    handleAtuiChange(event) {
        const parentSidebar = this.el.closest('at-sidebar');
        if (event.target !== parentSidebar) {
            return;
        }
        this.isSidebarOpen = event.detail;
        this.isAccordionOpen = event.detail;
        if (this.atuiAccordionItem) {
            if (event.detail) {
                this.atuiAccordionItem.openAccordion();
            }
            else {
                this.atuiAccordionItem.closeAccordion();
            }
        }
    }
    getIsActive() {
        if (this.isSidebarOpen) {
            return !this.isAccordionOpen && this.is_active;
        }
        return this.is_active;
    }
    render() {
        return (index.h(index.Host, { key: '4ebf627f8d930232ba67afc16cf49a42f9d0cb83' }, index.h("at-menu", { key: '7e9904004fd2ee82b192d0979511aa51aba8bc9f', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '8d3f17d00fb2273aa2b7fe1acf7e0a14f2e4b8b2', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '495648393f6f6aaa536f9c2926f7cb093d05101a', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '7d96c13795b059255c2a80cc62a599044ad43a32', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '668c969780e5b55e5dff3a73adf4db86b4d64d8d', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '43cd47b9c3cf06f755aecafd3237478c213ab4a8', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: 'de02921a6604ec36a80b546d59d31c7111ecdeae', name: "submenu-content" }))), index.h("div", { key: 'a2afdfc6116bdc1089bc45691dce677ac5d4e27c', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '110fd1d3caaff5a28ef128035fffaddfff5bc1b0', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
