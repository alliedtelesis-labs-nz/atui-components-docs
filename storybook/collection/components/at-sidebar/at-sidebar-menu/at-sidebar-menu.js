import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '50978e0ec34c4b5cc3ed42bc958143e65a7bf73c', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '5e5687fd2994b585af0d853a8703e172e2b30db2' })));
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
