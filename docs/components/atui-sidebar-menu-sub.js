import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiSidebarMenuSubComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuSubComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '7694db3e9bd93e5fe52d3c49eba485e16f554979', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, h("slot", { key: '2e7c8945f9f7a7e7dabfcf0fb5c60825db144f64' })));
    }
}, [4, "atui-sidebar-menu-sub"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-sidebar-menu-sub"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-menu-sub":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarMenuSubComponent);
            }
            break;
    } });
}

const AtuiSidebarMenuSub = AtuiSidebarMenuSubComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebarMenuSub, defineCustomElement };
//# sourceMappingURL=atui-sidebar-menu-sub.js.map

//# sourceMappingURL=atui-sidebar-menu-sub.js.map