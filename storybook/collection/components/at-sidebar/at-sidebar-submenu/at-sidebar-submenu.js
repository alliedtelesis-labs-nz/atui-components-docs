import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description Display nested sub-menus in the atui-sidebar.
 * Sub-menu's can be collapsed via atui-accordion-item when the parent sidebar is expanded.
 * Submenu content is collapsed and hidden when the parent sidebar is collapsed.
 * Menu indent styling is supported up to 3 levels.
 *
 * @slot icon - Icon content to be shown in both expanded and collapsed menu items. Usually an `<at-icon>` element.
 * @slot submenu-content - To place the atui-sidebar-menuitem(s) in the sub menu.
 * @slot submenu-hover-content - To place the atui-sidebar-menuitem(s) in the sub menu on collapsed mode.
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
    el;
    atuiAccordionItem;
    constructor() {
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
        return (h(Host, { key: '80b137019ae721803c8e111f66c51f76da8c8f69' }, h("at-menu", { key: 'fca8b06c319872e8cd139630f1f8f075cd12ab99', class: "hover-menu", "data-name": "hover-menu", trigger: "hover", position: "right", align: "start", width: "200px", disabled: this.isSidebarOpen }, h("at-accordion-item", { key: '225a4a08fb9b4a8c1697702cb9ea6ca74a4fe8ea', slot: "menu-trigger", ref: (el) => (this.atuiAccordionItem = el), item_id: this.label, open: this.isAccordionOpen, disabled: !this.isSidebarOpen, class: `${!this.isSidebarOpen ? 'select-none' : ''}`, onAtuiAccordionChange: (e) => (this.isAccordionOpen = e.detail) }, h("at-sidebar-menuitem", { key: '3bcc677c97fb359d18d9bc11ba8b2cdd41a191e4', slot: "accordion-trigger", is_trigger: true, label: this.label, is_active: this.getIsActive(), badge: this.badge }, h("slot", { key: '732ab17764084894f5315d5957bb5f5190c2daee', name: "icon", slot: "icon" }), this.isSidebarOpen && (h("at-icon", { key: 'f33c7682a2815e92018ea5340ab8b9b561b6ca43', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", name: `chevron_down`, class: `${this.isAccordionOpen ? 'rotate-180' : ''}` }))), h("div", { key: '2447d046f7999eb68b234ea3a10db652a2ce35f0', class: "content", "data-name": "submenu-content" }, h("slot", { key: '0214a58654664a7d821d4376a21a2a954611d756', name: "submenu-content" }))), h("div", { key: '60c5104fbf07f0a18d07022b3cebbd08f94eb129', class: "hover-content", "data-name": "hover-content" }, h("slot", { key: '692158371d4f8ec59d9600013b1050e8ac111c15', name: "submenu-hover-content" })))));
    }
    static get is() { return "at-sidebar-submenu"; }
    static get originalStyleUrls() {
        return {
            "$": ["./at-sidebar-submenu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-submenu.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
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
                "reflect": false,
                "attribute": "label"
            },
            "icon": {
                "type": "string",
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
                "reflect": false,
                "attribute": "icon"
            },
            "badge": {
                "type": "string",
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
                "reflect": false,
                "attribute": "badge"
            },
            "is_active": {
                "type": "boolean",
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
                "reflect": false,
                "attribute": "is_active"
            }
        };
    }
    static get states() {
        return {
            "isSidebarOpen": {},
            "isAccordionOpen": {}
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
            }];
    }
}
