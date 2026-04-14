import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

const atSidebarTriggerCss = () => `.material-icons.sc-at-sidebar-trigger{font-family:"Material Icons";font-size:16px}.sc-at-sidebar-trigger-h{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;padding:6px;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h .focus-indicator.sc-at-sidebar-trigger{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h:hover .focus-indicator.sc-at-sidebar-trigger{opacity:0.1}.sc-at-sidebar-trigger-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}`;

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    isOpen = false;
    provider;
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
        this.provider = this.el.closest('at-sidebar');
        await this.updateIsOpen();
        if (this.provider) {
            this.provider.addEventListener('atuiSidebarChange', this.handleSidebarChange);
        }
    }
    disconnectedCallback() {
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarChange', this.handleSidebarChange);
        }
    }
    handleSidebarChange = (event) => {
        this.isOpen = event.detail;
    };
    render() {
        return (h(Host, { key: 'c8cdb908ff566014d9dd44181a709972435cc3de', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("i", { key: '061a75f188e245c99a96b5ca1861edd3fdcee342', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), h("div", { key: 'bae58eebf6d6c4eb29f1c1b7479b16f86d2a5a5a', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarTriggerComponent.style = atSidebarTriggerCss();

export { AtSidebarTriggerComponent as at_sidebar_trigger };
