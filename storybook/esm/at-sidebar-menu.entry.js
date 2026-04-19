import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4c8712581dbb94dfcef0e1aec62b505b72d79979', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '911d2f37be4a6589914a92a6e0c1bb8f2168a74c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
