import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '3689626876e19e2d33b4583bc50f5493131b24f3', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '0bf6f0b308ab249a1b57fcc37f527983e68ea4f0' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
