import { r as registerInstance, h, H as Host } from './index-BEGRcYEc.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '97e9a7f4c986ed76019f881ab27b2b04b21ae434', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'd070246e6808fade1d306b251a326e39d7ba731f' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
