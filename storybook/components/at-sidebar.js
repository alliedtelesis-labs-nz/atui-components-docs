import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

const atSidebarCss = "at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

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
const AtSidebarComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarComponent extends H {
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
        const getClassname = classlist(``, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: '97cea839494f075f729a87f123e11f22b6ad719d', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-hidden" }, h("nav", { key: '2bd995a48d23148f1b40540e72d948cdf21b563d', "data-name": "sidebar-nav", class: `bg-sidebar-background text-sidebar-foreground relative z-20 flex h-screen flex-col overflow-y-auto transition-[width] duration-300 ease-in-out w-${this.width} ` +
                classname }, h("slot", { key: '98afc7259297af216d366ceacd4ee0ccb57faad7', name: "sidebar-header" }), h("div", { key: '8b6f271abc907f030cef2354d153e4bc1613b5f9', class: "align-items oveflow-y-auto flex flex-1 flex-col p-8" }, h("slot", { key: '0a4666be4f90e81d662b80ae305ac289ae218187', name: "sidebar-content" })), h("div", { key: '02a7ed39ad7a24609abd81bc0ff3cfbb79c9e0d8', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '66b6a473be5d3ea9e225e1c39f71d7d3d47d5861', name: "sidebar-footer" }))), h("div", { key: '726e2837a206e02d75449cb55757821c50e36a6c', class: "flex w-full overflow-auto" }, h("slot", { key: 'ec0b05314038c13ef16982b58e8be8323bd845eb', name: "page-content" }))));
    }
    static get style() { return atSidebarCss; }
}, [260, "at-sidebar", {
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
    const components = ["at-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarComponent);
            }
            break;
    } });
}

const AtSidebar = AtSidebarComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebar, defineCustomElement };
//# sourceMappingURL=at-sidebar.js.map

//# sourceMappingURL=at-sidebar.js.map