import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'adeeda8671d768928e398998700a6344f3b1ff17', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '8bed64c1ca239573c06f5f91c86d8c0e037c23c0' })));
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
//# sourceMappingURL=at-sidebar-menu.js.map
