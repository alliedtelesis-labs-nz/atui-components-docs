import { r as registerInstance, h, H as Host } from './index-IMi8cNQw.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '9e2f044fb58f09f0176206aa06c90f17411c8314', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '2e507c7c8be7f56f88f2db3b9a03bc7200c68908' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
