import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';

const AtSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: 'ba139fe92061da41c3e199c0173b5a869fff1435', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '391ff827a2fd52fe9001c6b1fb584c7adff8438d' })));
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