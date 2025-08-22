import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtuiSidebarMenuComponent {
    render() {
        return (h(Host, { key: '37d1e3bba33a56b8bacac8df243129abc2408948', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '21151700ea5fb459778dcb7174de1871a06dca30' })));
    }
    static get is() { return "atui-sidebar-menu"; }
    static get encapsulation() { return "shadow"; }
}
//# sourceMappingURL=atui-sidebar-menu.js.map
