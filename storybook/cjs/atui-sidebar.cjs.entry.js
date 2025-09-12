'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

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
        const getClassname = classlist.classlist(`atui-sidebar group/sidebar bg-sidebar-background 
                  text-sidebar-foreground relative z-20 flex h-screen w-full
                  flex-col overflow-hidden border-r border-solid border-r-med 
                  transition-[width] duration-300 ease-in-out`, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (index.h(index.Host, { key: 'f1e43becf60065cf39778b86fe09c928a2c2c42b', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-x-hidden overflow-y-auto" }, index.h("nav", { key: 'd8272ef4a83a360a509e31d07e7191b8a5c4da4b', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, index.h("slot", { key: '987135f27d288ceda00a4297b6ed0260edea2bb3', name: "sidebar-header" }), index.h("div", { key: '5180c94002c2f0d660286a5131f069eb04847324', class: "align-items flex flex-1 flex-col p-8" }, index.h("slot", { key: 'aaf3050bf0249b057b687b4ff0bc8ff23ee4c5bf', name: "sidebar-content" })), index.h("div", { key: 'd37cce803f6c1f472a48290d9201e1dcb783739d', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: 'e995c6998da0efe42776a8b544993bf25dc7ffd8', name: "sidebar-footer" }))), index.h("div", { key: 'f90e98336d54d2ef14bf7e13faaa3a98a8d58128', class: "flex w-full overflow-auto" }, index.h("slot", { key: '6b710cf597beec21260c8c0e7323d016d2c4e4c7', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

exports.atui_sidebar = AtuiSidebarComponent;
//# sourceMappingURL=atui-sidebar.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar.cjs.entry.js.map