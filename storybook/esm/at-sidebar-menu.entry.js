import { r as registerInstance, h, H as Host } from './index-Cw-6gA7Z.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'af8ebb428164ac3222f2dda6e33e2362acc8cebb', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '66db9a1bf59591ede2233fcb75bc6dda70d4127b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
