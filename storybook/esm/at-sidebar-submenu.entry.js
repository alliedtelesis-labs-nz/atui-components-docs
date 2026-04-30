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
        return (h(Host, { key: 'f992578ec0ebbc3704f950534c511fae40ada6b5' }, h("at-menu", { key: '168005ed67979e60cecfe85989dce5d28be364fc', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: '4da4a27411c8e63f8735b023afd23434458869fa', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, class: `${!this.isSidebarOpen ? 'pointer-events-none select-none' : ''}` }, h("at-sidebar-menuitem", { key: '2a6beb0d7ea00f377be490851fe1c3997ba575c5', slot: "accordion-trigger", label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: '3942ddee7f6a9b8246a3df7b4fe4061a04b0dceb', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: '031d1836a77ed8374ffb678533624f408613745b', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: "chevron_down", class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: 'f8f6572a2e0f527f09070732db40e16381f7243f', class: "content", "data-name": "submenu-content" }, h("slot", { key: 'f60362b2a75254c19fc0b65c94d50c728fa02799', name: "submenu-content" }))), h("div", { key: '15fa0144e88cb036063f017eff33f4f3b0fdc4f6', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '3120fc1d900e8bd200f0fe22526070e524e712d5', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

export { AtSidebarSubmenuComponent as at_sidebar_submenu };
