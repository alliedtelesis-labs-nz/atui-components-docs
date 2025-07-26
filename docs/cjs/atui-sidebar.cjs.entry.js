'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const atuiSidebarCss = "atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-sidebar atui-sidebar-submenu atui-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variants = index$1.cva('transition-size relative flex flex-col overflow-y-auto overflow-x-hidden bg-sidebar-background text-sidebar-foreground duration-300 ease-in-out', {
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
        index.registerInstance(this, hostRef);
        this.atuiSidebarChange = index.createEvent(this, "atuiSidebarChange", 7);
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
        return (index.h(index.Host, { key: 'd670ebc2deef1227567cee8ce587c062b76f0776', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, index.h("nav", { key: '9ab626b06a996e8c79f32fe7b6780b669a19a4ca', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, index.h("div", { key: '6bbad88e63fd4029bc3ce61bbcb3d59738980083', class: "flex p-8" }, index.h("slot", { key: '1b6718ae797b2246f3060ec8dd5a9746405e310b', name: "sidebar-header" })), index.h("div", { key: '8f9f8a1e6c1ba8b6d8f04f282e703d544b70300a', class: "align-items flex flex-1 flex-col p-8" }, index.h("slot", { key: 'e5c7b9680793f323e82bb964090f90bd37597266', name: "sidebar-content" })), index.h("div", { key: 'e68b66ca6a8f3aa2536473bc15580bd35cd6203a', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: 'd97cc4cee7ec44e0fdbd6e0d8bdffe2cacfc9b91', name: "sidebar-footer" }))), index.h("div", { key: '6ba7a0890fae6c3d33e39191b2c02c126077f88c', class: "flex w-full overflow-auto" }, index.h("slot", { key: 'ae91d2e6234875e57e52d088507ec9e2ab89cea6', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

exports.atui_sidebar = AtuiSidebarComponent;
//# sourceMappingURL=atui-sidebar.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar.cjs.entry.js.map