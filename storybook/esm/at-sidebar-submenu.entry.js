import { g as getElement, r as registerInstance, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: '68464c9d6959e7d7b93386e5c6ea6e5d27fa492c' }, h("at-accordion-item", { key: '1328d931cc1089e2afe690d99366836f66b64a92', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '7905c236a72745557b0ebc88ccbc94c5e84d2b98', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '2815c430c4723311d833eb48156b18d25b588d72', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), h("div", { key: '585f0924ff2bfd019d44f1c034463f70d5005c4c', class: "content" }, h("slot", { key: '8784b65afd058d2e7d9998c5a0ac9129c8624eaf', name: "submenu-content" }))), h("at-menu", { key: '09a139a961f271263bc5e49769547d1df1bcbcef', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, h("at-sidebar-menuitem", { key: 'f0be4efe5a517995b8a6c2924ce72850df8bfe53', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '95f6ece09408a8a3d5f9de44df18b0c07954f3ad', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, h("slot", { key: '314c629a4d3eb440bbe635b51fa35fc8bfc058c0', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss;

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
//# sourceMappingURL=at-sidebar-submenu.entry.js.map
