import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '79796e26e04c9391c1af032cd36e83b32d3e608d', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'a9870bd9647f290ead6051af8fa23bffd993791e' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
