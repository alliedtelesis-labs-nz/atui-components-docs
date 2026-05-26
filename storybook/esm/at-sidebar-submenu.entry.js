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
        return (h(Host, { key: 'a4c97abff5439467a8ae5eb183a04268c814bbf8' }, h("at-menu", { key: 'dbc85b5afa8f5eb4e1bd1ac977316bdeed46f24b', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: 'a5538e7b5a3fe50afea731b8e6c47e93f767b2a4', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, h("at-sidebar-menuitem", { key: '1853cbce878176958358a541cf897362ace52b39', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: '52811e14cfd3997667e21b042f1914faf4264278', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: 'aa26f213d324ea4657dd767bdaf5d6553cef563c', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: '317e8df55130b97ae67290e21fe413b0bf7244ce', class: "content", "data-name": "submenu-content" }, h("slot", { key: '01d95f7fea865d4e0455f9fa22d133065335fd98', name: "submenu-content" }))), h("div", { key: '49a67d5dd4efa04651ca2e21f2bf1b85b460edcb', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '30dd4f56b8d1beeed0d2246fee012750c05e2243', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
