'use strict';

var index = require('./index-CwnFn_Q4.js');

const atSidePanelCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in.sc-at-side-panel{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out.sc-at-side-panel{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}dialog.backdrop.sc-at-side-panel::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeInBackdrop 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-side-panel::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-side-panel-h{display:contents}.sc-at-side-panel-h dialog.sc-at-side-panel{position:static}.sc-at-side-panel-h dialog.backdrop.position-absolute.sc-at-side-panel::before{content:"";position:absolute;inset:0;z-index:var(--token-z-index-nav);background:rgba(0, 0, 0, 0.2);animation:fadeInBackdrop 0.3s ease forwards}.sc-at-side-panel-h .container.sc-at-side-panel{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-nav);min-width:var(--token-width-panel-xs);max-width:100%;background-color:var(--token-surface-foreground);box-shadow:var(--token-shadow-md);overflow-x:hidden;overflow-y:auto;height:calc(100% - var(--at-side-panel-confine-top, 0px));opacity:0;transition:transform 300ms ease, opacity 300ms ease;will-change:transform, opacity}.sc-at-side-panel-h .container.width-xs.sc-at-side-panel{width:var(--token-width-panel-xs)}.sc-at-side-panel-h .container.width-sm.sc-at-side-panel{width:var(--token-width-panel-sm)}.sc-at-side-panel-h .container.width-md.sc-at-side-panel{width:var(--token-width-panel-md)}.sc-at-side-panel-h .container.width-lg.sc-at-side-panel{width:var(--token-width-panel-lg)}.sc-at-side-panel-h .container.width-xl.sc-at-side-panel{width:var(--token-width-panel-xl)}.sc-at-side-panel-h .container.origin-left.sc-at-side-panel{left:var(--at-side-panel-confine-left, 0px);top:var(--at-side-panel-confine-top, 0px);transform:translateX(-100%)}.sc-at-side-panel-h .container.origin-right.sc-at-side-panel{right:var(--at-side-panel-confine-right, 0px);top:var(--at-side-panel-confine-top, 0px);transform:translateX(100%)}.sc-at-side-panel-h .container.position-absolute.sc-at-side-panel{position:absolute;bottom:0;height:auto}.sc-at-side-panel-h .container.sc-at-side-panel:not([data-scrollable]){overflow-y:hidden}.sc-at-side-panel-h .container[data-open].sc-at-side-panel{opacity:1;visibility:visible;transform:translateX(0)}.sc-at-side-panel-h .header.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;top:0;padding:12px 8px 12px 16px;display:flex;justify-content:space-between;align-items:center;background-color:rgba(var(--token-surface-background), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel{display:flex;flex-direction:column;gap:2px}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .title.sc-at-side-panel{font-size:var(--token-font-size-h4);font-weight:var(--token-font-weight-med);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .subtitle.sc-at-side-panel{font-size:var(--token-font-size-sm);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .content.sc-at-side-panel{display:flex;flex-direction:column;flex-grow:1;width:100%}.sc-at-side-panel-h .content.padded.sc-at-side-panel{padding:16px}.sc-at-side-panel-h .footer.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;bottom:0;display:none;width:100%;padding:12px 16px;background-color:rgba(var(--token-surface-background), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .footer.sc-at-side-panel>*.sc-at-side-panel{width:100%}.sc-at-side-panel-h .container[data-has-footer].sc-at-side-panel .footer.sc-at-side-panel{display:block}.sc-at-side-panel-h .container[data-has-footer].sc-at-side-panel .content.sc-at-side-panel{flex-grow:0}`;

const AtSidePanelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidepanelChange = index.createEvent(this, "atuiSidepanelChange", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Size of the size panel
     */
    size = 'xs';
    /**
     * Title displayed in the side panel
     */
    panel_title;
    /**
     * Subtitle displayed in the side panel
     */
    panel_subtitle;
    /**
     *  Position of the side panel
     */
    origin = 'right';
    /**
     * Enables scroll overflow on the sidepanel container
     */
    has_scrollbar = true;
    /**
     * Apply or remove padding from the panel content area. Remove it when the
     * slotted content owns its own spacing -- a peek view rendering a page
     * summary usually pads at the page component, and would otherwise be
     * indented twice.
     */
    padding = true;
    /**
     * Displays a close button if set
     */
    has_close_button = true;
    /**
     * Whether the panel overlays the viewport ('fixed', the default) or is
     * positioned relative to its nearest positioned ancestor ('absolute') —
     * e.g. to stay confined to at-sidebar-inset's content region instead of
     * covering the full viewport. An 'absolute' panel always opens
     * non-modally, so with `backdrop` its dim covers only that ancestor and
     * keyboard focus is not trapped inside the panel.
     */
    position = 'fixed';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = false;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop = false;
    /**
     * Target an external element to use as the trigger. When provided, clicking an element wia matching data-sidepanel attribute value will toggle the side panel.
     */
    trigger_id;
    isExpanded = false;
    isOpen = false;
    hasFooter = false;
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange;
    sidePanelWrapper;
    footerObserver;
    panelDialog;
    headerEl = null;
    railEls = new Set();
    providerEl = null;
    confineObserver;
    confinementMutationObserver;
    railMutationObserver;
    hasLoaded = false;
    triggerEls = [];
    externalTriggerListeners = [];
    /**
     * Toggles the side panel between open and closed states
     * @returns Promise that resolves when the panel state is toggled
     */
    async toggleSidePanel() {
        if (this.isExpanded) {
            await this.closeSidePanel();
        }
        else {
            await this.openSidePanel();
        }
    }
    /**
     * Opens the side panel
     * @returns Promise that resolves when the panel is opened
     */
    async openSidePanel() {
        if (this.panelDialog && !this.panelDialog.open) {
            // showModal() puts the dialog in the top layer, which ignores every
            // ancestor's positioning and overflow clipping, so a modal panel can
            // never be contained by the frame position="absolute" targets.
            if (this.backdrop === true && this.position !== 'absolute') {
                this.panelDialog.showModal();
            }
            else {
                this.panelDialog.show();
            }
            if (this.backdrop) {
                this.panelDialog.classList.add('backdrop');
            }
            // Use requestAnimationFrame to delay the state change and apply css
            requestAnimationFrame(() => {
                this.isExpanded = true;
                this.isOpen = true;
                this.atuiSidepanelChange.emit(this.isOpen);
            });
        }
    }
    /**
     * Closes the side panel
     * @returns Promise that resolves when the panel is closed
     */
    async closeSidePanel() {
        if (this.panelDialog && this.panelDialog.open) {
            this.panelDialog.close();
            this.isExpanded = false;
            this.isOpen = false;
            this.atuiSidepanelChange.emit(this.isOpen);
            this.panelDialog.classList.remove('backdrop');
        }
    }
    /**
     * Getter method for the open state of the side panel
     * @returns The current open state of the side panel
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleClose = () => {
        this.closeSidePanel();
    };
    handleDialogClose = (event) => {
        event.preventDefault();
        if (this.isExpanded) {
            this.closeSidePanel();
        }
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape' && this.isExpanded) {
            event.preventDefault();
            this.closeSidePanel();
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog?.open)
            return;
        if (!this.sidePanelWrapper?.contains(event.target)) {
            this.handleClose();
        }
    }
    async componentDidLoad() {
        this.syncHasFooter();
        this.footerObserver = new MutationObserver(() => this.syncHasFooter());
        this.footerObserver.observe(this.el, {
            childList: true,
            subtree: true,
        });
        if (this.needsConfinement) {
            this.setupConfinement();
        }
        this.hasLoaded = true;
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-sidepanel="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`at-side-panel: No elements found with data-sidepanel="${this.trigger_id}"`);
                return;
            }
            this.setupExternalTriggerListeners();
        }
    }
    connectedCallback() {
        if (this.hasLoaded && this.needsConfinement) {
            this.setupConfinement();
        }
    }
    disconnectedCallback() {
        this.cleanupExternalTriggerListeners();
        this.footerObserver?.disconnect();
        this.teardownConfinement();
    }
    get needsConfinement() {
        return (this.position === 'fixed' && !!this.el.closest('at-sidebar-inset'));
    }
    /**
     * The footer drives layout (the content stops stretching once there is a
     * footer to sit under it), and `:has()` cannot see the slot reliably once
     * Stencil has relocated slotted nodes - so the state is resolved here.
     */
    syncHasFooter() {
        this.hasFooter = !!this.el.querySelector('[slot="footer"]');
    }
    /**
     * Only called for position:fixed panels nested in at-sidebar-inset (see
     * the componentDidLoad guard) — those stay true viewport overlays (an
     * absolute-positioned descendant of a scrolling ancestor scrolls away
     * with it, which is exactly what used to break here) and so can't rely
     * on CSS containment to avoid at-header and whichever at-sidebar rail
     * shares their origin side. A position:absolute panel doesn't need any
     * of this: its containing block (at-sidebar-inset) is already laid out
     * below the header and beside the rail by ordinary flex layout. So this
     * measures those elements directly and exposes the offsets as custom
     * properties for the CSS to consume only for the fixed case.
     *
     * ResizeObserver, not a one-time measurement: at-header's height is
     * fairly static, but the at-sidebar rail's width isn't — it changes on
     * collapse/expand today, and will change on drag once at-sidebar panels
     * are user-resizable (planned). Observing the actual rendered box means
     * this stays correct either way without new code when that lands.
     */
    setupConfinement() {
        this.teardownConfinement();
        this.confineObserver = new ResizeObserver(() => this.updateConfinementOffsets());
        this.watchProviderRails();
        this.resolveConfinementTargets();
    }
    teardownConfinement() {
        this.confineObserver?.disconnect();
        this.confinementMutationObserver?.disconnect();
        this.railMutationObserver?.disconnect();
        this.confineObserver = undefined;
        this.confinementMutationObserver = undefined;
        this.railMutationObserver = undefined;
        this.headerEl = null;
        this.providerEl = null;
        this.railEls = new Set();
    }
    watchProviderRails() {
        this.providerEl = this.el.closest('at-sidebar-provider');
        if (!this.providerEl)
            return;
        this.confineObserver.observe(this.providerEl);
        this.railMutationObserver = new MutationObserver(() => {
            if (this.syncRails())
                this.updateConfinementOffsets();
        });
        this.railMutationObserver.observe(this.providerEl, { childList: true });
    }
    findRails() {
        // `side` is not reflected, so a framework property binding leaves no
        // `side` attribute; at-sidebar renders `data-side` either way.
        const selector = `at-sidebar[data-side="${this.origin}"]`;
        if (!this.providerEl) {
            const rail = document.querySelector(selector);
            return rail ? [rail] : [];
        }
        const providerRails = Array.from(this.providerEl.querySelectorAll(':scope > at-sidebar'));
        providerRails.forEach((rail) => this.railMutationObserver?.observe(rail, {
            attributeFilter: ['data-side'],
        }));
        return providerRails.filter((rail) => rail.dataset.side === this.origin);
    }
    syncRails() {
        const rails = new Set(this.findRails());
        const unchanged = rails.size === this.railEls.size &&
            Array.from(rails).every((rail) => this.railEls.has(rail));
        if (unchanged)
            return false;
        this.railEls.forEach((rail) => {
            if (!rails.has(rail))
                this.confineObserver?.unobserve(rail);
        });
        rails.forEach((rail) => {
            if (!this.railEls.has(rail))
                this.confineObserver?.observe(rail);
        });
        this.railEls = rails;
        return true;
    }
    /**
     * The convention is to author at-sidebar-inset before a right-side
     * at-sidebar rail in the DOM (see at-sidebar-provider.scss), so this
     * panel's own componentDidLoad can easily run before the rail has
     * connected — a single lookup here would then miss it permanently, the
     * same class of registration-order race at-sidebar-trigger's remote
     * resolution and at-sidebar's scanForTriggers both retry for. Keep
     * watching for whichever of at-header/the rail hasn't shown up yet,
     * rather than giving up after one attempt.
     */
    resolveConfinementTargets() {
        if (!this.headerEl) {
            const header = document.querySelector('at-header');
            if (header) {
                this.headerEl = header;
                this.confineObserver?.observe(this.headerEl);
            }
        }
        if (this.railEls.size === 0) {
            this.syncRails();
        }
        const railsWatched = !!this.providerEl || this.railEls.size > 0;
        if (this.headerEl && railsWatched) {
            this.confinementMutationObserver?.disconnect();
            this.confinementMutationObserver = undefined;
        }
        else if (!this.confinementMutationObserver) {
            this.confinementMutationObserver = new MutationObserver(() => this.resolveConfinementTargets());
            this.confinementMutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }
        this.updateConfinementOffsets();
    }
    updateConfinementOffsets() {
        const topOffset = this.headerEl?.getBoundingClientRect().height ?? 0;
        const railOffset = this.measureRailOffset();
        this.el.style.setProperty('--at-side-panel-confine-top', `${topOffset}px`);
        this.el.style.setProperty(this.origin === 'left'
            ? '--at-side-panel-confine-left'
            : '--at-side-panel-confine-right', `${railOffset}px`);
    }
    measureRailOffset() {
        const rects = Array.from(this.railEls, (rail) => rail.getBoundingClientRect()).filter((rect) => rect.width > 0 || rect.height > 0);
        if (rects.length === 0)
            return 0;
        if (this.origin === 'left') {
            return Math.max(0, ...rects.map((rect) => rect.right));
        }
        const innermostRailLeft = Math.min(...rects.map((rect) => rect.left));
        return Math.max(0, document.documentElement.clientWidth - innermostRailLeft);
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    setupExternalTriggerListeners() {
        if (!this.triggerEls || this.triggerEls.length === 0)
            return;
        const clickHandler = async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await this.toggleSidePanel();
        };
        const keydownHandler = async (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    await this.toggleSidePanel();
                    break;
            }
        };
        this.triggerEls.forEach((el) => {
            el.addEventListener('click', clickHandler);
            el.addEventListener('keydown', keydownHandler);
            this.externalTriggerListeners.push({ element: el, event: 'click', handler: clickHandler }, { element: el, event: 'keydown', handler: keydownHandler });
        });
    }
    render() {
        return (index.h(index.Host, { key: '5df564958fd9d03083bbf825994ec08c101960d0', "data-open": this.isOpen }, index.h("dialog", { key: '6007c80f3c495ff25f32ffce53fba23db767cf19', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''} position-${this.position}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: '28bcf21a1ab854432032810c08e5331c306389d5', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, "data-has-footer": this.hasFooter ? 'true' : null, class: `container origin-${this.origin} width-${this.size} size-${this.size} position-${this.position}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, index.h("header", { key: '932bb8a8aab027977d8e3fdbb8b7259ef028fc72', class: "header", "data-name": "header" }, index.h("div", { key: '430a1a0fb3c2576dd86ea91498baf87b0baa255a' }, index.h("slot", { key: '807183b5d0fd96196bf5c56edd4f4288e45241da', name: "title" }), this.panel_title && (index.h("h3", { key: '3b2c280179221614281e70401c152021176d51ac', class: "title" }, this.panel_title)), this.panel_subtitle && (index.h("p", { key: 'd16683c7a6af856dabd27ecf742c7cc23ffef5e3', class: "subtitle" }, this.panel_subtitle))), index.h("div", { key: '38a1cf5b51dd1f717b63b524b9082f21cb1e5c19' }, index.h("slot", { key: '5ddac8de48c79671fdd63a581942a37b3f3128b6', name: "actions" }), this.has_close_button && (index.h("at-button", { key: 'dae878376b146fc41ec321e03329bfc1dad52f31', size: "md", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }, index.h("at-icon", { key: '28e13cd271aebdb945b0681a7c26e91f17d3d00c', slot: "icon", name: "close" }))))), index.h("div", { key: '72622e714b69efe1d1b52e5069f8e6882cf1ab5f', "data-name": "content", class: `content ${this.padding ? 'padded' : ''}` }, index.h("slot", { key: '22596b35e17f683d297635cc2b344e1a78fac0d2' })), index.h("div", { key: 'd85448697c269fae8f3eb3ff203d95b3792b8941', "data-name": "footer", class: "footer" }, index.h("slot", { key: '3ba9f48cb21058a9fd86d986470b71541577cc26', name: "footer" }))))));
    }
};
AtSidePanelComponent.style = atSidePanelCss();

exports.at_side_panel = AtSidePanelComponent;
