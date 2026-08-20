import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-_QbJz5mf.js';

const atSidebarCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeInBackdrop 300ms forwards}at-sidebar .sidebar{display:flex;position:relative;width:var(--token-width-sidebar);flex-direction:column;flex:0 0 auto;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow:auto;border-right:1px solid var(--token-sidebar-border)}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar-content{display:flex;flex:1;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding);overflow-y:auto}at-sidebar .sidebar-header,at-sidebar .sidebar-footer{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding)}at-sidebar .sidebar-header:empty,at-sidebar .sidebar-footer:empty{display:none}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.side-right .sidebar{border-right:none;border-left:1px solid var(--token-border-muted)}at-sidebar.mode-over .sidebar{position:absolute;top:0;bottom:0}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:0;visibility:hidden;transition:opacity 150ms ease 0s, visibility 0s linear 150ms}at-sidebar[data-state=collapsed] at-sidebar-submenu [data-name=submenu-content]{display:none}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{visibility:visible;opacity:1}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:1;visibility:visible;transition:opacity 150ms ease 150ms, visibility 0s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:var(--token-font-weight-med) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}`;

const AtSidebarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiSidebarChange = createEvent(this, "atuiSidebarChange", 7);
    }
    /**
     * Position of the sidebar on the page
     */
    side = 'left';
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
    get el() { return getElement(this); }
    componentWillLoad() {
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    componentDidLoad() {
        this.el.addEventListener('atuiClick', this.handleMenuItemClick);
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
    /**
    Automate closing of the menu via menu-item click if the menu is in offcanvas mode and currently open
     */
    handleMenuItemClick = (event) => {
        const target = event.target;
        if (target.getAttribute('slot') === 'accordion-trigger') {
            return;
        }
        if (this.collapsible === 'offcanvas' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    render() {
        const isModalOverlay = this.mode === 'over' && this.backdrop && this.isOpen;
        return (h(Host, { key: '87ba7e09a943f68df9ed53c948974564fc8bd1b4', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: 'ecbbc7cd7d5ae3ce177a7cd886adb927a2f4d24e', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: 'cd480eb2490b76714d86ceb08c4ef7499007eae8', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, h("div", { key: '4e19235472b1bd88f2fcd9ea237f1b4d41521ada', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: 'edb0abc57ef88925344ffa00b0a36260a8241966', name: "sidebar-header" })), h("div", { key: 'cc30a6b158930c77aa7c61eb30d02fa9adbc3f82', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: '80ee45aa496feef3aa027b54229d917601bb65dc', name: "sidebar-content" })), h("div", { key: 'e48c9dbfa7c4448972d09faab287635ec1c4f732', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: '48109163a19c6c84d0cf894c973ab14a549eb4a2', name: "sidebar-footer" }))), h("div", { key: 'f4c7821aafe7ac34e1db6f8007a633e9d9249123', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'daaa293db044eabff2d3d9a63d1866c70fc04c34', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss();

export { AtSidebarComponent as at_sidebar };
