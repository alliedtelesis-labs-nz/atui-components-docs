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
        return (h(Host, { key: 'a2d6db3de7ddd64778d7f3eac0e945e1d9549065' }, h("at-menu", { key: '357b593fee1d3cc8ea36328819264c03c2c88c3c', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: 'b3e56177aa80ed0f8b9fbb8336bd9bfbb0c969a1', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, h("at-sidebar-menuitem", { key: 'cbca085efd60fa7b4c6f74de79aa957f96ebc781', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: 'f3ef4a822627ff15f7858035c04e63358085f71f', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: '27f5e9104ef74e8ee4077eda1b0ddcec75eabcec', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: '6ddb05b40afe64601f38ffcfeb922ed92d890369', class: "content", "data-name": "submenu-content" }, h("slot", { key: '4a4453728c37a42fb83965532ee4ecca209eca32', name: "submenu-content" }))), h("div", { key: 'c2d8769f53732a8c2c1f2d00c1889217612b306d', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '98c898957fa391c51ebfcb041d38a4fccd4a6eca', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
