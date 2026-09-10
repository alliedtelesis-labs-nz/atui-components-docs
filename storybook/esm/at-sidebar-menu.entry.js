import { r as registerInstance, h, H as Host } from './index-46ti_ijN.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b1c4a7f37bd9f00df861665abf1a58fdc6f02601', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '38773982e8a6a5c0587e7ddfcd3aa411d5bd36f5' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
