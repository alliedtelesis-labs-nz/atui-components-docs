import { r as registerInstance, h, H as Host } from './index-lWb16Ay7.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '5703f7120ed8310c96dc46e65e88a15462bd6871', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '29ffde7edfebac23bd7aadbb06ccf428907de6f2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
