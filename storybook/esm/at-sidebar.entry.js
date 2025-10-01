import { r as registerInstance, c as createEvent, h, H as Host } from './index-B5bw8iR3.js';

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}:host{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}:host .at-sidebar__backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}:host .at-sidebar__nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;min-height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}:host .at-sidebar__nav at-sidebar-trigger{display:flex;width:100%}:host .at-sidebar__nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}:host .at-sidebar__content{display:flex;flex-direction:column;flex-grow:1}:host i[slot=menu-item-actions],:host *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}:host :not(at-menu) i[slot=menu-item-actions],:host :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}:host.side-right{flex-direction:row-reverse}:host.mode-over .at-sidebar__nav{position:absolute}:host.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}:host.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}:host at-sidebar-trigger{display:flex;justify-content:flex-end}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}:host at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}:host at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}:host at-sidebar-submenu at-menu .at-sidebar-menuitem__label{color:var(--token-sidebar-background);font-weight:var(--token-font-weight-light)}:host [data-name=accordion-item-content] .at-sidebar-menuitem__label{font-weight:var(--token-font-weight-light)}:host([data-state=collapsed]) .nav at-sidebar-trigger{width:100%}:host([data-state=collapsed]) i[slot=menu-item-actions],:host([data-state=collapsed]) *>[data-name=sidebar-menu-item-label]{opacity:0}:host([data-state=collapsed]) at-menu i[slot=menu-item-actions],:host([data-state=collapsed]) at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}:host([data-state=collapsed]) .at-sidebar__nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}:host([data-state=collapsed]) .at-sidebar__nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}:host([data-state=collapsed]) .at-sidebar__nav.collapse-none{width:var(--token-width-sidebar)}";

const AtSidebarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiSidebarChange = createEvent(this, "atuiSidebarChange", 7);
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
        return (h(Host, { key: 'ab4b783de19ced626d905213e2b4eca117be04a6', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '1fe788dcebc211c81a5c7e1173c886ce0da54449', class: "at-sidebar__backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '525701b608999554ce72771a8c36d6530c6124e4', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', part: "nav", class: `at-sidebar__nav collapse-${this.collapsible}` }, h("slot", { key: 'bcd7214bb0462fbee82ff8c49967681b54be5a77', name: "at-sidebar__header" }), h("div", { key: '241a5a0278f022622974ed0b02909b85799d8e45', class: "at-sidebar__nav-content" }, h("slot", { key: '0eae331186e780350acfd2a7c3eeb5f4680ec6a7', name: "sidebar-content" })), h("div", { key: '2ea74b41869fcc46076e7129e58abb7447e8f5a2', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '5a23d31de996e6d2de78b620f433ff1992ef2e5e', name: "sidebar-footer" }))), h("div", { key: '2c4b96403b8a0223c055fb634999c4fe5bf030e5', class: "at-sidebar__content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'b50f410381587e2b76087c6d8e6c7c57e810beaa', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

export { AtSidebarComponent as at_sidebar };
//# sourceMappingURL=at-sidebar.entry.js.map
