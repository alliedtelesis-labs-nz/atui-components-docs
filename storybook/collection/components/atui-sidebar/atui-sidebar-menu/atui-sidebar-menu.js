import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtuiSidebarMenuComponent {
    render() {
        return (h(Host, { key: '7ed4e68bbbeedb2abc4ca775364cd6853b7f0771', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '18e7a1112ff3ef406e9ea0857fcddea3a5020c94' })));
    }
    static get is() { return "atui-sidebar-menu"; }
}
//# sourceMappingURL=atui-sidebar-menu.js.map
