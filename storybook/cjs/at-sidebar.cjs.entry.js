'use strict';

var index = require('./index-w3vomLqM.js');

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}:host{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}:host .at-sidebar__backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}:host .at-sidebar__nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;min-height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}:host .at-sidebar__nav at-sidebar-trigger{display:flex;width:100%}:host .at-sidebar__nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}:host .at-sidebar__content{display:flex;flex-direction:column;flex-grow:1}:host i[slot=menu-item-actions],:host *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}:host :not(at-menu) i[slot=menu-item-actions],:host :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}:host.side-right{flex-direction:row-reverse}:host.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}:host.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}:host at-sidebar-trigger{display:flex;justify-content:flex-end}:host at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}:host at-sidebar-submenu at-menu .at-sidebar-menuitem__label{color:var(--token-sidebar-background);font-weight:var(--token-font-weight-light)}:host [data-name=accordion-item-content] .at-sidebar-menuitem__label{font-weight:var(--token-font-weight-light)}:host(.mode-over) .at-sidebar__nav{position:absolute}:host([data-state=collapsed]) .nav at-sidebar-trigger{width:100%}:host([data-state=collapsed]) i[slot=menu-item-actions],:host([data-state=collapsed]) *>[data-name=sidebar-menu-item-label]{opacity:0}:host([data-state=collapsed]) at-menu i[slot=menu-item-actions],:host([data-state=collapsed]) at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}:host([data-state=collapsed]) .at-sidebar__nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}:host([data-state=collapsed]) .at-sidebar__nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}:host([data-state=collapsed]) .at-sidebar__nav.collapse-none{width:var(--token-width-sidebar)}::slotted(at-sidebar-menu) at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}";

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
        return (index.h(index.Host, { key: 'b20bfaa30f9a8db50551a1d3dbe1b96e265aaa52', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { key: 'bf4554cc65ebc398cabc4ecc785e64489e34e763', class: "at-sidebar__backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("nav", { key: '63601549626358d723aef6c6fb4b9ec082e51dbe', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', part: "nav", class: `at-sidebar__nav collapse-${this.collapsible}` }, index.h("slot", { key: '995ecf8ffc3f38dbe89e4e440731cfc69d96e6fe', name: "at-sidebar__header" }), index.h("div", { key: 'caa3dd7d9aabf8d50eb308c5f895706bc70de1e0', class: "at-sidebar__nav-content" }, index.h("slot", { key: 'bf9c8064647873b99cbc2e04f2f8e3ba5722c9c7', name: "sidebar-content" })), index.h("div", { key: 'a378130e2d0da5dede91b7f237d85900f58018a6', class: `${this.isOpen ? '' : 'hidden'}` }, index.h("slot", { key: 'a8fdcb142c5f2253b4793ffebac8461925d54c20', name: "sidebar-footer" }))), index.h("div", { key: '5b5f8635e55404637a51c21bbbd7c5c3d4534e8e', class: "at-sidebar__content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { key: 'a1e16f54d23e90505bad7ecbd7e40beef9b20a51', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

exports.at_sidebar = AtSidebarComponent;
//# sourceMappingURL=at-sidebar.entry.cjs.js.map
