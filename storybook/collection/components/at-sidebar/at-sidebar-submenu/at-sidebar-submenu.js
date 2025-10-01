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
        return (h(Host, { key: '24692a40e2afed6e9cc60389428d4b6595e52ca2' }, h("at-accordion-item", { key: '7a7b164c3a4058bd669eaf234b596cb0c63f82e9', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '5a263c7abf79f59174c3463e2b3fc09e607e8f2f', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '82e976d363f935af8ab0a875946813dfcc3f348f', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '1c583907ee7bd874f3e6d71dc7a6500f56368237', class: "mb-16" }, h("slot", { key: '36f8fa5e8c2d4a9acf5c7df5b8307dd6f46de763', name: "submenu-content" }))), h("at-menu", { key: '75dccbc501f4212cdedc5b9ba01c1ad2698d9d2b', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, h("at-sidebar-menuitem", { key: '254324e4d5171ea70fa45f9f4bbd9794cb61c863', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '8274428a96479b6e0f63ccb763e68a7c608e3592', class: "font-normal" }, h("slot", { key: '431b40007e8fcd7115b48a1ef3f74c8b9b33c3d5', name: "submenu-hover-content" })))));
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
