import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar.
 */
export class AtSidebarTriggerComponent {
    constructor() {
        this.isOpen = false;
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.el.click();
            }
        };
        this.handleSidebarChange = (event) => {
            this.isOpen = event.detail;
        };
    }
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
    render() {
        return (h(Host, { key: '9ff21c1bf966ff8021dce8bd1a8fcb0563f674aa', role: "button", class: "group text-button focus-visible:ring-active-foreground/30 text-sidebar-foreground relative flex cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left font-medium transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, h("div", { key: '5500d2a27bc4701efb7804a1f8fc30511e415f3f', class: "flex w-full justify-end gap-8 truncate" }, this.isOpen !== undefined && (h("span", { key: 'fc68e3d4b51dd7d1e64b910be698f3f715bfa8f5', class: "material-icons !text-icon-xl z-10 flex items-center justify-center p-2" }, this.isOpen ? 'menu_open' : 'menu')), h("slot", { key: 'cf9ffb59f661d98ffc11136aee557d5f9753b80e' })), h("div", { key: 'e35686aade2af9ef771218f55d0ef9a70c6518b9', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out group-hover:bg-slate-400/10" })));
    }
    static get is() { return "at-sidebar-trigger"; }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-sidebar-trigger.js.map
