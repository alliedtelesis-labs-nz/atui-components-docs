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
        return (index.h(index.Host, { key: 'd8cff0af3589fa23483a5203ed45e0ffd0ba04f0' }, index.h("at-menu", { key: '0daa0d10fee783beace57dacff6488de07a28163', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '016aecd54cfa44dbda932fd4e2f499ac540c4ac3', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen }, index.h("at-sidebar-menuitem", { key: 'dd18c396bd500d917f64f8dbeaf5d8289a4673fa', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '9beaed249cd4761b20d16a0bdbe048dd66a00161', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: 'a60d1dd53a39f728d4180f85da9b780fc5fba591', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down" }))), index.h("div", { key: '65a2d9dd70d36666871a9a699d7a5a92543a4a43', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '082924f71ca83c304b0b3547688874c128523012', name: "submenu-content" }))), index.h("div", { key: '2feead444d2ecffc7fea43544d6cc4aea9e9cf21', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: 'c5db3f068f76b96967d8f8e9106555d2996ed5ff', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
