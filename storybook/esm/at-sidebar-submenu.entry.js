import { g as getElement, r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

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
    get el() { return getElement(this); }
    atuiAccordionItem;
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
        return (h(Host, { key: 'a2d6db3de7ddd64778d7f3eac0e945e1d9549065' }, h("at-menu", { key: '357b593fee1d3cc8ea36328819264c03c2c88c3c', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: '23fa7c1e03e097ef6aacc136cad37d6877af0263', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}` }, h("at-sidebar-menuitem", { key: '9a1ffa72b0418b2695731abb55f8de0054e95c99', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: 'e6fc729591397a9e3010759a4478aab65070711a', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: 'f7e2c105007ecc472ee65c300d182c5b28dbefd0', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down", class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: '177c975da04ba2ca806d1816c30f711beb3dc4c8', class: "content", "data-name": "submenu-content" }, h("slot", { key: 'ff14fcb96c62615185831d91c7e7fa29faa9a6f0', name: "submenu-content" }))), h("div", { key: '6a0334ae0568b2212693ad7b9fa84ac0b9b94c86', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: 'abd41a5c78869ab8e8cf23569aa05639d108cd81', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
