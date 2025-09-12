import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

const atuiSidebarCss = "atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-sidebar atui-sidebar-submenu atui-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variantsConfig = {
    variants: {
        collapsible: {
            none: null,
            icon: 'group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
};
const AtuiSidebarComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        const getClassname = classlist(`atui-sidebar group/sidebar bg-sidebar-background 
                  text-sidebar-foreground relative z-20 flex h-screen w-full
                  flex-col overflow-hidden border-r border-solid border-r-med 
                  transition-[width] duration-300 ease-in-out`, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: 'f1e43becf60065cf39778b86fe09c928a2c2c42b', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-x-hidden overflow-y-auto" }, h("nav", { key: 'd8272ef4a83a360a509e31d07e7191b8a5c4da4b', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '987135f27d288ceda00a4297b6ed0260edea2bb3', name: "sidebar-header" }), h("div", { key: '5180c94002c2f0d660286a5131f069eb04847324', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: 'aaf3050bf0249b057b687b4ff0bc8ff23ee4c5bf', name: "sidebar-content" })), h("div", { key: 'd37cce803f6c1f472a48290d9201e1dcb783739d', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: 'e995c6998da0efe42776a8b544993bf25dc7ffd8', name: "sidebar-footer" }))), h("div", { key: 'f90e98336d54d2ef14bf7e13faaa3a98a8d58128', class: "flex w-full overflow-auto" }, h("slot", { key: '6b710cf597beec21260c8c0e7323d016d2c4e4c7', name: "page-content" }))));
    }
    static get style() { return atuiSidebarCss; }
}, [260, "atui-sidebar", {
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