import { r as registerInstance, c as createEvent, h, H as Host } from './index-C3PSGxNR.js';

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);overflow-y:auto;z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}at-sidebar .nav at-sidebar-trigger{display:flex;width:100%}at-sidebar .nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px}at-sidebar .content{display:flex;flex-direction:column;flex-grow:1}at-sidebar i[slot=menu-item-actions],at-sidebar *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}at-sidebar :not(at-menu) i[slot=menu-item-actions],at-sidebar :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar at-sidebar-trigger at-button [data-name=button-icon]{font-size:var(--token-font-size-icon-xl) !important}at-sidebar[data-state=collapsed] .nav at-sidebar-trigger{width:100%}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] *>[data-name=sidebar-menu-item-label]{opacity:0}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar[data-state=collapsed].collapse-offcanvas .nav{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed].collapse-icon .nav{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed].collapse-none .nav{width:var(--token-width-sidebar)}at-sidebar.mode-over .nav{position:absolute}at-sidebar.mode-over.collapse-icon:not(.side-right) .content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.mode-over.collapse-icon.side-right .content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar.side-right{flex-direction:row-reverse}";

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
        return (h(Host, { key: '9b4bd79d6a0a3fe97e385cecfcdc0f775ee9d11d', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '7e22303df51c83711b6744447b0401469f358d53', class: "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '298ffd06f33f3b8a3b2d0d32afc3b98a49a7c54d', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', class: `nav collapse-${this.collapsible}` }, h("slot", { key: 'cb4a166fb8a1f1686ac0639ba902cb2d2848bf05', name: "sidebar-header" }), h("div", { key: 'e299272b849b94c3e1844bd0d7c3619d93900b6c', class: "nav-content" }, h("slot", { key: 'ee1b49ff112d01cb81ce562235aa7bbf3aad8b26', name: "sidebar-content" })), h("div", { key: '0cbdfa3b8272524ec55dd69b7146eeb4a775160c', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: 'c4d8899d1e7c621a2fd88c71fb5d224c9fde5c8b', name: "sidebar-footer" }))), h("div", { key: 'bb3ce25387b198a261e37f00bf976948a3eeb02d', class: "content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'dcbba99ae1295f8fec2408ee54293c0a9bc7bc5d', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

export { AtSidebarComponent as at_sidebar };
//# sourceMappingURL=at-sidebar.entry.js.map
