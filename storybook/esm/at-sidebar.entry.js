import { r as registerInstance, c as createEvent, h, H as Host } from './index-BlNBm0E8.js';

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);overflow-y:auto;z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}at-sidebar .nav at-sidebar-trigger{display:flex;width:100%}at-sidebar .nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px}at-sidebar .content{display:flex;flex-direction:column;flex-grow:1}at-sidebar i[slot=menu-item-actions],at-sidebar *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}at-sidebar :not(at-menu) i[slot=menu-item-actions],at-sidebar :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar at-sidebar-trigger at-button [data-name=button-icon]{font-size:var(--token-font-size-icon-xl) !important}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] *>[data-name=sidebar-menu-item-label]{opacity:0}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar[data-state=collapsed] .nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .nav.collapse-none{width:var(--token-width-sidebar)}at-sidebar.mode-over .nav{position:absolute}at-sidebar.mode-over:not(.side-right) .content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.mode-over.side-right .content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar.side-right{flex-direction:row-reverse}";

const AtSidebarComponent = class {
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
        return (h(Host, { key: '95eaa02126c2889e8bc35c30af5d1160ab2dbc16', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side}` }, isModalOverlay && (h("div", { key: '297213cd581df1b377cc9dc6416c21b19e30a25b', class: "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '9f181ab18eac74734babf19820dc7140a57e0089', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', class: `nav collapse-${this.collapsible}` }, h("slot", { key: '3e3dbb3388ab39658ef0ea002f69834f099c6388', name: "sidebar-header" }), h("div", { key: '0e3e0e2577cbe67def594f10d6ca4e209928c57d', class: "nav-content" }, h("slot", { key: '85952ac6a88bcaa51c3d89644d07d6f765431382', name: "sidebar-content" })), h("div", { key: '25cf391b1ee874a54ace56c517aa90c82860980c', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '9df8d2d0815d55aab8805ec1a8661c25cfb80a22', name: "sidebar-footer" }))), h("div", { key: '12269b071c490baafecb4a5068cb97bb9b8032d3', class: "content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'b1663dc71b6a2cdebf5170de8010fd3e4cb47227', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

export { AtSidebarComponent as at_sidebar };
//# sourceMappingURL=at-sidebar.entry.js.map
