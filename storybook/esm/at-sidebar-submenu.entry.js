import { a as getElement, r as registerInstance, h, H as Host } from './index-DdGm_rA6.js';

const atSidebarSubmenuCss = () => `:host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}at-sidebar-submenu at-accordion-item summary{box-shadow:none !important}at-sidebar-submenu at-accordion-item summary:focus-visible at-sidebar-menuitem{box-shadow:inset 0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 30%, transparent)}`;

const AtSidebarSubmenuComponent = class {
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Carbon icon or svg to be displayed with the label
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
        return (h(Host, { key: 'f9113df20e5d4ce3e83ce5056a44fe9820acd92e' }, h("at-menu", { key: 'aa6e06966dc03e44b8e960d3a06b465d16882161', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: '2a18e7cb010a3243c84dd7a3ef99cf9a561e5032', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, h("at-sidebar-menuitem", { key: '3d50bf8fbc08407080db71d49d78475362878d7f', slot: "accordion-trigger", is_trigger: true, label: this.label, icon: this.icon, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: 'ebebeb16a5d25cf3ede62570a061504e95c41c66', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: '9e7896d509d5c315507d3dee297873964aed052c', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: 'e81b4c22e6bbf818639a17df465a6c337847dee1', class: "content", "data-name": "submenu-content" }, h("slot", { key: '1845c449b84d62acc0879986ae1ce9bdb018cbc3', name: "submenu-content" }))), h("div", { key: 'f5bbe77c7f762d08f0d689a9487defb490b1f1dd', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '60a53423b96219e2f420909f25c063667368590a', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
