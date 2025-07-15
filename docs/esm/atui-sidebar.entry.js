import { r as registerInstance, c as createEvent, h, H as Host } from './index-8kq1vl9Q.js';
import { c as cva } from './index-CVoOBWGd.js';

const atuiSidebarCss = "atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-menu [data-name=menu-content-wrapper]{border:2px solid red;background-color:var(--token-sidebar-background)}";

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
const AtuiSidebarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        console.log('stenciltoggleSidebar', this.isOpen);
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
        return (h(Host, { key: '42781d85322781d8b5d151f0b2175f161630f2b0', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '51404a8d1d961c847176352cb0706ec31c9e9a72', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("div", { key: '8cd1703c7cc1b2d2179f09d18d9bc2fac9315dfe', class: "flex p-8" }, h("slot", { key: '7d88db3ae8e1343021df286d39b725f54ff9af22', name: "sidebar-header" })), h("div", { key: 'b76c6878da6dc341ec9394e6cbfc32e60a275255', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '1b9734f52014c743322fd461a94f7f267d6d6095', name: "sidebar-content" })), h("div", { key: '90bd60167615b848f5d127c7491351853599dab7', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '3007a731fc19f0340a80baefae8d4666209df62c', name: "sidebar-footer" }))), h("div", { key: '1c7448ba440c5c319fd890a0d43aac82e72a81ac', class: "flex w-full overflow-auto" }, h("slot", { key: '5b2d9a1348a5693f78c988263997e2d526e008b0', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

export { AtuiSidebarComponent as atui_sidebar };
//# sourceMappingURL=atui-sidebar.entry.js.map

//# sourceMappingURL=atui-sidebar.entry.js.map