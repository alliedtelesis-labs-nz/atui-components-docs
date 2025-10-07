import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'b75cd861fa8082e9767ce9e85a279d2d4c5aaefd', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'b7b8042413149e880558b066fb29402d5246e94b' })));
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
