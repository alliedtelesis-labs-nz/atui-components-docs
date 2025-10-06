import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description Display nested sub-menus in the atui-sidebar.
 * Sub-menu's can be collapsed via atui-accordion-item when the parent sidebar is expanded.
 * Submenu content is collapsed and hidden when the parent sidebar is collapsed.
 * Menu indent styling is supported up to 3 levels.
 *
 * @slot submenu-content - To place the atui-sidebar-menuitem(s) in the sub menu
 * @slot submenu-hover-content - To place the atui-sidebar-menuitem(s) in the sub menu on collapsed mode
 */
export class AtSidebarSubmenuComponent {
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
    el;
    constructor() {
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
        return (h(Host, { key: 'df338d16a58a6d50c186e1adefc6101f3098ef1c' }, h("at-accordion-item", { key: '861b5be728fc38cdcc382c0f1ff60cea6b4ad7e6', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '95e33f9107c8cc9ae85226f6c0e147f73ea4d627', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '942b6f153b5e16bb169731114093c6c750c703e4', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: 'b89fe035b09521036231eaee9c6834968b93e2fa', class: "mb-16" }, h("slot", { key: 'e9be7fe079470f4495ca60484dc3af8cbd1d2826', name: "submenu-content" }))), h("at-menu", { key: '1c3353423cdc88ecb5f1db9cbb92fde004334f69', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, h("at-sidebar-menuitem", { key: '0d9b6828057ab03e9c93f4bb6835261aa9c34904', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: 'be17768d756edc5d27018b5da740590c932a0a43', class: "font-normal" }, h("slot", { key: '0f275ec107b0f4eab1bbb7b025cb4252e4a74d3e', name: "submenu-hover-content" })))));
    }
    static get is() { return "at-sidebar-submenu"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon to be displayed with the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "badge": {
                "type": "string",
                "attribute": "badge",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alert badge for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "is_active": {
                "type": "boolean",
                "attribute": "is_active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Will change the styling of the menuitem when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isSidebarOpen": {},
            "isAccordionOpen": {},
            "atuiAccordionItem": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "atuiSidebarChange",
                "method": "handleAtuiChange",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "atuiAccordionChange",
                "method": "handleAtuiAccordionChange",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=at-sidebar-submenu.js.map
