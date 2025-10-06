import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '3cf12f22e99ddbc07dc2ecbfb1227b3e3644662a', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'c6d8725c9923c8911a4afd45967f9e1026827929' })));
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
