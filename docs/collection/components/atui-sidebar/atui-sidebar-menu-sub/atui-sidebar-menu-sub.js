import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu sub component for the sidebar.
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the sub menu
 */
export class AtuiSidebarMenuSubComponent {
    render() {
        return (h(Host, { key: '7694db3e9bd93e5fe52d3c49eba485e16f554979', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, h("slot", { key: '2e7c8945f9f7a7e7dabfcf0fb5c60825db144f64' })));
    }
    static get is() { return "atui-sidebar-menu-sub"; }
}
//# sourceMappingURL=atui-sidebar-menu-sub.js.map
