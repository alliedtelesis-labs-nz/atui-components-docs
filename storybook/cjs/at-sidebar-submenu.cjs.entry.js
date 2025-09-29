'use strict';

var index = require('./index-i7hIKTeN.js');

const AtSidebarSubmenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isSidebarOpen = false;
        this.isAccordionOpen = false;
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
        return (index.h(index.Host, { key: 'df338d16a58a6d50c186e1adefc6101f3098ef1c' }, index.h("at-accordion-item", { key: '861b5be728fc38cdcc382c0f1ff60cea6b4ad7e6', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (index.h("at-sidebar-menuitem", { key: '95e33f9107c8cc9ae85226f6c0e147f73ea4d627', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (index.h("i", { key: '942b6f153b5e16bb169731114093c6c750c703e4', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), index.h("div", { key: '62f62d22dc1397f2c61c3179bd87cccdc1cf9481', class: "font-normal" }, index.h("slot", { key: 'c7902fc59c22f30672fcc939d08673a76ca0a8ee', name: "submenu-content" }))), index.h("at-menu", { key: '3c3cc9e794259b3cb8bec5b1cf7be0574102dbb7', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, index.h("at-sidebar-menuitem", { key: '8584e6e96a51a231531adf5d1a4785adb627cea6', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), index.h("div", { key: '845501c8980e6003590ab24bc19297f1980914ac', class: "font-normal" }, index.h("slot", { key: 'aa61cb790452fde4afc34411dace1d7a6dbbcede', name: "submenu-hover-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.at_sidebar_submenu = AtSidebarSubmenuComponent;
//# sourceMappingURL=at-sidebar-submenu.entry.cjs.js.map

//# sourceMappingURL=at-sidebar-submenu.cjs.entry.js.map