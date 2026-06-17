'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: '013b46c7739783d4917ed82ebee56ff34a100aa5' }, index.h("at-menu", { key: '90f36d5930ea9e652d28dd15cd6e912bad666b79', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: 'e771870193ad1f61a4dfc8cb1aba55c1a5a7dd03', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '3ad16b6f39a92960a9ee1b6e7f91e8f312e954bf', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '3e2d85652e8efbeb96f28aec4bfa931762d671ca', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '369d761df2888af9ee79deb1dcd379ac7960d198', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '4cbba63ab686e4737740f965407c095416de118b', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '0f7eb848c690ef412a267c296a455c989e91d86c', name: "submenu-content" }))), index.h("div", { key: 'cfbfadd86f10a536998849bbf2791535a2add9d3', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '7a337c9c6b45847d9f8becfcf2878876fba06456', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
