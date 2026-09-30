import { r as registerInstance, h, H as Host } from './index-B7T1fCND.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7f0519ab8f8be24b00d95a8bd67665ef2387ef13', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '560c9c79ca2db35a9b4ada0f39a6931c089086c9' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
