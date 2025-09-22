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
        const getClassname = classlist(`atui-sidebar group/sidebar bg-sidebar-background 
                  text-sidebar-foreground relative z-20 flex h-screen w-full
                  flex-col overflow-y-auto border-r border-solid border-r-med 
                  transition-[width] duration-300 ease-in-out`, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: '815d658bb4cd87051ff90d90b1dcf31e884d2d7e', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-x-hidden overflow-y-auto" }, h("nav", { key: '0c304e956fb67602bae6b8c47909c118b8425942', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '1a452f31c8ab2cb7bd27beab30fb8eee89f188c2', name: "sidebar-header" }), h("div", { key: '08c85df6e0ed846e2f4b34c60c91f4c0dbcdc2df', class: "align-items oveflow-y-auto flex flex-1 flex-col p-8" }, h("slot", { key: '0c497c4560844188b763c0ac4818d55026d8f165', name: "sidebar-content" })), h("div", { key: '03d9324b35da913fe49eb15fec6b4a0eb8096597', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: 'bb49ebfc3bbebd4eceb3432c11336341cb1569f6', name: "sidebar-footer" }))), h("div", { key: '833f428bb67e56d74ce2f875463becffdf392bee', class: "flex w-full overflow-auto" }, h("slot", { key: 'd57c12f2c69548fe23265dc64062eae3bf642a23', name: "page-content" }))));
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