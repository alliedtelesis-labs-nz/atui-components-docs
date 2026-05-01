'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: 'f2bb158f155ffde5044e3f43e77857359baaaafd' }, index.h("at-menu", { key: 'ccdd0527de50152cba523269df66352cb87ed77d', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: 'ef94095ba2646acb60abf93e63d741bf93a50fb3', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}` }, index.h("at-sidebar-menuitem", { key: 'f8b0446bd13f2e8b17a127b2942936282afbf56f', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: 'd673faea5ededbe97617b871096988d4a9f9522c', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: 'f13a639ea4e441c1bd51a6b066579baa3534ff0f', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down", class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: 'c438a9e92c18be180d09a9ab1bd06f7d81d85215', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: 'a2c150ce27b3ad8d036cbb88a190dd28ba970c7d', name: "submenu-content" }))), index.h("div", { key: 'e936f53b4c5dae0b9068fb2bca2dd83cec504c2e', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: 'eb9890d680ffe1c73cf1ac33ba4139d6c7a9e4ab', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
