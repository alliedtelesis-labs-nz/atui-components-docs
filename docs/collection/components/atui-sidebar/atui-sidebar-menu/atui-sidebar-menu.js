import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtuiSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'd55da393c6bd063ffcdabbe9493b9de4c2c681f0', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '12b660166d9033076f8beed733224676c3fd0c74' })));
    }
    static get is() { return "atui-sidebar-menu"; }
}
//# sourceMappingURL=atui-sidebar-menu.js.map
