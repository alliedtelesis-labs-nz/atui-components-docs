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
        return (index.h(index.Host, { key: '9bd07c5de479f674eb772a59de55ea97c8987ab1' }, index.h("at-accordion-item", { key: '4db06b6b92f77abcda2de7dbdfa3954e617fc8a8', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '6eb35ad2f6433887099a17f38155068b0654e118', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: 'a2b03b7bdf756164db2e8471e5de42c53186db53', slot: "actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: '9d717aaf341246a7e5cc8a77f9b01f6978ebeb36', class: "content" }, index.h("slot", { key: '8cf3283ecb27b46e17e1c4dab655de3e54bf39d1', name: "submenu-content" }))), index.h("at-menu", { key: 'ead8301d8c872057c162d7015005e61efaad8bf2', "data-open": this.isSidebarOpen, class: "hover-menu", "data-name": "hover-menu", "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-sidebar-menuitem", { key: '33c10436fce31cd4544ee9bf566208f22d1d52df', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '490cc77cd80c6c7a01dd92d65a94f030f3eae373', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '48aa150bba054536512df7f019891ef7a6dc7884', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss;

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map
