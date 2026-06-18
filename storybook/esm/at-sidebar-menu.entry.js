import { r as registerInstance, h, H as Host } from './index-BXUxu8jr.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '69ef99cd32f3bf947f0858df8be7a45450c7e828', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'ee2b4b21ad2f5733db0f1621dd27871a4cda54d7' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
