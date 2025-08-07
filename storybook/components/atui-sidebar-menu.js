import { p as proxyCustomElement, H, h, c as Host } from './p-CHjIMSAP.js';

const AtuiSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'bf66c4e423b9e56f1a446a42b46d20da06905034', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'ae2fa312cf33178fcc8a7899a553849e00fff4a0' })));
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