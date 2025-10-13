import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: '5b09b31644a717a79c5abd418ae34a180227b61a', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '2de7091b6d224897bd0d55fc54b8158c40e381a1' })));
    }
    static get style() { return atSidebarMenuCss; }
}, [262, "at-sidebar-menu"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarMenuComponent);
            }
            break;
    } });
}

const AtSidebarMenu = AtSidebarMenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebarMenu, defineCustomElement };
//# sourceMappingURL=at-sidebar-menu.js.map

//# sourceMappingURL=at-sidebar-menu.js.map