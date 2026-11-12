'use strict';

var index = require('./index-CjCsBbN_.js');

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
    get el() { return index.getElement(this); }
    atuiAccordionItem;
    openStateBeforeCollapse;
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
        return (index.h(index.Host, { key: '86ec81a36030673e417a7eeaa71828bdd0e09c43' }, index.h("at-menu", { key: '581e2a8ec18bd4e25f3c4ac865553b16e9c6051a', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '2ad244a41d63a7c0c025a692a0448051d410e38a', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '29004230011a27d187e38ef244ab109c430fde71', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '9704298b96f23b8078d4c0342c92b6a12cb439ff', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '2a76f7de7d36425152386dfb4ca2eb01e49a0f00', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '573ee160c346b0ce0440952b464d9f93c3bba227', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '8b03f76d8a8d572db9f2eb8f3f8e86b7ced16db2', name: "submenu-content" }))), index.h("div", { key: '4c5075ad40e4b396817f80e8ee165c25211c7b30', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: 'f346692562a422e550620a3e50b237cb3715a14c', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
