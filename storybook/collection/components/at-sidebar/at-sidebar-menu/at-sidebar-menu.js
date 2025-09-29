import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: 'ba139fe92061da41c3e199c0173b5a869fff1435', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '391ff827a2fd52fe9001c6b1fb584c7adff8438d' })));
    }
    static get is() { return "at-sidebar-menu"; }
}
//# sourceMappingURL=at-sidebar-menu.js.map
