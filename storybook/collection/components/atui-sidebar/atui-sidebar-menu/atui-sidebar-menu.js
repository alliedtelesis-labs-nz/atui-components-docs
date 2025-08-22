import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtuiSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'bf66c4e423b9e56f1a446a42b46d20da06905034', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'ae2fa312cf33178fcc8a7899a553849e00fff4a0' })));
    }
    static get is() { return "atui-sidebar-menu"; }
}
//# sourceMappingURL=atui-sidebar-menu.js.map
