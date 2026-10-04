import { r as registerInstance, h, H as Host } from './index-Baj27LS8.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '06b59000fdac2900450433b07221b554bb783917', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '52f0e5fedd206f1b67106a4cfc12c47fb0451487' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
