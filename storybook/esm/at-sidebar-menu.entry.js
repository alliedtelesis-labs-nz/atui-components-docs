import { r as registerInstance, h, H as Host } from './index-CT99rxub.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '5aa65256da335cf5fa9038ea113c8fc0625cdaaa', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '015ebfd9a5f4881f994d5933a2abd86e6d06faac' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
