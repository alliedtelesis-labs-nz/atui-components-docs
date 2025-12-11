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
        return (h(Host, { key: 'ede650ac5a46ae0816617d26e780efb06a14e678', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'b158e32ba77ecbbcd39b05636678343a09e5484c' })));
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