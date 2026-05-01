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
        return (h(Host, { key: 'f25027d564b05f997bf5eabccb87a3e0ca69faaa' }, h("at-menu", { key: '7c3454f30e81aeb3024dbdfd2f2b6d47608a1e55', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: 'cd50883444f98926bfd1858d93d49668040333af', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}` }, h("at-sidebar-menuitem", { key: 'cf904a43e509998a64fc522daf233ca0a23b0fd4', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: '49c73fea4396edcbb93507832d3a97dfcb992fbf', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: 'd586289524cf7742d1d6ad7dabad4773acdc51a8', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down", class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: '3a68f6383037d88b347ab928d9153843192b7480', class: "content", "data-name": "submenu-content" }, h("slot", { key: '63932d00dd6e83bde4dae3974681b822fc3fe849', name: "submenu-content" }))), h("div", { key: '1c546aabf58917daf82e6ac3b73b50199f8bd66c', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '65743fab7fa2fc9baf532836e8a0283841f3cd31', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
