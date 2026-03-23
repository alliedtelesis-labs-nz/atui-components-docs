import { r as registerInstance, h, H as Host } from './index-CkS36Ijo.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '50978e0ec34c4b5cc3ed42bc958143e65a7bf73c', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '5e5687fd2994b585af0d853a8703e172e2b30db2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
