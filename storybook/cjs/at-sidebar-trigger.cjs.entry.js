'use strict';

var index = require('./index-DLWZuLsW.js');

const atSidebarTriggerCss = () => `.material-icons.sc-at-sidebar-trigger{font-family:"Material Icons";font-size:16px}.sc-at-sidebar-trigger-h{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h .focus-indicator.sc-at-sidebar-trigger{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h:hover .focus-indicator.sc-at-sidebar-trigger{opacity:0.1}.sc-at-sidebar-trigger-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}`;

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    isOpen = false;
    provider;
    providerObserver;
    async updateIsOpen() {
        if (this.provider && typeof this.provider.getIsOpen === 'function') {
            this.isOpen = await this.provider.getIsOpen();
        }
    }
    async toggleSidebar() {
        if (this.provider &&
            typeof this.provider.toggleSidebar === 'function') {
            await this.provider.toggleSidebar();
            await this.updateIsOpen();
        }
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    async componentDidLoad() {
        const remoteId = this.el.dataset.sidebar;
        if (remoteId) {
            await this.resolveRemoteProvider(remoteId);
        }
        else {
            this.provider = this.el.closest('at-sidebar');
            await this.bindProvider();
        }
    }
    /**
     * The target at-sidebar can still be registering its trigger_id (still
     * loading, or appended to the DOM after this trigger) when this component's
     * own componentDidLoad runs — a single lookup here would permanently miss
     * it. Mirrors at-sidebar.tsx's own scanForTriggers retry for the same
     * reason: watch until a match with this trigger_id shows up, however late.
     */
    async resolveRemoteProvider(remoteId) {
        const findMatch = () => document.querySelector(`at-sidebar[trigger_id="${CSS.escape(remoteId)}"]`);
        const match = findMatch();
        if (match) {
            this.provider = match;
            await this.bindProvider();
            return;
        }
        console.warn(`at-sidebar-trigger: No at-sidebar found with trigger_id="${remoteId}" yet — will keep watching for one.`);
        this.providerObserver = new MutationObserver(() => {
            const found = findMatch();
            if (!found)
                return;
            this.providerObserver?.disconnect();
            this.providerObserver = undefined;
            this.provider = found;
            void this.bindProvider();
        });
        this.providerObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['trigger_id'],
        });
    }
    async bindProvider() {
        if (!this.provider)
            return;
        await this.updateIsOpen();
        this.provider.addEventListener('atuiSidebarChange', this.handleSidebarChange);
    }
    disconnectedCallback() {
        this.providerObserver?.disconnect();
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarChange', this.handleSidebarChange);
        }
    }
    handleSidebarChange = (event) => {
        this.isOpen = event.detail;
    };
    render() {
        return (index.h(index.Host, { key: 'a27fe5bb8282e5310478f05fb13bf5e1eafe0a25', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (index.h("at-icon", { key: '269a7d93436a9692cc9146c71e0e129eafbc6736', name: this.isOpen ? 'menu_collapse' : 'menu_expand', size: "22" })), index.h("div", { key: 'd312e3b67077098642d000ccd0173cd02ccad425', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarTriggerComponent.style = atSidebarTriggerCss();

exports.at_sidebar_trigger = AtSidebarTriggerComponent;
