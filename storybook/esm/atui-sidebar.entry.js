import { r as registerInstance, c as createEvent, h, H as Host } from './index-D3rwhcmG.js';
import { c as cva } from './index-CVoOBWGd.js';

const atuiSidebarCss = "atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-sidebar atui-sidebar-submenu atui-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variants = cva('transition-size bg-sidebar-background text-sidebar-foreground relative flex flex-col overflow-x-hidden overflow-y-auto duration-300 ease-in-out', {
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
        return (h(Host, { key: '0f6077d574f4241c24ed18aa2680f6d7be71132a', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-x-hidden overflow-y-auto" }, h("nav", { key: '56afc49121827894236d921ed6d13878c83d06ab', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '985d8b7078e30d70e5f66da32583f02fb68089e4', name: "sidebar-header" }), h("div", { key: '1cab70bd0fa7aac3e5bd2c573ff8a21af3978236', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '397500d70d6873951aaca4db97231171ab57a847', name: "sidebar-content" })), h("div", { key: '3feef7735352193a46443e0ddd755a39d84cbcd6', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '1cf67e89eeb1ef44a29c3029471556606943bec7', name: "sidebar-footer" }))), h("div", { key: '608784c7e103fc59c58fdd1fed00d979b37905f0', class: "flex w-full overflow-auto" }, h("slot", { key: 'be5111947603f7009ffc5fe747e8773f8cae0253', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

export { AtuiSidebarComponent as atui_sidebar };
//# sourceMappingURL=atui-sidebar.entry.js.map

//# sourceMappingURL=atui-sidebar.entry.js.map