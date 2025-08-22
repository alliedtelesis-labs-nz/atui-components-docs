import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DzGFYGds.js';
import { c as cva } from './p-CVoOBWGd.js';

const atuiSidebarCss = "atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-sidebar atui-sidebar-submenu atui-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variants = cva('transition-size relative flex flex-col overflow-y-auto overflow-x-hidden bg-sidebar-background text-sidebar-foreground duration-300 ease-in-out', {
    variants: {
        collapsible: {
            none: null,
            icon: 'min-w-sidebar-collapsed group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
});
const AtuiSidebarComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.atuiSidebarChange = createEvent(this, "atuiSidebarChange", 7);
        /**
         * Position of the sidebar on the page
         */
        this.side = 'left';
        /**
         * Width of the sidebar
         */
        this.width = 'menu';
        /**
         * Size of the sidebar when collapsed.
         */
        this.collapsible = 'icon';
        /**
         * Opens the sidebar by default when set
         */
        this.default_open = true;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        return this.isOpen;
    }
    render() {
        const classname = variants({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: 'caaf8acbe1397977b4e270d66173222ca4644ad1', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: 'd9725741b676ff8f5da183bb605e5e58a3df5ed5', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '2350f576f96e10877e0f4325cc609a2ae0b7b0b9', name: "sidebar-header" }), h("div", { key: '710a01eb9a41a7128845a1754e30353e0aeaa7ae', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '0aa0ff0dd8c645d103361af9858d736497de3fcc', name: "sidebar-content" })), h("div", { key: 'fd2c59a953c90d2d2d91d5d8d4c8d897b6239a6f', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: 'f11e9d7a177e772b48e7cfc115e08343112c6ddb', name: "sidebar-footer" }))), h("div", { key: 'a554acf5ede94449a6bcff61281b73e76cb3c0e4', class: "flex w-full overflow-auto" }, h("slot", { key: 'f3e943b714a1b8fa77c69fbbae80314c256003fb', name: "page-content" }))));
    }
    static get style() { return atuiSidebarCss; }
}, [257, "atui-sidebar", {
        "side": [1],
        "width": [1],
        "collapsible": [1],
        "default_open": [4],
        "isOpen": [32],
        "toggleSidebar": [64],
        "getIsOpen": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarComponent);
            }
            break;
    } });
}

const AtuiSidebar = AtuiSidebarComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebar, defineCustomElement };
//# sourceMappingURL=atui-sidebar.js.map

//# sourceMappingURL=atui-sidebar.js.map