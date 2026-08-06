import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '8d00c4dc36eab27454257375f1bf05a04ab269be', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '98487cfbae6dd0fee9e073ba58685a82074ee54c' })));
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
