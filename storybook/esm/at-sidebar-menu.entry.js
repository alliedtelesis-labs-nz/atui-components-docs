import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b8fd4d9641c99fad6ea1d075bea5a44441beb477', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '9c6b1d2872c712a97ec223d3218507cdf71157c8' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
