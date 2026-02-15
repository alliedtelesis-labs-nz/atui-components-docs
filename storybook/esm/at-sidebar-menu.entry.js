import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '23fee99189b98c52680401dba2df40504ee9979f', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '0c4a177339913c07477b6aefd71a1d78091ebb37' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
