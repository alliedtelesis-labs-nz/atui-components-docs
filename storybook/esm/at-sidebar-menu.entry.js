import { r as registerInstance, h, H as Host } from './index-DTcI15Wk.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // No <slot />: Stencil relocates a scoped host's slotted children on every ancestor
        // render, and that moves items a framework inserts after load to the top of the menu.
        return (h(Host, { key: '5c9b380fe5f16b74583807999e792ee3cdbbfda0', role: "menu", "data-name": "sidebar-menu" }));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
