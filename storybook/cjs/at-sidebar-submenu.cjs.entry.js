'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarSubmenuCss = ":host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}";

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
        return (index.h(index.Host, { key: '1a3279840305ecb49599566cc57f7acaffb2d91a' }, index.h("at-accordion-item", { key: 'd636af13eeb91fee3781c08189d151195a16c840', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '75133907e0ec30ba1d3a58739b36973b7b3dfbf0', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: 'a73ddb60a04e3c83908ab531dd16286604ccfa58', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: 'eaeab82fffd2e7e051871053e22a3e0232ab3af3', class: "content" }, index.h("slot", { key: '3752ee61531b1f89583c9e23a61ac9dd600813dd', name: "submenu-content" }))), index.h("at-menu", { key: '5fedb15c609e23081f5044f09bd4ab27b6f398f9', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, index.h("at-sidebar-menuitem", { key: '79952d211d8a26945ae2361dc30400eb642515f4', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '58746577beab624151cb0fb51e47c505344e7089', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '04803cce56d83a44cae80219b4a8a39f72191008', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss;

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map
