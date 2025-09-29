'use strict';

var index = require('./index-i7hIKTeN.js');

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}at-sidebar{display:flex;height:100dvh;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}at-sidebar .nav at-sidebar-trigger{display:flex;width:100%}at-sidebar .nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px}at-sidebar .content{display:flex;flex-direction:column;flex-grow:1}at-sidebar i[slot=menu-item-actions],at-sidebar [data-name=sidebar-menu-item-label]{transition:opacity 150ms ease;transition-delay:150ms}at-sidebar at-menu [data-name=menu-trigger] [data-name=sidebar-menu-item-label],at-sidebar at-accordion-item [data-name=sidebar-menu-item-label]{transition:opacity 150ms ease;transition-delay:150ms}at-sidebar :not(at-menu) i[slot=menu-item-actions],at-sidebar :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar[data-state=collapsed] at-sidebar-trigger at-button{width:100%}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] span[data-name=sidebar-menu-item-label],at-sidebar[data-state=collapsed] at-menu [data-name=menu-trigger] [data-name=sidebar-menu-item-label],at-sidebar[data-state=collapsed] at-accordion-item [data-name=sidebar-menu-item-label]{opacity:0}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar[data-state=collapsed] .nav.collapse-offscreen{width:var(--token-width-sidebar-offscreen) !important}at-sidebar[data-state=collapsed] .nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .nav.collapse-none{width:var(--token-width-sidebar)}at-sidebar.mode-over .nav{position:absolute}at-sidebar.mode-over:not(.side-right) .content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.mode-over.side-right .content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar.side-right{flex-direction:row-reverse}";

const AtSidebarComponent = class {
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
         * How the sidenav interacts with main content when open
         */
        this.mode = 'push';
        /**
         * Display a clickable backdrop when mode = over
         */
        this.backdrop = false;
        /**
         * Opens the sidebar by default when set
         */
        this.default_open = false;
        this.isOpen = false;
        this.handleBackdropClick = () => {
            if (this.mode === 'over' && this.isOpen) {
                this.toggleSidebar();
            }
        };
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
        const isModalOverlay = this.mode === 'over' && this.backdrop && this.isOpen;
        return (index.h(index.Host, { key: '24fadf3eb08708fc8b54687a6a3f3ef170f40699', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side}` }, isModalOverlay && (index.h("div", { key: '2e09eac70082f414d594beae024ee3d4e137ff3f', class: "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("nav", { key: '0b7170c4a74d797c0038fb336fb589a275b85436', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', class: `nav collapse-${this.collapsible}` }, index.h("slot", { key: '1c56f379926d2568465fa850661cb43d84574448', name: "sidebar-header" }), index.h("div", { key: '1d861b409b51a6e5a9ffd9fcb0b263116b522a64', class: "nav-content" }, index.h("slot", { key: 'd4bf2fd0634bf0a5077017dba12c1b9a65e736fd', name: "sidebar-content" })), index.h("div", { key: '1c7d8bd84548ab98fad465645e5b05ba5caef3a4', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: '3f1c9506e998cf0cd7f17560c11011c81637f741', name: "sidebar-footer" }))), index.h("div", { key: 'c84c512008a7d89924b4fee3a78f9d086118cc17', class: "content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { key: '933226f13fc7f3e837283f84d7f02afb09fa7465', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

exports.at_sidebar = AtSidebarComponent;
//# sourceMappingURL=at-sidebar.entry.cjs.js.map

//# sourceMappingURL=at-sidebar.cjs.entry.js.map