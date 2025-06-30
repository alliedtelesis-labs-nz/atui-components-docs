import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiSidebarMenuSubComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuSubComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '4279ab2c88d751b6e58762f455491c6914b75c8b', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, h("slot", { key: '8956cacfab38a44c25935ed9936736439a8719c1' })));
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