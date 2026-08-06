import { r as registerInstance, h, H as Host } from './index-DTnhfVT-.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8d00c4dc36eab27454257375f1bf05a04ab269be', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '98487cfbae6dd0fee9e073ba58685a82074ee54c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
