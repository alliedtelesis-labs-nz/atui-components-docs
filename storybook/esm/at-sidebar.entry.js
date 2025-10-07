import { r as registerInstance, c as createEvent, h, H as Host } from './index-Cod2-jIY.js';

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}:host{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}:host .at-sidebar__backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}:host .at-sidebar__nav{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;min-height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time)}:host .at-sidebar__nav at-sidebar-trigger{display:flex;width:100%}:host .at-sidebar__nav-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}:host .at-sidebar__content{display:flex;flex-direction:column;flex-grow:1}:host i[slot=menu-item-actions],:host *>[data-name=sidebar-menu-item-label]{transition:opacity 150ms ease}:host :not(at-menu) i[slot=menu-item-actions],:host :not(at-menu) [data-name=sidebar-menu-item-label]{opacity:1}:host.side-right{flex-direction:row-reverse}:host.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}:host.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}:host at-sidebar-trigger{display:flex;justify-content:flex-end}:host at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}:host at-sidebar-submenu at-menu .at-sidebar-menuitem__label{color:var(--token-sidebar-background);font-weight:var(--token-font-weight-light)}:host [data-name=accordion-item-content] .at-sidebar-menuitem__label{font-weight:var(--token-font-weight-light)}:host(.mode-over) .at-sidebar__nav{position:absolute}:host([data-state=collapsed]) .nav at-sidebar-trigger{width:100%}:host([data-state=collapsed]) i[slot=menu-item-actions],:host([data-state=collapsed]) *>[data-name=sidebar-menu-item-label]{opacity:0}:host([data-state=collapsed]) at-menu i[slot=menu-item-actions],:host([data-state=collapsed]) at-menu [data-name=menu-content-wrapper] [data-name=sidebar-menu-item-label]{opacity:1}:host([data-state=collapsed]) .at-sidebar__nav.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}:host([data-state=collapsed]) .at-sidebar__nav.collapse-icon{width:var(--token-width-sidebar-collapsed)}:host([data-state=collapsed]) .at-sidebar__nav.collapse-none{width:var(--token-width-sidebar)}::slotted(at-sidebar-menu) at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}";

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
        return (h(Host, { key: 'a56784c31b58e370c93033745a94934c9427e31d', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '7603b205f95a004bc8f1145b352755bd660023cf', class: "at-sidebar__backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: 'eb96151eac7bb1ca1015e71d3ef71197421bca75', "data-name": "sidebar-nav", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', part: "nav", class: `at-sidebar__nav collapse-${this.collapsible}` }, h("slot", { key: 'd7ca0f314a58e77ff6d0043e1354d960222861c1', name: "at-sidebar__header" }), h("div", { key: 'b95c08cbba51df77bfefcb355f5283ac378aa5d9', class: "at-sidebar__nav-content" }, h("slot", { key: 'af25dcfad1743406829da578751e63c087268737', name: "sidebar-content" })), h("div", { key: 'eec4047b19719a8778528de3319e99a0ca5e7962', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '924e166a93c8c854b4798d28b5acb1a92c3d4051', name: "sidebar-footer" }))), h("div", { key: 'c502dc22bd3da68b9a43aec059c03adbf57bb2e4', class: "at-sidebar__content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: '7ab5228f46a43622b47cd7c256a74fa3993ba24e', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss;

export { AtSidebarComponent as at_sidebar };
//# sourceMappingURL=at-sidebar.entry.js.map
