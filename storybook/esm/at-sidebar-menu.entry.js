import { r as registerInstance, h, H as Host } from './index-CKYs7vaG.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '63774b08beca71606571001c00fde792957ae8ee', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '52bf2cf7a255d22b40421eb15a166bfa9d1d0492' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
