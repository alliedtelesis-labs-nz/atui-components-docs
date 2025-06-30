import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiSidebarMenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'd55da393c6bd063ffcdabbe9493b9de4c2c681f0', class: "flex min-w-0 flex-1 flex-col gap-2", role: "menu", "data-name": "sidebar-menu" }, h("slot", { key: '12b660166d9033076f8beed733224676c3fd0c74' })));
    }
}, [4, "atui-sidebar-menu"]);
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