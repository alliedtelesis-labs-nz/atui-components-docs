import { r as registerInstance, h, H as Host } from './index-H8lgnoYZ.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '86a0992f801ed902bf69d4d7550c2f7113dee704', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '0964020ff95a9d23710eb0dbb97a633c8bb9f8ee' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
