import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu sub component for the sidebar.
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the sub menu
 */
export class AtuiSidebarMenuSubComponent {
    render() {
        return (h(Host, { key: '4279ab2c88d751b6e58762f455491c6914b75c8b', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, h("slot", { key: '8956cacfab38a44c25935ed9936736439a8719c1' })));
    }
    static get is() { return "atui-sidebar-menu-sub"; }
}
//# sourceMappingURL=atui-sidebar-menu-sub.js.map
