import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-8e2OpwTu.js';

const atSidebarCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeInBackdrop 300ms forwards}at-sidebar .sidebar{display:flex;position:relative;width:var(--token-width-sidebar);flex-direction:column;flex:0 0 auto;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow:auto;border-right:1px solid var(--token-sidebar-border)}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar-content{display:flex;flex:1;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding);overflow-y:auto}at-sidebar .sidebar-header,at-sidebar .sidebar-footer{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding)}at-sidebar .sidebar-header:empty,at-sidebar .sidebar-footer:empty{display:none}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.side-right .sidebar{border-right:none;border-left:1px solid var(--token-border-muted)}at-sidebar.mode-over .sidebar{position:absolute}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:0;visibility:hidden;transition:opacity 150ms ease 0s, visibility 0s linear 150ms}at-sidebar[data-state=collapsed] at-sidebar-submenu [data-name=submenu-content]{display:none}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{visibility:visible;opacity:1}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:1;visibility:visible;transition:opacity 150ms ease 150ms, visibility 0s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:var(--token-font-weight-med) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}`;

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
        return (h(Host, { key: 'debbc757c53d672db1833dcf81fe49bbba2646a4', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '8372898a726f985b750532c3668bebd71eba7680', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: 'b7826cac5b8df2dfc46a9c7e5a1326f5c2852992', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, h("div", { key: 'ed3cf39fd7ec9ade3cada1a50d0bb33736a4fa99', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: 'a67cfee330024d8596ad1f36d8b746adc456c3b3', name: "sidebar-header" })), h("div", { key: '7e0217e63c04a8aff66ef351012a24c6dc631a33', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: '41befee4ff8f8c791490b4b786179acc21e11d75', name: "sidebar-content" })), h("div", { key: 'be80f40441eecea10c73191d6ecf7f1243862f82', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: '5b0bb1a4410708d45ca6f69f9c63c0a6dcc3ec6e', name: "sidebar-footer" }))), h("div", { key: '68d17bd6041203d5b737880485d78a68d3f5134b', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: '52f40f43c45a84fbb160c9541033048d506aae58', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss();

export { AtSidebarComponent as at_sidebar };
