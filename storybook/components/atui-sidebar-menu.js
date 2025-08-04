import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';

const AtuiSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '7ed4e68bbbeedb2abc4ca775364cd6853b7f0771', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '18e7a1112ff3ef406e9ea0857fcddea3a5020c94' })));
    }
}, [260, "atui-sidebar-menu"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-sidebar-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarMenuComponent);
            }
            break;
    } });
}

const AtuiSidebarMenu = AtuiSidebarMenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebarMenu, defineCustomElement };
//# sourceMappingURL=atui-sidebar-menu.js.map

//# sourceMappingURL=atui-sidebar-menu.js.map