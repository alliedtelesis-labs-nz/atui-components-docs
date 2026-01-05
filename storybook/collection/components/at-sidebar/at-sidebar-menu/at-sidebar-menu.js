import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description
 *
 * @slot - To place the atui-sidebar-menuitem(s) in the menu
 */
export class AtSidebarMenuComponent {
    render() {
        return (h(Host, { key: '9715570f767e3bbba1c01b3caf768fb01ca5f0ab', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'f65c399fa0ac7ec2303a1331ff4ad7b391370368' })));
    }
    static get is() { return "at-sidebar-menu"; }
    static get encapsulation() { return "scoped"; }
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
