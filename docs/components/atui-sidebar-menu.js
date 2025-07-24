import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';

const AtuiSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ed7e6640376ee02b130680971bceaa2c760da905', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'e91cec544e2e5314167c5bbdd467aefe563a2903' })));
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