import { r as registerInstance, h, H as Host } from './index-vSlhROK9.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4845438dd8a8bf83874659c163837f4c45584224', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'ddc18b1df86ede31e4be7c576c3b252466151e6e' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
