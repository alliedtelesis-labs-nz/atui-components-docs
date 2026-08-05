import { r as registerInstance, h, H as Host } from './index-DNWYfDmW.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '9ea99ecc4a37c45cfd297bd20bed2aab293e0d73', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'da1d22d8b68ef07ef485ebfe3387ff99f392b2f3' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
