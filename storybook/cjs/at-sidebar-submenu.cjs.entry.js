'use strict';

var index = require('./index-GH7gxrjy.js');

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
        return (index.h(index.Host, { key: 'e46469ddec4ab636baaa15397d610a326817314b' }, index.h("at-menu", { key: 'a3276e40ce7e2ef0eaedd2d9282f79cd71b3672a', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '996b0f2d55efb1600e2294edae223999e5e2f601', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '52274888f6b6da15a349655c4d5e0cea48973214', slot: "accordion-trigger", is_trigger: true, label: this.label, icon: this.icon, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: 'c6e6aa4a05edc3a04708eea790f48f3446d8c0b5', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '4bbb0d95c44f4a75e7a51a77a101d95c8c9fa433', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '4e52a5e47d59068fc5af3345d638c1f40d142101', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '2493afd32929dc59dc3fade42ceeb1b7275947ab', name: "submenu-content" }))), index.h("div", { key: '1676d2a2ccc413627c6cca193cd2bcfae08d622d', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: 'd62ca26610678ecf86c6bfe651ce91cab75d2ed0', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
