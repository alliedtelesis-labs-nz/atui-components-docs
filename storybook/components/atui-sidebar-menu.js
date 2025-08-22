import { p as proxyCustomElement, H, h, c as Host } from './p-DzGFYGds.js';

const AtuiSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '37d1e3bba33a56b8bacac8df243129abc2408948', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '21151700ea5fb459778dcb7174de1871a06dca30' })));
    }
}, [257, "atui-sidebar-menu"]);
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