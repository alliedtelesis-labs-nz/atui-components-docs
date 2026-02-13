'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarTriggerCss = () => `.material-icons.sc-at-sidebar-trigger{font-family:"Material Icons";font-size:16px}.sc-at-sidebar-trigger-h{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;padding:6px;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h i.icon.sc-at-sidebar-trigger{font-family:"Material Icons";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:var(--token-font-size-icon-lg) !important;z-index:10}.sc-at-sidebar-trigger-h .focus-indicator.sc-at-sidebar-trigger{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h:hover .focus-indicator.sc-at-sidebar-trigger{opacity:0.1}.sc-at-sidebar-trigger-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}`;

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '33d20c2854f046d6eab4d88c29938fc26ce98939', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (index.h("i", { key: 'b8309c70144197944575f1e217bef63d899c9400', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), index.h("div", { key: '44e567996da448aabba47551ea10d2e0627b53c8', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarTriggerComponent.style = atSidebarTriggerCss();

exports.at_sidebar_trigger = AtSidebarTriggerComponent;
