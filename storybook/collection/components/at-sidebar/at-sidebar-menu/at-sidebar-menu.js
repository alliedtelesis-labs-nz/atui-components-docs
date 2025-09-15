import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '6d49e371a3b880d91501733c83d9a8e41e2528b8', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '6c4728dc21a3690c4e5fb7307050e003254c5c66' })));
    }
    static get is() { return "at-sidebar-menu"; }
}
//# sourceMappingURL=at-sidebar-menu.js.map
