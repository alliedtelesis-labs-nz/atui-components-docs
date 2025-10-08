import { g as getElement, r as registerInstance, h, H as Host } from './index-CVZ0O9-b.js';

const atSidebarSubmenuCss = ".sc-at-sidebar-submenu-h .content.sc-at-sidebar-submenu{margin-bottom:16px}.sc-at-sidebar-submenu-h .hover-content.sc-at-sidebar-submenu{font-weight:var(--token-font-weight-normal)}.sc-at-sidebar-submenu-h .hover-menu.sc-at-sidebar-submenu{width:var(--token-width-menu)}.sc-at-sidebar-submenu-h .hover-menu[data-open].sc-at-sidebar-submenu{display:none}";

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
    get el() { return getElement(this); }
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '84e2b99ecc93130069f99ca71e8370242e56cc0a' }, h("at-accordion-item", { key: '24a4fb4b59ba9b01f5f39595ac8f68f202e1d3ca', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '52ec176699e64a684fe10d71d78fdd30ca864798', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '4cc8abf32b92b5ac71109d62834bd728a905c3a3', slot: "actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), h("div", { key: 'f1cf3b1ccf1d3cdabe15dda18a5260cd986459d4', class: "content" }, h("slot", { key: '88d704de25b8063d39d497e43437b9feacf0ee79', name: "submenu-content" }))), h("at-menu", { key: 'ca1562f390c6a34296151b3bf8d32e3f99f4e822', "data-open": this.isSidebarOpen, class: "hover-menu", "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start" }, h("at-sidebar-menuitem", { key: 'ffc0e266999abeb9f81a340b68f6731cd97ad1cc', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: 'b8979c7e7e8f1835895da8accc6863e49319b28e', class: "submenu-hover-content" }, h("slot", { key: 'e9abc0ec3c029b84d76394405644254c3d34c5a7', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss;

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
//# sourceMappingURL=at-sidebar-submenu.entry.js.map
