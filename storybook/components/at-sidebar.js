import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';

const atSidebarCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar .backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeIn 300ms forwards}at-sidebar .sidebar{position:relative;width:var(--token-width-sidebar);display:flex;flex:0 0 auto;height:100%;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow:visible}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar-content{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:8px;overflow-y:auto}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.mode-over .sidebar{position:absolute}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas .sidebar-footer{display:none}at-sidebar[data-state=collapsed] .sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .sidebar.collapse-icon .sidebar-footer{display:none}at-sidebar[data-state=collapsed] .sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem>[data-name=label]{opacity:0;transition:opacity 150ms ease 0s}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper]>at-sidebar-menuitem>[data-name=label]{opacity:1}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem>[data-name=label]{opacity:1;transition:opacity 150ms ease 0.3s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar i[slot=menu-item-actions],at-sidebar *>at-sidebar-menuitem [data-name=label]{transition:opacity 150ms ease}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:bold !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}";

const AtSidebarComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
    get el() { return this; }
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
    handleMenuItemClick = () => {
        if (this.collapsible === 'offcanvas' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    render() {
        const isModalOverlay = this.mode === 'over' && this.backdrop && this.isOpen;
        return (h(Host, { key: '4fd45c5f683d6878597015d5466b165cc755c116', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '4b612cc4d753ec53cf6a56432729cc13d469fbfb', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '180e0c1a293a99c72651ff3b2d98256cc9bef278', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible}`, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false' }, h("div", { key: '70738b2c6712c196eeb124fd75f1c4095c3c5eed', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: 'd70b8f6838ed46ed77433853afb8e26d7c364776', name: "sidebar-header" })), h("div", { key: '722b872fde051fd5958b52c1bff802385387e773', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: 'f0a20597367e90f01400378b772e2e5874fcf1c0', name: "sidebar-content" })), h("div", { key: 'c11eefe51ee56da664b1d10d9441b1f63008f0fc', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: '7f242d1dea45647320a9ccf492ce3a58784bc89d', name: "sidebar-footer" }))), h("div", { key: '35989ff54341aae54c835417a22b8c01737fce0d', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'e627fda8a7464408e7461e1e68f88ea0fe27bd18', name: "page-content" }))));
    }
    static get style() { return atSidebarCss; }
}, [260, "at-sidebar", {
        "side": [1],
        "width": [1],
        "collapsible": [1],
        "mode": [1],
        "backdrop": [4],
        "default_open": [4],
        "isOpen": [32],
        "toggleSidebar": [64],
        "getIsOpen": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarComponent);
            }
            break;
    } });
}

const AtSidebar = AtSidebarComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebar, defineCustomElement };
//# sourceMappingURL=at-sidebar.js.map

//# sourceMappingURL=at-sidebar.js.map