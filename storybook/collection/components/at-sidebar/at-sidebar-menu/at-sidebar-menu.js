import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '8e74a756e45113ed7fbe9e1bf5bc06515aefc05e', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '7d7329f05938a8ce3dd5221da014bf8201f8fefc' })));
    }
    static get is() { return "at-sidebar-menu"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-menu.css"]
        };
    }
}
//# sourceMappingURL=at-sidebar-menu.js.map
