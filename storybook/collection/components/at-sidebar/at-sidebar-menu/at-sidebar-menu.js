import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '9ea99ecc4a37c45cfd297bd20bed2aab293e0d73', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'da1d22d8b68ef07ef485ebfe3387ff99f392b2f3' })));
    }
    static get is() { return "at-sidebar-menu"; }
    static get encapsulation() { return "scoped"; }
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
