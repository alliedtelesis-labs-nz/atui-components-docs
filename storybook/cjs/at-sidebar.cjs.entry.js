'use strict';

var index = require('./index-CSKVyFU4.js');

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}:host{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}:host .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}:host .nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;min-height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);overflow-y:auto;z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}:host .nav at-sidebar-trigger{display:flex;width:100%}:host .nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px}:host .content{display:flex;flex-direction:column;flex-grow:1}:host i[slot=menu-item-actions],:host *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}:host :not(at-menu) i[slot=menu-item-actions],:host :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}:host at-sidebar-trigger{display:flex;justify-content:flex-end}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}:host at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}:host at-sidebar-trigger at-button [data-name=button-icon]{font-size:var(--token-font-size-icon-xl) !important}:host.mode-over .nav{position:absolute}:host.collapse-icon.mode-over:not(.side-right) .content{padding-left:var(--token-width-sidebar-collapsed)}:host.collapse-icon.mode-over.side-right .content{padding-right:var(--token-width-sidebar-collapsed)}:host.side-right{flex-direction:row-reverse}:host([data-state=collapsed]) .nav at-sidebar-trigger{width:100%}:host([data-state=collapsed]) i[slot=menu-item-actions],:host([data-state=collapsed]) *>[data-name=sidebar-menu-item-label]{opacity:0}:host([data-state=collapsed]) at-menu i[slot=menu-item-actions],:host([data-state=collapsed]) at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}:host([data-state=collapsed]) .nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}:host([data-state=collapsed]) .nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}:host([data-state=collapsed]) .nav.collapse-none{width:var(--token-width-sidebar)}";

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
        return (index.h(index.Host, { key: 'ab4b783de19ced626d905213e2b4eca117be04a6', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { key: '0d0a64b41bb8e8904911e55fd95b403c214045d1', class: "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("nav", { key: '53dc24db6dbdc772b8799af3ff2427f49787006d', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', part: "nav", class: `nav collapse-${this.collapsible}` }, index.h("slot", { key: 'f13b9fbcb727b97cfbf5002b858b44f8ee1f0426', name: "sidebar-header" }), index.h("div", { key: '8f683902fa281b156e66c7d4f300f73e4039086e', class: "nav-content" }, index.h("slot", { key: '2fd0e597790430fab152647059cadfd131ea069f', name: "sidebar-content" })), index.h("div", { key: '278ae188ed25180d0a66e87f5eecf9afc71a9b0b', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: 'c6d1ce679f75420402d8f25a36e3a9f7f33ed8b3', name: "sidebar-footer" }))), index.h("div", { key: 'e3fa6b4e47dd09ee5807408170d41821a95d471e', class: "content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { key: 'c5f0baf511d6e486ac1a6e94c679462e19fa7847', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

exports.at_sidebar = AtSidebarComponent;
//# sourceMappingURL=at-sidebar.entry.cjs.js.map
