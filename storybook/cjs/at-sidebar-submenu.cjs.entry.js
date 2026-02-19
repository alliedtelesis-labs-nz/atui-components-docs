'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '10994c1cad73c2a3603d75b12d498e6503392297' }, index.h("at-accordion-item", { key: 'eec41ad86aef9fab5f909c0a993e8d56cebdd090', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '034704238cb8488d1466cbfb390496582e06e996', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '5edbe228cbd22916c23d38df1a359c2dd22556f9', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), index.h("div", { key: 'b55daed9beab07fd192154774ca4f422bf8c170d', class: "content" }, index.h("slot", { key: '69fe703ab8f3892aa554ddda455645e21d39616d', name: "submenu-content" }))), index.h("at-menu", { key: 'a99f2b4632ab76dc1bf78ff9e02fbeccaab80097', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, index.h("at-sidebar-menuitem", { key: '8228fac0f706adc4eb3235ea54c661623bc44409', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '0153cb66e6cbcc8ded06ead23959fc1e52f82f2d', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, index.h("slot", { key: '70a127ef9eadfb1e79ea1df5fde314d23fc95ce0', name: "submenu-hover-content" })))));
    }
};
AtSidebarSubmenuComponent.style = atSidebarSubmenuCss();

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
