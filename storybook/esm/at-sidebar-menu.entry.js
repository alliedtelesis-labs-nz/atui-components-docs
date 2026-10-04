import { r as registerInstance, h, H as Host } from './index-C56p-u4D.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'a48b2a360e0e2df7ce6350b6eb8d94f31f9e4639', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '08269a41f21ec828a774049689a3840ac947319a' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
