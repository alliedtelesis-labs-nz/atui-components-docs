import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar. Nested inside an at-sidebar, it addresses its closest ancestor; given a `data-sidebar` attribute matching a target at-sidebar's `trigger_id`, it addresses that sidebar remotely instead.
 */
export class AtSidebarTriggerComponent {
    el;
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
        return (h(Host, { key: '45200f916640021bafe1e36749373b895468e5d6', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("at-icon", { key: '8231e4c2ed035ec4a82ae88a24d50187aaf73a68', name: this.isOpen ? 'menu_collapse' : 'menu_expand', size: "22" })), h("div", { key: '1e0f32579ff9db067e0df2bdb2194d19a2c968db', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
    static get is() { return "at-sidebar-trigger"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./at-sidebar-trigger.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-trigger.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
