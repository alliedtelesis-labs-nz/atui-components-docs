import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'fe57cb89450e2138db5054a53dbb7cce94e0b9a1', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '850498d0f52471d8e2883a135867b5561e131644' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
