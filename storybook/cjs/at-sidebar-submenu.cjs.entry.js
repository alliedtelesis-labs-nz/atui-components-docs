'use strict';

var index = require('./index-BkghNVG3.js');

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
        return (index.h(index.Host, { key: 'b40a3744f571d4b502f33ba3d9d4ed0a44fac08b' }, index.h("at-menu", { key: 'a7870219d3dfb4d7e52cf37720173fbb85a7bdeb', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-accordion-item", { key: 'daf290b2b3d30ebd9ac746b1018f8188558b4441', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, index.h("at-sidebar-menuitem", { key: 'dcbad8717f87d5c8ed73fedd4c822ab71bc94cb2', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, index.h("slot", { key: '891ad8f6b3c5c8a0dbdb0e1295fff789b305ac4c', name: "icon", slot: "icon" }), this.isSidebarOpen && (index.h("at-icon", { key: '4e3b60c9a2c4a96ac40025886827636e4fe0b3cc', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), index.h("div", { key: 'ea5798d4a70a187ab115dd915a33f21d746d2919', class: "content", "data-name": "submenu-content" }, index.h("slot", { key: 'c89735f5305d02eb04f66880cc629d7bcba394da', name: "submenu-content" }))), index.h("div", { key: 'dff6b48cba26ad1203bc11e0a68a2a4fcd88f5a6', class: "hover-content", "data-name": "hover-content" }, index.h("slot", { key: '5afff3a9a565cbcdd03d4f036a0afd6ecc89fd0a', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
