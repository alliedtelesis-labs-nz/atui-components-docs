'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '979054b00ab1a67518b6af91f86388f5160da2c5' }, index.h("at-menu", { key: '7b9f21d511815f4469e4a7b747a79abae187d254', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: '7c961c438e733dc57aadc5ae5d205cd43c71d3b6', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: '08e2f1e95277c0a91216c4f254bba1b36506dbca', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '5d4462195c918c1d5616ef4edc3197362ca305aa', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '487c16cea1536f7551e4aa8d4d350922238fd2a5', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: '5ea6e14b255ab8992b56c6cf374ddd2d92165f44', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: '6bc953aed541719fcca18ca94aa4c0fff85332d2', name: "submenu-content" }))), index.h("div", { key: '7eaa805ff7cd48219e6c3766fb65057f83024f02', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '46a9b9dbd726160dad5e599b082a04dba9ed6613', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
