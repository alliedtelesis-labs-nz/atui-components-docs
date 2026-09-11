'use strict';

var index = require('./index-DLWZuLsW.js');

const atSidebarCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar>.backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeInBackdrop 300ms forwards}at-sidebar .sidebar{display:flex;position:relative;flex-direction:column;flex:0 0 auto;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow:auto;border-right:1px solid var(--token-sidebar-border)}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar-content{display:flex;flex:1;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding);overflow-y:auto}at-sidebar .sidebar-header,at-sidebar .sidebar-footer{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding)}at-sidebar .sidebar-header:empty,at-sidebar .sidebar-footer:empty{display:none}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.side-right .sidebar{border-right:none;border-left:1px solid var(--token-border-muted)}at-sidebar.mode-over .sidebar{position:absolute;top:0;bottom:0}at-sidebar[data-state=collapsed] .sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed] .sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed] .sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:0;visibility:hidden;transition:opacity 150ms ease 0s, visibility 0s linear 150ms}at-sidebar[data-state=collapsed] at-sidebar-submenu [data-name=submenu-content]{display:none}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{visibility:visible;opacity:1}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:1;visibility:visible;transition:opacity 150ms ease 150ms, visibility 0s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:var(--token-font-weight-med) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed] .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}`;

const AtSidebarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidebarChange = index.createEvent(this, "atuiSidebarChange", 7);
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
    /**
     * Identifies this panel so external elements can toggle it by adding a matching `data-sidebar` attribute, and so at-sidebar-trigger can address it remotely (`data-sidebar` on the trigger). Also used as the panel's id when nested inside at-sidebar-provider. Auto-generated when omitted.
     */
    trigger_id;
    isOpen = false;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange;
    get el() { return index.getElement(this); }
    panelId;
    hasExplicitTriggerId = false;
    provider = null;
    providerOwner;
    triggerEls = [];
    externalTriggerListeners = [];
    triggerObserver;
    async componentWillLoad() {
        this.hasExplicitTriggerId = this.trigger_id !== undefined;
        this.panelId =
            this.trigger_id ??
                `sidebar-${Math.random().toString(36).substring(2, 11)}`;
        // Reflect the generated id too, so the attribute always matches what
        // the provider/DOM (id, aria-controls) actually use, even when the
        // consumer didn't set trigger_id explicitly.
        this.trigger_id = this.panelId;
        this.provider = this.el.parentElement?.closest('at-sidebar-provider');
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        if (this.provider) {
            this.providerOwner = await this.provider.registerPanel(this.panelId, {
                side: this.side,
                isOpen: this.isOpen,
            });
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    componentDidLoad() {
        this.el.addEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.addEventListener('atuiSidebarProviderChange', this.handleProviderChange);
        }
        if (this.hasExplicitTriggerId) {
            this.setupExternalTriggers();
        }
    }
    componentDidRender() {
        this.provider?.setBackdrop(this.panelId, this.isModalOverlay());
        this.updateTriggerAria();
    }
    disconnectedCallback() {
        this.el.removeEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarProviderChange', this.handleProviderChange);
            if (this.providerOwner) {
                this.provider.unregisterPanel(this.panelId, this.providerOwner);
            }
        }
        this.triggerObserver?.disconnect();
        this.cleanupExternalTriggerListeners();
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        if (this.provider) {
            await this.provider.toggle(this.panelId);
            return;
        }
        this.isOpen = !this.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        if (this.provider) {
            return this.provider.getIsOpen(this.panelId);
        }
        return this.isOpen;
    }
    isModalOverlay() {
        return this.mode === 'over' && this.backdrop && this.isOpen;
    }
    handleProviderChange = (event) => {
        if (event.detail.id !== this.panelId)
            return;
        this.isOpen = event.detail.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    };
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
    setupExternalTriggers() {
        this.scanForTriggers();
        this.triggerObserver = new MutationObserver(() => this.scanForTriggers());
        this.triggerObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-sidebar'],
        });
    }
    scanForTriggers() {
        const found = Array.from(document.querySelectorAll(`[data-sidebar="${CSS.escape(this.panelId)}"]`));
        // Elements that matched before but no longer do (detached, or their
        // data-sidebar attribute now points elsewhere) must have their
        // listeners torn down here — otherwise they leak, or keep toggling
        // this panel after being re-labelled for a different one.
        const removedEls = this.triggerEls.filter((el) => !found.includes(el));
        if (removedEls.length) {
            this.externalTriggerListeners =
                this.externalTriggerListeners.filter(({ element, event, handler }) => {
                    if (!removedEls.includes(element))
                        return true;
                    element.removeEventListener(event, handler);
                    return false;
                });
            removedEls.forEach((el) => {
                el.removeAttribute('aria-expanded');
                el.removeAttribute('aria-controls');
            });
        }
        const newEls = found.filter((el) => !this.triggerEls.includes(el));
        // at-sidebar-trigger addresses this panel through its own remote
        // lookup and manages its own click handling — wiring a second
        // listener here would toggle the panel twice per click.
        newEls
            .filter((el) => el.tagName.toLowerCase() !== 'at-sidebar-trigger')
            .forEach((el) => {
            const clickHandler = async (event) => {
                event.preventDefault();
                event.stopPropagation();
                await this.toggleSidebar();
            };
            const keydownHandler = async (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    event.stopPropagation();
                    await this.toggleSidebar();
                }
            };
            el.addEventListener('click', clickHandler);
            el.addEventListener('keydown', keydownHandler);
            this.externalTriggerListeners.push({ element: el, event: 'click', handler: clickHandler }, { element: el, event: 'keydown', handler: keydownHandler });
        });
        this.triggerEls = found;
        this.updateTriggerAria();
    }
    updateTriggerAria() {
        this.triggerEls.forEach((el) => {
            el.setAttribute('aria-expanded', String(this.isOpen));
            el.setAttribute('aria-controls', this.panelId);
        });
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    render() {
        const nav = (index.h("nav", { id: this.panelId, "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, index.h("div", { class: "sidebar-header", "data-name": "sidebar-header" }, index.h("slot", { name: "sidebar-header" })), index.h("div", { class: "sidebar-content", "data-name": "sidebar-content" }, index.h("slot", { name: "sidebar-content" })), index.h("div", { class: `sidebar-footer`, "data-name": "sidebar-footer" }, index.h("slot", { name: "sidebar-footer" }))));
        // Nested in at-sidebar-provider: render only the panel itself. The
        // provider owns the shared backdrop and at-sidebar-inset owns
        // page-content, so two nested panels never fight over the same
        // .page-content/.backdrop/[data-state] selectors (at-sidebar's
        // stylesheet is unscoped, so that collision is real, not
        // theoretical — see at-sidebar-provider.scss).
        if (this.provider) {
            return (index.h(index.Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, nav));
        }
        const isModalOverlay = this.isModalOverlay();
        return (index.h(index.Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), nav, index.h("div", { class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { name: "page-content" }))));
    }
};
AtSidebarComponent.style = atSidebarCss();

exports.at_sidebar = AtSidebarComponent;
