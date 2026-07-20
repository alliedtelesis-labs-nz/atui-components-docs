import { r as registerInstance, h, H as Host } from './index-CFoMekA-.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c024531b0e88840a171292bed88452a44c96d44c', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'a7b84721c1c33a2058e08d5ab051b267c92733b2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
