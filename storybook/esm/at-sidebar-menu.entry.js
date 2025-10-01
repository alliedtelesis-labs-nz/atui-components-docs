import { r as registerInstance, h, H as Host } from './index-CoTuPdnC.js';

const atSidebarMenuCss = "at-sidebar-menu{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px;overflow-y:auto;overflow-x:visible}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b75cd861fa8082e9767ce9e85a279d2d4c5aaefd', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'b7b8042413149e880558b066fb29402d5246e94b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

export { AtSidebarMenuComponent as at_sidebar_menu };
//# sourceMappingURL=at-sidebar-menu.entry.js.map
