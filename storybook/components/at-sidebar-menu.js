import { p as proxyCustomElement, H, h, c as Host } from './p-_-xuBOrs.js';

const atSidebarMenuCss = "at-sidebar-menu{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px;overflow-y:auto;overflow-x:visible}";

const AtSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: '3cf12f22e99ddbc07dc2ecbfb1227b3e3644662a', role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: 'c6d8725c9923c8911a4afd45967f9e1026827929' })));
    }
    static get style() { return atSidebarMenuCss; }
}, [260, "at-sidebar-menu"]);
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