import { a as getElement, r as registerInstance, h, H as Host } from './index-CjAoXTs1.js';

const atSidebarSubmenuCss = () => `:host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}at-sidebar-submenu at-accordion-item summary{box-shadow:none !important}at-sidebar-submenu at-accordion-item summary:focus-visible at-sidebar-menuitem{box-shadow:inset 0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 30%, transparent)}`;

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
    /**
     * Whether the submenu starts expanded. When set, the submenu keeps its own
     * expanded state: it is restored after the sidebar is collapsed and
     * re-expanded, and expanding the sidebar no longer opens every submenu.
     * When unset, the submenu follows the sidebar's open state.
     */
    default_open;
    isSidebarOpen = false;
    isAccordionOpen = false;
    get el() { return getElement(this); }
    atuiAccordionItem;
    openStateBeforeCollapse;
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const parentSidebar = this.el.closest('at-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
            this.isAccordionOpen = this.isSidebarOpen
                ? (this.default_open ?? true)
                : false;
        }
    }
    handleAtuiChange(event) {
        const parentSidebar = this.el.closest('at-sidebar');
        if (event.target !== parentSidebar) {
            return;
        }
        if (this.default_open !== undefined && !event.detail) {
            this.openStateBeforeCollapse = this.isAccordionOpen;
        }
        const shouldOpen = event.detail &&
            (this.default_open === undefined ||
                (this.openStateBeforeCollapse ?? this.default_open));
        this.isSidebarOpen = event.detail;
        this.isAccordionOpen = shouldOpen;
        if (this.atuiAccordionItem) {
            if (shouldOpen) {
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
        return (h(Host, { key: '883c33ab0162e05b2f5ed232c5b56240aedceb2d' }, h("at-menu", { key: 'a49c29089925eece1654193b043178de4ca54203', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: 'db7988079c20d2ef892238f0dce045acac9eaf2f', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, h("at-sidebar-menuitem", { key: '3b549866db42f55ba4bdbefe6bb281dd458a0314', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: '13df62cc240621b5fe4f09ff157f58cb995af181', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: '379ad7321f275d3c5037160e171b3bb84660af0c', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: 'fa9741179f1bec1b44a2886942bd47f3e6a807eb', class: "content", "data-name": "submenu-content" }, h("slot", { key: 'cdb86667fa9afb407dde6bbf1c9fc9e8ce155ab3', name: "submenu-content" }))), h("div", { key: 'ee7dc7506eea6dea67c463233b1cac0bda951caa', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: 'ad6c27dcdc03c043c14c3b019c8aaa2880974f3c', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
