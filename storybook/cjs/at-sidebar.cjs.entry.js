'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarCss = () => `@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .sidebar{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow:visible}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.mode-over .sidebar{position:absolute}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas .sidebar-footer{display:none}at-sidebar[data-state=collapsed] .sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .sidebar.collapse-icon .sidebar-footer{display:none}at-sidebar[data-state=collapsed] .sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem>[data-name=label]{opacity:0;transition:opacity 150ms ease 0s}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper]>at-sidebar-menuitem>[data-name=label]{opacity:1}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem>[data-name=label]{opacity:1;transition:opacity 150ms ease 0.3s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar i[slot=menu-item-actions],at-sidebar *>at-sidebar-menuitem [data-name=label]{transition:opacity 150ms ease}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:bold !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}`;

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
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'e85f8296bd0dd32256281130a1cf1ab89445621c', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { key: 'bd94389b81ce82d52fdae7582b936b2e51e0c362', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), index.h("nav", { key: '1c13b35dd698ad0a16a20caec3f09521e141e0b8', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible}`, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false' }, index.h("div", { key: '01948fce04d6808c169858bf17773e12f3286f2e', class: "sidebar-header", "data-name": "sidebar-header" }, index.h("slot", { key: '17cf70b8c808e13cd414c360863d4d2e73eddaca', name: "sidebar-header" })), index.h("div", { key: 'c8c3184acedec0d5ffcdc5408e2a65588da4d327', class: "sidebar-content", "data-name": "sidebar-content" }, index.h("slot", { key: '329d0755b72b96a620cdd0687837f050687ba389', name: "sidebar-content" })), index.h("div", { key: '43678c0a6958b706c76a6472b202c4107128288e', class: `sidebar-footer`, "data-name": "sidebar-footer" }, index.h("slot", { key: 'dae4f3c27a94b53388ac734c22d8304da571e20e', name: "sidebar-footer" }))), index.h("div", { key: '40086e9d0ddd563c0fb20e00f52470c9614ae406', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { key: '6668b186db2204d48ce1e6e5951d621b3207b788', name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss();

exports.at_sidebar = AtSidebarComponent;
