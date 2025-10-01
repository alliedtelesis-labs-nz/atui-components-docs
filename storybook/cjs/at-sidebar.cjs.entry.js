'use strict';

var index = require('./index-d67_TXqR.js');

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .at-sidebar__backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .at-sidebar__nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;min-height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}at-sidebar .at-sidebar__nav at-sidebar-trigger{display:flex;width:100%}at-sidebar .at-sidebar__nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}at-sidebar .at-sidebar__content{display:flex;flex-direction:column;flex-grow:1}at-sidebar i[slot=menu-item-actions],at-sidebar *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}at-sidebar :not(at-menu) i[slot=menu-item-actions],at-sidebar :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.mode-over .at-sidebar__nav{position:absolute}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar at-sidebar-submenu at-menu .at-sidebar-menuitem__label{color:var(--token-sidebar-background);font-weight:var(--token-font-weight-light)}at-sidebar [data-name=accordion-item-content] .at-sidebar-menuitem__label{font-weight:var(--token-font-weight-light)}at-sidebar[data-state=collapsed] .nav at-sidebar-trigger{width:100%}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] *>[data-name=sidebar-menu-item-label]{opacity:0}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}at-sidebar[data-state=collapsed] .at-sidebar__nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .at-sidebar__nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .at-sidebar__nav.collapse-none{width:var(--token-width-sidebar)}";

const AtSidebarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidebarChange = index.createEvent(this, "atuiSidebarChange", 7);
    }
    /**
     * Position of the sidebar on the page
     */
    side;
    /**
     * Width of the sidebar
     */
    width = 'menu';
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible;
    /**
     * How the sidenav interacts with main content when open
     */
    mode;
    /**
     * Display a clickable backdrop when mode = over
     */
    backdrop = false;
    /**
     * Opens the sidebar by default when set
     */
    default_open = false;
    isOpen = false;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange;
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
    handleBackdropClick = () => {
        if (this.mode === 'over' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    render() {
        const isModalOverlay = this.mode === 'over' && this.backdrop && this.isOpen;
        return (index.h(index.Host, { key: 'f52dce86dc6463e0fcd25ba0d87016d19be06ab7', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { key: 'be559123446b6d5af8a2e338f07eec6ed2373750', class: "at-sidebar__backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("nav", { key: 'd743330e816eae1b5d219f8426216d06b5cb225d', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', part: "nav", class: `at-sidebar__nav collapse-${this.collapsible}` }, index.h("slot", { key: 'd61353a4a1292fd2e3660d22bdf673dd5f1ee71c', name: "at-sidebar__header" }), index.h("div", { key: '2c0d4f36bdeeabdecf8d00f5ca7ebd89ffcd8d92', class: "at-sidebar__nav-content" }, index.h("slot", { key: '0971a19b02d42ebb079a5c3ebb7a8fc8de4375b6', name: "sidebar-content" })), index.h("div", { key: 'ca0850a81e7208e977aa3dc70d4a9ae7f48ef4b9', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: '4045243fed0ead7e7fe7ce3bf9eae5029951d0e6', name: "sidebar-footer" }))), index.h("div", { key: '87bb83b3f444f866f3fed8c6c2d74fdb5ce7a183', class: "at-sidebar__content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { key: 'fdae6e420f953a01e9b83ec1993d0f120942e639', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

exports.at_sidebar = AtSidebarComponent;
//# sourceMappingURL=at-sidebar.entry.cjs.js.map
