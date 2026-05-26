import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'de8bd42d50559a284dbe6a459cd968c487e06727', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'ef35ac8bfe2a0be0efbbf532beb7a635643a31b9' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
