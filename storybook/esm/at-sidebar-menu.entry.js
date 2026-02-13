import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'f44b6aaa6313a502f0084691b93ebfa4cb9ab294', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '47f9531c01f9de086e81ec6ab7905b626fc044e3' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
