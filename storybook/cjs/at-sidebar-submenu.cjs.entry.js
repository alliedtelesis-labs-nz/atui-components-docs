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
        return (index.h(index.Host, { key: '93879e0ceb7cf7dc35efc68ead63e4cb793488b5' }, index.h("at-accordion-item", { key: 'e160ac3d26306186e4276396b0b2b7dc484f32a5', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '3a0d2e09c62ad7f37a7d90950696a109b5942711', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '3824ed3fb05a686707e8a4ee9d299a686316e30d', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: 'b2766379f8b9511ac2d7baabdb2ae51a9ce5a14d', class: "content" }, index.h("slot", { key: '1e61f825a09a7df962ed59b593ddd1f5d688e7d9', name: "submenu-content" }))), index.h("at-menu", { key: 'a3c998d2afd2a606ddf803543efcaefbd0964d69', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, index.h("at-sidebar-menuitem", { key: '9a59953472cc230ccb4c5645ebcf51dfef6eb41c', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: 'def377693a537aea0d686da590777eab493509e3', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: 'c7c6e5d794ed0a23aea95c6a7ee0894bfea42593', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
