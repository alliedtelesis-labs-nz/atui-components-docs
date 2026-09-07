import { r as registerInstance, h, H as Host } from './index-CGGSFxDu.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '1b3be9c9d456b0de9ff278febea4ed147384f864', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'be2664459477a0d11899338e253ac8f795cd5961' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
