'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '88265479f5f134c58edc3d8d15ec869a384bfbad' }, index.h("at-accordion-item", { key: 'b097034afa3378da1dddb3156c4f5e9e3f065261', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '4e1f8f17bacd29020f4e56801bc65dfa31c70952', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '2e627eae1fcd284ba8ba48f1a0565d06d0d9d9f4', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: 'b5e5695711a77e8369225eb5f79cc5ea604b14ca', class: "content" }, index.h("slot", { key: 'd45dc8597a16694fa37cffacfb0b60b46a425357', name: "submenu-content" }))), index.h("at-menu", { key: 'c3b7d4de4a8717fba91f5ba8d06e7497be55077b', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, index.h("at-sidebar-menuitem", { key: 'ee58ef64c13c484b37a0160ce44875eab0a79761', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '88de4ea7997ea9c359f7ceb6bcfc9c33819ea9b0', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '06b897785db58d444c409c9a895bb40c9a766b61', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
