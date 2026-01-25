import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'a9abfcabb7bd3282182e9939b664ea5b6e7a8ee2', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'b0b21be1df7fd3a207c951c6ea0319aac6a21af4' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
