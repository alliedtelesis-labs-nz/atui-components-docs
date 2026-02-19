import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '37c9640c6b2a4570ba3d122ffb962e3e0a044acc', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '48ad9601a6047ee84534bd42f069d298be23723b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
