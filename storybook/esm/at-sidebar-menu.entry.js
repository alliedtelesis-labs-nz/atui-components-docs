import { r as registerInstance, h, H as Host } from './index-Cwortk4y.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd42717762c7c5fdbb562c38ccae8d9efef66808d', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '78dc7e9682ae879de4cd9ebea3069f18bb34c18f' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
