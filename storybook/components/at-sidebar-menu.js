import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';

const AtSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: '6d49e371a3b880d91501733c83d9a8e41e2528b8', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '6c4728dc21a3690c4e5fb7307050e003254c5c66' })));
    }
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