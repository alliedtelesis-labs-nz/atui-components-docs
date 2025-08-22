import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
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
        return (h(Host, { key: 'f881d18398ddb132b24ca668b34635dd8aeb3283', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '39ea4b8d8ec47a71d111caa7b1c85003f448e5d4', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '0de4c24620fce041b64f71b9f8721e89897da2ea', name: "sidebar-header" }), h("div", { key: '9179ed9258544622e589107411e809250424386a', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '81d7a33d81818101349f5b38da5af291f2f7eb39', name: "sidebar-content" })), h("div", { key: '439cbe7e6bc4564d80db675ca051ab2977e7a79a', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '684a4c570fbbb18a93b7fb3fdf463c8113a2ff5e', name: "sidebar-footer" }))), h("div", { key: '3a56cd911d779b1c3aa253cfa70a4d62daee299c', class: "flex w-full overflow-auto" }, h("slot", { key: '94124468f8144534ee4f5e30dc2c64acbbd65983', name: "page-content" }))));
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