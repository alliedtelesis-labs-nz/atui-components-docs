import { r as registerInstance, h, H as Host } from './index-DgqokAJi.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '641cc48c0e76088dccde0976a41c296441f144f7', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '68c1249f94d43fa1e44c5a58c0a8c5b95b509232' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
