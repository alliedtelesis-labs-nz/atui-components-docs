'use strict';

var index = require('./index-Dzqi4iVM.js');

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
    isSidebarOpen = false;
    isAccordionOpen = false;
    get el() { return index.getElement(this); }
    atuiAccordionItem;
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
        return (index.h(index.Host, { key: 'd231d7f58c374762e81b2d26b494b70d3b74c3e4' }, index.h("at-menu", { key: '679019b832e7b97a42f7c6c756544edbe5a30b30', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '5f32dccc2e43142c5eb9bb3bdee774242f79346c', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: 'd12046c8d701d22e4e4a4fd1c965f19d9bca0502', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '0315ed370866c1f16bd8c39322cffadf21fd7e1a', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '448111010a07b4bb273960a7c35826d7bc147b57', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '8e707d9326317f2630425f93e9aa2c18b9409f12', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: 'd2e57690926805ec5a25718ede14a666671907d5', name: "submenu-content" }))), index.h("div", { key: 'a30ce67cb8f379aa841a8914099b3d06a5009ad3', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: 'e619225e6f0ada0edaf268daa21ab7f7d7d2f5b5', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
