import { r as registerInstance, h, H as Host } from './index-HD-uhvb8.js';

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '08e3dd333ff5a782c127ecb054e364a7691f10d8', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '86b0ff490e4daefa6584383fad7cf333d756586d' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

export { AtSidebarMenuComponent as at_sidebar_menu };
