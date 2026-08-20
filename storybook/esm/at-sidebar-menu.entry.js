import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2a83335429a7ffa6e604d0f13cc25424777336d8', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '21b61f1730c2595f1b8d85b564958e0b9aae23bd' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
