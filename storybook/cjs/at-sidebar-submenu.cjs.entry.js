'use strict';

var index = require('./index-Bo1AxtqW.js');

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
        return (index.h(index.Host, { key: '0b7f1d446c8b914a8e83c98a2dc40c3b6ba77695' }, index.h("at-menu", { key: '5f2a76345cc59e62cd58e36d2ea1f14996ea2e98', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '3f20b4969ef6d1abde0dd31a01f4987766c6df32', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '07330dbb1f422e5e722b9478550950530e97fbe5', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: 'c387999868e21cb9de26829115fd95ea5e5cfee4', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '7a7def5780f64e9edca384e3749e48edae5c4d80', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '51c6c6a782381ea637d45c641504aaa85dabef69', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '3d510d546d60bb49ea97296b030cb44100f807be', name: "submenu-content" }))), index.h("div", { key: '8152b2eb6707cd55b96c3411b36767bf28e8e295', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '93e5548c67964b60a5e5d96e45e1a53871921467', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
