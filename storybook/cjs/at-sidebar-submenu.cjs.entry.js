'use strict';

var index = require('./index-DVvGgFNV.js');

const atSidebarSubmenuCss = ":host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}[data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}[slot=submenu-hover-content] .sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{color:var(--token-sidebar-foreground);font-weight:var(--token-font-weight-normal)}";

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
    atuiAccordionItem;
    get el() { return index.getElement(this); }
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async componentDidUpdate() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const accordionItem = this.el.querySelector('at-accordion-item');
        if (accordionItem) {
            this.isAccordionOpen = await accordionItem.getIsOpen();
        }
        const parentSidebar = this.el.closest('at-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
        }
    }
    handleAtuiChange(event) {
        const target = event.target;
        const parentSidebar = this.el.closest('at-sidebar');
        if (target === parentSidebar) {
            this.isSidebarOpen = event.detail;
            if (!this.isSidebarOpen && this.atuiAccordionItem) {
                this.atuiAccordionItem.closeAccordion();
            }
        }
    }
    handleAtuiAccordionChange(event) {
        this.isAccordionOpen = event.detail;
    }
    getIsActive() {
        if (this.isSidebarOpen) {
            return !this.isAccordionOpen && this.is_active;
        }
        return this.is_active;
    }
    render() {
        return (index.h(index.Host, { key: '53b89d6acdce1f0919d29203c268af6bc8bfb3d7' }, index.h("at-accordion-item", { key: 'd183a26dea9c430fc8aab85ba3e84f05a1f753de', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: 'b8c6a07260f145024b729fe3aade2facd908215d', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: 'c63d74e2f24dc3279720bfdbb85c4eb9e60b4aed', slot: "actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: '74a6d013323e39ef06a8270f4d8bf6997074194e', class: "content" }, index.h("slot", { key: '908902c8252cf76706eca1a531ef8b6539c14810', name: "submenu-content" }))), index.h("at-menu", { key: '374661dc8139a8bc5ad74f53231f9d4a74900199', "data-open": this.isSidebarOpen, class: "hover-menu", "data-name": "hover-menu", "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, index.h("at-sidebar-menuitem", { key: 'f479e5c7bcb3585e4caff0f9b4c70a6cda11574d', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: 'bff8033e5618b19725d624868402b665dc9a9841', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '11b721ed0177521c698889f579d341c58966084d', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss;

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map
