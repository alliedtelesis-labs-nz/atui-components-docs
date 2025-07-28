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
        return (index.h(index.Host, { key: '1ddeb09a2bb75a29ad08d0f10e69d749c2d94606', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, index.h("nav", { key: 'fb34b93f25e9b24ecbb1c456d86eca190ebf558b', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, index.h("div", { key: 'f777c8491edc3d31adf2381571e5ba6789b90c04', class: "flex p-8" }, index.h("slot", { key: '70fbbf71a275530fe1f6ccdd84c8ba7af7b149ea', name: "sidebar-header" })), index.h("div", { key: 'c96c4b73601672f2a6fc486cfbf5ad68cd0b23bf', class: "align-items flex flex-1 flex-col p-8" }, index.h("slot", { key: 'b0a1442b5b5c00cdbf479e3bad9f58861a8a6418', name: "sidebar-content" })), index.h("div", { key: 'edac52c3187b0248cd568fe89be77ed72ef62d7f', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: 'bc589e36dcb85d77e38c7fff876ad2e0df0be16e', name: "sidebar-footer" }))), index.h("div", { key: 'ab0c5846e540edd9c51c1d7329c488d420edc342', class: "flex w-full overflow-auto" }, index.h("slot", { key: '84f48b6b3e8d0ad3620303b743318b8ba3d573ed', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

exports.atui_sidebar = AtuiSidebarComponent;
//# sourceMappingURL=atui-sidebar.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar.cjs.entry.js.map