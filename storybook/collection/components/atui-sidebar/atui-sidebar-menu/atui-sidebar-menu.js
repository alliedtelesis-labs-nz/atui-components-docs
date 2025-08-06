import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtuiSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'ed7e6640376ee02b130680971bceaa2c760da905', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'e91cec544e2e5314167c5bbdd467aefe563a2903' })));
    }
    static get is() { return "atui-sidebar-menu"; }
}
//# sourceMappingURL=atui-sidebar-menu.js.map
