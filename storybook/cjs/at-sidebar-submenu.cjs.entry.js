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
        return (index.h(index.Host, { key: 'f992578ec0ebbc3704f950534c511fae40ada6b5' }, index.h("at-menu", { key: '168005ed67979e60cecfe85989dce5d28be364fc', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '58ada28033cf1f522f8f7a6661d8dadc90e75a2f', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen }, index.h("at-sidebar-menuitem", { key: 'ef6ba54e88c25f4b1af84edc96ff4eeb6a8415a8', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '8d2ea8b9fd13f40ee54be4acd2b14220a4cb176a', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: 'bd0f1e0a769e84aaff36669d85aebf61fed9598f', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down" }))), index.h("div", { key: 'aab2e743726780d157474f90adbba30dc4d52cba', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: 'efde19506c5e89ded9c0fc83d3527bed2c7f777a', name: "submenu-content" }))), index.h("div", { key: '434ef4ef6d10c4077d1e7bde6dc1f1c745bd6a8e', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '034e78cc3b7b64941e338e5773f80493136825aa', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
